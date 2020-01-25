//can create models in this file
const Sequelize = require('sequelize');
const models = require('../server/models');

const orm = new Sequelize('checkout', 'root', 'LOschargers@123', {
  host: 'localhost',
  dialect: 'mysql'
});


orm
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

