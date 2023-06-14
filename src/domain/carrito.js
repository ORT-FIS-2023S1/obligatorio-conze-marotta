class Carrito{
    
    constructor(usuario){
        this.menuPedidos = [];
        this.usuario = usuario;
    }

    agregarMenu(menu){
        this.menuPedidos.push(menu);
    }

    borrarMenu(nombre){
        this.menuPedidos = this.menuPedidos.filter(x=>x.menu.nombre == nombre);
    }

    obtenerUsuarioCarrito(){
        return this.usuario;
    }
}

module.exports = Carrito;