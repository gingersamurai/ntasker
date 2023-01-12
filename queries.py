from sqlalchemy import create_engine, select, update
from sqlalchemy.orm import sessionmaker
from model import *
import os


def init_session():
    engine = create_engine("sqlite+pysqlite:///task_db.sqlite", future=True)
    Session = sessionmaker()
    Session.configure(bind=engine)
    session = Session()
    return session


def insert_task(cur_task: Task, cur_task_data_path: str):
    session = init_session()
    session.add(cur_task)
    session.commit()
    if not os.path.exists(STORAGE_PATH):
        os.system(f"mkdir {STORAGE_PATH}")
    mkdir_com = f"mkdir {STORAGE_PATH}/{cur_task.id}"
    cp_com = f"cp -r {cur_task_data_path}/* {STORAGE_PATH}/{cur_task.id}"
    os.system(mkdir_com)
    os.system(cp_com)


def get_task(**kwargs):
    session = init_session()
    # print(kwargs)
    return session.execute(select(Task).filter_by(**kwargs)).fetchall()


def update_task(task_id, **kwargs):
    session = init_session()
    session.execute(
        update(Task).where(Task.id == task_id).values(**kwargs)
    )
    session.commit()
    
def delete_task(task_id):
    session = init_session()
    cur_task = session.get(Task, task_id)
    session.delete(cur_task)
    session.commit()
    os.system(f"rm -rf {STORAGE_PATH}/{task_id}")
    # print(cur_task)