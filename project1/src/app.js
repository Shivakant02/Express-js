require('dotenv').config()
const express = require('express')
const connect = require('../config/db.js')
const { home } = require('../controllers/userController.js')
const cors=require('cors')

const app = express()

connect();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const userRoutes=require('../routes/userRoutes.js')
app.use('/', userRoutes);

module.exports=app
