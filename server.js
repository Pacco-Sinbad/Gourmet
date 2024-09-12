const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 10000
const cors = require('cors');
const e = require('express');
app.use (cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

const dotenv = require('dotenv').config()
const uri = process.env.MONGOLAB_URI

// MongoClient.connect(uri)
//     .then(client => {
//         console.log('connected')
//         const ########## = client.db('UserList')

        app.get('/', (req,res)=> {
            res.sendFile(__dirname + '/index.html')
        })
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })




    // })
    // .catch(error => console.error(error))