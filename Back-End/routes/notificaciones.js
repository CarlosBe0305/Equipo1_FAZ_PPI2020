const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.post('/nueva', (req, res) => {
    const { ID, ID_Usuario, ID_Bache, Latitude, Longitude, Mensaje } = req.body;
    let notificacion = [ID, ID_Usuario, ID_Bache, Latitude, Longitude, Mensaje];
    let nuevanotificacion = `INSERT INTO Notificaciones(ID, ID_Usuario, ID_Bache, Latitude, Longitude, Mensaje) VALUES(?,?,?,?,?,?)`;
    mysqlConnection.query(nuevanotificacion, notificacion, (err, results, fields) => {
      if (err) {
        return console.error(err.mesage);
      }
      res.json({ message: `Notificación registrada`, })
    });
  });

module.exports = router;