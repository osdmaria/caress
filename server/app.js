const express= require("express"),
    app= express(),
    mongoose= require("mongoose"),
    port= 3000,
    doctor = require("./models/doctor"),
    doctorRouter = require("./routes/doctor"),
    doctorAuth = require("./routes/auth")
    articleRouter = require("./routes/article")

app.get("/",(req, res)=>{
    res.send("Hi welcome to our website!");
    
});

app.use(express.json());

app.use("/auth", doctorAuth);
app.use("/users", doctorRouter);
app.use("/articles", articleRouter);

mongoose.set("debug", true); // in devolpment process
    mongoose
    .connect(
        "mongodb+srv://TheM:b8d0tqiz9sYFaN5K@caressproject.qbfpj.mongodb.net/?retryWrites=true&w=majority", 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,

        dbName: "CaressProject",
    })
    .then((con) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });