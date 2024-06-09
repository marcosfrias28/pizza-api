// import { PizzaModel } from "../models/local/pizza.js";
import { PizzaModel } from "../models/mysql/pizza.js";
import { validatePizza } from "../schema/pizzaSchema.js";

export class PizzaController {
    static async getAll(req, res) {
        const {name, ingredients} = req.query;
        const pizza = await PizzaModel.getAllPizzas({name, ingredients});
        res.json(pizza);
    }
    static async getById(req, res) {
        const { id } = req.params;
        const pizza = await PizzaModel.getById({id});
        if (pizza) return res.json(pizza);
        res.status(404).json({message: 'Pizza not found'});
     }
     static async create(req, res) {
        const result = validatePizza(req.body);
        await PizzaModel.create({input: result});
        if (!result.success) {
            return res.status(400).json({message: 'Invalid pizza', errors: result.error});
        } else {
            res.status(201).json({message: 'Pizza created successfully'});
        }
      }
}