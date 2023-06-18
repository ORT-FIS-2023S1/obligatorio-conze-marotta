const express = require('express');
const router = express.Router();
const sistema = require('../domain/sistema');

router.get('/probandoPedido', (req, res)=>{
    console.log('PROBANDO MENU');
    res.send('HOLA, FUNCIONO EL ROUTE DE PEDIDO');
});

router.post('/realizarPedido', (req, res)=>{
    const pedido = req.body;
    sistema.agregarPedido(pedido);
    res.send("Pedido realizado: " + pedido);
});

router.get('/listadoPedidos', (req, res)=>{
    const listaPedidos = sistema.obtenerListaPedidos();
    res.send(listaPedidos);
});


module.exports = router;