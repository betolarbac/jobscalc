//passo para o server node 
// primeiro passo importa o express para uma constante 
const express = require("express")
//passo dois executar o express 
const server = express()

//request, response, resquest é o pedido que começa todo fluxo apartir do get
//response é responder uma pagina depois do pedido ser feito 
server.get('/', (request, response) => {

    //como colocar o index.html rodando no servidor?
    //existe varias maneiras de acessar os caminhos do projeto no node usamos uma variavel chamada __diname e concatenamos usando o + e o diretorio do arquivos 
    // depois o servidor esta com a pagina quebrado pq ?
    //isso acontece pq a rota dos arquivos não foram criadas 
    return  response.sendFile(__dirname + "/views/index.html")  
    //não precisamos criar uma rota para cada arquivos podemos configurar o express para criar cada rota automaticamente agora como ??
    //vamos criar um pasta chamada public para colocar os arquivos publicos 
})

//agora criamos o servidor usando o objeto listen 
server.listen(3000, () => console.log ('rodando'))