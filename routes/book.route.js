const express = require('express');
const router=express.Router();
const Book = require('../models/book_model');

router.get('/',async(req,res)=>{
    try{
        const page=paresInt(req.query.page)||1;
        const limit = parseInt(req.query.limit)||10;
        const skip=(page-1)*limit;

        const books=await Book.find().skip(skip).limit(limit);
        const totalRecords = await Book.countDocuments();

        res.status(200).json({books,currentpage:page,totalRecords});
}
    catch(error){
        res.status(500).json({message:error.message});
    }
})
router.post('/',async(req,res)=>{
const {title,author,category}=req.body;
if(!title){
    return res.status(400).json({message:'title must be provided'})
}
const newBook = new Book({title,author,category});
try{
    const saveBook = await newBook.save();
    res.status(201).json(saveBook);
}
catch (error){
res.status(400).json({message:error.message})
}
})


router.patch('/:id',async(req,res)=>{
    const {id} = req.params;
    const {title,author,category,available}=req.body;
    if(!id || !title || !category || !author){
        return res.status(404).json({message: 'Title must be provided'})
    }
    try{
        const updateBook = await Book.findByidAndUpdate(id,{title,author,category,available},{new:true});
    res.status(200).json(updateBook);

    }
    catch(error){
        res.status()
    }
})
module.exports = router