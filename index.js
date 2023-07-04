const express = require('express')
const path = require('path')
const PORT = 8008;

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    // console.log(__dirname);
    // console.log(__filename);
    // res.send('<h1>hello jee</h1>')
    return res.render('home', { title: "contact list" })
})

app.get("/practice", (req, res) => {
    // console.log(__dirname);
    // console.log(__filename);
    // res.send('<h1>hello jee</h1>')
    return res.render('practice', {
        title: "lets play janta"
    })
})


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})