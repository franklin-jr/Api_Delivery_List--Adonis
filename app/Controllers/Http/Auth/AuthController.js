'use strict'

const Database = use('Database')
const User = use('App/Models/User')
const Role = use('Role')

class AuthController {

     //Método para realizar Login
     async login({request, auth}){
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token
    }
}

module.exports = AuthController
