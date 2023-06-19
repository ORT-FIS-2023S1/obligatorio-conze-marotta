const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const sistema = require('../domain/sistema');
const Menu = require('../domain/menu');

router.post('/publicarMenu', (req, res) => {
  const menu = req.body;
  if (!sistema.existeMenu(menu.nombre)) {
    const nuevoMenu = new Menu(menu.nombre,
        menu.descripcion, menu.ingredientes,
        menu.aptoParaCeliacos, menu.aptoParaDiabeticos,
        menu.precio, menu.img);
    sistema.agregarMenu(nuevoMenu);
    console.log(nuevoMenu);
    res.send({
      success: true,
      msg: 'Menú publicado exitosamente',
    });
  } else {
    res.send({
      success: false,
      msg: 'Ya existe un menú con ese nombre',
    });
  }
});

router.get('/obtenerMenus', (req, res) => {
  const data = sistema.obtenerListadoMenus();
  res.send(data);
});

module.exports = router;
