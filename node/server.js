const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const perksRoute = require('./routes/perks');
const treesRoute = require('./routes/trees');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', perksRoute);
app.use('/', treesRoute);

async function main() {
  await mongoose.connect('mongodb+srv://skif:skiffundota2@graykeep.5kat1wb.mongodb.net/');
}

mongoose.connection.once("open", () => console.log("Mongo Database is connected now!"));
main().catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

