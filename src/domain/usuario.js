class Usuario{
    constructor(id, nombre, apellido, email, perfil, comensales){
        this.idUsuario = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.comensales = comensales
        this.perfil = perfil;
    }

    obtenerNombre(){
        return this.nombre;
    }

    obtenerApellido(){
        return this.apellido;
    }

    obtenerEmail(){
        return this.email;
    }

    obtenerPerfil(){
        return this.perfil;
    }
    
    obtenerComensales(){
        return this.comensales;
    }

    obtenerID(){
        return this.idUsuario;
    }
}

module.exports = Usuario;