import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from '../server/routes/users.js'




const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



app.get("/", (req, res) => {
  res.send("This is Thought Flow API");
  
});

app.use('/user', userRoutes)


const PORT = process.env.PORT || 6000;
const CONNECTION_URL =
  "mongodb+srv://arjunn:admin@thought.ywq5xzp.mongodb.net/?retryWrites=true&w=majority";
  

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
  