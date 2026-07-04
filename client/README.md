# 🍽️ Smart Food Redistribution Platform

A **Full-Stack MERN (MongoDB, Express.js, React.js, Node.js)** web application designed to reduce food waste by connecting **Food Donors, NGOs, Volunteers, and Administrators** through a smart food redistribution network.

The platform enables restaurants, hotels, supermarkets, organizations, and individuals to donate surplus food, while verified NGOs can claim donations and coordinate deliveries efficiently. The system includes secure authentication, donation lifecycle management, analytics dashboards, and is designed for future integration with AI-powered matching, real-time GPS tracking, and live notifications.

---

## 🌍 Problem Statement

Millions of tons of edible food are wasted every year while millions of people suffer from hunger.

The **Smart Food Redistribution Platform** bridges this gap by creating a centralized system where:

- Food Donors can donate surplus food.
- Verified NGOs can discover and claim nearby food.
- Volunteers can assist in deliveries.
- Administrators monitor and verify platform activities.

This helps reduce food waste while improving food accessibility.

---

# ✨ Features

## 👤 Authentication & Authorization

- JWT Authentication
- Secure Password Hashing (bcrypt)
- Multi-Role Login
  - Donor
  - NGO
  - Admin
- Protected Routes
- Role-Based Access Control

---

## 🍱 Donation Management

- Create Donation
- View Donations
- Edit Donation
- Delete Donation
- Food Expiry Tracking
- Available Quantity Tracking
- Claimed Quantity Tracking
- Donation Status Updates

---

## 🤝 Claim Management

- NGOs can claim donations
- Partial Food Claims
- Claim Status Management
- Donation Quantity Validation
- Automatic Status Updates

---

## 📊 Dashboard

- Total Donations
- Meals Saved
- Registered NGOs
- Deliveries
- Recent Activities
- Quick Actions

---

## 👤 User Profile

- View Profile
- Update Profile
- Role Information
- Logout

---

## 📱 Responsive UI

- Mobile Friendly
- Tablet Friendly
- Desktop Responsive
- Tailwind CSS Design
- Modern Dashboard UI

---

# 🚀 Upcoming Features (Version 2)

- 🗺 Live GPS Tracking (Leaflet)
- 🤖 AI-Based NGO Recommendation
- 🔔 Real-Time Notifications (Socket.IO)
- 📈 Analytics Dashboard
- 📊 Charts & Reports
- ☁ Cloudinary Image Uploads
- 🚚 Route Optimization
- 📧 Email Notifications
- 📱 Progressive Web App (PWA)

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Context API
- Framer Motion
- Lucide React
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- dotenv
- CORS

---

## Database

- MongoDB Atlas / Local MongoDB

---

## Development Tools

- Visual Studio Code
- Postman
- Git
- GitHub

---

# 📂 Project Structure

```
Smart-Food-Redistribution-Platform
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 📌 User Roles

## 🟢 Donor

- Register/Login
- Create Donations
- Edit Donations
- Delete Donations
- View Donation History

---

## 🟠 NGO

- Register/Login
- Claim Donations
- View Claimed Donations
- Track Deliveries

---

## 🔴 Admin

- Verify NGOs
- Manage Users
- View Analytics
- Monitor Platform Activities

---

# 🔄 Workflow

```
Donor
   │
   ▼
Create Donation
   │
   ▼
Donation Listed
   │
   ▼
Verified NGO Claims Donation
   │
   ▼
Food Pickup
   │
   ▼
Delivery
   │
   ▼
Donation Completed
```

---

# 📡 REST API Endpoints

## Authentication

```
POST    /api/auth/register
POST    /api/auth/login
GET     /api/auth/profile
```

---

## Donations

```
GET     /api/donations
GET     /api/donations/:id
POST    /api/donations
PUT     /api/donations/:id
DELETE  /api/donations/:id
```

---

## Claims

```
POST    /api/claims/:donationId
GET     /api/claims
PUT     /api/claims/:claimId/status
```

---

## Dashboard

```
GET /api/dashboard/stats
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/Smart-Food-Redistribution-Platform.git
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🌐 Environment Variables

Backend

```
PORT

MONGO_URI

JWT_SECRET
```

---

# 📸 Screenshots

(Add project screenshots here after deployment)

- Landing Page
- Login
- Dashboard
- Donations
- Profile

---

# 🚀 Future Improvements

- AI Food Matching
- Live Maps
- Route Optimization
- Socket.IO Notifications
- Charts
- Image Uploads
- Email Alerts
- Mobile Application

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create your feature branch

```
git checkout -b feature/NewFeature
```

3. Commit your changes

```
git commit -m "Added New Feature"
```

4. Push to the branch

```
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Venkatesh Korra**

B.Tech Computer Science Engineering

Anurag University

GitHub: https://github.com/Venkatesh7832

---

# ⭐ If you found this project useful

Please consider giving it a ⭐ on GitHub.
