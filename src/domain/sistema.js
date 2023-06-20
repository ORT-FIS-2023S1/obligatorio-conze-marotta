const Menu = require('./menu');
const Pedido = require('./pedido');
const Usuario = require('./usuario');
const Carrito = require('./carrito');
const MenuPedido = require('./menuPedido');
/**
 * Clase donde se realizan todas las operaciones
 * del sitema y se guardan los datos
 */
class Sistema {
  /**
   * Constructor de la clase sistema
   */
  constructor() {
    this.listaPedidos = [];
    this.listaMenus = [];
    this.listaUsuarios = [];
    this.carritos = [];
  }

  /**
   * Agrega un nuevo pedido en el sistema
   * @param {Pedido} pedido - pedido a agregar
   */
  agregarPedido(pedido) {
    this.listaPedidos.push(pedido);
  }

  /**
   * Agrega un nuevo menu en el sistema
   * @param {Menu} menu - menu a agregar
   */
  agregarMenu(menu) {
    this.listaMenus.push(menu);
  }

  /**
   * Retorna la lista de menus del sistema
   * @return {Menu[]}
   */
  obtenerListadoMenus() {
    return this.listaMenus;
  }

  /**
   * Retorna la lista de pedidos del sistema
   * @return {Pedido[]}
   */
  obtenerListaPedidos() {
    return this.listaPedidos;
  }

  /**
   * Carga los datos iniciales en el sistema
   */
  cargarDatosIniciales() {
    // Usuarios
    const usuario1 = new Usuario(1, 'Juan', 'Pérez',
        'juanperez@correo.com', 1, ['Benito', 'Teo']);
    const usuario2 = new Usuario(2, 'Rosa', 'Gomez',
        'larosagomez@correo.com', 2, []);
    this.listaUsuarios.push(usuario2);
    this.listaUsuarios.push(usuario1);
    this.listaUsuarios.forEach((user) => {
      const carrito = new Carrito(user);
      this.carritos.push(carrito);
    });

    // Menus
    const menu1 = new Menu('Ensalada César',
        'Deliciosa ensalada César, ideal para comer rico y sano',
        'Lechuga, tomate, queso parmesano, salsa César, croutons',
        true, true, 120, null);
    const menu2 = new Menu('Tallarines con salsa boloñesa',
        'Tallarines caseros, con una exquisita salsa boloñesa también casera',
        'Huevo, harina, sal, pulpa de tomate, carne picada, cebolla, morrón',
        false, true, 150, null);
    const menu3 = new Menu('Tarta de fiambre',
        'Deliciosa tarta de fiambre casera',
        'Huevo, harina, sal, aceite, jamón, queso',
        false, true, 130, null);
    const menu4 = new Menu('Empanada de jamón y queso',
        'Riquísima empanada casera de jamón y queso al horno',
        'Huevo, harina, sal, aceite, jamon, queso',
        false, true, 90, null);
    const menu5 = new Menu('Milanesa de pollo con pure',
        'Exquisita milanesa de pollo con puré de papas casero',
        'Pollo, papas, pan rallado, huevo',
        false, true, 90, null);

    this.listaMenus.push(menu1);
    this.listaMenus.push(menu2);
    this.listaMenus.push(menu3);
    this.listaMenus.push(menu4);
    this.listaMenus.push(menu5);

    // Menu-Cantidad
    const menuPedido1 = new MenuPedido(menu1, 1);
    const menuPedido2 = new MenuPedido(menu2, 2);
    const menuPedido3 = new MenuPedido(menu3, 1);
    const menuPedido4 = new MenuPedido(menu4, 1);
    const menuPedido5 = new MenuPedido(menu5, 2);
    const menuPedido6 = new MenuPedido(menu1, 1);

    // Pedidos
    const pedido1 = new Pedido([menuPedido1, menuPedido2],
        200, new Date('2023-04-11T14:24:00'), usuario1);
    const pedido2 = new Pedido([menuPedido3],
        350, new Date('2023-05-20T18:12:00'), usuario1);
    const pedido3 = new Pedido([menuPedido4, menuPedido5, menuPedido6],
        700, new Date('2023-04-30T18:12:00'), usuario1);
    this.listaPedidos.push(pedido1);
    this.listaPedidos.push(pedido2);
    this.listaPedidos.push(pedido3);

    // Carrito
    const menuCarrito1 = new MenuPedido(menu1, 2);
    const menuCarrito2 = new MenuPedido(menu4, 3);
    const menuCarrito3 = new MenuPedido(menu5, 1);
    const menuCarrito4 = new MenuPedido(menu3, 1);

    this.carritos.find((carr) => carr.obtenerUsuarioCarrito()
        .obtenerID() == 1).agregarMenu(menuCarrito1);
    this.carritos.find((carr) => carr.obtenerUsuarioCarrito()
        .obtenerID() == 1).agregarMenu(menuCarrito2);
    this.carritos.find((carr) => carr.obtenerUsuarioCarrito()
        .obtenerID() == 1).agregarMenu(menuCarrito3);
    this.carritos.find((carr) => carr.obtenerUsuarioCarrito()
        .obtenerID() == 1).agregarMenu(menuCarrito4);
  }

  /**
   * Retorna el usuario asociado al id
   * recibido por parametro
   * @param {number} id - id de usuario
   * @return {Usuario}
   */
  obtenerUsuarioPorID(id) {
    return this.listaUsuarios.find((usr) => usr.obtenerID() === id);
  }

  /**
   * Retorna true si existe un menu en el sistema
   * con el nombre recibido por parametro
   * @param {text} nombreMenu - nombre del menu
   * @return {boolean}
   */
  existeMenu(nombreMenu) {
    return this.listaMenus
        .find((menu) => menu.obtenerNombre() === nombreMenu) != undefined;
  }

  /**
   * Retorna la lista de pedidos realizados por el usuario ordenados por fecha
   * de pedido descendente
   * @param {number} id - id del usuario
   * @return {ListaPedido[]}
   */
  obtenerListaPedidosPorUsuario(id) {
    return this.listaPedidos
        .filter((ped) => ped.obtenerUsuario().obtenerID() == id)
        .sort((a, b) => b.obtenerFecha() - a.obtenerFecha());
  }

  /**
   * Retorna el carrito del usuario con id recibido
   * por paramatro
   * @param {*} id - id del usuario
   * @return {Carrito}
   */
  obtenerCarritoPorIdUsuario(id) {
    return this.carritos
        .find((carr) => carr.obtenerUsuarioCarrito().obtenerID() == id);
  }

  /**
   * Toma el carrito del usuario recibido por parametro y
   * lo convierte en un pedido
   * @param {number} idUsuario - id usuario que realiza el pedido
   */
  realizarPedido(idUsuario) {
    const carrito = this.carritos.
        find((carr) => carr.obtenerUsuarioCarrito().obtenerID() == idUsuario);
    const listadoMenusAPedir = carrito.obtenerMenus();
    let precioTotal = 0;
    for (const menu of listadoMenusAPedir) {
      precioTotal += menu.obtenerMenu()
          .obtenerPrecio() * menu.obtenerCantidad();
    }
    const pedidoNuevo = new Pedido(listadoMenusAPedir,
        precioTotal, new Date(),
        this.listaUsuarios.find((usr) => usr.obtenerID() == idUsuario));
    this.listaPedidos.push(pedidoNuevo);
    carrito.vaciar();
  }

  /**
   * Elimina del carrito del usuario
   * recibido por parametro el menu con el nombre recibido por parametro
   * @param {text} nombreMenu - nombre del menu a eliminar
   * @param {*} idUsuario - id del usuario
   */
  borrarMenuDeCarrito(nombreMenu, idUsuario) {
    const carr = this.obtenerCarritoPorIdUsuario(idUsuario);
    carr.borrarMenu(nombreMenu);
  }

  /**
   * Carga 3 menus de forma aleatoria en el carrito del usuario
   * Especificado
   * @param {*} idUsuario - id de usuario
   */
  cargarCarritoRandom(idUsuario) {
    const carrito = this.obtenerCarritoPorIdUsuario(idUsuario);
    carrito.vaciar();
    for (let i = 0; i < 3; i++) {
      const j = Math.floor(Math.random() * this.listaMenus.length);
      const menuPedido = new MenuPedido(this.listaMenus[j], 2);
      carrito.agregarMenu(menuPedido);
    }
  }
}

// Singleton
const instanciaSistema = new Sistema();
instanciaSistema.cargarDatosIniciales();

module.exports = instanciaSistema;
