/* eslint-disable max-len */
import Carrito from '../carrito';
import MenuPedido from '../menuPedido';
import Usuario from '../usuario';
import Menu from '../menu';


describe('Carrito', () => {
  const usuario = new Usuario(1, 'John', 'Doe', 'john.doe@example.com', 'cliente', 3);
  const carrito = new Carrito(usuario);

  const menu1 = new Menu(1, 'Hamburguesa', 'Deliciosa hamburguesa con queso y tomate', ['pan', 'carne', 'queso', 'tomate'], true, false, 10.99, 'hamburguesa.jpg');
  const menuPedido1 = new MenuPedido(menu1, 2);

  const menu2 = new Menu(2, 'Pizza', 'Sabrosa pizza de pepperoni', ['masa', 'salsa de tomate', 'queso', 'pepperoni'], false, false, 12.99, 'pizza.jpg');
  const menuPedido2 = new MenuPedido(menu2, 1);

  test('debería agregar un menú al carrito', () => {
    carrito.agregarMenu(menuPedido1);
    expect(carrito.obtenerMenus()).toContain(menuPedido1);
  });

  test('debería eliminar un menú del carrito', () => {
    carrito.borrarMenu(menuPedido1.menu.nombre);
    expect(carrito.obtenerMenus()).not.toContain(menuPedido1);
  });

  test('debería devolver los menús del carrito', () => {
    carrito.agregarMenu(menuPedido1);
    carrito.agregarMenu(menuPedido2);
    expect(carrito.obtenerMenus()).toEqual([menuPedido1, menuPedido2]);
  });

  test('debería devolver el usuario asociado al carrito', () => {
    expect(carrito.obtenerUsuarioCarrito()).toEqual(usuario);
  });
});
