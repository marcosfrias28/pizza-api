import { Router } from "express";
import { readJSON } from "../utils/readJSON.js";


const pizza = readJSON('../pizza.json')

export const pizzaRoute = Router();

pizzaRoute.get('/', (req, res) => {
    const {name, ingredients} = req.query;
    if (name) {
        const pizzaByName = pizza.filter(pizza => pizza.name.includes(name));
        return res.json(pizzaByName);
    }
    if (ingredients) {
        const pizzaByIngredients = pizza.filter(pizza => pizza.ingredients.some(ingredient => ingredient.toLowerCase().includes(ingredients.toLowerCase())));
        return res.json(pizzaByIngredients);
    }
    res.json(pizza);
    res.status(200);
})

pizzaRoute.get('/:id', (req, res) => {
    const { id } = req.params;
    const pizzaId = pizza.find(pizza => pizza.id === id);
    if (pizzaId) return res.json(pizzaId);
    res.status(404).json({message: 'Pizza not found'});
})

pizzaRoute.post('/', (req, res) => {
    const result = validatePizza(req.body);
    if (!result.success) {
        return res.status(400).json({message: 'Invalid pizza', errors: result.error});
    } else {
        res.status(201).json({message: 'Pizza created successfully'});
    }
    const newPizza = {
        id: crypto.randomUUID(),
        ...result.data
    }
    pizza.push(newPizza);
})
