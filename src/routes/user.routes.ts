import { Router } from "express";
import { usersController }  from "../controllers/user.controller"

class UsersRoutes {
    public router: Router = Router();

    constructor(){
        this.router.get("/show", usersController.show);
        this.router.get("/", usersController.index);
        this.router.get("/:id", usersController.index);
        this.router.post("/", usersController.create);
        this.router.delete("/:id", usersController.delete);
        this.router.put("/:id", usersController.update);
    }
}

// export const Routes = new UsersRoutes();

export const userRoutes = new UsersRoutes();
