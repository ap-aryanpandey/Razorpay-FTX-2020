const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const username = "rzp_test_MDXBhtkQdAyTlV";
const password = "TLDa6dDJO5ezB0mwyj0Y5iBJ";

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const ListRouter = require('./routes/List');
const Payments = require("./routes/payment")
app.use('/list', ListRouter);
app.use("/payment", Payments);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});