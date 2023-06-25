# Informe entrega 2

## Construcción

### Implementación de funciones principales

Para la construcción del sistema, utilizamos las tecnologías NodeJS para el backend, y HTML, CSS y JavaScript para el frontend. A su vez, para el frontend también utilizamos el framework Bootstrap para estilar la web y hacer que esta sea responsiva.

Las funciones implementadas en el sistema para esta instancia de entrega fueron las siguientes:

**Publicar menú:** Publica un menú en el sistema, indicando el nombre, la descripción,  sus ingredientes, el precio, y si es apto para celíacos y diabéticos.

**Realizar pedido:** Ingresando al carrito, se ingresa un pedido al sistema con los menús previamente agregados a este. En el carrito se pueden ver los menús agregados, la cantidad y precio de cada uno, y el precio total del pedido a realizar. Además, para cada menú cargado en el carrito se da la opción de eliminarlo de este.

**Historial de pedidos:** Se permite ver el historial de pedidos del usuario, ordenados por fecha descendente. 

### Librerías externas utilizadas
Para la construcción del proyecto se utilizaron las siguientes librerías externas:

**babel (^6.23.0):** Se utiliza para pasar código JavaScript moderno a versiones anteriores de este mas compatibles con los navegadores y entornos de ejecución mas antiguos.

**bootstrap (^5.3.0):** este framework proporciona una amplia variedad de componentes y estilos predefinidos para crear sitios web responsivos de manera sencilla.

**ejs (^3.1.9):** Esta librería se utiliza para generar vistas HTML dinámicas, mezclando código JavaScript con HTML.

**express (^4.18.2):** Esta librería se utiliza para levantar un servidor web de manera sencilla, y facilita el manejo de solicitudes y respuestas en este.

**jest (^29.5.0):** Esta libería facilita la escritura y ejecución de pruebas unitarias.

**nodemon (^2.0.22):** La función de esta librería es reiniciar la aplicación cada vez que se detectan cambios en el código. Esto es muy util en la etapa de desarrollo, para no tener que reiniciar manualmente la aplicación cada vez que se hace un cambio. Para el uso de esta librería, se agrego un script *dev* en el archivo *package.json* que ejecuta el comando *nodemon app.js*, levantando la aplicación con nodemon.

## Interfaz de usuario
En lo que refiere a la interfaz de usuario, se implementó en una única página, con navegación entre las distinas secciones de la misma a través de una barra de navegación.

Como fue mencionado anteriormente, para la implementación de la interfaz de usuario fue utilizado el framework *Bootstrap*, dando como resultado una web responsiva adaptandose a distintas pantallas.

*Vista desde una PC:*

![Interfaz PC](./img/Interfaz_PC.PNG "Interfaz PC")

*Vista desde un iPhone 12 Pro:*

![Interfaz iPhone 12 Pro](./img/Interfaz_iPhone12Pro.PNG "Interfaz iPhone 12 Pro")

*Vista desde un iPad Air:*

![Interfaz iPad Air](./img/Interfaz_iPadAir.PNG "Interfaz iPad Air")

Además, del mismo framework se utilizaron varios componentes predefinidos, por ejemplo los **Modals** para las ventanas de publicar menú y realizar pedido, las **Cards** para el listado de menús en la pantalla principal, y **toast** para los mensajes de estado del sistema.

Para el estilo de la página se utilizó el color **Green 900** como color primario, y **Light Blue 800** como secundario.

La fuente utilizada para los textos del sistema fue **Roboto**, y se utilizaron íconos con estilo **filled**.

### Principios de usabilidad

*Hay que desarrollar...*

### Cumplimiento de estándar de accesibilidad WCAG

El sitio cumple con el estándar de accesibilidad WCAG.

Para asegurarnos de esto, durante el desarrollo del sistema utilizamos la herramienta **WAVE**, con la cual se fueron identificando los lugares donde no se estaba cumpliendo con el estándar para posteriormente corregirlos.

*Captura del resultado de **WAVE** en el primer uso:*

![Sitio sin cumplir WCAG](./img/NoCumplimientoWCAG.PNG "Sitio sin cumplir WCAG")

*Captura del resultado de **WAVE** al finalizar el desarrollo del sitio:*

![Sitio cumpliendo WCAG](./img/CumplimientoWCAG.PNG "Sitio cumpliendo WCAG")


## Codificación
Para la codificación del proyecto, el IDE utilizado fue Visual Studio Code. En este se utilizaron algunas extensiones para facilitar el desarrollo, detalladas a continuación.

* **Live Preview:** permite tener una vista previa en vivo del código HTML. Util para ver cambios en tiempo real a medida que se realizan cambios en el código HTML.
* **ESLint:** Esta extensión permite detectar y corregir errores de código y malas practicas de programación para poder corregirlas.
* **IntelliSense for CSS class names in HTML:** esta extensión habilita el autocompletado y sugerencias de clases CSS al escribir código HTML.

El proyecto sigue los estándares de codificación de Google Style. Para asegurar esto, fué utilizada la herramienta ESLint mencionada anteriormente, la cual realiza el análisis estático de código, detectando fallas y malas prácticas en éste para posteriormente realizar las correcciónes y hacer que el código cumpla los estándares especificados.

Con esta herramienta se logró detectar la aplicación de malas prácticas en varios puntos del sistema. Algunas de estas fueron:
- Uso de comillas dobles en strings.
- Identación de 4 espacios.
- Constantes y variables definidas sin usar.

![Identación de 4 espacios](./img/ErrorESLint1.PNG "Identación de 4 espacios")

![Uso de comillas dobles en strings](./img/ErrorESLint2.PNG "Uso de comillas dobles en strings")

![Constantes y variables definidas sin usar](./img/ErrorESLint3.PNG "Constantes y variables definidas sin usar")

Para la corrección de los errores detectados, algunos de los ajustes realizados fueron los siguientes:
- Cambio en la configuración de Visual Studio Code para que la identación sea de 2 espacios.
- Se eliminaron todas las variables y constantes declaradas que no se usaban.
- Se cambiaron las comillas dobles en la declaración de strings por comillas simples.
- Se agregaron comentarios en las declaraciones de funciones y clases.

Posterior a estos ajustes, ya no se detectaron errores en el código:

![Corrección errores ESLint](./img/CorreccionESLint.PNG "Corrección errores ESLint")

El desarrollo sigue buenas prácticas de POO, teniendo separada la parte lógica de lo que es la interfaz.

En la carpeta **interface** se encuentra todo lo relacionado a la interfaz. En esta podemos encontrar los siguientes archivos:
- index.html: el HTML con la página única.
- estilos.css: algunos estilos definidos que no se encuentran en bootstrap.
- script.js: este archivo se encarga de manejar los eventos del HTML, realizar las peticiones al server, y mostrar en pantalla los datos obtenidos.

Por otro lado, en la carpeta **domain** se encuentran las clases utilizadas para el desarrollo, las cuales se listan a continuación:
- **carrito.js:** representa un carrito en el sistema. Asocia a un usuario con una lista de menus y cantidad para cada uno.
- **menu.js:** representa un menú en el sistema. Contiene un nombre, una descripción, los ingredientes de este, si es apto para celíacos, si es apto para diabéticos, y su precio.
- **menuPedido.js:** esta clase se utiliza para asociar un menú con una cantidad deseada, tanto para el carrito como para los pedidos.
- **pedido.js:** esta clase representa un pedido en el sistema. Esta representada por una lista de instancias de *menuPedido*  (menú y cantidad de este), el precio total del pedido, la fecha de realización, y el usuario que lo hizo.
- **usuario.js:** representa a los usuarios del sistema. Contiene el id del usuario, nombre, apellido, email, perfil (si es tutor o administrador), y comensales asociados.
- **sistema.js:** esta clase se encarga de almacenar y administrar el listado de menus existentes, pedidos realizados, usuarios creados y sus carritos.

## Test unitario

## Reflexión
