const express = require("express")
const qrcode = require("qrcode")
const bodyParser = require("body-parser")

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-US", options)
    res.render("index", { Date: day })
})

app.post("/", function (req, res) {

    var data = {
        identity: req.body.Name,
        roll: req.body.Gender,
        id: req.body.Instagram
    }
    var stringdata = JSON.stringify(data)
    
      
    qrcode.toFile('C:/Users/SRUTHIK/nodeQR.png', stringdata, {
        color: {
          dark: '#00F',  // Blue dots
          light: '#0000' // Transparent background
        }
      }, function (err) {
        if (err) throw err
        console.log('done')
        res.send("Downloaded")
      })
// res.send("hello")
})
app.listen(3000, function () {
    console.log("Server running at port 3000")
})