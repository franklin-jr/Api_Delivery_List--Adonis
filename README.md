# Api DeliveryList

Projeto produzido com a utilização do framework `Adonis.js`.
Está Api tem como intuito servir exclusivamente a aplicação DeliveryList


## Setup

#### Após realizar clone, execute os seguintes passos:

1. ##### Crie um arquivo  `.env` com as informações abaixo.
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

1. ##### Execute o seguinte comando para executar migrações de inicialização

```js
adonis migration:run
```

1. ##### Execute o seguinte comando para executar seeds

```js
adonis seed
```

