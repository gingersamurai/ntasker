from flask import Blueprint, render_template
from ntasker_flask.db.queries import get_task
from ntasker_flask.db.model import *

bp = Blueprint('task', __name__, url_prefix="/task")

@bp.route("/<int:id>")
def view_get_task(id): 
    cur_task = get_task(id=id)[0][0]
    
    return render_template("task.html", cur_task=cur_task)