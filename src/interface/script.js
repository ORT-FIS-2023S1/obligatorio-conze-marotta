window.addEventListener("load", inicio);

function inicio(){
    //document.getElementById("btnObtenerMenus").addEventListener("click", cargarMenus);
    document.getElementById("btnPublicarMenu").addEventListener("click", publicarMenu);
    cargarMenus();
    mostrarVista('menu');
}

function cargarMenus(){
    fetch('/obtenerMenus', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        return res.json();
    }).then(res=>{
        const contenedor = document.getElementById("contenedorMenus");
        contenedor.innerHTML = "";
        for(const menu of res){
            const card = document.createElement("div");
            card.innerHTML = '<div class="card m-3" style="width: 18rem;">' + 
            '<img src="./img/ImagenPrueba.png" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + menu.nombre + "</h5>" +
            '<p class="card-text">' + menu.descipcion +'</p>' +
            '</div></div>';
            contenedor.appendChild(card);
        }
        
        console.log(res);
    }).catch(err=>{
        console.log("Error obteniendo menús");
        console.log(err);
    })
}

function publicarMenu(){
    const nombre = document.getElementById("nombreMenu").value;
    const desc = document.getElementById("descMenu").value;
    const cel = document.getElementById("aptoCeliacos").checked;
    const dia = document.getElementById("aptoDiabeticos").checked;
    //const img = document.getElementById("imagen").files[0];
    const menu = {
        nombre: nombre,
        descipcion: desc,
        aptoParaCeliacos: cel,
        aptoParaDiabeticos: dia,
        ingredientes: [],
        imagen: null
    }
    fetch('/publicarMenu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menu)
    }).then(x=>{
        console.log("Menú publicado");
        console.log(menu);
        $("#modalPublicarMenu").modal("hide");
        cargarMenus();
    }).catch(err=>{
        console.log("Error publicando menú");
        console.log(err);
        $("#modalPublicarMenu").modal("hide");
    })
}

function mostrarVista(id) {
    // Oculta todas las vistas
    var vistas = document.getElementsByClassName('vista');
    for (var i = 0; i < vistas.length; i++) {
        vistas[i].style.display = 'none';
    }

    // Muestra la vista correspondiente al ID proporcionado
    var vista = document.getElementById(id);
    vista.style.display = 'block';
}

function toggleActive(event) {
    const links = document.querySelectorAll('.navbar .nav-link');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    event.target.classList.add('active');
}
  

