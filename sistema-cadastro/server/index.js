const express = require('express')
const app = express()

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
});

var Datastore = require('nedb');
var users = new Datastore({ filename: 'integrantes.db', autoload: true });

var integrantes = [];

app.post('/api/cadastrar', (req, res)=>{
    cadastrar(nome, email, telefone);
})

app.post('/api/buscar', (req, res)=>{
    buscar(nome, email, telefone);
})

app.post('/api/editar-nome', (req, res)=>{
    editarNome(nome);
})

app.post('/api/editar-email', (req, res)=>{
    editarEmail(email);
})

app.post('/api/editar-telefone', (req, res)=>{
    editarTelefone(telefone);
})

// Cadastrar
function cadastrar(){
    integrantes.push(scott, elon, jack);
        users.insert(integrantes, function(err, docs) {
            docs.forEach(function() {
                console.log('Salvo com sucesso');
            });
        });
}

// Buscar Nome
function buscar(){
    console.log('Buscando usuario');
    users.find({name: ' '}, function(err, integrantes){
        if(err){
            console.log(err);
        } 
        console.log(integrantes);
    });
}

// Editar Nome
function editarNome(){
    users.update({nome:''}, {$set: {nome: ''}}, { multi: true }, function (err, nomeReplaced){
        console.log('Nome alterado com sucesso ', nomeReplaced);
    });
}

// Editar Email
function editarEmail(){
    users.update({email:' '}, {$set: {email: ' '}}, { multi: true }, function (err, emailReplaced){
        console.log('Email alterado com sucesso ', emailReplaced);
    });
}

// Editar
function editarNome(){
    users.update({telefone:''}, {$set: {telefone: ''}}, { multi: true }, function (err, telefoneReplaced){
        console.log('Telefone alterado com sucesso ', nameReplaced);
    });
}