const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
let items = [];
let workItems = [];

app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    if (item.trim() !== "") {
        if (req.body.list === "Work") {
            workItems.push(item);
            res.redirect("/work");
        } else {
            items.push(item);
            res.redirect("/");
        }
    } else {
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
