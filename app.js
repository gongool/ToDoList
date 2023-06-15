const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
let items = [];

app.get('/', (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", { kindOfDay: day, newListItems: items });

});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    if (item.trim() !== "") {
        items.push(item);
    }
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});