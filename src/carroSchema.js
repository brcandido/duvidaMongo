const mongoose = require('mongoose')

const carroSchema = new mongoose.Schema({
  modelo: {
    type: String
  },
  anofabricacao:{
    type: Number
  },
  // cor:{
  //   type: string
  // },
  // marca:{
  //   type: string
  // },
  // quilometragem:{
  //   type: number
  // },
  // acessorios:{
  //   type: string
  // },
  // chassis:{
  //   type: string
  // }
})

module.exports = new mongoose.model("carro", carroSchema)