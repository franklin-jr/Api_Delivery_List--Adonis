'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeliveriesSchema extends Schema {
  up () {

    this.create('type_payments', (table) => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.timestamps()
    })


    this.create('deliveries', (table) => {
      table.increments()
      table.string('order')
      table.string('client')
      table.integer('type_payment_id').unsigned().index()
      table.integer('status_delivery_id').unsigned().index()
      table.string('zip_cod')
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('neighborhood').notNullable()
      table.string('city').notNullable()
      table.string('state', 3).notNullable().defaultTo('RN')
      table.string('complement')
      table.timestamp('date_delivered')
      table.timestamps()


       //relacionamentos
      table.foreign('type_payment_id').references('id').on('type_payments').onDelete('cascade')
      table.foreign('status_delivery_id').references('id').on('status_deliveries').onDelete('cascade')
    })
  }

  down () {
    this.drop('deliveries')
  }
}

module.exports = DeliveriesSchema
