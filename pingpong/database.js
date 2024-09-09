const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'pingpong-postgres-svc',
  port: 5432,
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
});
client.connect();

const getCounter = async () => {
  const result = await client.query('SELECT counter FROM pingpongs');
  return result.rows[0].counter;
};

const setCounter = async newValue => {
  await client.query('UPDATE pingpongs SET counter=$1', [newValue]);
};

module.exports = {
  getCounter,
  setCounter,
};
