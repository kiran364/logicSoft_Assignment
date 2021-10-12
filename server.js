const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const bookRoute = require('./routes/book.route');

// App Config...
const app = express();                 
dotenv.config();                       
const Port = process.env.Port;

// Middleware
app.use(express.json());
app.use('/book-search', bookRoute);

// DB Config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err));

//Default Route
app.get("/", (req, res) => {
    res.send("Hello From Book_search API Server");
});


//Port for listening
app.listen(Port, () => {
    console.log(`Server Running On Port -- ${Port}`);
})