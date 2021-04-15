const express = require("express");
const routes = express.Router()

const basePath = __dirname + "/views"

//request, response, resquest é o pedido que começa todo fluxo apartir do get
//response é responder uma pagina depois do pedido ser feito 
routes.get('/', (request, response) =>  response.sendFile(basePath + "/index.html"))
routes.get('/job', (request, response) =>  response.sendFile(basePath + "/job.html"))
routes.get('/job/edit', (request, response) =>  response.sendFile(basePath + "/job-edit.html"))
routes.get('/profile', (request, response) =>  response.sendFile(basePath + "/profile.html"))

    

//como colocar o index.html rodando no servidor?
    //existe varias maneiras de acessar os caminhos do projeto no node usamos uma variavel chamada __diname e concatenamos usando o + e o diretorio do arquivos 
    // depois o servidor esta com a pagina quebrado pq ?
    //isso acontece pq a rota dos arquivos não foram criadas 
    
    //não precisamos criar uma rota para cada arquivos podemos configurar o express para criar cada rota automaticamente agora como ??
    //vamos criar um pasta chamada public para colocar os arquivos publicos, e usarmos uma linha de codigo somente usando o serve.use()




//ao exporta essa rota o require do serve vai se ligar a esse exports e colocando no routes do serve.js
module.exports = routes;