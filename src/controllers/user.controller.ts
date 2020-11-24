import { Request, Response } from "express";
import { Op } from "sequelize";
// import { Products } from "../models/products.model";
// import { Providers } from "../models/providers.model";
import { Users } from "../models/user.model"

class UsersController {
    // public index(req: Request, res: Response) {
    //     // Se puede hacer de esta manera, con callbacks pero si hay muchas pwticiones acaba en un jaleo:
    //     // Users.findAll({ raw: true })
    //     // .then((users) => console.log(users))
    //     // .catch((err) => console.log(err));
    //     res.send("INDEX, la ruta funciona");
    // };

    public async index(req: Request, res: Response) {
        
        try {
            const users = await Users.findAll({
                // where: {
                //     name: {
                //         [Op.like]: "%A%"
                //     },
                //     id: 2,
                //     [Op.or]: [
                //         {familyName: "Martinez"},
                //         {familyName: "Pig"}
                //     ]
                // },
                raw: true
            });

            // const usersId = users.filter((obj) => {
            //     obj.id === Number(req.params.id)
            // })            
            // res.send(usersId);

            // Para ver los usuarios con la petición tipo Post, vemos todos los usuarios:
            // res.send(users)

            // Vemos lo que pongamos por parámetro: 
            const usersId = await Users.findByPk(req.params.id, { raw: true });
            res.send(usersId)
            
            // if(userPepa){
            //     res.send(userPepa);
            // } else {
            //     res.sendStatus(404);
            // }

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        };
            
    };

    public show(req: Request, res: Response) {
        res.send("SHOW, la ruta funciona");
    }; 

    // public async getId(req: Request, res: Response) {
    //     const users = await Users.findAll({ raw: true });
    //     } catch {
    //     }
    // };

    public async create (req: Request, res: Response) {
        try {
            const request = req.body;
            const newUser = await Users.create(request);        
            res.json(newUser); 
        } catch(error) {
            res.json(error);
        };
        
    }

    public async delete (req: Request, res: Response) {
        console.log(req.params.id);

        try {
            const user = await Users.destroy({
                where: {
                    // Criterio para borrar - no te olvides de poner el where en el delete from
                    id: req.params.id
                }
            })

            res.sendStatus(200);

        } catch(error) {
            res.json(error)

        }        
    }

    public async update (req: Request, res: Response) {
        try {
            const user = await Users.update({
                name: req.body.name,
                familyName: req.body.familyName
            }, {
                where: {
                    id: req.params.id
                }
            });

            res.json(user);

        } catch(error) {
            res.json(error) 
        }
    }
};

export const usersController = new UsersController();

// Products.findAll({ raw: true })
// .then((products) => console.log(products))
// .catch((err) => (err));