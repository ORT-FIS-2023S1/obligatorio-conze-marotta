import Menu from '../menu';


describe('Menu', () => {
  let menu;

  beforeEach(() => {
    // Crea una instancia de Menu antes de cada prueba
    menu = new Menu(
        'Hamburguesa',
        'Deliciosa hamburguesa con queso y vegetales frescos',
        ['carne', 'queso', 'lechuga', 'tomate'],
        true,
        false,
        200,
        'hamburguesa.jpg',
    );
  });

  test('debería devolver el nombre correcto', () => {
    expect(menu.obtenerNombre()).toBe('Hamburguesa');
  });

  test('debería devolver la descripción correcta', () => {
    expect(menu.obtenerDescripcion()).toBe(
        'Deliciosa hamburguesa con queso y vegetales frescos',
    );
  });

  test('debería devolver los ingredientes correctos', () => {
    expect(menu.obtenerIngredientes()).toEqual([
      'carne',
      'queso',
      'lechuga',
      'tomate',
    ]);
  });

  test('debería devolver true si es apto para celíacos', () => {
    expect(menu.esAptoParaCeliacos()).toBe(true);
  });

  test('debería devolver false si no es apto para diabéticos', () => {
    expect(menu.esAptoParaDiabeticos()).toBe(false);
  });

  test('debería devolver el precio correcto', () => {
    expect(menu.obtenerPrecio()).toBe(200);
  });
});
