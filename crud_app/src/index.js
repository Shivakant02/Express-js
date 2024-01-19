import app from "./app.js"
import mongoose from 'mongoose'
const port = 4005
const dbString='mongodb+srv://Shivakant:<password>@cluster0.xhuvh.mongodb.net/'
// mongoose.connect(dbString)
  // Production way to connect database
  
  (async () => {
  
    try {
      await mongoose.connect(dbString)
      console.log("DB connected successfully !");

      app.on("error", (err) => {
        console.log("ERROR",err);
        throw err;
      })

      const onListening= () => {
        
        console.log(`Example app listening on port ${port}`);

        app.listen(port,onListening)
      }
    } catch (error) {
      console.log("ERROR", error);
      throw error;
    }

})()


