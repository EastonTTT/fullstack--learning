import express, { response } from "express";
import mongoose from "mongoose"
import { configDotenv } from "dotenv";
import note from 'model/note.js'

const app = express(); 
const PORT = process.env.PORT;
const password = process.argv[2]
const url = ``

app.use(express.json());
app.use(express.static('dist'))

app.get('/api/test', (request,response) => {
    Note.find({}).then(result => {
      console.log(result)
      response.json(result)
    })
})

app.post('/api/test', (request, response) => {
    console.log(request.body)
    valList = request.body
    response.json(request.body)
})

app.listen(PORT, () => {
    console.log(`currently listening on Port:${PORT}..`);
})