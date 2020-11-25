const express = require('express');
const cors = require('cors');
const app = express();

const baches = require('./routes/baches')
const notificaciones = require('./routes/notificaciones')
const usuarios = require('./routes/usuarios')

app.set('port',3000);

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/baches',baches);
app.use('/api/notificaciones',notificaciones);
app.use('/api',usuarios);
app.listen(app.get('port'), ()=>{
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
