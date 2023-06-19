class Menu{

    constructor(nombre, descripcion, ingredientes, aptoParaCeliacos, aptoParaDiabeticos, precio, img){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ingredientes = ingredientes;
        this.aptoParaCeliacos = aptoParaCeliacos;
        this.aptoParaDiabeticos = aptoParaDiabeticos;
        this.precio = precio;
        this.imagen = img;
    }

    obtenerNombre(){
        return this.nombre;
    }

    obtenerDescripcion(){
        return this.descripcion;
    }

    obtenerIngredientes(){
        return this.ingredientes;
    }
    
    esAptoParaCeliacos(){
        return this.aptoParaCeliacos;
    }

    esAptoParaDiabeticos(){
        return this.aptoParaDiabeticos;
    }

    obtenerPrecio(){
        return this.precio;
    }
    
}

module.exports = Menu;