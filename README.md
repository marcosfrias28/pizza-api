Pizza API


Una API per gestire e cercare pizze. Consente di ottenere un elenco di pizze, cercare pizze per nome o ingredienti e aggiungere nuove pizze.

Indice
Installazione
Utilizzo
Endpoint
Autenticazione
Esempi
Contributi
Licenza
Installazione
Per installare questa API, clona questo repository e installa le dipendenze:

bash
Copia codice
git clone https://github.com/tuo_username/tuo_repository.git
cd tuo_repository
npm install
Utilizzo
Per avviare il server:

bash
Copia codice
npm start
Il server sarà in esecuzione su http://localhost:8080 (o su una porta diversa se specificata nella variabile d'ambiente PORT).

Endpoint
GET /api/pizza
Restituisce un elenco di pizze. Può essere filtrato per nome o ingredienti.

Query Parameters:

name (opzionale): Filtra le pizze per nome.
ingredients (opzionale): Filtra le pizze per ingredienti.
Esempio di richiesta:

bash
Copia codice
curl http://localhost:8080/api/pizza?name=Margherita
Risposta:

json
Copia codice
[
    {
        "id": "1",
        "name": "Margherita",
        "ingredients": ["tomato", "mozzarella", "basil"]
    }
]
POST /api/pizza
Aggiunge una nuova pizza.

Request Body:

json
Copia codice
{
    "name": "Diavola",
    "ingredients": ["tomato", "mozzarella", "spicy salami"]
}
Risposta:

json
Copia codice
{
    "message": "Pizza created successfully"
}
GET /api/pizza/
Restituisce una pizza specifica per ID.

Esempio di richiesta:

bash
Copia codice
curl http://localhost:8080/api/pizza/1
Risposta:

json
Copia codice
{
    "id": "1",
    "name": "Margherita",
    "ingredients": ["tomato", "mozzarella", "basil"]
}
Autenticazione
Attualmente, questa API non richiede autenticazione.

Esempi
Ecco alcuni esempi di come utilizzare questa API.

Ottenere tutte le pizze:

bash
Copia codice
curl http://localhost:8080/api/pizza
Ottenere pizze per nome:

bash
Copia codice
curl http://localhost:8080/api/pizza?name=Margherita
Ottenere pizze per ingredienti:

bash
Copia codice
curl http://localhost:8080/api/pizza?ingredients=mozzarella
Aggiungere una nuova pizza:

bash
Copia codice
curl -X POST http://localhost:8080/api/pizza -H "Content-Type: application/json" -d '{"name": "Diavola", "ingredients": ["tomato", "mozzarella", "spicy salami"]}'
Ottenere una pizza per ID:

bash
Copia codice
curl http://localhost:8080/api/pizza/1
Contributi
Contributi, issue e richieste di nuove funzionalità sono i benvenuti! Sentiti libero di aprire una issue o fare una pull request.

Licenza
Distribuito sotto la licenza MIT. Vedi LICENSE per maggiori informazioni.
