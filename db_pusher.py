from model import *
import queries
import os
import sys
import json


for TASKS_PATH in os.listdir(sys.argv[1]):
    TASKS_PATH = os.path.join(sys.argv[1], TASKS_PATH)
    with open(os.path.join(TASKS_PATH, "tasks.json")) as JSONconf:
        conf = json.load(JSONconf)
    for cur_task_conf in conf:
        task_id = cur_task_conf["task_id"]
        del cur_task_conf["task_id"]
        data_path = os.path.join(TASKS_PATH, "files", str(task_id))
        cur_task_conf["have_picture"] = False
        if os.path.exists(os.path.join(data_path, "statement_files", "img.png")):
            cur_task_conf["have_picture"] = True
        
        cur_task = Task(**cur_task_conf)
        queries.insert_task(cur_task, data_path)


