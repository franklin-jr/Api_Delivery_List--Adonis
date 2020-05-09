'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeliveryUserSchema extends Schema {
  up () {

    this.create('status_receipts', (table) => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.string('description')
      table.timestamps()
    })

    this.create('delivery_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().index()
      table.integer('delivery_id').unsigned().index()
      table.integer('status_receipt_id').unsigned().index()
      table.timestamps()

      table.foreign('user_id').references('id').on('users').onDelete('cascade')
      table.foreign('delivery_id').references('id').on('deliveries').onDelete('cascade')
      table.foreign('status_receipt_id').references('id').on('status_receipts').onDelete('cascade')
    })
  }

  down () {
    this.drop('delivery_users')
  }
}

module.exports = DeliveryUserSchema
