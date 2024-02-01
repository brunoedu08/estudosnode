import http from 'node:http';

const users = [];

// função para controlar as requisições feitas no servidor
const server = http.createServer((req, res) =>{
    const {method , url} = req;

    if(method == 'GET' && url == '/users'){
        
        return res.setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users));
    }

    if(method == 'POST' && url == '/user'){
        users.push({
            "nome": "Bruno",
            "email" : "emaildobruno@gmail.com"
        });

        return res.writeHead(201).end('Usuário criado');
    }
    
    return res.end("hello world");
});

server.listen(3333);

