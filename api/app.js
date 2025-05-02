const express = require("express");
const app = express();
const routes = require("./routes/route");
const cors = require("cors");
const connection = require("./config/connection");

const PORT = 9003;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use("/assets", express.static(process.cwd() + "/uploads"));
app.use("/public", express.static(process.cwd() + "/public"));

app.use("/api/v1/", routes);

app.use((req, res, next) => {
    next({
        status: 404,
        msg: "Not found"
    });
});

app.use((error, req, res, next) => {
    console.error("Err: ", error);
    const status = error.status || 500;
    const msg = error.msg || "Server Error";

    res.status(status).json({
        result: null,
        msg: msg,
        status: false
    });
});

app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.error("APP: ", err);
        console.log(`Error listening to port ${PORT}`);
    } else {
        console.log(`Server is listening on port ${PORT}`);
        console.log("Press CTRL+C to end server");
    }
});
