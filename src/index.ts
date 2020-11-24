import express from "express";
import { userRoutes } from "./routes/user.routes";
import { productsRoutes } from "./routes/products.routes";
import { providersRoutes } from "./routes/providers.routes";
import { booksRoutes } from "./routes/books.routes";

// Instanciar express framework
const app = express();

// Setting the port of application server
app.set("port", 3000);

// Start the server, using the port defined
app.listen(app.get("port"), () => {
    console.log(`The server is running on port ${app.get("port")}`); 
});

// Middleware. Poder interpretar json en las peticiones
app.use(express.json());

// Load the file UserRoutes
app.use("/users", userRoutes.router); 
app.use("/products", productsRoutes.router);
app.use("/providers", providersRoutes.router);
app.use("/books", booksRoutes.router)

