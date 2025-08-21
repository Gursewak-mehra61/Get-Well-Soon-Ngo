'use client';
import { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getApiUrl, buildApiUrl, API_ENDPOINTS } from "../config/api";

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
        const url = new URL(getApiUrl() + endpoint);
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

function RippleButton({ children, onClick, className, disabled, type = "button" }) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(event);
  };

  return (
    <button
      type={type}
      className={`relative overflow-hidden ${className}`}
      onClick={addRipple}
      disabled={disabled}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: '600ms'
          }}
        />
      ))}
    </button>
  );
}

export default function AdminDashboard() {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [token, setToken] = useState('');
  const [activeTab, setActiveTab] = useState('contacts');
  const [showPassword, setShowPassword] = useState(false);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  
  useEffect(()=>{ setToken(getToken()); }, []);
  const { loading, data, error } = useFetchList(activeTab === 'contacts' ? '/api/contact' : '/api/volunteer', q, page);
  useEffect(() => { setPage(1); }, [activeTab, q]);

  const items = data?.items || [];
  const total = data?.total || 0;
  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / 10)), [total]);

  if (!token) {
    async function handleLogin(e){
      e.preventDefault();
      setAuthError('');
      try {
        const res = await fetch(buildApiUrl(API_ENDPOINTS.AUTH_LOGIN), {
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
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-fade-in">
        <div className="w-full max-w-md animate-slide-down">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-fade-in-delayed">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-2 text-center animate-slide-down">
              Admin Portal
            </h1>
            
            <p className="text-gray-600 text-center mb-8 font-medium animate-fade-in-delayed">
              Get Well Soon NGO Dashboard
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              {authError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center animate-slide-down">
                  {authError}
                </div>
              )}

              <div className="animate-slide-left">
                <input 
                  value={creds.username} 
                  onChange={e=>setCreds({...creds, username: e.target.value})} 
                  placeholder="Username" 
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white font-medium" 
                  required
                />
              </div>

              <div className="animate-slide-right relative">
                <input 
                  value={creds.password} 
                  onChange={e=>setCreds({...creds, password: e.target.value})} 
                  placeholder="Password" 
                  type={showPassword ? "text" : "password"} 
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pr-12 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white font-medium" 
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="animate-fade-in-delayed">
                <RippleButton 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign In</span>
                  </span>
                </RippleButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 animate-fade-in pt-16 md:pt-18">
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3 sm:p-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 animate-slide-down gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
              Get Well Soon NGO Management Portal
            </p>
          </div>
          
          <button 
            onClick={() => { localStorage.removeItem('gws_token'); window.location.reload(); }}
            className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base min-w-[44px] sm:min-w-auto"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 0v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="hidden sm:inline whitespace-nowrap">Logout</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 animate-slide-left">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm">Total Contacts</p>
                <p className="text-lg sm:text-2xl font-bold text-blue-600">{activeTab === 'contacts' ? total : '...'}</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm">Total Volunteers</p>
                <p className="text-lg sm:text-2xl font-bold text-green-600">{activeTab === 'volunteers' ? total : '...'}</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs sm:text-sm">Active Sessions</p>
                <p className="text-lg sm:text-2xl font-bold text-purple-600">1</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-3 sm:p-6 animate-slide-right">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4 sm:mb-6">
            <div className="flex bg-gray-100 rounded-2xl p-1">
              <RippleButton
                onClick={() => setActiveTab('contacts')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'contacts'
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contacts</span>
                </span>
              </RippleButton>
              
              <RippleButton
                onClick={() => setActiveTab('volunteers')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'volunteers'
                    ? 'bg-white text-green-600 shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Volunteers</span>
                </span>
              </RippleButton>
            </div>

            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search name, email, message..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* Content */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 animate-slide-down">
              {error}
            </div>
          )}

          {loading ? (
            <div className="py-16 text-center animate-fade-in">
              <div className="inline-flex items-center space-x-2 text-blue-600">
                <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-lg font-medium">Loading data...</span>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-gray-200 animate-slide-up">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-600">Name</th>
                      {activeTab === 'volunteers' && <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-600 hidden sm:table-cell">Phone</th>}
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-600">Email</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-600 hidden md:table-cell">{activeTab === 'contacts' ? 'Message' : 'Why Join'}</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-600 hidden lg:table-cell">Created</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                      {items.map((it, index) => (
                        <tr
                          key={it._id || it.id}
                          className="hover:bg-blue-50 transition-colors duration-200 animate-fade-in"
                        >
                          <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                            <div className="flex flex-col">
                              <span>{it.name}</span>
                              <span className="text-xs text-gray-500 sm:hidden">
                                {activeTab === 'volunteers' && it.phone && `📞 ${it.phone}`}
                                <br className="sm:hidden" />
                                <span className="md:hidden">{activeTab === 'contacts' ? it.message?.substring(0, 30) + '...' : it.why?.substring(0, 30) + '...'}</span>
                              </span>
                            </div>
                          </td>
                          {activeTab === 'volunteers' && <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base hidden sm:table-cell">{it.phone}</td>}
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-blue-600 font-medium text-sm sm:text-base">{it.email}</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 max-w-md text-sm sm:text-base hidden md:table-cell">
                            <div className="whitespace-normal break-words">
                              {activeTab === 'contacts' ? it.message : it.why}
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-500 text-xs sm:text-sm hidden lg:table-cell">
                            {new Date(it.createdAt || it.timestamp).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    {items.length === 0 && (
                      <tr>
                        <td colSpan={activeTab === 'volunteers' ? 5 : 4} className="px-3 sm:px-6 py-8 sm:py-16 text-center text-gray-500">
                          <div className="flex flex-col items-center space-y-2">
                            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-base sm:text-lg font-medium">No results found</p>
                            <p className="text-xs sm:text-sm">Try adjusting your search criteria</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 animate-fade-in-delayed">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{items.length}</span> of <span className="font-medium">{total}</span> results
            </div>
            
            <div className="flex items-center space-x-2">
              <RippleButton
                disabled={page <= 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Previous
              </RippleButton>
              
              <span className="px-4 py-2 text-sm font-medium text-gray-700">
                Page {page} of {totalPages}
              </span>
              
              <RippleButton
                disabled={page >= totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next
              </RippleButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


