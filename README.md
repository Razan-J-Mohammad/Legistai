# Next.js & Flask Project
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Frontend Setup (Next.js)
```bash
    npm install
    npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Backend Setup (Flask)
```bash
    cd server
    python -m venv venv
    venv\Scripts\activate
    pip install Flask flask-cors
    python app.py
```
The Flask server will start at http://127.0.0.1:5000.

