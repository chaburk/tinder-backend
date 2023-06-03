import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
//import card collection
import Cards from './dbCards.js'

//App Config
//creates an instance of express called app
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://chaseburkdoll:Omjc17MHzoDeItr7@cluster0.wc2ch6m.mongodb.net/?retryWrites=true&w=majority`

//Middlewares
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello Chase'))
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body

    //creating database
    Cards.create(dbCard)
    .then(data => {
        res.status(201).send(data)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

// , (err, data) => {
//     // if(err) {
//     //     res.status(500).send(err)
//     // } else {
//     //     res.status(201).send(data)
//     // }
// }

//getting everything from the database
app.get('/tinder/cards', (req, res) => {
    Cards.find()
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))