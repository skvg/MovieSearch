const request = require('request')

const imdbApiToken = 'bd2dde61'
const apiUrl = 'https://www.omdbapi.com/?apikey=' + imdbApiToken + '&i='

const movieInfo = (title, callback)=>{
    const url = apiUrl + title

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Check Your Network Connection !!', undefined)
        } else if(response.body.Response === "False"){
            callback('Try Another Search', undefined)
        } else{
            callback(undefined ,response.body)
        }
    })
}

module.exports = movieInfo