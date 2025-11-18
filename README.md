# LinkSnap
A scalable MERN stack URL shortener with custom link generation, MongoDB persistence, and efficient redirect routing.

Step 1: Install Node.js and npm, verify versions:
node -v
npm -v

Step 2: Install and start MongoDB:
mongod

Step 3: Create project folder:
mkdir url-shortener && cd url-shortener

Step 4: Create backend and frontend folders:
mkdir backend frontend

Step 5: Go to backend:
cd backend

Step 6: Initialize npm:
npm init -y

Step 7: Install backend packages:
npm install express mongoose nanoid@3

Step 8: Create index.js in backend and paste the backend code.

Step 9: Start backend:
node index.js
(You should see MongoDB connected and Server running on 5000)

Step 10: Go to frontend:
cd ../frontend

Step 11: Create React app:
npx create-react-app@latest .

Step 12: Replace src/App.js with your React code.

Step 13: Add styling in src/App.css.

Step 14: Start frontend:
npm start
(Frontend runs at http://localhost:3000
)

Step 15: Enter a URL → click Shorten → you get the short URL.

Step 16: Open the short URL → redirects to the original website.
