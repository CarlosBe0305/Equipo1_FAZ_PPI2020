const express=require('express');
const app=express();

app.use(express.static(__dirname + '/public'));

app.get('/Driving', function(req, res) {
  res.sendFile('public/index-driving.html', {root: __dirname })
});
app.get('/Routing', function(req, res) {
  res.sendFile('public/index-routing.html', {root: __dirname })
});
app.get('/Splash', function(req, res) {
  res.sendFile('public/Splash.html', {root: __dirname })
});

const server=app.listen(5000, () => {
  console.log('Servidor web iniciado');
});