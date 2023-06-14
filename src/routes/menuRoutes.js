const express = require('express');
const router = express.Router();
const sistema = require('../domain/sistema');

router.post('/publicarMenu', (req, res)=>{
    const menu = req.body;
    sistema.agregarMenu(menu);
    console.log(menu);
});

router.get('/obtenerMenus', (req, res)=>{
    const data = sistema.obtenerListadoMenus();
    res.send(data);
});

module.exports = router;