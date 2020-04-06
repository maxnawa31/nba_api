const { Client } = require("pg");
const { DB, DB_SECRET, DB_USER, DB_HOST } = process.env;

client = new Client({
	connectionString: `postgresql://${DB_USER}:${DB_SECRET}@${DB_HOST}/${DB}`
});
client.connect();

module.exports = client;
