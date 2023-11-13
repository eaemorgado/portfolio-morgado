// configurando as dependencias 

var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const mysql = require('mysql2');

// conectando a conexão do banco com as rotas

// var fabricaDeConexao = require("../../config/connection-factory");
// var conexao = fabricaDeConexao();

// conexao.connect((err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Conectado ao MySQL');
//   });
  

// configurando rotas das paginas

router.get("/", function(req, res){
    res.render("pages/home")
})

router.get("/home", function (req, res){
    res.render("pages/home")
});   


module.exports = router