import express from "express";
const app = express();
const PORTA = 3000;
app.use(express.json());



app.listen(PORTA, () => console.log("O servidor esta no ar"));
