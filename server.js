const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get( `/`, (req,res ) => {
    res.send("You're a wizard, Harry!")
} )

// below is for favorite food code
app.get(`/favorite-food`, (req, res) => {
    res.send("My favorite food is sushi!")
})

// now one for favorite movie
app.get(`/favorite-movie`, (req, res) => {
    res.send( {
        favoriteMovie : "The Matrix",
    })
})

// now one for contact
app.get(`/contact`, (req,res) => {
    res.send ( {
        name : "CJ",
        email: "what@gmail.com",
        phone: "123-456-7890"
    })
})

// now one for about me
app.get(`/about`, (req,res) => {
    res.send({
        name : "CJ",
        age: 26,
        favoriteFood: "sushi",
        favoriteMovie: "The Matrix"
    })
})

// now for a movie object
app.get(`/movie`, (req,res) => {
    res.send([
        {
            title: "The Matrix",
            releaseDate: 1999,
            durationInMinutes: 136,
        },
        {
            title: "The Matrix Reloaded",
            releaseDate: 2003,
            durationInMinutes: 138,
        },
        {
            title: "The Matrix Revolutions",
            releaseDate: 2003,
            durationInMinutes: 129,
        }
    ])
})

//slug is a parameter that is passed in the URL and is used to retrieve data from the server based on that parameter
//using our parameter for end points

app.get(`/message/:id`, (req,res) => {
    console.log(`id of ${req.params.id}`)
    res.send({msg:`msg with id of ${req.params.id} found!`})
})

app.get(`/profiles/:name`, (req, res) => {
    res.send(`you are on ${req.params.name} 's profile`)
})

//below will be two paramaters 

app.get(`/user/:name/:job`, (req,res) => {
    res.send(`you are on ${req.params.name} 's profile and they are a ${req.params.job}`)
})



//below is for query parameters
app.get('/find', (request, response) => {
    console.log(
      `Finding someone with a name of ${request.query.myName} and an age of ${request.query.myAge}`
    )
    response.send({
      msg: `${request.query.myName} is ${request.query.myAge} years old.`
    })
  })