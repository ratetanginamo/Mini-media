# clone (or create) project
git clone github.com/ratetanginamo/Mini-media.git || mkdir Mini-media && cd Mini-media

# backend
cd backend
npm init -y
npm i express jsonwebtoken bcryptjs multer better-sqlite3 express-async-handler cors
# create files as above (db.js, index.js, routes/ files) and uploads/
mkdir uploads
node index.js &

# frontend (in separate Termux session)
cd ../frontend
npm init vite@latest . -- --template react
npm install
# replace src/App.jsx with the code above
npm run dev
