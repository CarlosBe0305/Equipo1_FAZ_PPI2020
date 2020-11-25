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

router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM Usuarios WHERE ID = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

router.put('/usuarios/:id', (req, res) => {
  const { UserName, Correo, Telefono } = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE Usuarios SET UserName = ?,Correo = ?,Telefono = ? WHERE ID = ?`, [UserName, Correo, Telefono, id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Usuario actualizado' });
      } else {
        console.log(err);
      }
    });
});

router.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM Usuarios WHERE ID = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Usuario eliminado' });
    } else {
      console.log(err);
    }
  });
});

router.post('/usuarios', (req, res) => {
  const { ID, UserName, Correo, Telefono } = req.body;
  let usuario = [ID, UserName, Correo, Telefono];
  //let nuevousuario = `INSERT INTO Usuarios(ID,UserName,Correo,Telefono) VALUES(?,?,?,?)`;
  // mysqlConnection.query(nuevousuario, usuario, (err, results, fields) => {
  //   if (err) {
  //     return console.error(err.mesage);
  //   }
  //   res.json({ message: `Usuario registrado`, })
  // });
});

module.exports = router;