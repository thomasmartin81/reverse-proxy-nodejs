# Simple reverse proxy example
This reverse proxy will bind to 0.0.0.0:3000. All request to http://localhost:3000 will be  send either to http://localhost:8080 or http://localhost:4200.
 
The mapping is as followed:
* localhost:3000/backend/{anyPath} => localhost:8080/{anyPath}
* localhost:3000/{anyPath} => localhost:4200/{anyPath}

Start it with the `npm start` command. But the first time you will need to install the dependencies with `npm install`.
