const mongoose = require('mongoose')
const app = require('./app')

const mongooseOptions = {
    useUnifiedTopology: true,
}

mongoose.connect('mongodb://localhost:27017', mongooseOptions).then(() => {
    app.listen(3001, port => {
        console.log(`Server running ${port}`)
    })
})