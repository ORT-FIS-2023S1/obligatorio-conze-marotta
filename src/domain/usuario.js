/**
 * Clase que representa a un usuario.
 * @class
 */
class Usuario {
  /**
   * Crea una instancia de Usuario.
   * @constructor
   * @param {string} id - El ID del usuario.
   * @param {string} nombre - El nombre del usuario.
   * @param {string} apellido - El apellido del usuario.
   * @param {string} email - El correo electrónico del usuario.
   * @param {string} perfil - El perfil del usuario.
   * @param {number} comensales - El número de comensales asociados al usuario.
   */
  constructor(id, nombre, apellido, email, perfil, comensales) {
    /**
     * El ID del usuario.
     * @type {string}
     */
    this.idUsuario = id;

    /**
     * El nombre del usuario.
     * @type {string}
     */
    this.nombre = nombre;

    /**
     * El apellido del usuario.
     * @type {string}
     */
    this.apellido = apellido;

    /**
     * El correo electrónico del usuario.
     * @type {string}
     */
    this.email = email;

    /**
     * El perfil del usuario.
     * @type {string}
     */
    this.perfil = perfil;

    /**
     * El número de comensales asociados al usuario.
     * @type {number}
     */
    this.comensales = comensales;
  }

  /**
   * Obtiene el nombre del usuario.
   * @return {string} - El nombre del usuario.
   */
  obtenerNombre() {
    return this.nombre;
  }

  /**
   * Obtiene el apellido del usuario.
   * @return {string} - El apellido del usuario.
   */
  obtenerApellido() {
    return this.apellido;
  }

  /**
   * Obtiene el correo electrónico del usuario.
   * @return {string} - El correo electrónico del usuario.
   */
  obtenerEmail() {
    return this.email;
  }

  /**
   * Obtiene el perfil del usuario.
   * @return {string} - El perfil del usuario.
   */
  obtenerPerfil() {
    return this.perfil;
  }

  /**
   * Obtiene el número de comensales asociados al usuario.
   * @return {number} - El número de comensales asociados al usuario.
   */
  obtenerComensales() {
    return this.comensales;
  }

  /**
   * Obtiene el ID del usuario.
   * @return {string} - El ID del usuario.
   */
  obtenerID() {
    return this.idUsuario;
  }
}

module.exports = Usuario;
