require('dotenv').config();
const express = require('express');
const helpers = require("./helpers/dbconnect");

try {
    helpers.connectToDB(process.env.MONGO_URI);
    // console.log("DB connected...")
} catch (error) {
    console.log("Error occured while connecting to db");
    throw new Error("Error occured while connecting to DB");
}

const app = express();
// Middleware to parse JSON
app.use(express.json());

app.use('/api/v1/location', require('./routes/locations.route'));
app.use('/api/v1/sku', require('./routes/sku.route'));


app.use((error, req, res, next) => {
    // console.log(error);
    res.status(500).json({ message: error.message });
  });

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
});