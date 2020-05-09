# Api DeliveryList

Projeto produzido com a utilização do framework `Adonis.js`.

Está Api tem como intuito servir exclusivamente a aplicação DeliveryList


## Setup

#### Após realizar clone, execute os seguintes passos:

1. ##### Crie um arquivo  `.env` com as informações abaixo. 

*Observação:* (substitua as credencias do banco de acordo com a do banco que vai ser conectado).
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

2. ##### Execute o seguinte comando para executar migrações de inicialização

Esse comando cria todas as tabelas necessárias em suas base de dados.

```js
adonis migration:run
```

3. ##### Execute o seguinte comando para executar os seeds
Esse comando popula as tabelas:
1. type_payments
2. status_deliveries
3. status_receipts

```js
adonis seed
```

