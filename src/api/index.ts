/*
BSD 3-Clause License
Copyright (C) 2024 Thiago Kasper de Souza. All Rights Reserved
Primary Author: Thiago Kasper de Souza
*/


import express, { Application, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import {router} from './router';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';


export default class Server {
  constructor(app: Application) {
    this.config(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: `${process.env.HOST}:${process.env.PORT}`
    };
    app.use(rateLimit({
      windowMs: (15* 1000) * 60 , // 15 minutes
      limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
      standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
      legacyHeaders: false // Disable the `X-RateLimit-*` headers.
      // store: ... , // Redis, Memcached, etc. See below.
    }));
    app.use(helmet());
    app.use('/api/v1',router);
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}