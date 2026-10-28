const express = require('express')
const connectDB =require('./db/db')
const Book =require('./routes/book.route')
const app=express()
app.use(express.json())
const PORT = 5000
app.use('/api/books',require('./routes/book.route'))

connectDB()
app.use('./db')
app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${PORT}`)
})