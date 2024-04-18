/*
BSD 3-Clause License
Copyright (C) 2024 Thiago Kasper de Souza. All Rights Reserved
Primary Author: Thiago Kasper de Souza
*/


import { Request, Response } from 'express';
export default class DefaultHandler {
    constructor(req:Request, res:Response, data:object|string) {
        console.group("[DEBUG] - dentro do handler");
        console.debug(data);
        this.handle(req,res,data);
    }
    private handle(eq:Request, res:Response, data:object|string) {
        try {
            res.status(200).json(
                this.validateDataType(data)
            );
        } catch(error) {
            res.status(500).json({
                status: 500,
                message: error || 'Internal server error'
            });
        }
    }
    private validateDataType(data:object|string) {
        if(typeof(data) === 'string') {
            return {
                status:200,
                message: data
            };
        }
        return {
            status:200,
            data
        };
    }
}