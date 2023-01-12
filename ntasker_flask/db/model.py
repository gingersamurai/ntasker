from sqlalchemy import MetaData, create_engine
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, Text
from sqlalchemy.orm import declarative_base

# engine = create_engine("sqlite+pysqlite:///task_db.sqlite", echo=True, future=True)
Base = declarative_base()

STORAGE_PATH = "./storage"


class Task(Base):
    __tablename__ = "task"

    id = Column(Integer, primary_key=True)
    type = Column(String(100), nullable=False)
    subtype = Column(String(1000), nullable=False)
    statement_text = Column(Text, nullable=False)
    answer = Column(Text)
    have_picture = Column(Boolean, nullable=False)

    def __repr__(self) -> str:
        return f"<TASK (id: {self.id}) (type: {self.type[:10]}) (subtype: {self.subtype}) >" 


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    login = Column(String(100), nullable=False)
    password = Column(String(100), nullable=False)

    def __repr__(self) -> str:
        return f"<USER\tid: {self.id}\name: {self.name}\tlogin: {self.login} >" 

class Solution(Base):
    __tablename__ = "solution"

    id = Column(Integer, primary_key=True)
    task_id = Column(ForeignKey("task.id"), nullable=False)
    user_id = Column(ForeignKey("user.id"), nullable=False)
    status = Column(Integer, nullable=False)

# Base.metadata.create_all(engine)