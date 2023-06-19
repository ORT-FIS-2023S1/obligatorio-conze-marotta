const express = require('express');
const router = express.Router();
const sistema = require('../domain/sistema');

router.get('/probandoPedido', (req, res)=>{
    console.log('PROBANDO MENU');
    res.send('HOLA, FUNCIONO EL ROUTE DE PEDIDO');
});

router.post('/realizarPedido/:id', (req, res)=>{
    const pedido = req.body;
    sistema.realizarPedido(req.params.id);
    res.send("Pedido realizado");
});

router.get('/listadoPedidos', (req, res)=>{
    const listaPedidos = sistema.obtenerListaPedidos();
    res.send(listaPedidos);
});

router.get('/historialPedidos/:id', (req, res) => {
    const listaPedidos = sistema.obtenerListaPedidosPorUsuario(req.params.id);
    res.send(listaPedidos);
});

router.get('/obtenerCarrito/:id', (req, res) => {
    const carrito = sistema.obtenerCarritoPorIdUsuario(req.params.id);
    res.send(carrito);
});

module.exports = router;