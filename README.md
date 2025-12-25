# Clueso.io Clone — Full Stack Assignment

This project is a functional clone of **Clueso.io**, built as part of the Software Development Internship assignment for **Subspace**.

The goal was not pixel-perfect UI replication, but to **recreate Clueso’s core workflows, architecture, and user experience** using clean engineering practices.

---

## 🚀 What This Project Does

From a user’s perspective, this application allows:

- User authentication (Signup / Login)
- Creating projects (videos + documentation)
- Uploading a video for a project
- Viewing the uploaded video immediately
- Manually triggering AI-powered processing (mocked)
- Viewing generated step-by-step documentation
- Managing projects (list, view, delete)
- Navigating via a Clueso-like sidebar UI

This mirrors Clueso’s **“record once → generate video + docs”** workflow.

---

## 🧠 Core Product Flows

### 1. Authentication
- Users can sign up and log in
- JWT-based authentication
- Auth state persisted using localStorage

### 2. Projects
- A project represents one documentation workflow
- Each project has:
  - title
  - owner
  - status (`created`, `processing`, `ready`)
  - uploaded video (optional)

### 3. Video Upload
- Users can upload a video when creating a project
- The uploaded video is immediately visible in the project view
- No AI processing is triggered automatically

### 4. AI Processing (Mocked)
- AI processing starts **only** when the user clicks **“Process with AI”**
- Mock AI service generates:
  - a processed video URL
  - step-by-step documentation
- This simulates Clueso’s AI pipeline

### 5. Project Management
- View all projects
- Open a project
- Delete a project
- Sidebar navigation similar to Clueso

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router v6
- Context API (Auth state)
- Lucide Icons
- Plain CSS (no UI framework)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT authentication
- Multer (video upload)
- Mock AI service

---

## 📁 Project Structure

### Frontend
frontend/clueso-frontend/
├── public/
│ └── favicon.png
├── src/
│ ├── components/
│ │ ├── landing/
│ │ ├── navbar/
│ │ ├── Sidebar.jsx
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── pages/
│ │ ├── Landing.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── Dashboard.jsx
│ │ └── ProjectDetail.jsx
│ ├── services/
│ │ └── api.js
│ ├── styles/
│ ├── App.jsx
│ └── main.jsx

shell
Copy code

### Backend
backend/
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── services/
│ ├── middleware/
│ ├── config/
│ ├── app.js
│ └── server.js
└── uploads/

yaml
Copy code

---

## ⚙️ How to Run Locally

### 1️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

Ensure MongoDB is running locally.

Backend runs on:

cpp
Copy code
http://127.0.0.1:5000
2️⃣ Frontend
bash
Copy code
cd frontend/clueso-frontend
npm install
npm run dev
Frontend runs on:

arduino
Copy code
http://localhost:5173
🔐 Environment Variables (Backend)
Create a .env file in backend/:

env
Copy code
PORT=5000
HOST=127.0.0.1
MONGO_URI=mongodb://127.0.0.1:27017/clueso_clone
JWT_SECRET=your_secret_key
🤖 AI Functionality (Mocked)
This project uses a mock AI service instead of real AI APIs.

Why?

Focus on architecture and product flow

Avoid unnecessary external dependencies

Clearly documented and replaceable

The mock service simulates:

processing delay

generated script

step-by-step documentation

🧪 What’s Real vs Mocked
Feature	Status
Auth	Real
Projects	Real
Video Upload	Real
AI Processing	Mocked
Documentation Generation	Mocked
Screen Recording	Not implemented
Slide Deck Upload	Not implemented


# 2️⃣ TECHNICAL DOCUMENTATION (DETAILED EXPLANATION)

## System Architecture Overview

The application follows a **client–server architecture**:

React Frontend
↓
REST API (Express)
↓
MongoDB

yaml
Copy code

---

## Authentication Flow

1. User signs up / logs in
2. Backend validates credentials
3. JWT token is generated
4. Token is stored in localStorage
5. AuthContext provides token across the app
6. Protected routes require valid token

---

## Project Lifecycle

### 1. Project Creation
- Project is created only after user confirms creation
- No project is created implicitly

### 2. Video Upload
- Video is uploaded via `multipart/form-data`
- Stored on the server
- Video URL saved on the Project document

### 3. Viewing Project
- Uploaded video is shown immediately
- AI content is optional

### 4. AI Processing
- Triggered only by explicit user action
- Project status transitions:
created → processing → ready

yaml
Copy code

### 5. Generated Content
- Stored separately from Project
- Linked via project ID
- Allows regeneration without affecting original video

---

## Why AI Processing Is Manual

This matches real Clueso behavior:
- Users control when processing happens
- Prevents unnecessary compute
- Supports iterative workflows

---

## Error Handling

- API errors return structured JSON
- Frontend displays user-friendly messages
- Ownership checks enforced on backend

---
