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


app.use(express.static(vars.publicPath))

// setup the handelbars engine paths
app.set('views', vars.viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(vars.partialsPath)


// server.....

app.get('', (req, res) => {
    res.render('index')
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
            for(let x=27;x<37;x++){
                if(data[x] === '/'){
                    break;
                }
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