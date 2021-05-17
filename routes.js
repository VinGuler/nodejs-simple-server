const fs = require('fs')

const initializeAppRoutes = function (app, { staticFolder }) {
  app.get('/get-static-files', (req, res) => {
    const filenames = fs.readdirSync(staticFolder)
    const filteredFiles = filenames.filter((filename) => !filename.includes('html') && !filename.includes('js') && !filename.includes('css'))
    res.json(filteredFiles)
  })
}

exports.initializeAppRoutes = initializeAppRoutes
