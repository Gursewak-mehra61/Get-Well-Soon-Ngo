# GWS Backend

Run:

- Create a `.env` file in `backend/` with:

```
PORT=4000
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017/getwellsoon
ADMIN_USER=admin
ADMIN_PASS=admin123
JWT_SECRET=please-change-me
```

- Install deps and start dev server

```
npm install
npm run dev
```

API:
- POST /api/contact { name, email, message }
- POST /api/volunteer { name, phone, email, why }
- POST /api/auth/login { username, password } -> { token }
- GET /api/contact (auth: Bearer <token>)
- GET /api/volunteer (auth: Bearer <token>)
