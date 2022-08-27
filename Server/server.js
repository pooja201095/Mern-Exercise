const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB connection successful');
})

const exercisesRouter = require('./Routes/exercises');
const usersRouter = require('./Routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);


app.listen(port,()=> {
    console.log(`Server running on port: ${port}`);
})
