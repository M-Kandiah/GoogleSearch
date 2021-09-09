const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const fullResults = require('./data')

function getRandomArticle () { 
    let randNumber = Math.floor(Math.random()*fullResults.length)
    newStory = fullResults[randNumber]
    return newStory
  }

app.get('/', (req, res) => res.send('Hello World'))

app.get('/results', (req, res) => {
    res.send(fullResults)
    // const headlines = fullResults.map(story => story.headline); 
    // res.send(headlines)
    }
)

app.get('/results/headlines', (req, res) => {
    const headlines = fullResults.map(story => story.headline); 
    res.send(headlines)
    }
)


app.get('/results/random', (req,res) => {
    res.send(getRandomArticle())

})

// app.post('/results', (req,res) => {

// })

let port = 3000

app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})