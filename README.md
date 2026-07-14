# FastAPI-Task-Manager-API

# Task Manager Application

A simple Task Manager application built using **FastAPI**, **SQLAlchemy**, **SQLite**, and **React.js**. The application provides CRUD (Create, Read, Update, Delete) operations for managing tasks.

---

## Features

- Create a new task
- View all tasks
- Update an existing task
- Delete a task
- RESTful API using FastAPI
- SQLite database with SQLAlchemy ORM
- React frontend for user interaction
- Swagger API documentation

---

## Technologies Used

### Backend
- Python 3.x
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

### Frontend
- React.js
- Axios
- CSS

---

# Project Structure

```
Mentor_assigned_task/
│
├── task_manager/
│   ├── crud.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── tasks.db
│   ├── requirements.txt
│   └── venv/
│
└── task_manager_frontend/
    ├── src/
    ├── package.json
    └── ...
```

---

# Backend Setup

## Step 1: Navigate to Backend Folder

```bash
cd Mentor_assigned_task/task_manager
```

## Step 2: Create Virtual Environment (Optional)

Windows

```bash
python -m venv venv
```

Activate the virtual environment

```bash
venv\Scripts\activate
```

---

## Step 3: Install Dependencies

```bash
pip install -r requirements.txt
```

If required, install FastAPI and Uvicorn manually.

```bash
pip install fastapi uvicorn
```

---

## Step 4: Run the Backend Server

```bash
python -m uvicorn main:app --reload
```

Server will run at

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

ReDoc Documentation

```
http://127.0.0.1:8000/redoc
```

---

# Frontend Setup

## Step 1: Navigate to Frontend Folder

```bash
cd task_manager_frontend
```

---

## Step 2: Install Dependencies

```bash
npm install
```

Install Axios

```bash
npm install axios
```

---

## Step 3: Run React Application

```bash
npm run dev
```

React will start at

```
http://localhost:5173
```

---

# API Endpoints

## Get All Tasks

```
GET /tasks
```

---

## Add Task

```
POST /tasks
```

Example Request

```json
{
  "title": "Learn React",
  "description": "Complete frontend",
  "status": "Pending"
}
```

---

## Update Task

```
PUT /tasks/{task_id}
```

Example Request

```json
{
  "title": "Learn FastAPI",
  "description": "Backend Updated",
  "status": "Completed"
}
```

---

## Delete Task

```
DELETE /tasks/{task_id}
```

---

# Database

Database used:

```
SQLite
```

Database file:

```
tasks.db
```

---

# Requirements

Backend packages

```
fastapi
uvicorn
sqlalchemy
pydantic
python-multipart
python-jose
passlib
```

---

# Screenshots

Include the following screenshots in your submission:

- Swagger UI Home
- POST /tasks
- GET /tasks
- PUT /tasks/{task_id}
- DELETE /tasks/{task_id}
- React Application Home Page

---

# Author

Kavinkumar
