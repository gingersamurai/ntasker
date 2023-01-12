DATA_DIR = result

build:
	touch task_db.sqlite
	alembic upgrade head
	python3 db_pusher.py $(DATA_DIR)

clean:
	rm -rf storage/* task_db.sqlite
