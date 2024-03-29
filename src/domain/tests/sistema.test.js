/* eslint-disable max-len */
import Carrito from '../carrito';
import Menu from '../menu';
import Pedido from '../pedido';
import Usuario from '../usuario';
import Sistema from '../sistema';


describe('Sistema', () => {
  let sistema;

  beforeEach(() => {
    sistema = Sistema;
    // sistema.cargarDatosIniciales();
  });

  test('debe agregar un pedido al sistema', () => {
    const pedido = new Pedido([], 1999, new Date(), new Usuario());
    sistema.agregarPedido(pedido);
    const listaPedidos = sistema.obtenerListaPedidos();
    expect(listaPedidos).toContain(pedido);
  });

  test('debe agregar un menú al sistema', () => {
    const menu = new Menu('', '', '', false, false, 0, null);
    sistema.agregarMenu(menu);
    const listaMenus = sistema.obtenerListadoMenus();
    expect(listaMenus).toContain(menu);
  });

  test('debe obtener la lista de menús del sistema', () => {
    const listaMenus = sistema.obtenerListadoMenus();
    expect(listaMenus).toHaveLength(6);
  });

  test('debe obtener la lista de pedidos del sistema', () => {
    const listaPedidos = sistema.obtenerListaPedidos();
    expect(listaPedidos).toHaveLength(4);
  });

  test('debe cargar los datos iniciales en el sistema', () => {
    const listaUsuarios = sistema.listaUsuarios;
    const carritos = sistema.carritos;
    expect(listaUsuarios).toHaveLength(2);
    expect(carritos).toHaveLength(2);
  });

  test('debe obtener un usuario por su ID', () => {
    const usuario = sistema.obtenerUsuarioPorID(1);
    expect(usuario).toBeInstanceOf(Usuario);
    expect(usuario.obtenerID()).toBe(1);
  });

  test('debe verificar si existe un menú en el sistema', () => {
    const existeMenu1 = sistema.existeMenu('Ensalada César');
    const existeMenu2 = sistema.existeMenu('Pizza');
    expect(existeMenu1).toBe(true);
    expect(existeMenu2).toBe(false);
  });

  test('debe obtener la lista de pedidos de un usuario ordenados por fecha', () => {
    const listaPedidos = sistema.obtenerListaPedidosPorUsuario(1);
    expect(listaPedidos).toHaveLength(3);
    expect(listaPedidos[0]).toBeInstanceOf(Pedido);
    expect(listaPedidos[0].obtenerFecha()).toBeInstanceOf(Date);
  });

  test('debe obtener el carrito de un usuario por su ID', () => {
    const carrito = sistema.obtenerCarritoPorIdUsuario(1);
    expect(carrito).toBeInstanceOf(Carrito);
    expect(carrito.obtenerUsuarioCarrito().obtenerID()).toBe(1);
  });

  test('debe realizar un pedido a partir del carrito de un usuario', () => {
    const carrito = sistema.obtenerCarritoPorIdUsuario(1);
    const listaMenusAPedir = carrito.obtenerMenus();
    const precioTotal = listaMenusAPedir.reduce(
        (total, menu) => total + menu.obtenerMenu().obtenerPrecio() * menu.obtenerCantidad(), 0);
    sistema.realizarPedido(1);
    const listaPedidos = sistema.obtenerListaPedidos();
    const pedidoNuevo = listaPedidos[listaPedidos.length - 1];
    expect(pedidoNuevo).toBeInstanceOf(Pedido);
    expect(pedidoNuevo.obtenerPrecioTotal()).toBe(precioTotal);
  });

  test('debe eliminar un menú del carrito de un usuario', () => {
    sistema.borrarMenuDeCarrito('Ensalada César', 1);
    const carrito = sistema.obtenerCarritoPorIdUsuario(1);
    const menus = carrito.obtenerMenus();
    const menuNombres = menus.map((menu) => menu.obtenerMenu().obtenerNombre());
    expect(menuNombres).not.toContain('Ensalada César');
  });

  test('debe cargar el carrito de un usuario con 3 menus aleatorios', () => {
    sistema.cargarCarritoRandom(1);
    const carrito = sistema.obtenerCarritoPorIdUsuario(1);
    expect(carrito.obtenerMenus()).toHaveLength(3);
  });
});
