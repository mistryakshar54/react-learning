const express = require('express');

const app = express();


app.listen( 4000 , () => {
    console.log("Server Started @ port 4000");
} )