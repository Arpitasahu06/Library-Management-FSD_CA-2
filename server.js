const express = require('express')
const {connectDB} =require('./db/db')

const app=express()
app.use(express.json())
const PORT = 5000
app.use('/api/books',require('./routes/book.route'))

connectDB()
    .then(() => {
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.error('Server startup failed:', error.message);
        process.exitCode = 1;
    });