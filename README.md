# Next.js & Flask Project
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
## Prerequisites
 ```bash
 Node.js: v20.16.0
 Python: 3.12.2
 ```
## Project Setup

### Frontend Setup (Next.js)
1. **Install Node Modules**:
```bash
npm install
  ```
2. **Run Development Server:**
 ```bash
npm run dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Backend Setup (Flask)
1. **Navigate to Server Directory:**
```bash
cd server
```
2. **Set Up Virtual Environment:**
```bash
python -m venv venv
```
3. **Activate Virtual Environment:**
- **Windows:**
```bash
venv\Scripts\activate
```
- **MacOS/Linux:**
```bash
source venv/bin/activate
```
4. **Install Dependencies:**
```bash
pip install Flask flask-cors
```
5. **Run Flask Server:**
```bash
python app.py
```
The Flask server will start at http://127.0.0.1:5000.

### Running the Entire Application
1. **Flask Backend:**
```bash
cd server
python app.py
```
2. **Next.js Frontend:**
```bash
npm run dev
```
3. **Access Application:**
- Frontend: http://localhost:3000
- Backend API: http://127.0.0.1:5000
=
