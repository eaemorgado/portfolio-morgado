// configurando o local host e setando o express 

const express = require("express");
const app = express();
const port = 3000;

// configurando local do img, css e js  

app.use(express.static("app/public"));

// configurando a vizualização do site

app.set("view engine", "ejs");
app.set("views", "./app/views");

// configurando a sessão 

var session = require("express-session");
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: "morgado",
    resave: true,
    saveUninitialized: true
}));

// configurando as rotas 

var rotas = require("./app/routes/router");
app.use("/", rotas);

// servidor rodando local

app.listen(port, () => {
    console.log("Servidor rodando")
});
