const fs = require('fs')
const path = require('path')
// variables declaration area

const movieName = 'dhoom'
const port = process.env.PORT || '3000' 

const partialsPath = path.join(__dirname,'../templates/partials')
const viewsPath = path.join(__dirname,'../templates/views')
const publicPath = path.join( __dirname, '../public')

module.exports = {
    movieName: movieName,
    port: port,
    movieName: movieName,
    publicPath: publicPath,
    viewsPath: viewsPath,
    partialsPath: partialsPath
}