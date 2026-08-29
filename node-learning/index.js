import express, { response } from "express";
import cors from "cors"
const app = express(); 
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

let valList = [
    {
        id: 0,
        content: 'test content_1'
    },
    {
        id: 1,
        content: 'test content_2'
    }
];

app.get('/api/test', (request,response) => {
    response.json(valList)
})

app.post('/api/test', (request, response) => {
    console.log(request.body)
    valList = request.body
    response.json(request.body)
})

app.listen(PORT, () => {
    console.log(`currently listening on Port:${PORT}..`);
})