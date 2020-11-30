import {Router} from 'express';
import {providersController} from '../controllers/providers.controller';






class ProvidersRoutes {
    public router: Router = Router();

    constructor(){

        this.router.get('/show', providersController.show);
        this.router.get('/', providersController.index);
        this.router.get('/:id', providersController.index);    
        
    }
};

export const providersRoutes =  new ProvidersRoutes();
