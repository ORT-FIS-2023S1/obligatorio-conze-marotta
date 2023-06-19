const express = require('express');
const app = express();
const port = 4000;
const pedidosRoutes = require('./routes/pedidosRoutes');
const menuRoutes = require('./routes/menuRoutes');
// const sistema = require('./public/models/sistema');

app.use(express.static('interface'));

app.use(express.json());

app.engine('html', require('ejs').renderFile);

app.set('views', './interface');

app.use(pedidosRoutes);
app.use(menuRoutes);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  const url = 'http://localhost:' + port;
  console.log('Running on', url);
});
