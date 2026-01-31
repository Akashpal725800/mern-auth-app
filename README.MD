🔐 MERN Auth App (JWT) + Todo Page

This is a MERN Stack Authentication Project with proper MVC structure, JWT login system, and a Todo page after login.

User flow is simple:

First Signup → Then Login → Todo page opens

🚀 Features

User Registration (Signup)

User Login with JWT Token

Password encrypted using bcrypt

MVC Folder Structure (Controller, Routes, Models)

MongoDB Database

Protected Todo/Home Page after login

Environment variables (.env)

Clean GitHub structure with .gitignore

🛠️ Tech Stack

React JS (Frontend)

Node JS + Express JS (Backend)

MongoDB + Mongoose

JWT Authentication

bcrypt Password Hashing

📁 Project Structure
server/
  controllers/
  models/
  routes/
  index.js

client/
  src/
    App.jsx
    Login.jsx
    signup.jsx
    Todo.jsx


    ⚙️ Backend Setup
cd server
npm install

Create .env inside server
PORT=3001
MONGO_URL=mongodb://localhost:27017/employee
JWT_SECRET=SECRETKEY123


Run backend
npm start


⚙️ Frontend Setup (Vite)
cd client
npm install
npm run dev

🔑 API Endpoints
Method	URL	Work
POST	/api/users/register	Signup
POST	/api/users/login	Login

🧪 How to Use

Start backend server

Start frontend (Vite)

Open browser

Signup first

Login

Todo page will open

🔐 Security

Password stored as hashed

JWT token based authentication

.env protected using .gitignore

👨‍💻 Author

Akash Pal

⭐ Star this repo if you like it!