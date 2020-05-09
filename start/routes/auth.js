'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.post('login', 'AuthController.login').as('auth.login').validator('Auth/Login')
    //Route.get('decode', 'AuthController.decode').as('auth.decode')
})
.prefix('v1/auth')
.namespace('Auth')
