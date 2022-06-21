const express = require('express')
const app = express()
const PORT = 8080


app.get('/', (req, res) => {
    res.send('Working')
})

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})