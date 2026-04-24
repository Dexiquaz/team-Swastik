# TEAM SWASTIK – Student Team Members Management Application

A full-stack web application to manage student team members. Built with **React.js** (Frontend) and **Node.js + Express + MongoDB** (Backend).

## 📋 Project Description

This application allows users to:
- View team information on a landing page
- Add new team members with details and profile images
- View all team members in a card-based layout
- View individual member details

## 🛠 Technologies Used

| Layer | Technology |
|-------|------------|
| Frontend | React.js, React Router, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Image Upload | Multer |
| Styling | CSS3 |

## 📁 Project Structure

```
├── backend/
│   ├── models/
│   │   └── Member.js          # Mongoose schema
│   ├── routes/
│   │   └── members.js         # API routes
│   ├── uploads/               # Uploaded images
│   ├── server.js              # Express server
│   ├── .env                   # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomePage.js        # Landing page
│   │   │   ├── AddMember.js       # Add member form
│   │   │   ├── ViewMembers.js     # View all members
│   │   │   └── MemberDetails.js   # Single member details
│   │   ├── App.js             # Main app with routing
│   │   └── App.css            # Styles
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (running locally on port 27017)

### Backend Setup
```bash
cd backend
npm install
npm start
```
The backend server runs on `http://localhost:5000`

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
The frontend runs on `http://localhost:3000`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/members` | Retrieve all team members |
| `GET` | `/api/members/:id` | Retrieve a single team member by ID |
| `POST` | `/api/members` | Add a new team member (with image upload) |

### Sample API Response (GET /api/members)
```json
[
  {
    "_id": "6625f1f5c887065a3e13e2d",
    "name": "John Doe",
    "roll": "10",
    "year": "2024",
    "degree": "B.Tech",
    "project": "e-com website",
    "hobbies": ["playing games", "reading books"],
    "certificate": "fullstack",
    "internship": "cloud computing",
    "aboutYourAim": "To learn new technology",
    "image": "uploads/1713948000000.jpg"
  }
]
```

## 📝 How to Run the App

1. Start MongoDB service
2. Open a terminal and start the backend:
   ```bash
   cd backend ; npm start
   ```
3. Open another terminal and start the frontend:
   ```bash
   cd frontend ; npm start
   ```
4. Open `http://localhost:3001` in your browser

5. Open `http://localhost:5000/api/members` in your browser for the backend api calls
