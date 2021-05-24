// General imports
const path = require('path')
const fs = require('fs')

// General variables
const PORT = 3000
const staticFolder = path.join(__dirname, 'static')

// Express app
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
// Setting Express static folder
app.use(express.static(staticFolder))

// Express Server routes
app.get('/get-static-files', (req, res) => {
  const filenames = fs.readdirSync(staticFolder)
  const filteredFiles = filenames.filter((filename) => !filename.includes('html') && !filename.includes('js') && !filename.includes('css'))
  res.json(filteredFiles)
})

// Listening
app.listen(PORT, () => {
  console.log(`Simple server is listening at http://localhost:${PORT}`)
})
