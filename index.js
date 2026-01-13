const http = require('http');

const PORT1 = 3000;
const PORT2 = 3001;

const createServer = (name, port) => {
  return http.createServer((req, res) => {
    if (req.url === '/health' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        status: 'healthy',
        service: name,
        port: port,
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
      }));
    } else if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: name, port: port }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  });
};

const server1 = createServer('api-1', PORT1);
const server2 = createServer('api-2', PORT2);

server1.listen(PORT1, () => {
  console.log(`API-1 running on port ${PORT1}`);
});

server2.listen(PORT2, () => {
  console.log(`API-2 running on port ${PORT2}`);
});
