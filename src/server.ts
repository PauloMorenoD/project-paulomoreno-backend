import app from "./app";

import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    console.log("database connected")
    app.listen(4002, ()=>{
        console.log("server is running on port 4002")
    })
}).catch(err => console.log(err))