// Imports:
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// DB Connection
const conn = require('./connect')

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


// Routes
const userRoute = require('./routes/user.route')
const clientRoute = require('./routes/client.route')
const sizeRoute = require('./routes/size.route')
const authRoute = require('./routes/auth.route')
const buildingRoute = require('./routes/building.route')
app.use('/user', userRoute)
app.use('/client', clientRoute)
app.use('/size', sizeRoute)
app.use('/auth', authRoute)
app.use('/building', buildingRoute)


// Port Listener
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})