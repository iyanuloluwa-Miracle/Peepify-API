const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Make the "name" field required
  }
});

module.exports = mongoose.model('Person', personSchema);
