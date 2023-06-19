/** Almacena un menu y una cantidad asociada para luego usar en el carrito */
class MenuPedido {
/** Constructor de MenuPedido
   * @constructor
   * @param{Menu} menu - menu asociado.
   * @param{number} cantidad - cantidad.
  */
  constructor(menu, cantidad) {
    this.menu = menu;
    this.cantidad = cantidad;
  }

  /** Retorna el menu asociado
   * @return {Menu} menu asociado
   */
  obtenerMenu() {
    return this.menu;
  }

  /** Retorna la cantidad de menu
   * @return {number} cantidad asociada al menu
  */
  obtenerCantidad() {
    return this.cantidad;
  }
}

module.exports = MenuPedido;
