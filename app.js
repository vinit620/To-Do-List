const express = require('express');
const bodyParser = require("body-parser")

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const tasks = [];

app.get("/", (req, res) => {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    res.render("list", {
        "day": today.toLocaleDateString("en-US", options),
        "tasks": tasks
    });
});


app.post("/", (req, res) => {
    const task = req.body.newTask;
    tasks.push(task);
    res.redirect("/");
});


app.listen(3000, () => {
    console.log("Server is running at port 3000");
});