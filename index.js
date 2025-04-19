let express=require("express");
var mongoose=require("mongoose")
require("dotenv").config();


const { enquiryRoutes } = require("./App/routes/web/enquiryRoutes.js");

//connect to mongodb using mongoose
let app=express();
app.use(express.json());


app.use("/web/api/enquiry",enquiryRoutes);

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB connected");

    app.listen(process.env.PORT,()=>{
        console.log("server is running on port" + process. env. PORT);
    })
});