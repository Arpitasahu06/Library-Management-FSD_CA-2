const express = require('express')
const {connectDB} =require('./db/db')

const app=express()
app.use(express.json())
const PORT = 5000
app.use('/api/books',require('./routes/book.route'))

connectDB()

app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${PORT}`)
})