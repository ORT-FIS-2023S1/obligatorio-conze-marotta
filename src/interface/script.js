/* eslint-disable no-unused-vars */
window.addEventListener('load', inicio);

/**
 * Carga los datos en la app
 */
function inicio() {
  document.getElementById('btnPublicarMenu')
      .addEventListener('click', publicarMenu);
  document.getElementById('btnRealizarPedido')
      .addEventListener('click', realizarPedido);

  cargarMenus();
  cargarPedidos();

  // Cargo datos en el carrito al iniciar la web
  cargarCarritoRandom();
  mostrarVista('menu');
}

/**
 * Muestra la vista deseada segun la opcion del navbar
 * @param {text} id - es el id de la vista deseada.
 */
function mostrarVista(id) {
  // Oculta todas las vistas
  const vistas = document.getElementsByClassName('vista');
  for (let i = 0; i < vistas.length; i++) {
    vistas[i].style.display = 'none';
  }

  // Muestra la vista correspondiente al ID proporcionado
  const vista = document.getElementById(id);
  vista.style.display = 'block';
}

/**
 * Resalta la opcion del navbar seleccionada.
 * @param {event} event - evento
 */
function toggleActive(event) {
  const links = document.querySelectorAll('.navbar .nav-link');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  event.target.classList.add('active');
}

/**
 * Envia una petición al server para obtener los
 * datos del carrito y los carga en pantalla
 */
function cargarCarrito() {
  fetch('/obtenerCarrito/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res.json();
  }).then((res) => {
    const contenedor = document.getElementById('contenedorMenusCarrito');
    contenedor.innerHTML = '';
    let precioTotal = 0;
    if (res.menuPedidos.length > 0) {
      for (const menu of res.menuPedidos) {
        const row = document.createElement('tr');
        row.innerHTML = '<td>' + menu.menu.nombre + '</td>' +
        '<td>' + menu.cantidad + '</td>' +
        '<td>$' + menu.menu.precio * menu.cantidad + '</td>' +
        '<td><button class="btn btn-transparent"' +
        ' onclick="eliminarMenu(this)"' +
        ' aria-label="Quitar menú del carrito">' +
        '<i class="bi bi-trash-fill"></i></button></td>';
        precioTotal += (menu.menu.precio * menu.cantidad);
        contenedor.appendChild(row);
      }
      document.getElementById('btnRealizarPedido').disabled = false;
    } else {
      const row = document.createElement('tr');
      row.innerHTML = '<td>No hay menus agregados al carrito</td>';
      contenedor.appendChild(row);
      document.getElementById('btnRealizarPedido').disabled = true;
    }

    document.getElementById('idPrecioTotal')
        .innerHTML = 'Precio total: $' + precioTotal;
    console.log(res);
  });
}

/**
 * Envia una petición al server para obtener
 * los datos de los menús publicados.
 */
function cargarMenus() {
  fetch('/obtenerMenus', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res.json();
  }).then((res) => {
    const contenedor = document.getElementById('contenedorMenus');
    contenedor.innerHTML = '';
    for (const menu of res) {
      const card = document.createElement('div');
      card.innerHTML = '<div class="card card-sm m-3 card-menu">' +
        '<img src="./img/ImagenPrueba.png" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h1 class="card-title">' + menu.nombre + '</h1>' +
        '<p class="card-text">' + menu.descripcion + '</p>' +
        '<p class="card-text"><small>Ingredientes: ' +
        menu.ingredientes + '</small></p>' +
      '</div></div>';
      contenedor.appendChild(card);
    }
    console.log(res);
  }).catch((err) => {
    console.log('Error obteniendo menús');
    console.log(err);
  });
}

/**
 * Envia un request de tipo POST para publicar un menu en el servidor
 */
function publicarMenu() {
  const nombre = document.getElementById('nombreMenu').value;
  const desc = document.getElementById('descMenu').value;
  const cel = document.getElementById('aptoCeliacos').checked;
  const dia = document.getElementById('aptoDiabeticos').checked;
  // const img = document.getElementById("imagen").files[0];
  const precio = document.getElementById('precioMenu').value;
  const ingredientes = document.getElementById('ingredientesMenu').value;

  if (nombre != '' && desc != '' && precio != '' && ingredientes != '') {
    const menu = {
      nombre: nombre,
      descripcion: desc,
      aptoParaCeliacos: cel,
      aptoParaDiabeticos: dia,
      ingredientes: ingredientes,
      imagen: null,
      precio: precio,
    };
    fetch('/publicarMenu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(menu),
    }).then((x) => {
      return x.json();
    }).then((res) => {
      $('#modalPublicarMenu').modal('hide');
      document.getElementById('nombreMenu').value = '';
      document.getElementById('descMenu').value = '';
      document.getElementById('aptoCeliacos').checked = false;
      document.getElementById('aptoDiabeticos').checked = false;
      document.getElementById('precioMenu').value = '';
      document.getElementById('ingredientesMenu').value = '';
      if (res.success) {
        mostrarMensaje('Exito', res.msg);
      } else {
        mostrarMensaje('Error', res.msg);
      }
      cargarMenus();
    }).catch((err) => {
      $('#modalPublicarMenu').modal('hide');
      mostrarMensaje('Error', 'Error publicando menú');
    });
  }
}

/**
 * Envia una petición al server para obtener
 * los datos de los pedidos del usuario
 */
function cargarPedidos() {
  fetch('/historialPedidos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res.json();
  }).then((res) => {
    const contenedor = document.getElementById('contenedorMisPedidos');
    contenedor.innerHTML = '';
    for (const pedido of res) {
      const row = document.createElement('tr');
      let descPedido = '';
      for (const menu of pedido.menus) {
        descPedido += menu.menu.nombre + ' (x' + menu.cantidad + '), ';
      }
      descPedido = descPedido.slice(0, -2);
      const fechaPedido = new Date(pedido.fecha);
      // pedido.menus[0].menu.nombre+;
      row.innerHTML = '<td>' + fechaPedido.toLocaleDateString('es-ES') +
      ', ' + fechaPedido.getHours() + ':' + fechaPedido.getMinutes() +
      '</td><td>' + descPedido + '</td><td>$' + pedido.precioTotal + '</td>';
      contenedor.appendChild(row);
    }
    console.log(res);
  }).catch((err) => {
    console.log('Error obteniendo menús');
    console.log(err);
  });
}

/**
 * Publica un nuevo pedido en el server
 */
function realizarPedido() {
  fetch('/realizarPedido/1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((x) => {
    cargarPedidos();
    $('#modalCarrito').modal('hide');
    mostrarMensaje('Exito', 'El pedido fue realizado correctamente');
    cargarCarrito();
  }).catch((err) => {
    console.log(err);
    $('#modalCarrito').modal('hide');
    mostrarMensaje('Error', 'Error enviando pedido');
  });
}

/**
 * Elimina un menu del carrito del usuario
 * @param {*} boton - boton asociado al menu que se quiere
 * eliminar
 */
function eliminarMenu(boton) {
  console.log(boton);
  console.log(boton.parentNode);
  const data = {
    nombreMenu: boton.parentNode.parentNode.cells[0].innerText,
    idUsuario: 1,
  };
  fetch('/eliminarMenuDeCarrito', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    cargarCarrito();
    return res.json();
  }).then((res) => {
    console.log(res);
  });
}

/**
 * Esta función muestra un mensaje en una notificación toast
 * @param {text} titulo - Titulo de la notificación
 * @param {text} mensaje - Mensaje de la notificación
 */
function mostrarMensaje(titulo, mensaje) {
  document.getElementById('tituloNotificacion').innerHTML = titulo;
  document.getElementById('mensajeNotificacion').innerHTML = mensaje;

  const toast = new bootstrap.Toast(document.getElementById('liveToast'), {
    autohide: true,
    delay: 10000,
  });
  toast.show();
}

/**
 * Carga el carrito del usuario con menus aleatorios
 */
function cargarCarritoRandom() {
  fetch('/llenarCarritoAleatoriamente/1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    cargarCarrito();
    return res;
  }).then((res) => {
    console.log(res);
  });
}
