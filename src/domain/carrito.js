/**
 * Representa un carrito en el sistema
 */
class Carrito {
  /**
   * Constructor de la clase Carrito
   * @param {Usuario} usuario - usuario dueño del carrito
   */
  constructor(usuario) {
    this.menuPedidos = [];
    this.usuario = usuario;
  }

  /**
   * agrega un menu junto con la cantidad
   * al carrito
   * @param {MenuPedido} menu - Menu para agregar al carrito
   */
  agregarMenu(menu) {
    this.menuPedidos.push(menu);
  }

  /**
   * Elimina un menu del carrito
   * @param {text} nombre - nombre del menu a eliminar
   */
  borrarMenu(nombre) {
    this.menuPedidos = this.menuPedidos.filter((x) => x.menu.nombre != nombre);
  }


  /**
   * Retorna los menus guardados en el carrito
   * @return {MenuPedido} menusDelCarrito
   */
  obtenerMenus() {
    return this.menuPedidos;
  }

  /**
   * Retorna el usuario asociado al carrito
   * @return {Usuario} usuario dueño del carrito
   */
  obtenerUsuarioCarrito() {
    return this.usuario;
  }
}

module.exports = Carrito;
