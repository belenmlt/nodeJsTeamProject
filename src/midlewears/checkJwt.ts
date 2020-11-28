import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { nextTick } from 'process';
import config from '../config/config.json';





export const checkJwt = (req: Request,res: Response, next: NextFunction) => {

    // coger el token del request
    const token = <string>req.headers["authorization"]

    try{


      jwt.verify(token, config.jwtSecret );


    }catch(error){
        res.sendStatus(401);
    }

    next();

}