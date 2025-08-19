'use client';
import { useEffect, useMemo, useState } from 'react';

function getToken() {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('gws_token') || '';
}

function useFetchList(endpoint, query, page) {
  const [state, setState] = useState({ loading: true, data: null, error: '' });
  useEffect(() => {
    let cancelled = false;
    async function run() {
      setState(s => ({ ...s, loading: true, error: '' }));
      try {
        const url = new URL((process.env.NEXT_PUBLIC_API_BASE_URL || '') + endpoint);
        if (query) url.searchParams.set('q', query);
        if (page) url.searchParams.set('page', String(page));
        url.searchParams.set('limit', '10');
        const res = await fetch(url.toString(), { headers: { Authorization: `Bearer ${getToken()}` } });
        const json = await res.json();
        if (!res.ok || !json.ok) throw new Error(json.error || 'Failed');
        if (!cancelled) setState({ loading: false, data: json, error: '' });
      } catch (e) {
        if (!cancelled) setState({ loading: false, data: null, error: e.message || 'Error' });
      }
    }
    run();
    return () => { cancelled = true; };
  }, [endpoint, query, page]);
  return state;
}

export default function AdminDashboard() {
  const [tab, setTab] = useState('contacts');
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [token, setToken] = useState('');
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [authError, setAuthError] = useState('');
  useEffect(()=>{ setToken(getToken()); }, []);
  const { loading, data, error } = useFetchList(tab === 'contacts' ? '/api/contact' : '/api/volunteer', q, page);

  useEffect(() => { setPage(1); }, [tab, q]);

  const items = data?.items || [];
  const total = data?.total || 0;
  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / 10)), [total]);

  if (!token) {
    async function handleLogin(e){
      e.preventDefault();
      setAuthError('');
      try {
        const res = await fetch((process.env.NEXT_PUBLIC_API_BASE_URL || '') + '/api/auth/login', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(creds)
        });
        const json = await res.json();
        if (!res.ok || !json.ok) throw new Error(json.error || 'Login failed');
        localStorage.setItem('gws_token', json.token);
        window.location.reload();
      } catch (err) {
        setAuthError(err.message || 'Login failed');
      }
    }
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-white rounded-2xl shadow p-6">
          <h1 className="text-xl font-bold text-blue-700 mb-4 text-center">Admin Login</h1>
          {authError && <div className="text-red-600 text-sm mb-3 text-center">{authError}</div>}
          <input value={creds.username} onChange={e=>setCreds({...creds, username: e.target.value})} placeholder="Username" className="w-full border rounded px-3 py-2 mb-3" />
          <input value={creds.password} onChange={e=>setCreds({...creds, password: e.target.value})} placeholder="Password" type="password" className="w-full border rounded px-3 py-2 mb-4" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700">Login</button>
        </form>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-4 pt-4">
      <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4">Admin Dashboard</h1>
      <div className="bg-white rounded-2xl shadow border p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="inline-flex rounded-full overflow-hidden border">
            <button className={`px-4 py-2 text-sm font-semibold ${tab==='contacts'?'bg-blue-600 text-white':'bg-white text-gray-700'}`} onClick={()=>setTab('contacts')}>Contacts</button>
            <button className={`px-4 py-2 text-sm font-semibold ${tab==='volunteers'?'bg-blue-600 text-white':'bg-white text-gray-700'}`} onClick={()=>setTab('volunteers')}>Volunteers</button>
          </div>
          <input
            value={q}
            onChange={e=>setQ(e.target.value)}
            placeholder="Search name/email/message..."
            className="flex-1 border rounded-full px-4 py-2 text-sm"
          />
        </div>

        {error && <div className="text-red-600 mb-3">{error}</div>}
        {loading ? (
          <div className="py-16 text-center text-gray-500">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2 pr-4">Name</th>
                  {tab==='volunteers' && <th className="py-2 pr-4">Phone</th>}
                  <th className="py-2 pr-4">Email</th>
                  <th className="py-2 pr-4">{tab==='contacts'? 'Message' : 'Why Join'}</th>
                  <th className="py-2 pr-4">Created</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it)=> (
                  <tr key={it._id || it.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 pr-4 font-medium text-gray-800">{it.name}</td>
                    {tab==='volunteers' && <td className="py-2 pr-4">{it.phone}</td>}
                    <td className="py-2 pr-4 text-blue-700">{it.email}</td>
                    <td className="py-2 pr-4 text-gray-700 max-w-[360px] truncate" title={tab==='contacts'? it.message : it.why}>{tab==='contacts'? it.message : it.why}</td>
                    <td className="py-2 pr-4 text-gray-500">{new Date(it.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr><td colSpan={5} className="py-8 text-center text-gray-500">No results</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-gray-500">Total: {total}</div>
          <div className="inline-flex gap-2">
            <button disabled={page<=1} onClick={()=>setPage(p=>Math.max(1, p-1))} className="px-3 py-1 rounded border text-sm disabled:opacity-50">Prev</button>
            <span className="text-sm px-1">{page} / {totalPages}</span>
            <button disabled={page>=totalPages} onClick={()=>setPage(p=>Math.min(totalPages, p+1))} className="px-3 py-1 rounded border text-sm disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}


