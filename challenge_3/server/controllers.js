const models = require('./models');

Guests.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return Guests.create({name: 'Jean Valjean'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return Guests.findAll({ where: {name: 'Jean Valjean'} });
  })
  .then(function(guests) {
    guests.forEach(function(user) {
      console.log(guest.name + ' exists');
    });
    db.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });