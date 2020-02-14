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
    "dev": {
        "database": {
            "host": "localhost",
            "username": "postgres",
            "password": "1234pswd",
            "schema": "db_schema",
            "dialect": "postgres"
        }
    }
};
