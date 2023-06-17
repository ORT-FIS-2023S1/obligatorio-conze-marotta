document.getElementById("btnPublicarMenu").onclick = () =>{
    const nombre = document.getElementById("nombreMenu").value;
    const desc = document.getElementById("descMenu").value;
    const cel = document.getElementById("aptoCeliacos").checked;
    const dia = document.getElementById("aptoDiabeticos").checked;
    const img = document.getElementById("imagen").files[0];
    const menu = {
        nombre: nombre,
        descipcion: desc,
        aptoParaCeliacos: cel,
        aptoParaDiabeticos: dia,
        ingredientes: [],
        imagen: null
    }
    console.log(menu);

    
    fetch('/publicarMenu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menu)
    }).then(x=>{
        console.log("ENVIADO!");
        
    }).catch(err=>{
        console.log("ERROR!");
    })
}

document.getElementById("btnObtenerMenus").onclick = () =>{
    fetch('/obtenerMenus',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json()
    }).then(res => {
        console.log(res);
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
  

