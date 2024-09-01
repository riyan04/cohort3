import express from 'express'

const app = express()

app.get("/multiply", (req, res)=>{
    res.send(`multiply ${req.query.a} & ${req.query.b} = ${parseInt(req.query.b) * parseInt(req.query.a)}`)
})
app.get("/divide", (req, res)=>{
    res.send(`multiply ${req.query.a} & ${req.query.b} = ${parseInt(req.query.b) / parseInt(req.query.a)}`)
})
app.get("/add", (req, res)=>{
    res.send(`multiply ${req.query.a} & ${req.query.b} = ${parseInt(req.query.b) + parseInt(req.query.a)}`)
})
app.get("/substract", (req, res)=>{
    res.send(`multiply ${req.query.a} & ${req.query.b} = ${parseInt(req.query.b) - parseInt(req.query.a)}`)
})

app.listen(3000, ()=>{
    console.log(`app running on port ${3000}`)
})