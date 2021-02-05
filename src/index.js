const express = require('express')
const mongoose = require('mongoose')
const app = express()
const carroController = require('./carroController')


mongoose.connect('mongodb://localhost:27017/carros')
.then(()=>{
  console.log('Conectou!')
})
.catch((error)=>{
  console.log('Não deu!', error)
})


app.listen(3333, () =>{
  console.log(`Servidor rodando na porta 3333`)
})

app.get('/', carroController.index)