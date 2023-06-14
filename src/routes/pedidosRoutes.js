const express = require('express');
const router = express.Router();

router.get('/probandoPedido', (req, res)=>{
    console.log('PROBANDO MENU');
    res.send('HOLA, FUNCIONO EL ROUTE DE PEDIDO');
});


module.exports = router;