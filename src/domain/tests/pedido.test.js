import Pedido from '../pedido';

describe('Pedido', () => {
  let pedido;

  beforeEach(() => {
    const menus = ['Menu 1', 'Menu 2', 'Menu 3'];
    const precioTotal = 560;
    const fecha = new Date();
    const usuario = 'Horacio Quiroga';

    pedido = new Pedido(menus, precioTotal, fecha, usuario);
  });

  test('debe crear una instancia de Pedido', () => {
    expect(pedido).toBeInstanceOf(Pedido);
  });

  test('debe obtener los menús del pedido', () => {
    const menus = pedido.obtenerMenus();
    expect(menus).toEqual(['Menu 1', 'Menu 2', 'Menu 3']);
  });

  it('debe obtener el precio total del pedido', () => {
    const precioTotal = pedido.obtenerPrecioTotal();
    expect(precioTotal).toBe(560);
  });

  test('debe obtener la fecha del pedido', () => {
    const fecha = pedido.obtenerFecha();
    expect(fecha).toBeInstanceOf(Date);
  });

  test('debe obtener el usuario del pedido', () => {
    const usuario = pedido.obtenerUsuario();
    expect(usuario).toBe('Horacio Quiroga');
  });
});
