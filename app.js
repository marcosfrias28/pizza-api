import express, { json } from 'express';
import cors from 'cors';
import { pizzaRoute } from './routes/pizza.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.disable('x-powered-by'); // Disable the x-powered-by header

// Middleware per il parsing dei JSON
app.use(json())
app.use(cors())

app.use('/api/pizza', pizzaRoute);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})