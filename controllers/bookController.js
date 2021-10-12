const Book = require('../models/bookModel');
const dotenv = require("dotenv");
dotenv.config();  

exports.addBooks = async (req, res) => {
    try{
        const {ISBN, bookName, Author, Publisher} = req.body;
        const newBook = new Book({
            ISBN,
            bookName, 
            Author, 
            Publisher 
        })

        const saveBook = await newBook.save();
        res.status(201).json(saveBook)

    }catch (err) {
        res.status(404).send(err)
    }
}

exports.searchBook = async (req, res) => {
    try{
        const {ISBN, key} = req.query;
        if(key == process.env.SecretKey){
            const searchData = await Book.findOne({ISBN: ISBN});
            if(searchData != null){
                res.status(200).json(searchData);
            }else{
                res.status(404).json('ISBN Number is invalid');
            }
           
        }else{
            res.status(401).json('key is invalid');
        }

    }catch(err){
        re.status(404).send(err) 
    }
}