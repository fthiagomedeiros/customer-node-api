import express from "express";
import bodyParser from 'body-parser';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router'

import { V0_MODELS } from './controllers/v0/model.index';

function syncDatabase() {
    sequelize.addModels(V0_MODELS);
    sequelize.sync();
}

(async () => {
    await syncDatabase();

    const app = express();
    const port = process.env.PORT; // default port to listen

    app.use(bodyParser.json());

    app.use('/api/v0', IndexRouter);

    app.get( "/", async ( req, res ) => {
        res.send( "/api/v0");
    } );


    // Start the server
    app.listen( port, () => {
        // tslint:disable-next-line:no-console
        console.log( `server started at http://localhost:${ port }` );
    } );

})();

