require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
mongoose.connect(`mongodb://localhost/glossary`)
;

let schema = mongoose.Schema({
  word: {type: String, unique: true},
  def: String,
});

let Entries = mongoose.model('Entries', schema);

module.exports = {
  getAll: () => {
    return Entries.find({});
  },

  addEntry: (entry) => {
    return Entries.create({word: entry.word, def: entry.def});
  },

  getMatching: (term) => {
    let pattern = `/${term}$/`
    let filter = {word: {$regex: pattern}}
    return Entries.find(filter);
  },

  editEntry: (entry) => {
    let filter = {word: entry.word}
    let replacement = {word: entry.word, def: entry.def};
    return Entries.findOneAndReplace(filter, replacement);
  },

  deleteEntry: (wordArg) => {
    return Entries.deleteOne({word: wordArg});
  },
}