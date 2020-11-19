const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');


router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM Baches', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
  
  
  router.post('/nuevo', (req, res) => {
    const { ID, ID_Usuario, Latitude, Longitude, Nivel_Gravedad, Velocidad, ValorX_Acel, ValorY_Acel, ValorZ_Acel } = req.body;
    let bache = [ID, ID_Usuario, Latitude, Longitude, Nivel_Gravedad, Velocidad, ValorX_Acel, ValorY_Acel, ValorZ_Acel];
    let nuevobache = `INSERT INTO Baches(ID,ID_Usuario, Latitude,Longitude,Nivel_Gravedad,Velocidad,ValorX_Acel,ValorY_Acel,ValorZ_Acel) VALUES(?,?,?,?,?,?,?,?,?)`;
    mysqlConnection.query(nuevobache, bache, (err, results, fields) => {
      if (err) {
        return console.error(err.mesage);
      }
      res.json({ message: `Bache registrado`, })
    });
  });

module.exports = router;