# 📱 Mini-media

Mini-media is a simple **full-stack social media app** built with Node.js, Express, SQLite, and React (Vite).

---

## ✨ Features
- 🔑 User registration & login (JWT authentication)  
- 📝 Create, read, and delete posts  
- 📂 Upload media (via `multer`)  
- 💾 SQLite database for storage  
- ⚛️ React + Vite frontend  

---
[![Node.js Package](https://github.com/ratetanginamo/Mini-media/actions/workflows/npm-publish.yml/badge.svg?branch=main&event=release)](https://github.com/ratetanginamo/Mini-media/actions/workflows/npm-publish.yml)

![Badge](https://img.shields.io/badge/ratetanginamo-NEW%2520UPDATE%2520-4cc71e.svg)

---
## 🚀 Setup & Run

1. **Install requirements**  
   - Node.js (LTS recommended, comes with npm)  
   - Git  
   - A terminal (VS Code Terminal, PowerShell, Bash, or Termux on Android)  

   On Termux (Android):  
   ```bash
   pkg update && pkg upgrade -y
   pkg install git nodejs
   ```
2. **Clone the repository**
   ```bash
   git clone https://github.com/ratetanginamo/Mini-media.git
   cd Mini-media
   ```
3. **Setup and run the backend**
   ```bash
   cd backend
   rm -rf node_modules package-lock.json   # optional         cleanup
   npm install express jsonwebtoken bcryptjs multer@1.4.5-    lts.1 better-sqlite3 express-async-handler cors
   node index.js
   ````
- ✅ Backend will be running at http://localhost:5000
4. **Setup and run the frontend**
  - Open a new terminal/session
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
- ✅ Frontend will be running at http://localhost:5173
5. **Access the app**
  - Keep backend and frontend running in separate terminals
  - Open http://localhost:5173
    in a browser
    The frontend communicates with the backend on port 5000
## ⚙️ Troubleshooting & Tech Stack
### Troubleshooting
1. <ins>multer@^1.4.5</ins> not found → use
   <ins>multer@1.4.5-lts.1</ins> already fixed in i            instructions
### Tech Stack
 - Node.js + Express (backend server and APIs
 - SQLite with better-sqlite3 (lightweight database)
 - JWT + bcryptjs (authentication & password security)
 - Multer (file uploads)
 - React + Vite + Axios (frontend UI and API requests)
