import express, { response } from "express";
import 'dotenv/config'
import noteRouter from "./controllers/notes.js";

const app = express(); 
const PORT = process.env.PORT;

const unknownUrlHandler = (request, response) => {
    response.status(404).send({error: 'unknown url...'})
}

app.use(express.static('dist'))
app.use(express.json());

app.use('/api/test', noteRouter)

app.use(unknownUrlHandler);
app.listen(PORT, () => {
    console.log(`currently listening on Port:${PORT}..`);
})