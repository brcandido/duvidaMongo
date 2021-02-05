const carroSchema = require('./carroSchema')

class carroController {
  async index(req, res){
    carroSchema.find({})
    .then((result)=>{
      console.log(result)
      return res.json(result)
    })
    .catch((error)=>{
      return res.json({"mensagem": "Não funcionou!"})
    })
  }
}

module.exports = new carroController();