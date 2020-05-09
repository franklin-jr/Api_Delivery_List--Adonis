'use strict'


/*
|--------------------------------------------------------------------------
| TypePaymentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const TypePayment = use('App/Models/TypePayment')

class TypePaymentSeeder {
  async run () {
  
    await TypePayment.create({
        name: 'Dinheiro',
        slug: 'DH',
    })

    await TypePayment.create({
      name: 'Cartão',
      slug: 'CR',
    })


  }
}

module.exports = TypePaymentSeeder
