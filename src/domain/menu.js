class Menu{

    constructor(id, nombre, descripcion, ingredientes, aptoParaCeliacos, aptoParaDiabeticos, img){
        this.idMenu = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ingredientes = ingredientes;
        this.aptoParaCeliacos = aptoParaCeliacos;
        this.aptoParaDiabeticos = aptoParaDiabeticos;
        this.imagen = img
    }

    obtenerID(){
        return this.idMenu;
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
    
}

module.exports = Menu;