from sqlalchemy.orm import Session
import models
import schemas
def create_task(db: Session, task: schemas.TaskCreate):
    db_task = models.Task(
        title = task.title,
        description = task.description,
        status = task.status
    )

    db.add(db_task)
    db.commit()
    db.refresh(db_task)

    return(db_task)

def get_tasks(db: Session):
    return db.query(models.Task).all()

def update_task(db: Session, task_id: int, task: schemas.TaskUpdate):

    db_task = db.query(models.Task).filter(
        models.Task.id == task_id
    ).first()

    if not db_task:
        return None

    if task.title is not None:
        db_task.title = task.title

    if task.description is not None:
        db_task.description = task.description

    if task.status is not None:
        db_task.status = task.status
    
    db.commit()
    db.refresh(db_task)

    return db_task

def delete_task(db: Session, task_id: int):

    db_task = db.query(models.Task).filter(
        models.Task.id == task_id
    ).first()

    if not db_task:
        return False
    
    db.delete(db_task)
    db.commit()

    return True