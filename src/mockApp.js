const request = require('supertest')
const app = require("./bin/www");

module.exports = {
  server: request(app),
  close: () => app.close()
}