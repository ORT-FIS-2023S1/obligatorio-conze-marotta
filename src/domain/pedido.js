class Pedido {
    
    constructor(menus, precioTotal, fecha, usuario){
        this.menus = menus;
        this.precioTotal = precioTotal;
        this.fecha = fecha;
        this.usuario = usuario;
    }

    obtenerMenus(){
        return this.menus;
    }

    obtenerPrecioTotal(){
        return this.precioTotal;
    }

    obtenerFecha(){
        return this.fecha;
    }

    obtenerUsuario(){
        return this.usuario;
    }
}

module.exports = Pedido;