const express = require('express');
const port = 3000;
const app = express();

/**configures the Express.js application to
 *  parse URL-encoded data in the incoming requests
 * and make it available in the req.body object. */
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    let today = new Date();
    let currentDay = today.getDay();


    if (currentDay === 6 || currentDay === 0) {
        res.send(`<h2>Its a Weekend! ,</h2>`);
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);
});