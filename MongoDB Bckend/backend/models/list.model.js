const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    orderid: { type: String, required: true },
    customerid: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: false },
  }, {
    timestamps: true,
  });

const List = mongoose.model('List', ListSchema);

module.exports = List;