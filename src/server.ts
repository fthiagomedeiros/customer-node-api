import express from "express";

const app = express();
const port = process.env.PORT; // default port to listen

app.get( "/", ( req, res ) => {
    res.send( "/api/v0/get");
} );

app.post( "/", ( req, res ) => {
    res.send( "/api/v0/post");
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
