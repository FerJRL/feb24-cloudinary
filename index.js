const express = require('express');
const v2 = require('./v2.js');
const cors = require('cors');


// CONFIGURE EXPRESS
const app = express();
const port = 5004;

app.use(cors());
// use in app x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

app.use("/v2", v2);
