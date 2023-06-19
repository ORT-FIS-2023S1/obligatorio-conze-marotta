const Menu = require('./menu');
const Pedido = require('./pedido');
const Usuario = require('./usuario');
const Carrito = require('./carrito');
const MenuPedido = require('./menuPedido');

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
        
        //Usuarios
        const usuarioPadre = new Usuario(1, 'Juan', 'Lopez', 'juanlopez@correo.com', 1, ['Benito', 'Teo']);
        const usuarioAdmin = new Usuario(2, 'Rosa', 'Gomez', 'larosagomez@correo.com', 2, []);
        this.listaUsuarios.push(usuarioAdmin);
        this.listaUsuarios.push(usuarioPadre);
        this.listaUsuarios.forEach(user=>{
            const carrito = new Carrito(user);
            this.carritos.push(carrito);
        });

        //Menus
        const menu1 = new Menu(this.obtenerNuevoIDMenu, 'Ensalada Cesar', 'Deliciosa ensalada cesar, ideal para comer rico y sano', 'Lechuga, tomate, queso parmesano, salsa cesar, croutons', true, true, 120, null);
        const menu2 = new Menu(this.obtenerNuevoIDMenu, 'Tallarines con salsa boloñesa', 'Tallarines caseros, con una exquisita salga boloñesa también casera', 'Huevo, harina, sal, pulpa de tomate, carne picada, cebolla, morron', false, true, 150, null);
        const menu3 = new Menu(this.obtenerNuevoIDMenu, 'Tarta de fiambre', 'Deliciosa tarta de fiambre casera', 'Huevo, harina, sal, aceite, jamon, queso', false, true, 130, null);
        const menu4 = new Menu(this.obtenerNuevoIDMenu, 'Empanada de jamon y queso', 'Riquisima empanada caseras de jamon y queso al horno', 'Huevo, harina, sal, aceite, jamon, queso', false, true, 90, null);

        this.listaMenus.push(menu1);
        this.listaMenus.push(menu2);
        this.listaMenus.push(menu3);
        this.listaMenus.push(menu4);

        //Menu-Cantidad
        const menuPedido1 = new MenuPedido(menu1, 1);
        const menuPedido2 = new MenuPedido(menu2, 2);
        const menuPedido3 = new MenuPedido(menu3, 1);

        //Pedidos
        const pedido1 = new Pedido([menuPedido1, menuPedido2], 200, new Date('2023-04-11T14:24:00'), usuarioPadre);
        const pedido2 = new Pedido([menuPedido3], 350, new Date('2023-05-20T18:12:00'), usuarioPadre);
        this.listaPedidos.push(pedido1);
        this.listaPedidos.push(pedido2);

        //Carrito
        const menuCarrito1 = new MenuPedido(menu1, 2);
        const menuCarrito2 = new MenuPedido(menu4, 3);
        this.carritos.find(carr=>carr.obtenerUsuarioCarrito().obtenerID() == 1).agregarMenu(menuCarrito1);
        this.carritos.find(carr=>carr.obtenerUsuarioCarrito().obtenerID() == 1).agregarMenu(menuCarrito2);
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

    obtenerNuevoIDMenu(){
        const ret = this.siguienteIDMenu;
        this.siguienteIDMenu++;
        return ret;
    }

    obtenerNuevoIDPedido(){
        const ret = this.siguienteIDPedido;
        this.siguienteIDPedido++;
        return ret;
    }

    obtenerListaPedidosPorUsuario(id){
        return this.listaPedidos.filter(ped=> ped.obtenerUsuario().obtenerID() == id).sort((a,b)=>b.obtenerFecha() - a.obtenerFecha());
    }

    obtenerCarritoPorIdUsuario(id){
        return this.carritos.find(carr=>carr.obtenerUsuarioCarrito().obtenerID() == id);
    }

    realizarPedido(idUsuario){
        const carrito = this.carritos.find(carr=>carr.obtenerUsuarioCarrito().obtenerID() == idUsuario);
        const listadoMenusAPedir = carrito.obtenerMenus();
        let precioTotal = 0;
        for(const menu of listadoMenusAPedir){
            precioTotal+=menu.obtenerMenu().obtenerPrecio() * menu.obtenerCantidad();
        }
        const pedidoNuevo = new Pedido(listadoMenusAPedir, precioTotal, new Date(), this.listaUsuarios.find(usr=>usr.obtenerID() == idUsuario));
        this.listaPedidos.push(pedidoNuevo);
    }

    borrarMenuDeCarrito(nombreMenu, idUsuario){
        const carr = this.obtenerCarritoPorIdUsuario(idUsuario);
        carr.borrarMenu(nombreMenu);
    }

}

//Singleton
const instanciaSistema = new Sistema();
instanciaSistema.cargarDatosIniciales();

module.exports = instanciaSistema;