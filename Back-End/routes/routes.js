const express = require('express');
const router =express.Router();

const mysqlConnection = require('../db/db');

router.get('/usuarios', (req,res) => {

  mysqlConnection.query('SELECT * FROM Usuarios ', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });

});
router.post('/nuevo-usuario',(req,res) => {

  const {ID,UserName,Correo,Telefono} = req.body;
  
  let usuario = [ID,UserName,Correo,Telefono];

  let nuevousuario = `INSERT INTO Usuarios(ID,UserName,Correo,Telefono) VALUES(?,?,?,?)`;

  mysqlConnection.query(nuevousuario, usuario, (err, results, fields) => {
    if (err) {
      return console.error(err.mesage);
    } 
    res.json({message: `Usuario registrado`, })
  });
  });

module.exports = router;