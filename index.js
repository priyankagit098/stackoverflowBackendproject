import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/users.js'
import answerRoutes from './routes/Answers.js'
// import connectDB from "./db/connect.js"
import mongoose from 'mongoose';


import questionRoutes from "./routes/Questions.js";
const app = express()



dotenv.config()

app.use(express.json({limit: "30mb",extended: true}))
app.use(express.urlencoded({limit: "30mb",extended: true}))
app.use(cors());

const PORT= process.env.PORT || 5000

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)
const DATABASE_URL = process.env.MONGO_URL

mongoose.connect(DATABASE_URL, 
    // {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => app.listen(PORT, () =>
        console.log(`Stack OverFlow Clone API listening on port ${PORT}!`),
    ))
    .catch((err) => console.log(err.message))

