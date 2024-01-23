import http from 'node:http';

const server = http.createServer((request, response)=>{
  const {method, url} = request
  
  if(method === 'GET' && url === '/users') {
    return response.end('listagem de usuarios')
  }

  if(method === 'POST' && url === '/users') {
    return response.end('criação de usuarios')
  }
})

server.listen(3333)