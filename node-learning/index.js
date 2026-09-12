import express, { response } from "express";
import mongoose from "mongoose"
import 'dotenv/config'
import Note from './model/note.js'

const app = express(); 
const PORT = process.env.PORT;
const password = process.argv[2]
const url = ``

app.use(express.json());
app.use(express.static('dist'))

app.get('/api/test', (request,response) => {
    Note.find({}).then(result => {
    //   console.log(result)
      response.json(result)
    })
})

app.post('/api/test', (request, response) => {
    const body = request.body
    console.log('request body: ',body)
    if(!body){
        response.status(400).json({error: 'missing content!'})
    }else{
        const note = new Note({
            ...body
        })
        note.save().then(Note.find({}).then(result => {
        //   console.log(result)
        response.json(result)
        }))
    }
})

app.listen(PORT, () => {
    console.log(`currently listening on Port:${PORT}..`);
})