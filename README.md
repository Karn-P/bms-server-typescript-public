# bms-server-typescript-public

## Overview 
This is a public repository of bms-typescript-server.

## Installation 
_SmartBMS Server_ requires [Node.js](https://nodejs.org/) v16.14+ to run and [express.js](https://expressjs.com/) to run.

Clone the repository and install the dependencies

```sh
git clone https://github.com/Karn-P/bms-server-typescript-public.git
cd bms-server-typescript-public
```
```sh
npm install
yarn install
```

Create .env file

```sh
PORT=3001
MONGODB_URL_ONLINE={YOUR_MONGODB_URL}
```

## Running the project
To run this software, you need to follow severals step to configure the behavior of the software. 
The software will listen on port 3001 by default, which can be run by execute
  
   ```sh
   npm start
   ```
   ```sh
   yarn start
   ```
   or execute in dev mode using
   ```sh
   npm run dev
   ```
   ```sh
   yarn run dev
   ```
   
## Dependencies
_SmartBMS Server_ uses a number of open source projects to work properly:

- [node.js] - Asynchronous event-driven JavaScript runtime environment, suitable for non-blocking I/O needed application.
- [express] - Node.js web application framework, serving RESTful API.
- [typescript] - TypeScript compiles to readable, standards-based JavaScript.
- [mongoose] - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

## Use Docker
You can also run this app as a Docker container:
### Step 1: Clone the repo
```sh
git clone https://github.com/Karn-P/bms-server-typescript-public.git
```
### Step 2: Build the Docker image
```sh
docker build -t bms-server .
```

### Step 3: Run the Docker container locally with enviroment variables:
```sh
docker run -p 3001:3001 -d bms-server \
   -e PORT=3001
   -e MONGODB_URL_ONLINE={YOUR_MONGODB_URL}
```