//GETTING STARTED
// Require express and set the app


const express = require("express")

console.log(express) // for proof of concept that we have pulled in the code from the express module, console.log(express) & run our code by typing server.js in terminal

// Initialize the Express Application
const app = express();
const port = 3000;
// Mount our Middleware

// Mount our Routes



// Make a route '/greeting' that sends a generic greeting to the screen like "hello" 
app.get('/greeting/:name', (req, res) => {
    res.send('Hello World! ' + req.params.name + " " + " it is so great to see you!")
});

app.get('/greeting/:name', (req, res) => {
    console.log('THIS IS REQ.PARAMS => ', req.params)
    console.log('THIS IS REQ.QUERY => ', req.query)
    res.send('/greeting/:' + req.params.name + " " + 'it is so great to see you!' )
})

app.listen(3000)

// TIP CALCULATOR

// Require express and set the app

const { response } = require("express");
const express = require("express")

console.log(express) // for proof of concept that we have pulled in the code from the express module, console.log(express) & run our code by typing server.js in terminal

// Initialize the Express Application
const app = express();
const port = 4000;
// Mount our Middleware

// Mount our Routes

app.get('/', function(req, res) {
    res.send('What was your total?')
}); // GET request "get" info

app.get('/tip', function(req, res) {
    res.json(tip);
});

app.get('/tip/:total', function(req, res) {
    console.log(req,params);
    const tip = tip.find(c => c/total == req.params.total);
    res.json(tip);
});

// Open a connection on host machine to listen for requests
app.listen(4000, function() {
    console.log('Express is listening for requests on port 3000')
});


app.get('/tip/:total/:percentage', (req, res) => {
    console.log('THIS IS REQ.PARAMS => ', req.params)
    console.log('THIS IS REQ.QUERY => ', req.query)})

// Open a connection on host machine to listen for requests

app.listen(port,() => {
    
})

// TAKE ONE PASS IT AROUND

// Require Dependencies
// Set up express modules

require("dotenv").config()
console.log('process.env.PORT => ', process.env.PORT)
const port = process.env.PORT || 8000

// Initialize the Express Application
const app = express();

// Configure Application Settings
const bottles = 99

// Mount our Middleware
for (let i =1;  i < bottles.length; i-- {
    console.log('take one down, pass it down ' + ' <href> bottles[i] </href> ' + ' left' ) else { 
    console.log('<href> take one down</href>')
}

// Mount our Routes
app.get("/", (req, res) => {
    res.send('99 BOTTLES OF BEER ON THE WALL')
})

// we define the name of the url parameter in our path 
app.get("/:number_of_bottles", (req, res) => {
    console.log(req.params.number_of_bottles + 'BOTTLES OF BEER ON THE WALL')
    console.log(req.params)
    res.send(`
    <h1> 99 BOTTLES ON THE WALL </h1>
    <p> ${bottles[req.params.number_of_bottles]} + BOTTLES OF BEER ON THE WALLS</p>
    `)
})

// we access the url paremeter through our req.params object

// Open a connection on host machine to listen for requests

app.listen(port,() => {
    
})


// 8 BALL 

// Require Dependencies
// Set up express modules

// Initialize the Express Application
const app = express();
const port = 5000,

// array of answers
const magic = [
"It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes definitely",
"You may rely on it", 
"As I see it yes", 
"Most likely", 
"Outlook good",
"Yes", 
"Signs point to yes", 
"Reply hazy try again", 
"Ask again later",
"Better not tell you now", 
"Cannot predict now", 
"Concentrate and ask again",
"Don't count on it", 
"My reply is no", 
"My sources say no",
"Outlook not so good", 
"Very doubtful"
]

// Routes
app.get("/magic", (req, res) => {
    res.send('THIS IS THE QUESTIONS PATH, ASK ANY QUESTION!')
})

// we define the name of the url parameter in our path 
app.get("/:indexOfMagic", (req, res) => {
    // we access the url paremeter through our req.params object
    console.log(' This is req.params.indexOfMagic' + req.params.indexOfMagic)
    console.log(req.params)
    res.send(`
        <h1>Magic 8 Ball</h1>
        <p>The answer to your question is  ${magic[req.params.indexOfMagic]}</p>`)
})

app.listen(5000)