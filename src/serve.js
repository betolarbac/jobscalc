//passo para o server node 
// primeiro passo importa o express para uma constante 
const express = require("express")
//passo dois executar o express 
const server = express()

//agora criamos o servidor usando o objeto listen 
server.listen(3000, () => console.log ('rodando'))