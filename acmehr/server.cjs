const express = require ('express');
const { getEmployees } = require('./db/employees.cjs');
const app = express ();

const client = require('./db/client.cjs');
client.connect()

app.use(express.static('dist'))

app.get('/api/v1/employees', async(req, res, next) => {
  try {
    const employees = await getEmployees();
    res.send(employees);
  } catch(err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))