const express = require('express')
const fs = require('fs')
const cors = require('cors')

const port = 3000
const app = express()
app.use(cors())

// Change this to your static folder
const staticFolder = './files'

// Setting Express static folder
app.use(express.static(staticFolder))

// A simple get request to get a list of the static files names
app.get('/get-static-file-names', (req, res) => {
    const filenames = fs.readdirSync(staticFolder)
    res.json(filenames)
})

// Listening bro/sis
app.listen(port, () => {
    console.log(`File server is now listening at http://localhost:${port}`)
})