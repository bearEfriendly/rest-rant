const express = ('require express')
const app = express()

app.get('/', function (req,res) {
    // this gets sent to the client
    // your web browser most likely!
    res.send('Howdy world')
})

app.listen(3000)