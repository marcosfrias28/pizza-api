import { Router } from "express";
import { PizzaController } from "../controllers/pizza.js";

export const pizzaRoute = Router();

pizzaRoute.get('/', PizzaController.getAll)

pizzaRoute.get('/:id', PizzaController.getById)

pizzaRoute.post('/', PizzaController.create)
