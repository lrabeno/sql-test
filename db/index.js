const pg = require('pg');
const client = new pg.Client('postgres://localhost/testDB');

client.connect();

module.exports = client;
