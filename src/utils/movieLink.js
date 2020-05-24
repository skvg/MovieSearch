const request = require('request')

const googleApiToken = 'AIzaSyCnPynXSKKWVv1p7BsHanecGPzep-OBgTE'
const googleSearchEngine = '012666117539404587636:nr5md7eqmox'
const movieUrl = 'https://www.googleapis.com/customsearch/v1?key=' + googleApiToken + '&cx=' + googleSearchEngine + '&q='


const movieLink = (movieName, callback)=>{
    const url = movieUrl + movieName
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('There is something wrong !!!', undefined)
        } else if(response.body.error){
            callback(response.body.error, undefined)
        } else{
            callback(undefined, response.body.items[0].link)
        }
    })
}

module.exports = movieLink