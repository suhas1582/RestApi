const express = require('express');

app = express();

app.use(cors());

app.get("/about", (req, res, next) => {
    res.status(200).json({
        message: "This works",
        method:"GET"
    });
})

app.post("/about", (req, res, next) => {
    res.status(200).json({
        message: "This works",
        method:"POST"
    });
})

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server started on 3000");
})
