const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#a')
const messageTwo = document.querySelector('#s')
const messageThree = document.querySelector('#d')
const messageFour = document.querySelector('#f')
const messageFive = document.querySelector('#g')
const messageSix = document.querySelector('#h')
const messageSeven = document.querySelector('#j')

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    messageOne.textContent = 'Movie Name: Loading.....'
    messageTwo.textContent = 'Realesed On: Loading.....'
    messageThree.textContent ='IMDB Rating: Loading.....'
    messageFour.textContent ='Genre: Loading.....'
    messageFive.textContent ='Director: Loading.....'
    messageSix.textContent ='Movie Plot: Loading.....'
    const movieName = search.value
    fetch('http://127.0.0.1:3000/movie?search=' + movieName).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageSeven.src = 'images/ooops.png'
                messageOne.textContent = data.error
                messageTwo.textContent = 'Realesed On: #'
                messageThree.textContent ='IMDB Rating: #'
                messageFour.textContent ='Genre: #'
                messageFive.textContent ='Director: #'
                messageSix.textContent ='Movie Plot: #'
            } else if(data.data == undefined){
                messageSeven.src = 'images/ooops.png'
                messageOne.textContent = 'Try Another Search'
                messageTwo.textContent = 'Realesed On: #'
                messageThree.textContent ='IMDB Rating: #'
                messageFour.textContent ='Genre: #'
                messageFive.textContent ='Director: #'
                messageSix.textContent ='Movie Plot: #'
            }
            else{
                messageSeven.src = data.data.Poster
                messageOne.textContent = 'Movie Name: ' + data.data.Title
                messageTwo.textContent = 'Realesed On: '+data.data.Released
                messageThree.textContent ='IMDB Rating: '+ data.data.imdbRating
                messageFour.textContent ='Genre: '+ data.data.Genre
                messageFive.textContent ='Director: '+ data.data.Director
                messageSix.textContent = 'Movie Plot: '+data.data.Plot
            }
        })
    })
})