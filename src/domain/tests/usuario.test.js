/* eslint-disable max-len */
import Usuario from '../usuario';


describe('Usuario', () => {
  const usuario = new Usuario(1, 'Pedro', 'Pereira', 'ppereira@example.com', 'admin', 4);

  test('debería devolver el nombre correcto', () => {
    expect(usuario.obtenerNombre()).toEqual('Pedro');
  });

  test('debería devolver el apellido correcto', () => {
    expect(usuario.obtenerApellido()).toEqual('Pereira');
  });

  test('debería devolver el email correcto', () => {
    expect(usuario.obtenerEmail()).toEqual('ppereira@example.com');
  });

  test('debería devolver el perfil correcto', () => {
    expect(usuario.obtenerPerfil()).toEqual('admin');
  });

  test('debería devolver la cantidad de comensales correcta', () => {
    expect(usuario.obtenerComensales()).toEqual(4);
  });

  test('debería devolver el ID correcto', () => {
    expect(usuario.obtenerID()).toEqual(1);
  });
});
