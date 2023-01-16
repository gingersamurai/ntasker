# ntasker

mininalist self-hosted education platform written on `python3` 


## Overview

Ntasker is a free and open source platfrom focused on minimalist design and simplicity.  
<image src="misc/example.png">

## developer guide

### Technologies and languages

Ntasker is built using the folowing technologies:

1. `python3` as programming language
2. `sqlite` as simple database
3. `sqlalchemy` as query builder and ORM
4. `alembic` as convenient tool for migrations
5. `flask` as simple microframework

### architecture

+ `ntasker_flask` package with application
+ `alembic` directory with migrations
+ `db_pusher.py` initial script
+ `Makefile build` init database

### schemas and storage structure

<image src="misc/structure.png">