import { Router } from "express";
import Note from "../model/note.js";

const noteRouter = new Router();

noteRouter.get('/',((request,response) => {
    Note.find({}).then(result => {
    //   console.log(result)
      response.json(result)
    })
}))

noteRouter.post('/',(request, response) => {
    const body = request.body
    // console.log('request body: ',body)
    if(!body){
        response.status(400).json({error: 'missing content!'})
    }else{
        const note = new Note({
            ...body
        })
        note.save()
        .then(Note.find({}).then(result => {
        //   console.log(result)
        response.json(result)
        }))
    }
})

noteRouter.delete('/:id',(request, response) => {
    const {id} = request.params
    Note.findByIdAndDelete(id)
    .then( Note.find({}).then(result => {
        response.json(result)   
    }))
    .catch(error => {
        response.status(400).json({error: 'malformatted id'})
    })
})

noteRouter.put('/:id',(request, response) => {
    const {id} = request.params
    const body = request.body
    Note.findByIdAndUpdate(id, body)
    .then( Note.find({}).then(result => {
        response.json(result)
    }))
    .catch(error => {
        response.status(400).json({error: 'malformatted id'})
    })
})

noteRouter.put('/toggleImportance/:id',(request, response) => {
    const {id} = request.params
    const body = request.body
    console.log(body)
    Note.findByIdAndUpdate(id, {important:body.important})
    .then(() => Note.find({}).then(result => {
        response.json(result)
    }))
    .catch(error => {
        response.status(400).json({error: 'malformatted id'})
    })
})

export default noteRouter