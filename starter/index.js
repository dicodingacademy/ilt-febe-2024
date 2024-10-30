// Source code for demo web server with Native

// load http module
const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json'); // set the content-type manually
  response.statusCode = 200; // set the status code manually

  const { method, url } = request;

  // Routing response based on url & HTTP verb/method manually using if-else
  if (url === '/' && method === 'GET') {
    response.end(JSON.stringify({ message: 'You are doing GET' }));
  } else if (url === '/' && method === 'POST') {
    response.end(JSON.stringify({ message: 'You are doing POST' }));
  } else {
    response.end(JSON.stringify({ message: 'Unknown action' }));
  }
};

// create a HTTP server
const server = http.createServer(requestListener);

// run the HTTP server
server.listen(3000, 'localhost', () => {
  console.log('Server running on http://localhost:3000');
});

