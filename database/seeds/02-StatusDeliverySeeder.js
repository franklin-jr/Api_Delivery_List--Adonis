'use strict'

/*
|--------------------------------------------------------------------------
| StatusDeliverySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const StatusDelivery = use('App/Models/StatusDelivery')

class StatusDeliverySeeder {
  async run () {

    await StatusDelivery.create({
      name: 'Aberta',
      slug: 'AB',
      description: 'A entrega foi aberta, porém não foi encaminhada a um entregador'
    })

    await StatusDelivery.create({
      name: 'Encaminhada',
      slug: 'EN',
      description: 'A entrega foi encaminhada a um entregador'
    })


    await StatusDelivery.create({
      name: 'Realizada',
      slug: 'RE',
      description: 'A entrega foi realizada ao cliente'
    })

    await StatusDelivery.create({
      name: 'Cancelada',
      slug: 'CA',
      description: 'A entrega foi cancelada'
    })

  
  }
}

module.exports = StatusDeliverySeeder
