'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
const Role = use('Role')

class UserSeeder {
  async run () {

    const roleAdmin = await Role.findBy('slug', 'admin')
    const admin  = await User.create({
        name: 'Administrador',
        username: 'Administrador01',
        email: 'admin@excalibur.com',
        password: 'admin2020'
    })
    await admin.roles().attach([roleAdmin.id])
    
  }
}

module.exports = UserSeeder
