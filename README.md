How to run:

Clone: git clone git@github.com:SonNgo/QuizsApp.git

1. Run server (on port localhost:3000)

	1.1 cd server-api

	1.2 bundle install

	1.3 open: config/database.yml (modify usename, password of your MySQL database)

	1.4 rake db:migrate:reset

	1.5 rake db:seed

	1.6 rails s

2. Run client (on port localhost:8000)

	2.1 open new terminal (Ctrl + Shift + T)

	2.2 cd ../client

	2.3 python -m SimpleHTTPServer

	2.4 open http://localhost:8000/




