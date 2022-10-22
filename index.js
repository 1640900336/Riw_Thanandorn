const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname',(req, res) => {
    res.send('Thanandorn Wannaket')
})

app.get('/getprofile',(req, res) => {
    let data = {
        name: 'Thanandorn Wannaket',
        age: 20,
        apocalypse: 'Belive the Impossible is Possible',
        detail: 'ggwp'
    }
    res.send(data)
})

app.get('/getabout',(req, res) => {
    let data = {
        name: 'Thanandorn Wannaket',
        age: 20,
        email: 'Thanandorn.wann@bumail.net',
        address: 'Khlong Luang'
    }
    res.send(data)
})

app.get('/getproject',(req, res) => {
    let data = {
        project_name: 'Thanandorn Wannaket',
        project_description: woc,
        project_link:'-'
    }
    res.send(data)
})

app.get('/getcontact',(req, res) => {
    let data = {
        address: 'Khlong Luang',
        email: 'thanandorn.wann@bumail.net',
        phone_number: '0982848663'
    }
    res.send(data)
})


app.listen(3000, () => {
    console.log('start server at port 3000')
})