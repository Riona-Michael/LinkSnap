# LinkSnap
A scalable MERN stack URL shortener with custom link generation, MongoDB persistence, and efficient redirect routing.

Steps to execute this :
Step 1: Install Node.js and npm, check versions node -v npm -v.
Step 2: Install and start MongoDB (mongod).
Step 3: Create project folder: mkdir url-shortener && cd url-shortener.
Step 4: Create backend and frontend folders: mkdir backend frontend.
Step 5: Go to backend: cd backend.
Step 6: Initialize npm: npm init -y.
Step 7: Install backend packages: npm install express mongoose nanoid@3.
Step 8: Create index.js in backend and paste backend code (with MongoDB connection, URL schema, POST /api/shorten, GET /:shortId redirect).
Step 9: Start backend: node index.js (should show "MongoDB connected" and "Backend running on http://localhost:5000").
Step 10: Go to frontend: cd ../frontend.
Step 11: Create React app: npx create-react-app@latest ..
Step 12: Replace src/App.js with frontend code (React component with input, POST fetch to backend, show short URL using http://localhost:5000/${data.shortId}).
Step 13: Create src/App.css with CSS for styling.
Step 14: Start frontend: npm start (runs on http://localhost:3000).
Step 15: Open browser, enter full URL in input, click shorten → short URL appears pointing to backend.
Step 16: Click short URL → redirects to the original URL in browser.
