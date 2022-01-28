const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
//declare database
const DB = "product_db"

//bring in the middleware
app.use(cors(), express.json(), express.urlencoded({extended:true}));


//database connection
require("./config/mongoose.config")(DB);
//create routes
require("./routes/products.routes")(app);
//connect server
app.listen(PORT, ()=>{console.log(`Server is up on port: ${PORT}`)})