const http = require('http');
const port = 9097;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from OpenShift Pipeline Demo on port 9097!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});