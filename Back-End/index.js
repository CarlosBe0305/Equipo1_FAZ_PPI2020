const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const baches = require('./routes/baches')
const notificaciones = require('./routes/notificaciones')
const usuarios = require('./routes/usuarios')

app.set('port',3000);


app.use(express.json());


app.use('/api/baches',baches);
app.use('/api/notificaciones',notificaciones);
app.use('/api/usuarios',usuarios);
app.listen(app.get('port'), ()=>{
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
