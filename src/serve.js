//passo para o server node 
// primeiro passo importa o express para uma constante 
const express = require("express")
//passo dois executar o express 
const server = express()

const routes = require ("./routes")

//habilitar arquivos statics, como imagem e o css 
//ele não serve para criar rotas automaticas sempre, ele serve para adicionar configurações ao servidor
server.use(express.static("public"))

server.use(routes)


//agora criamos o servidor usando o objeto listen 
server.listen(3000, () => console.log ('rodando'))