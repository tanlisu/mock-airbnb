const express = require('express');
const middleware = require('./src/middleware/middleware');
const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
});

//Middleware function:
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

// Cross-Origin Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Middleware execute:
app.use(logger);

//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

var fs = require("fs");

//Routes:
app.use("/auth", require("./src/api/auth-routes"));
app.use("/users", middleware.checkToken, require("./src/api/user-routes"));
app.use("/listings", require("./src/api/listing-routes"));
app.use("/bookings", require("./src/api/booking-routes"));
// app.use("/auth", authRoutes);
// app.use("/users", middleware.checkToken, userRoutes);