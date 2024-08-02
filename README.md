# Promptly - Journaling Application

A full-stack journaling application built with Next.js, Tailwind CSS, a Python/Flask backend, and MongoDB as the database. This application allows users to write entries with all data securely stored in a MongoDB database.

## Features

- **User Authentication**: Login and registration.
- **Create, Read, Update, Delete (CRUD) Operations**: Manage journal entries easily.
- **Responsive Design**: Built with Tailwind CSS to ensure the application is mobile-friendly.
- **Real-time Updates**: Leveraging Next.js for seamless page transitions and real-time data updates.
- **Backend API**: Flask-based API to handle data retrieval and storage in MongoDB.

## Tech Stack

- **Frontend**: 
  - [Next.js](https://nextjs.org/) - React framework for server-rendered applications.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for custom designs.

- **Backend**:
  - [Flask](https://flask.palletsprojects.com/) - Lightweight WSGI web application framework for Python.
  - [MongoDB](https://www.mongodb.com/) - NoSQL database for storing journal entries.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/journaling-app.git
   cd promptly
   ```

2. **Install frontend dependencies**:
   ```bash*
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../backend
   pip install flask
   pip install flask-cors
   ```

4. **Run the application**:
   - **Backend**: 
     ```bash
     cd backend
     python server.py
     ```
   - **Frontend**:
     ```bash
     npm run dev
     ```

6. **Access the application**:
   - Navigate to `http://localhost:3000` in your browser.
