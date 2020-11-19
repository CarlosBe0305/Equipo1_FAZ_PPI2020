const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Usuarios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/:ID', (req, res) => {
    const { ID } = req.params;
    mysqlConnection.query('SELECT * FROM Usuarios WHERE ID = ?', [ID], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

router.put('/:ID', (req, res) => {
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

router.delete('/:ID', (req, res) => {
  const { ID } = req.params;
  mysqlConnection.query('DELETE FROM Usuarios WHERE ID = ?', [ID], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Usuario eliminado' });
    } else {
      console.log(err);
    }
  });
});

router.post('/nuevo', (req, res) => {
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

module.exports = router;