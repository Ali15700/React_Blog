const dotenv = require('dotenv');
const mogoose =  require('mongoose');
const express =  require('express');
const app = express();
dotenv.config();     
const authRoute = require ("./routes/auth");
const userRoute = require ("./routes/users");
const postRoute = require ("./routes/posts");
const categoryRoute = require ("./routes/categories");
const multer = require("multer")

app.use(express.json());

const DB = process.env.DATABASE;

mogoose.connect(DB , {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() =>{
    console.log(`DB successfull :)`);
}).catch((err) => console.log(`Failed :'(`));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
            cb(null,req.body.name);
    },

});

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/categories",categoryRoute);
app.listen(5000 , () => {
    console.log(`server is running on PORT`);
})