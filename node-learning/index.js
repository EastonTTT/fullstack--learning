import express, { response } from "express";
const app = express(); 
app.use(express.json());
const PORT = 3000;

app.get('/api/test', (request,response) => {
    response.send('hello from server.')
})

app.post('/api/test', (request, response) => {
    console.log(request.body,request.headers)
    response.json({
        name: 'test',
        data: {
            res: 1,
            rep: 2
        }
    })
})

app.listen(PORT, () => {
    console.log(`currently listening on Port:${PORT}..`);
})