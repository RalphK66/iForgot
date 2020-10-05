const express = require("express")
const app = express()
const $ = require('jquery')
const ejsLayouts = require("express-ejs-layouts")
const reminderController = require("./controllers/reminder_controller");
const favicon = require('serve-favicon')
const flatpickr = require('flatpickr')
const fetch = require('node-fetch')
const moment = require('moment');
moment().format();

app.use(express.static(__dirname + "/public"))

app.use(ejsLayouts)
app.set("view engine", "ejs")

app.use(favicon(__dirname + '/public/favicon/favicon.ico'));

app.use(express.urlencoded({ extended: false }))



// Routes start here


app.get("/reminder", reminderController.list)

app.get("/home", reminderController.home)

app.get("/login", reminderController.login)


app.get("/reminder/new", reminderController.new)

app.get("/reminder/:id", reminderController.listOne)

app.get("/reminder/:id/edit", reminderController.edit)

app.post("/reminder/", reminderController.create)

app.post("/reminder/update/:id", reminderController.update) // suggestion for class: look into put and post

app.post("/reminder/delete/:id", reminderController.delete)

app.listen(3001, function(){
  console.log("Server running. Visit: localhost:3001/reminder in your browser 🚀");
})
