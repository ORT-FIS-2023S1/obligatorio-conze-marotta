const express = require('express');
const router = express.Router();
const sistema = require('../domain/sistema');

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

router.post('/eliminarMenuDeCarrito', (req, res)=>{
    sistema.borrarMenuDeCarrito(req.body.nombreMenu, req.body.idUsuario);
    res.send("Ok");
})

module.exports = router;