const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
// const hunters = require("./hunters.json")

// let hunters = {
//     'killua': {
//         'name': 'Killua',
//         'age': 12,
//         'family': 'Zoldyck',
//         'specialAbility': 'GodSpeed'
//     },
//     'gon': {
//         'name': 'Gon',
//         'age': 12,
//         'family': 'Freecess',
//         'abilities': 'Jajanken'
//     },
//     'leorio': {
//         'name': 'Leorio',
//         'age': 19,
//         'family': 'Paradinight',
//         'abilities': 'Remote Punch'
//     },
//     'kurapika': {
//         'name': 'Kurapika',
//         'age': 12,
//         'family': 'unknown',
//         'abilities': 'Holy Chain'
//     },
//     'hisoka': {
//         'name': 'Hisoka',
//         'age': 28,
//         'family': 'Morow',
//         'abilities': 'Bungee Gum'
//     },
//     'unknown': {
//         'name': 'unknown',
//         'age': 'unknown',
//         'family': 'unknown',
//         'abilities': 'unkown'
//     }

// }

const hunters = [
    {"name": "killua", "age": "12","family": "Zoldyck", "specialAbility": "GodSpeed"},
    {"name": "gon", "age": "12","family": "Freecess","abilities": "Jajanken"},
    {"name": "Leorio","age": "19", "family": "Paradinight", "abilities": "Remote Punch"},
    {"name": "Kurapika","age": "12", "family": "unknown", "abilities": "Holy Chain"},
    {"name": "Hisoka","age": "28", "family": "Morse", "abilities": "Bungee Gum"}
    ]


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    console.log('Name Works')
    const hunterName = request.params.name.toLowerCase()
  
    if(hunters[hunterName]){
        response.json(hunters[hunterName])
    }else{
        response.json(hunters['unknown'])
    }

})

//using objects

// app.get('/adult', (request, response)=>{
//     let adultHunter = []
//     for(let hunter in hunters){
//         let age = hunters[hunter].age
//         if(Number(age)>17){
//             adultHunter.push(hunter)
           
//         }
    
//     }
//     response.json(adultHunter)
// })

//using list of objects
app.get('/adult', (request, response)=>{
    let adultHunter = []
    for(let hunter of hunters){
        let age = hunter.age
        console.log(hunter.name)
        console.log(age)
        if(Number(age)>17){
           adultHunter.push(hunter)
           
        }
    
    }
    response.json(adultHunter)
})
app.get('/child', (request, response)=>{
    let adultHunter = []
    for(let hunter of hunters){
        let age = hunter.age
        if(Number(age)<=17){
           adultHunter.push(hunter)
           
        }
    
    }
    response.json(adultHunter)
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})