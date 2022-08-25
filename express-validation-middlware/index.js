const express=require("express")
const app=express();
const movieRoute=require("./routes/movie.route")
app.use(express.json());
app.use("/movie",movieRoute)



app.listen(8080,()=>{
    console.log("server started");
});
