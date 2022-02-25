require('dotenv').config()
const express = ('require express')
const app = express()

app.use('/places', require('.controllers/places'))

app.get('/', function (req, res) {
    // this gets sent to the client
    // your web browser most likely!
    res.send('Howdy world')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1> 404 Page</h1>')
})


app.listen(process.env.PORT)


