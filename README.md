# Customer REST API

Customer REST API is allows clients to register customers information.

***
## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

### Installing useful tools
#### 1. [Postbird](https://github.com/paxa/postbird)
Postbird is a useful client GUI (graphical user interface) to interact with our provisioned Postgres database. We can establish a remote connection and complete actions like viewing data and changing schema (tables, columns, ect).

#### 2. [Postman](https://www.getpostman.com/downloads/)
Postman is a useful tool to issue and save requests. Postman can create GET, PUT, POST, etc. requests complete with bodies. It can also be used to test endpoints automatically.

#### 3. [Docker Postgres](https://hub.docker.com/_/postgres)
Run the command below to provision a postgres database locally for testing/developing purpose.

```docker run --name postgres-db1 -p 5432:5432 -e POSTGRES_PASSWORD=your_password -d postgres```

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase. 

## Environment variables
To run the server locally in any mode, you must set the environment variables for your operating system as defined in /src/config/config.ts

If you prefer, include a new record in file config.ts to local environment as shown below and change sequelize.ts file to be assigned to local record.


``` typescript

// change sequelize.ts file from

const envVariables = config.prod;
to 
const envVariables = config.local;

// and update the /src/config.ts

export const config = {
    "prod": {
        "database": {
            "host": process.env.DB_HOST,
            "username": process.env.DB_USERNAME,
            "password": process.env.DB_PASSWORD,
            "schema": process.env.DB_SCHEMA,
            "dialect": "postgres"
        }
    },
    "local": {
        "database": {
            "host": 'localhost',
            "username": 'admin',
            "password": 'your_password',
            "schema": 'db_schema_name',
            "dialect": "postgres"
        }
    }
};
```
