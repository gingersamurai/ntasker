from flask import Flask, redirect, Blueprint, render_template, request, url_for
from ntasker_flask.db.queries import get_task
from ntasker_flask.view import bp
from ntasker_flask.db.model import *
import os 

app = Flask(__name__,
    # instance_relative_config=True,
    # instance_path='/storage'
)

app.register_blueprint(bp)

app.config.from_mapping(
    DATA_FOLDER='storage'
)
# app.config.from_object('config')

# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/task/<type>/<subtype>')
def task(type, subtype):
    cur_task = get_task(type=type, subtype=subtype)[0][0]
    
    return render_template('task.html', cur_task=cur_task)

@app.route('/', methods = ['POST', 'GET'])
def view_get_task(): 
    if request.method == 'POST':
        task_type = request.form.get('task_type')
        task_subtype = request.form.get('task_subtype')

        if task_type != "none" and task_subtype != "none":
            return redirect(url_for('task', type=task_type, subtype=task_subtype))


    return render_template('selector.html')


