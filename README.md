# Gatherly – AI-Powered MERN Event Management Platform

Gatherly is a full-stack event management platform built using the MERN stack. It allows users to explore events, register, and manage bookings through a modern web interface. Now supercharged with Google Gemini AI integration to provide event description generation and a smart assistant.

---

## 🌟 Features

- **User Authentication**: Secure JWT-based auth scheme.
- **Event Management**: Create, view, and delete detailed events.
- **Booking Infrastructure**: Reserve seats, manage requests, and verify OTPs for payments.
- **Admin Dashboard**: Analytics, ticket approval, and complete control over the platform.

### ✨ AI Features (New!)

- **AI Event Description Generator**: Let Google Gemini automatically write professional, compelling descriptions for your events in one click from the Admin Dashboard.
- **AI Event Chatbot & Recommender**: A responsive floating assistant on the homepage that has direct access to upcoming events. Users can ask questions like "What events are happening this week?" or "Recommend me tech events," and receive smart, context-aware answers.

### 💳 Payment Gateway (New!)

- **Razorpay Test Mode Integration**: Full checkout experience injected natively via Razorpay's Modal UI.
- **Cryptographic Verification**: Enterprise-grade backend verification utilizing Node's `crypto` module to validate HMAC SHA-256 signatures, ensuring mathematically proven transactions before booking tickets.

---

## 📦 Tech Stack

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express.js + `@google/genai` (Gemini SDK)
- **Database:** MongoDB (Atlas)
- **Authentication:** JSON Web Tokens (JWT)
- **API Calls:** Axios

---

## 🛠 Prerequisites

Make sure the following are installed on your system:

- **Node.js** (v18 or higher recommended)
- **MongoDB Database** (MongoDB Atlas Free Tier recommended)
- **Git**

---

## ⚙️ Environment Variables

Navigate to your server directory to set up the environment variables:

```bash
cd server
```

Create a file named `.env` and add the following variables:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=supersecretjwtkey

EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_gmail_app_password_here

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

GEMINI_API_KEY=your_gemini_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> **Note:** For `EMAIL_PASS`, generate a Google App Password from your Google Account settings. Normal passwords will not work if 2FA is enabled. Obtain your free Gemini API Key from Google AI Studio.

---

## 🚀 Running the Project Locally

From the **Gatherly root folder** run:

```bash
npm run dev:all
```

This will automatically install dependencies and start both the Node.js backend (`localhost:5000`) and the Vite React frontend (`localhost:5173`) using `concurrently`.
