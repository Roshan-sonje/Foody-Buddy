import express from 'express';
import mongoose from 'mongoose';
const app = express();


const DB = "mongodb+srv://roshan:Roshan@123@cluster0.ajg4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT =3000;
mongoose.connect(DB).then(() => {
    console.log('connection successfull');  
}).catch((err) => console.log(err)
)

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })

