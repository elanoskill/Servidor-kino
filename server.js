import express from "express";
import router from "./src/router/privado.js";
import publica from "./src/router/publica.js";
const app = express();
const PORTA = 3000;
app.use(express.json());
app.use("/",router)
app.use("/index",publica);



app.listen(PORTA, () => console.log("O servidor esta no ar"));
