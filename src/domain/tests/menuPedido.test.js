/* eslint-disable max-len */
import MenuPedido from '../menuPedido';
import Menu from '../menu';

describe('MenuPedido', () => {
  const menu = new Menu(1, 'Hamburguesa', 'Deliciosa hamburguesa con queso y tomate', ['pan', 'carne', 'queso', 'tomate'], true, false, 200, 'hamburguesa.jpg');
  const menuPedido = new MenuPedido(menu, 2);

  test('debería devolver el menú correcto', () => {
    expect(menuPedido.obtenerMenu()).toEqual(menu);
  });

  test('debería devolver la cantidad correcta', () => {
    expect(menuPedido.obtenerCantidad()).toEqual(2);
  });
});
