const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            Console.log("Error , Current Day is Equal To " + currentDay);
            break;
    }

    res.render("list", { kindOfDay: day });

});

app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});