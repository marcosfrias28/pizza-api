import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'Pizzeria'
};

const connection = await mysql.createConnection(config)


export class PizzaModel {
    static async getAllPizzas() {
        const [pizza] = await connection.query('SELECT BIN_TO_UUID(id) id, name, price, cover FROM Pizza;');
        return pizza;
     }
    static async getById({id}) {
        const [pizzaById] = await connection.query('SELECT BIN_TO_UUID(id) id, name, price, cover FROM Pizza WHERE ID = UUID_TO_BIN(?)', [id]);
        if (pizzaById.length === 0) return null;
        return pizzaById[0];
     }
    static async create({input}) {
        const {name, price, cover} = input;
        console.log(name, price, cover);
        // await connection.query('INSERT INTO Pizza (id, name, price, cover) VALUES (UUID_TO_BIN(UUID()), ?, ?, ?)', [name, price, cover]);
     }
    static async delete({id}) { 
        await connection.query('DELETE FROM Pizza WHERE ID = UUID_TO_BIN(?)', [id]);
    }
    static async update({id, input}) { }
}