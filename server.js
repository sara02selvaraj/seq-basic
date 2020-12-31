const express = require('express')
const app = express();
const db = require('./models')

app.get('/select', (req,res) => {
    db.User.findAll().then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/findOne', (req,res) => {
    db.User.findAll({where: { firstName: "John" } }).then((users) => {
        res.send(users)
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/create', (req,res) => {
    db.User.create({
        firstName: "Jude",
        age: 32
    }).catch((err) => {
        if (err) {
            console.log(err)
        }
    })
    res.send('created')
})

app.get('/delete', (req,res) => {
    db.User.destroy({ where: { id: 4 } })
    res.send('deleted')
})

db.sequelize.sync().then((req)=>{
    app.listen(4000, ()=>{
        console.log("server running")
    })
})
