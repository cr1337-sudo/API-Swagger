const express = require("express");
const app = express();

app.use(express.json());

app.get("/saludo/:nombre", (req, res) => {
  const { nombre } = req.params;
  const { extra } = req.query;
  res.status(200).json({ saludo: `Hola ${nombre} ${extra ? extra : null}` });
});

app.post("/despedir/", (req, res) => {
  const { saludo } = req.body;
  if (saludo) {
    res.status(200).json({ saludo });
  } else {
    res.status(500).json({ error: "Debe pasarse un saludo en el cuerpo de la petición" });
  }
});

app.listen(8000, () => {
  console.log("Servidor activo");
});
