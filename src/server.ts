/*
BSD 3-Clause License
Copyright (C) 2024 Thiago Kasper de Souza. All Rights Reserved
Primary Author: Thiago Kasper de Souza
*/


import express from "express";
import 'dotenv/config'
import Server from "./api";



const app: express.Application = express();



// Run the server!
const start = async (app: express.Application) => {
    try {
      await app.listen({
        host: process.env.HOST || 'localhost',
        port: process.env.PORT ? Number(process.env.PORT) : 3333,
      });
      console.log(
        `Server listening on http://${process.env.HOST || 'localhost'}:${
          process.env.PORT ? Number(process.env.PORT) : 3333
        }/api/v1`
      );
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
};

new Server(app)
start(app);
