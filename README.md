# Api DeliveryList

Project developd using the `Adonis.js` framewok

## Objective

This Api aims to exclusively serve the DeliveryList application, it composes login, crud and sockect methods.

## Setup
*Note:* To consume the API locally, it is necessary to have [Adonis.js](https://adonisjs.com/docs/4.1/installation) installed.

### Perform the following steps:

1. #### Create the `.env` file with the information below. 

*Note:* (replace connection credentials according to the database to be connected).
```bash
    HOST=127.0.0.1
    PORT=3333
    NODE_ENV=development
    APP_NAME=AdonisJs
    APP_URL=http://${HOST}:${PORT}
    CACHE_VIEWS=false
    APP_KEY=xtj7a9oitvTiBKhJhr6mKj7dfNdRjoMt
    DB_CONNECTION=pg
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_USER=usuario
    DB_PASSWORD=senha
    DB_DATABASE=delivery_list
    HASH_DRIVER=bcrypt
```

2. #### Run the following command to perform boot migrations

```js
adonis migration:run
```
*This command creates all the necessary tables in your database.*

3. #### Run the following command to run the seeds

```js
adonis seed
```
*This command populates the tables: type_payments, status_deliveries, status_receipts and users*

