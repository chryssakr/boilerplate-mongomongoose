require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});


Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var chryPerson = new Person({
    name: "Chryssa",
    age: 26,
    favoriteFoods: ["fries", "salads"]
  });

  chryPerson
    .save(function(err, data) {
      if (err) return console.error(err);
      done(null, data);
    });
};

var arrayOfPeople = [
  {
    name: "Rachel",
    age: 30,
    favoriteFoods: ["apples", "cookies", "cheesecake"]
  },
  {
    name: "Joey",
    age: 29,
    favoriteFoods: ["pizza", "spaghetti", "cheesecake"]
  },
  {
    name: "Monica",
    age: 30,
    favoriteFoods: ["flan", "tacos", "smoothies"]
  }
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  const query = { name: personName };
  Person.find(query, (err, peopleFound) => {
    if (err) return console.error(err);
    done(null, peopleFound);
  })
};

const findOneByFood = (food, done) => {
  const query = { favoriteFoods: food };
  Person.findOne(query, (err, personFound) => {
    if (err) return console.error(err);
    done(null, personFound);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, personFound) => {
    if (err) return console.error(err);
    done(null, personFound);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, personFound) => {
    if (err) return console.error(err);
    personFound.favoriteFoods.push(foodToAdd);
    personFound.save((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    {
      name: personName
    },
    {
      age: ageToSet
    },
    {
      new: true
    },
    (err, data) => {
      if (err) return console.error(err);
      done(null, data);
    }
  )
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(
    personId,
    (err, data) => {
      if (err) return console.error(err);
      done(null, data);
    }
  )
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove(
    {
      name: nameToRemove
    },
    (err, data) => {
      if (err) return console.error(err);
      done(null, data);
    }
  )
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
