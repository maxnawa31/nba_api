const { Client } = require('pg');
const { DB, DB_HOST } = process.env;
const types = require('pg').types
types.setTypeParser(1700, 'text', parseFloat)
client = new Client({
  connectionString: `postgresql://${DB_HOST}/${DB}`
});
client.connect();

module.exports = client;
