const express = require('express');

const app = express();
app.set('view engine', 'ejs');

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


app.listen(3000, () => {
    console.log("Server is running at port 3000");
});