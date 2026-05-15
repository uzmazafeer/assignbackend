# Complete Authentication System - Documentation

## Project Overview
A full-stack authentication system with Express.js backend and modern HTML/CSS/JavaScript frontend.

## ✅ Features Implemented

### Backend (Express.js + MongoDB)
1. **User Registration** (`POST /api/auth/register`)
   - Hash password using bcryptjs
   - Generate JWT token
   - Return user data and token

2. **User Login** (`POST /api/auth/login`)
   - Validate email and password
   - Generate JWT token (7-day expiration)
   - Return user data and token

3. **Protected Routes** (All `/api/users/*` routes)
   - JWT middleware verification
   - Only authenticated users can access
   - Token passed via `Authorization: Bearer <token>` header

4. **User Management**
   - Get all users: `GET /api/users`
   - Get user by ID: `GET /api/users/:id`
   - Update user: `PUT /api/users/:id`
   - Delete user: `DELETE /api/users/:id`

### Frontend (HTML/CSS/JavaScript)
1. **Authentication Pages**
   - Login form with email and password
   - Register form with name, email, password, and age
   - Toggle between login and register

2. **Dashboard**
   - Display logged-in user information
   - View all registered users
   - Logout functionality
   - Persistent session using localStorage

3. **Security**
   - JWT tokens stored in localStorage
   - Automatic redirect to login if not authenticated
   - Error messages for failed authentication

## 🚀 Installation & Setup

### 1. Install Dependencies
```bash
cd d:\backend01\assignbackend
npm install
```

### 2. Environment Setup
The `.env` file is already configured with:
- `JWT_SECRET`: Secret key for JWT signing
- `PORT`: 3000
- `MONGODB_URI`: MongoDB connection string

### 3. Start the Server
```bash
npm start
```

Server will run on `http://localhost:3000`

## 📁 Project Structure
```
assignbackend/
├── public/
│   └── index.html          # Frontend UI
├── src/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/
│   │   └── AuthController.js # Auth & user logic
│   ├── middleware/
│   │   └── authMiddleware.js # JWT verification
│   ├── models/
│   │   └── schema.js       # User schema
│   ├── routes/
│   │   ├── AuthRoutes.js   # Auth endpoints
│   │   └── UserRoutes.js   # User CRUD endpoints
│   └── index.js            # Express app setup
├── package.json
└── .env
```

## 🔐 API Endpoints

### Authentication
- **Register**: `POST /api/auth/register`
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secure123",
    "age": 25
  }
  ```

- **Login**: `POST /api/auth/login`
  ```json
  {
    "email": "john@example.com",
    "password": "secure123"
  }
  ```

### User Management (Protected - Requires JWT Token)
- **Get All Users**: `GET /api/users`
- **Get User by ID**: `GET /api/users/:id`
- **Update User**: `PUT /api/users/:id`
- **Delete User**: `DELETE /api/users/:id`

### Request Headers for Protected Routes
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

## ✨ Testing the System

### Via Frontend UI
1. Open `http://localhost:3000` in browser
2. Click "Register" to create new account
3. Fill in name, email, password, and age
4. Login with same credentials
5. View all registered users
6. Click "Logout" to clear session

### Via API (PowerShell Example)
```powershell
# Register
$body = @{name="Test";email="test@example.com";password="pass123";age=30} | ConvertTo-Json
Invoke-WebRequest -Uri http://localhost:3000/api/auth/register -Method POST -ContentType "application/json" -Body $body

# Login
$body = @{email="test@example.com";password="pass123"} | ConvertTo-Json
$response = Invoke-WebRequest -Uri http://localhost:3000/api/auth/login -Method POST -ContentType "application/json" -Body $body
$token = ($response.Content | ConvertFrom-Json).token

# Get Users (Protected)
$headers = @{Authorization="Bearer $token"}
Invoke-WebRequest -Uri http://localhost:3000/api/users -Method GET -Headers $headers
```

## 🔧 Dependencies
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT token generation
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables

## 🛡️ Security Features
1. ✅ Password hashing with bcryptjs (10 salt rounds)
2. ✅ JWT authentication with 7-day expiration
3. ✅ Protected routes with middleware
4. ✅ Input validation
5. ✅ CORS enabled for frontend access
6. ✅ Email uniqueness constraint
7. ✅ Secure password comparison

## 📝 Notes
- JWT secret should be changed in production
- MongoDB URI is configured in `.env`
- Session persists in browser via localStorage
- All passwords are securely hashed before storage
- Frontend automatically logs out expired sessions

## 🎯 Next Steps for Production
1. Change JWT_SECRET to a strong random string
2. Use environment-specific configuration
3. Add email verification
4. Implement password reset functionality
5. Add rate limiting
6. Enable HTTPS
7. Add audit logging
8. Implement refresh tokens
