const express = require('express');

app = express();

app.get("/about", (req, res, next) => {
    res.status(200).json({
        message: "This works"
    });
})

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server started on 3000");
})