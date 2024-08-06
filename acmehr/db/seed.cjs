const client = require ('./client.cjs');
const { createEmployee } = require('./employees.cjs');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS employees;
    `);
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE employees (
        id SERIAL PRIMARY KEY,
        name VARCHAR(40) NOT NULL,
        is_admin BOOLEAN
      );
    `);
  } catch(err) {
    console.log(err);
  }
}

const init = async () => {
  await client.connect();
  console.log ('CONNECTED');

  await dropTables();
  console.log(`TABLES DROPPED!`);
  
  await createTables();
  console.log(`TABLES CREATED!`);

  await createEmployee('Bugs', 'FALSE');
  console.log('USER CREATED!');

  await createEmployee('Elmer', 'FALSE');
  console.log('USER CREATED!');

  await createEmployee('Daffy', 'FALSE');
  console.log('USER CREATED!');

  await client.end();
  console.log('DISONNECTED');
}

init();