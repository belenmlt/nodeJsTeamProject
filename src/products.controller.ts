import {Request, Response} from 'express';
import {Products} from '../models/products.model';
import { Providers } from '../models/providers.models';



class ProductsController {

    public async index (req:Request, res:Response){
       // res.send('Index, esta ruta funciona');
        try{
       //const users =  await User.findAll({raw: true});
       const products = await Products.findAll({raw:true});
       //res.send(users);
       res.send(products);
    } catch (error) {
        res.sendStatus(500);
    }
    }


    public async show(req: Request,res:Response) {

        try {
      const products : Products[] = await Products.findAll(

      {
          attributes: [
              "providersId", "name"
          ],
          include: [
              {
                  model: Providers
              }
          ]
        
          
      }
      );
      res.send(products);
    }catch (error){
        res.send(error);
    }; 

      //const providers: Providers | null = await Providers.findByPk()     

      

        // Products.findAll()
        // .then((products) => {
        //     console.log(products);
            
        // })
        // .catch((error)=> {
        //     console.log(error);
            
        // })
        // res.send('Ok');
     }
     }
 
export const productsController = new ProductsController();       