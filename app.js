const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";



    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }

    res.render("list", { kindOfDay: day });

});

app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});