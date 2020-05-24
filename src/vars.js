const fs = require('fs')
const path = require('path')
// variables declaration area

const movieName = 'dhoom'
const port = '3000'
const host = '127.0.0.1'
// const titleBuffer = fs.readFileSync('body.txt')
// const title = titleBuffer.toString()

// const imdbApiToken = 'bd2dde61'
// var apiUrl = 'https://www.omdbapi.com/?apikey=' + imdbApiToken + '&i='

const partialsPath = path.join(__dirname,'../templates/partials')
const viewsPath = path.join(__dirname,'../templates/views')
const publicPath = path.join( __dirname, '../public')
// const googleApiToken = 'AIzaSyCnPynXSKKWVv1p7BsHanecGPzep-OBgTE'
// const googleSearchEngine = '012666117539404587636:nr5md7eqmox'
// var movieUrl = 'https://www.googleapis.com/customsearch/v1?key=' + googleApiToken + '&cx=' + googleSearchEngine + '&q=' + movieName

module.exports = {
    movieName: movieName,
    port: port,
    host: host,
    movieName: movieName,
    publicPath: publicPath,
    viewsPath: viewsPath,
    partialsPath: partialsPath
}