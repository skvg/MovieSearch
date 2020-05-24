const request = require('request')

const imdbApiToken = 'bd2dde61'
const apiUrl = 'https://www.omdbapi.com/?apikey=' + imdbApiToken + '&i='

const movieInfo = (title, callback)=>{
    const url = apiUrl + title

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('there is something wrong !!', undefined)
        } else if(response.body.error){
            callback(response.body.error, undefined)
        } else{
            callback(undefined ,response.body)
        }
    })
}

module.exports = movieInfo