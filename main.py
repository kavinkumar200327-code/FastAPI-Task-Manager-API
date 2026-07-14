from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import Base, engine, get_db
import models
import schemas
import crud

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title = "Task  Manager API",
    description = "Simple Task manager using FastAPI",
    version = "1.0.0"
)

@app.get("/")
def home():
    return {"message": "Welcome to the Task Manager API"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post(
    "/tasks",
    response_model = schemas.TaskResponse,
    status_code = status.HTTP_201_CREATED
)

def add_task(
    task: schemas.TaskCreate,
    db: Session = Depends(get_db)
):
    return crud.create_task(db, task)

@app.get(
    "/tasks",
    response_model=list[schemas.TaskResponse]
)

def get_all_tasks(db: Session = Depends(get_db)):
    return crud.get_tasks(db)

@app.put(
    "/tasks/{task_id}",
    response_model = schemas.TaskResponse
)
def update_task(
    task_id: int,
    task: schemas.TaskUpdate,
    db: Session = Depends(get_db)
):

    updated = crud.update_task(db, task_id, task)

    if not updated:
        raise HTTPException(
            status_code = 404,
            detail="Task not found"
        )

    return updated

@app.delete("/tasks/{task_id}")
def delete_task(
    task_id: int,
    db: Session = Depends(get_db)
):

    deleted = crud.delete_task(db, task_id)

    if not deleted:
        raise HTTPException(
            status_code = 404,
            detail = "Task not found"
        )
    
    return {"message": "Task deleted successfully"}