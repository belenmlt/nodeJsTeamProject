import {Request, Response} from 'express';
import {Providers} from '../models/providers.models';



class ProvidersController {

    public async index (req:Request, res:Response){
       // res.send('Index, esta ruta funciona');
        try{
       const providers =  await Providers.findAll({raw: true});
      // const products = await User.findAll({raw:true});
       res.send(providers);
       //res.send(products);
    } catch (error) {
        res.sendStatus(500);
    }
    }


    public show(req: Request,res:Response) {
        Providers.findAll()
        .then((providers) => {
            console.log(providers);
            
        })
        .catch((error)=> {
            console.log(error);
            
        })
        res.send('Ok');
     }
     }
 
export const providersController = new ProvidersController();       