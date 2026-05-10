import 'dotevn/config';
import express from "express";
import router from "./src/router/privado.js";
import publica from "./src/router/publica.js";
const app = express();
const PORTA = precess.env.PORT || 3000;
app.use(express.json());
app.use("/",router)
app.use("/index",publica);



module.exports =app;
