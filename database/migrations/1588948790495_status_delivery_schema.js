'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusDeliverySchema extends Schema {
  up () {
    this.create('status_deliveries', (table) => {
      table.increments()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable().unique()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('status_deliveries')
  }
}

module.exports = StatusDeliverySchema
