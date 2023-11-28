import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI; 

mongoose.connect("mongodb://127.0.0.1:27017/test2")
    .then(db => console.log("Db is connected"))
    .catch(error => console.log(error));