import {Router} from "express";
import {productsController} from "../controllers/products.controller";






class ProductsRoutes {
    public router: Router = Router();

    constructor(){

        this.router.get('/show', productsController.show);
        this.router.get('/', productsController.index);
        this.router.get('/:id', productsController.show);   
        
    }
};


export const productsRoutes = new ProductsRoutes();