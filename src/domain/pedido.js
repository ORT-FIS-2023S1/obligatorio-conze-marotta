/**
 * Clase que representa un pedido.
 * @class
 */
class Pedido {
  /**
   * Crea una instancia de Pedido.
   * @constructor
   * @param {Array} menus - Los menús incluidos en el pedido.
   * @param {number} precioTotal - El precio total del pedido.
   * @param {Date} fecha - La fecha en la que se realizó el pedido.
   * @param {string} usuario - El usuario que realizó el pedido.
   */
  constructor(menus, precioTotal, fecha, usuario) {
    /**
     * Los menús incluidos en el pedido.
     * @type {Array}
     */
    this.menus = menus;

    /**
     * El precio total del pedido.
     * @type {number}
     */
    this.precioTotal = precioTotal;

    /**
     * La fecha en la que se realizó el pedido.
     * @type {Date}
     */
    this.fecha = fecha;

    /**
     * El usuario que realizó el pedido.
     * @type {string}
     */
    this.usuario = usuario;
  }

  /**
   * Obtiene los menús incluidos en el pedido.
   * @return {Array} - Los menús incluidos en el pedido.
   */
  obtenerMenus() {
    return this.menus;
  }

  /**
   * Obtiene el precio total del pedido.
   * @return {number} - El precio total del pedido.
   */
  obtenerPrecioTotal() {
    return this.precioTotal;
  }

  /**
   * Obtiene la fecha en la que se realizó el pedido.
   * @return {Date} - La fecha del pedido.
   */
  obtenerFecha() {
    return this.fecha;
  }

  /**
   * Obtiene el usuario que realizó el pedido.
   * @return {string} - El usuario del pedido.
   */
  obtenerUsuario() {
    return this.usuario;
  }
}

module.exports = Pedido;
