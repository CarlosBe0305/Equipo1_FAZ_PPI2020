const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

app.set('port',3000);


app.use(express.json());



app.use('/api',routes);
app.listen(app.get('port'), ()=>{
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
