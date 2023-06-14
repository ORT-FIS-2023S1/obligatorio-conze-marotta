const Menu = require('./menu');
const Pedido = require('./pedido');
const Usuario = require('./usuario');
const Carrito = require('./carrito');

class Sistema {

    constructor(){
        this.listaPedidos = [];
        this.listaMenus = [];
        this.listaUsuarios = [];
        this.carritos = [];

        this.siguienteIDMenu = 0;
        this.siguienteIDPedido = 0;
    }

    agregarPedido(pedido){
        this.listaPedidos.push(pedido);
    }

    agregarMenu(menu){
        this.listaMenus.push(menu);
    }

    obtenerListadoMenus(){
        return this.listaMenus;
    }

    obtenerListaPedidos(){
        return this.listaPedidos;
    }
    
    cargarDatosIniciales(){
        const usuarioPadre = new Usuario(1, 'Juan', 'Lopez', 'juanlopez@correo.com', 1, ['Benito', 'Teo']);
        const usuarioAdmin = new Usuario(2, 'Rosa', 'Gomez', 'larosagomez@correo.com', 2, []);
        this.listaUsuarios.push(usuarioAdmin);
        this.listaUsuarios.push(usuarioPadre);
        this.listaUsuarios.forEach(user=>{
            const carrito = new Carrito(user);
            this.carritos.push(carrito);
        });
    }

    obtenerUsuarioPorID(id){
        return this.listaUsuarios.find(usr=>usr.obtenerID() === id);
    }

    obtenerMenuPorID(id){
        return this.listaMenus.find(menu=>menu.obtenerID() === id);
    }

    cargarMenuAlCarrito(idUsuario, idMenu){
        const menuParaAgregar = this.listaMenus.find(menu=>menu.obtenerID() === idMenu);
        this.carritos.find(c=> c.obtenerUsuarioCarrito().obtenerID() === idUsuario).push(menuParaAgregar);
    }

    obtenerUsuarios(){
        return this.listaUsuarios;
    }
    
}

//Singleton
const instanciaSistema = new Sistema();
instanciaSistema.cargarDatosIniciales();

module.exports = instanciaSistema;