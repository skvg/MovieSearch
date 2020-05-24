const request = require('request')

const googleApiTokenOne = 'AIzaSyCnPynXSKKWVv1p7BsHanecGPzep-OBgTE'
const googleApiTokenTwo = 'AIzaSyA2A-r9iHvuIW7LNGTzsrgXjbECyoJDGzY'
const googleSearchEngine = '012666117539404587636:nr5md7eqmox'
const movieUrl = 'https://www.googleapis.com/customsearch/v1?key=' + googleApiTokenTwo + '&cx=' + googleSearchEngine + '&q='


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