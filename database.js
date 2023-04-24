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



const Person = mongoose.model("Person", personSchema);


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
