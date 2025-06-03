# ✅ Todo Summary Assistant

The **Todo Summary Assistant** is a full-stack productivity web application that allows users to create and manage tasks — and get **AI-generated summaries** of their to-dos. It also integrates with **Slack** to send task summaries directly to your Slack workspace, making it easy to stay organized and focused.

---

## 🚀 Features

- Add, update, and delete todos
- AI-generated task summaries (via OpenAI API)
- Slack integration to receive summaries in Slack
- User authentication
- PostgreSQL-backed data storage
- Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend:
- React.js (with React Hook Form)
- Bootstrap / CSS Modules
- Axios for API calls

### Backend:
- Node.js + Express.js
- PostgreSQL (via `pg`)
- OpenAI API for task summaries
- Slack API for sending summaries
- JWT-based authentication
- dotenv for environment variables

---

## 🧠 AI & API Integrations

- **OpenAI API** – used to generate smart, concise summaries of all current tasks
- **Slack API** – allows sending generated summaries to a user’s Slack channel via webhook

---

## 📁 Folder Structure

### Backend (`/server`):
server/
├── controllers/ # Handles logic
├── routes/ # API routes
├── db.js # PostgreSQL connection
├── utils/ # OpenAI and Slack functions
├── .env
└── server.js


-----------------------------

client/
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Home, Login, Signup
│ ├── api/ # Axios calls
│ ├── App.jsx
│ └── index.js
├── .env
└── public/
