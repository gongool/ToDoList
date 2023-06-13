const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",



        res.render("list", { kindOfDay: day });

    });

app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});