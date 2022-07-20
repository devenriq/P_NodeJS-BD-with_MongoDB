const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router); //de esta manera se añade el router a la aplicación de express

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  res.send("Lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(201).send({
    error: "",
    message: "Creado correctamente",
  });
});

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
