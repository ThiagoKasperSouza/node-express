/*
BSD 3-Clause License
Copyright (C) 2024 Thiago Kasper de Souza. All Rights Reserved
Primary Author: Thiago Kasper de Souza
*/


import { Request, Response } from 'express';
export default class AuthHandler {
    constructor(req:Request, res:Response) {
        this.handle(req,res);
    }
    private handle(req:Request, res:Response) {
        try {
            if(true) {
                res.status(200).json({
                    status:200,
                    message: "Login"
                });
            } else {
                res.status(401).json({
                    status:401,
                    message: 'Unauthorized acess'
                });
            }
        } catch(error) {
            res.status(500).json({
                status: 500,
                message: error || 'Internal server error'
            });
        }
    }
}