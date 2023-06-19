/**
 * Representa un menu en el sistema
 */
class Menu {
  /**
   * Constructor de la clase Menu
   * @param {*} nombre - Nombre del menu
   * @param {*} descripcion - Descripcion del menu
   * @param {*} ingredientes - Ingredientes del menu
   * @param {*} aptoParaCeliacos - Indica si es apto para celiacos
   * @param {*} aptoParaDiabeticos - Indica si es apto para diabeticos
   * @param {*} precio - Precio del menu
   * @param {*} img - Imagen asociada al menu
   */
  constructor(nombre, descripcion, ingredientes, aptoParaCeliacos,
      aptoParaDiabeticos, precio, img) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.ingredientes = ingredientes;
    this.aptoParaCeliacos = aptoParaCeliacos;
    this.aptoParaDiabeticos = aptoParaDiabeticos;
    this.precio = precio;
    this.imagen = img;
  }

  /**
   * Retorna el nombre del menu
   * @return {text} nombre del menu
   */
  obtenerNombre() {
    return this.nombre;
  }

  /**
   * Retorna la descripcion del menu
   * @return {text} descripcion del menu
   */
  obtenerDescripcion() {
    return this.descripcion;
  }

  /**
   * Retorna ingredientes del menu
   * @return {text} ingredientes del menu
   */
  obtenerIngredientes() {
    return this.ingredientes;
  }

  /**
   * Retorna true si el menu es apto para celiacos
   * @return {boolean} apto para celiacos
   */
  esAptoParaCeliacos() {
    return this.aptoParaCeliacos;
  }

  /**
   * Retorna true si el menu es apto para diabeticos
   * @return {boolean} apto para diabeticos
   */
  esAptoParaDiabeticos() {
    return this.aptoParaDiabeticos;
  }

  /**
   * Retorna el precio del menu
   * @return {number} precio del menu
   */
  obtenerPrecio() {
    return this.precio;
  }
}

module.exports = Menu;
