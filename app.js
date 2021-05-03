const express = require('express')
const fs = require('fs')
const cors = require('cors')

const port = 3000
const app = express()
app.use(cors())

app.use(express.static('./files'))

app.get('/get-file-names', (req, res) => {
    const filenames = fs.readdirSync('./files')
    res.json(filenames)
})

app.listen(port, () => {
    console.log(`File server is now listening at http://localhost:${port}`)
})