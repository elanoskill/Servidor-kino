import 'dotenv/config' 
import express from "express";
import router from "./src/router/privado.js";
import publica from "./src/router/publica.js";
const app = express();
const PORTA = process.env.PORT || 3000;
app.use(express.json());
app.use("/",router)
app.use("/index",publica);
app.get("/",(req,res)=>{
  return res.status(200).json({message:"rodando"})
})

//app.listen(PORTA);
export default app;
