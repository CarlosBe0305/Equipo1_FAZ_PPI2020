const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

router.get('/usuarios', (req, res) => {
  mysqlConnection.query('SELECT * FROM Usuarios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.put('/usuarios/:ID', (req, res) => {
  const { UserName, Correo, Telefono } = req.body;
  const { ID } = req.params;
  mysqlConnection.query(`UPDATE Usuarios SET UserName = ?,Correo = ?,Telefono = ? WHERE ID = ?`, [UserName, Correo, Telefono, ID],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Usuario actualizado' });
      } else {
        console.log(err);
      }
    });
});

router.delete('/usuarios/:ID', (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query('DELETE FROM Usuarios WHERE ID = ?', [ID], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Usuario eliminado' });
    } else {
      console.log(err);
    }
  });
});

router.post('/nuevo-usuario', (req, res) => {
  const { ID, UserName, Correo, Telefono } = req.body;
  let usuario = [ID, UserName, Correo, Telefono];
  let nuevousuario = `INSERT INTO Usuarios(ID,UserName,Correo,Telefono) VALUES(?,?,?,?)`;
  mysqlConnection.query(nuevousuario, usuario, (err, results, fields) => {
    if (err) {
      return console.error(err.mesage);
    }
    res.json({ message: `Usuario registrado`, })
  });
});

router.get('/baches', (req, res) => {
  mysqlConnection.query('SELECT * FROM Baches', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


router.post('/nuevo-bache', (req, res) => {
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

router.post('/nueva-notificacion', (req, res) => {
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