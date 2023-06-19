class MenuPedido{

    constructor(menu, cantidad){
        this.menu = menu;
        this.cantidad = cantidad;
    }

    obtenerMenu(){
        return this.menu;
    }
    
    obtenerCantidad(){
        return this.cantidad;
    }
}

module.exports = MenuPedido;
