const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });
    var personSchema = new mongoose.Schema({
      name: String,
      age: Number,
      favoriteFoods: [String]
    });
    var Person = mongoose.model('Person', personSchema);


    var createAndSavePerson = function(done) {
      var MadraTossilan = new Person({name: "Madra Tossilan", age: 21, favoriteFoods: ["pizza", "hamburger", "peaches"]});
    
      MadraTossilan.save(function(err, data) {
        if (err) return console.error(err);
        done(null, data)
      });
    };
var arrayPeople = [
      {name: "Madra", age: 21, favoriteFoods: ["Pizza"]},
      {name: "Josh", age: 76, favoriteFoods: ["Hamburger"]},
      {name: "Johnathan", age: 78, favoriteFoods: ["Peaches"]}
    ];

const createManyPeople = (arrayPeople, done) => {
  Person.create(arrayPeople, function (err, people) {
    if (err) return console.log(err);
  done(null, people);
});
};

var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

var findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

var findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const food = 'pizza';

  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    person.favoriteFoods.push(food);

    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
