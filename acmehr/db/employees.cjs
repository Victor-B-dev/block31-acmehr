const client = require('./client.cjs');

const createEmployee = async(name, isadmin) => {
  try {
    await client.query(`
      INSERT INTO employees (name, is_admin)
      VALUES ('${name}', '${isadmin}');
    `);
  } catch(err) {
    console.log(err);
  }
}

const getEmployees = async() => {
  try {
    const { rows } = await client.query(`
      SELECT * FROM employees;
    `);

    return rows;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createEmployee,
  getEmployees,
}