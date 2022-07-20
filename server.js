const express = require("express");
const router = express.Router();

const app = express();

app.use(router); //de esta manera se añade el router a la aplicación de express

router.get("/message", (req, res) => {
  res.send("Lista de mensajes");
});

router.delete("/message", (req, res) => {
  res.send("Mensaje añadido");
});

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
