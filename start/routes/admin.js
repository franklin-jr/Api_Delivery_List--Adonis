'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.resource('usuarios', 'UserController').apiOnly
})
.prefix('v1/admin')
.namespace('User')
.middleware(['auth', 'is:admin'])
