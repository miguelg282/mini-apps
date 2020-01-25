const Sequelize = require('sequelize');
const sequelize = require('../db/index');

const Guests = sequelize.define('guests', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  });

const Guest_Address = sequelize.define('guest_address', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      address1: Sequelize.STRING,
      address2: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      zipcode: Sequelize.INTEGER,
      guest_id: Sequelize.INTEGER
})

const Guest_CardInfo = sequelize.define('guest_cardinfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      creditCard: Sequelize.INTEGER,
      expiration: Sequelize.INTEGER,
      cvv: Sequelize.INTEGER,
      billingZip: Sequelize.INTEGER,
      guest_id: Sequelize.INTEGER
})

