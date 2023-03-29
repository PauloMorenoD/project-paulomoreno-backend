import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(()=>{

    console.log("database connected")
    app.listen(3333, ()=>{
        console.log("server is running on port 3333")
    })
}).catch(err => console.log(err))