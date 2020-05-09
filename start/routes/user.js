'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.resource('login', 'UserController').apiOnly
    //Route.get('decode', 'AuthController.decode').as('auth.decode')
})
.prefix('v1/user')
.namespace('User')