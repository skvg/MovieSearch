// require modules area
const express = require('express')
const fs = require('fs')
const hbs = require('hbs')
const got = require('got')
const https = require('https')
const vars = require('./vars')
const movieLink = require('./utils/movieLink')
const movieInfo = require('./utils/movieInfo')


// express top level function defination
const app = express()

// const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA2A-r9iHvuIW7LNGTzsrgXjbECyoJDGzY&cx=012666117539404587636:nr5md7eqmox&q='

app.use(express.static(vars.publicPath))

// setup the handelbars engine paths
app.set('views', vars.viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(vars.partialsPath)


const title = 'tt0422091'
// setTimeout(function(){
//     for(let x=27;x<37;x++){
//         apiUrl = apiUrl+title[x]
//     }
// },0)

// server.....

app.get('', (req, res) => {
    movieLink(vars.movieName, (error, data)=>{
        if(error){
            res.send(error)
        }
        else{
            var title = ''
            for(let x=27;x<36;x++){
                title = title + data[x]
            }
            movieInfo(title, (error, data)=>{
                if(error){
                    res.send(error)
                }
                else{
                    res.render('index', data)
                }
            })
        }
    })
})
app.get('/movie', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'you must provide the movie name'
        })
    }
    movieLink(req.query.search, (error, data)=>{
        if(error){
            res.send({
                error: error,
                movieName: req.query.search
            })
        }
        else{
            var title = ''
            for(let x=27;x<36;x++){
                title = title + data[x]
            }
            movieInfo(title, (error, data)=>{
                if(error){
                    res.send({error})
                }
                else{
                    res.send({data})
                }
            })
        }
    })
    
})
app.get('/help', (req, res) => {
    res.render('help')
})
app.get('/about', (req, res) => {
    res.render('about')
})
// running the server on port
app.listen(vars.port, () => {
    console.log(`server is running on ${vars.host}:${vars.port}`)
})