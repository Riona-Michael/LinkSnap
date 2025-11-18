# LinkSnap
A scalable MERN stack URL shortener with custom link generation, MongoDB persistence, and efficient redirect routing.

Steps to execute this:

Install Node.js and npm, verify versions:
node -v
npm -v

Install & start MongoDB:
mongod

Create project folder:
mkdir url-shortener && cd url-shortener

Create backend & frontend folders:
mkdir backend frontend

Go to backend:
cd backend

Initialize npm:
npm init -y

Install backend packages:
npm install express mongoose nanoid@3

Create index.js and paste backend code.

Start backend:
node index.js
(You should see: MongoDB connected, Server running at 5000)

Go to frontend:
cd ../frontend

Create React app:
npx create-react-app@latest .

Replace src/App.js with your React code.

Add styling in src/App.css.

Start frontend:
npm start
(Runs at http://localhost:3000
)

Enter URL → click Shorten → get short URL.

Open short URL → redirects to original website.
