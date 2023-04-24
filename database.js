let mongoose = require('mongoose');

const server = '127.0.0.1'; //192.168.68.108
const database = 'MongoMongoose';

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});


module.exports = mongoose.model('Person', personSchema);
let PersonModel = require('./name');
let Person = new PersonModel({
    name: "Chryssa",
    age: 26,
    favoriteFoods: ["fries", "salads"];
});



class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error');
      });
  }
}

module.exports = new Database();
