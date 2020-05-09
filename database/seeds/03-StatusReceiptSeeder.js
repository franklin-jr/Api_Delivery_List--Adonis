'use strict'

/*
|--------------------------------------------------------------------------
| StatusReceiptSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const StatusReceipt = use('App/Models/StatusReceipt')

class StatusReceiptSeeder {
  async run () {
    await StatusReceipt.create({
      name: 'Aguardando confirmaçao',
      slug: 'AC',
      description: 'Aguardando confirmação do entregador, neste etapa o mesmo pode aceitar ou recusar a solicitação para entregar o pedido.'
    })

    await StatusReceipt.create({
      name: 'Confirmado',
      slug: 'CC',
      description: 'Confirmação do entregador, neste etapa o mesmo aceitou a entregar o pedido.'
    })

    await StatusReceipt.create({
      name: 'Recusado',
      slug: 'RR',
      description: 'Rejeição do entregador, neste etapa o mesmo se recusou a entregar o pedido.'
    })
  }
}

module.exports = StatusReceiptSeeder
