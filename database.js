let mongoose = require('mongoose');

const server = '192.168.68.108'; // REPLACE WITH YOUR DB SERVER
const database = 'MongoMongoose'; // REPLACE WITH YOUR DB NAME


let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
  });



let Person = mongoose.model('Person', personSchema);
module.exports = Person;


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
