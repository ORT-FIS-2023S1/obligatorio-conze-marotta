# Informe entrega 1
## Repositorio Git

### Comandos Git que utilizaremos

A continuación se detallan los comandos de git que serán utilizados durante el transcurso del proyecto:

- **git clone**: utilizado para clonar el repositorio localmente.

- **git add**: comando para indicar que archivos pasan al área de *Staging*, para que los cambios realizados en dichos archivos sean incluidos en el próximo commit.

- **git commit**: se utiliza para realizar capturas del estado de los archivos en el área de staging en cierto momento.

- **git push**: disponibiliza los cambios del repositorio local en el repositorio remoto.

- **git fetch**: este comando obtiene los cambios realizados en el repositorio remoto, sin aplicarlos en el repositorio local.

- **git pull**: obtiene los cambios realizados en el repositorio remoto y los aplica en el repositorio local.

- **git branch**: utilizaremos este comando para crear nuevas ramas en el repositorio (también podemos utilizar **git checkout -b *nuevaRama***)

- **git checkout**: este comando se utiliza para moverse entre ramas dentro del repositorio.

- **git merge**: se utiliza para combinar ramas (trae los cambios realizados en una rama hacia otra).

##  Versionado

### Uso de ramas

Consideraremos la rama ***main*** como la rama principal. Esta será utilizada para las instancias de entrega.

Durante el desarrollo del proyecto utilizaremos la rama ***development***, en la cual podremos subir cambios periódicamente y donde se testearan los nuevos cambios antes de subirlos a la rama *main*.

Por otro lado, también utilizaremos una rama separada para cada feature a implementar, con un nombre descriptivo de dicha feature. Al terminar de implementar y probar la nueva feature, se deberá hacer el merge de esta rama hacia *development*, donde se irán testeando todas las funcionalidades en conjunto. 

Una vez estabilizada la rama *development* y seguros de que contiene lo necesario para cada instancia de entrega, se hará el merge de dicha rama hacia *main*.

### Commits

Para mantener un historial de cambios lo mas prolijo posible, utilizaremos mensajes de commits que describan de forma específica y concisa cuales son los cambios realizados en dicho commit.

### Pull/Push

Consideramos importante trabajar sobre una versión lo mas actualizada posible del repositorio, por lo cual recomendamos realizar un *git pull* del repositorio remoto al menos una vez al día antes de trabajar.

También consideramos importante mantener la versión del repositorio remoto actualizada, por lo cual recomendamos también hacer *git push* al menos una vez al día al finalizar el trabajo.

## Elicitación

En la etapa de elicitación decidimos utilizar distintas técnicas. En primer lugar decidimos realizar **entrevistas** teniendo en cuenta distintos stakeholders para poder comprender mejor la realidad de la necesidad a resolver.

Por otro lado, también aplicamos **análisis de documentación** de una aplicación ya existente que resuelve la misma necesidad.

Por último, utilizamos la técnica de **User Persona** para poder definir el perfil de distintos posibles usuarios y empatizar con ellos.

### Entrevistas

Las entrevistas son una herramienta valiosa para obtener información y comprender las necesidades y problemas que los usuarios enfrentan al utilizar un producto o servicio. Al realizar entrevistas a los usuarios, podemos obtener información detallada y específica que nos permitirá entender sus necesidades y expectativas, así como sus hábitos y comportamientos en relación con el uso del comedor escolar. Esto es fundamental para poder diseñar una app que sea útil, fácil de usar y que resuelva los problemas reales que los usuarios enfrentan. Además, las entrevistas nos permiten establecer una relación de confianza con los usuarios y obtener su feedback directo, lo que nos permite adaptar y mejorar la app de acuerdo a sus necesidades.

En esta ocasión, entrevistamos a tres personas pertenecientes a distintos grupos de interés. En primer lugar una madre de niños que asisten a un colegio con comedor escolar. Por otro lado entrevistamos a un niño que concurre a un comedor.Por último, a una maestra que colabora en las tareas de un comedor.

#### Entrevista 1
En primer lugar entrevistamos a Patricia Dorrego, madre de 6 hijos (todos concurrentes a escuelas públicas), de los cuales uno de ellos actualmente accede a un comedor escolar, y otros 2 solían hacerlo también hasta hace 2 años. Si bien estos dos casos se dieron en 2 escuelas distintas, la experiencia fue similar. Al comienzo de año, ambas escuelas enviaban un formulario para rellenar con datos de los hijos a cargo, para conocer de esta forma sus condiciones médicas, alergias, etc. Luego de esto, los niños ya accedian al comedor. Día a día se les servía desayuno y almuerzo (teniendo en cuenta los datos proporcionados anteriormente), pero Patricia no contaba con información de que era lo que consumían, hasta preguntarle a sus hijos que habían comido ese día. Si bien jamás tuvo problemas por alergias o condiciones médicas, Patricia considera importante tener acceso a la información de consumo de sus hijos, ya que varias veces sus hijos no se acordaban o confundían comidas, debido a que ella podía preguntarles varias horas después. En este caso, el comedor de la escuela proporcionaba estos alimentos de forma gratuita. Si bien el resto de sus hijos no contaban con comedor escolar, si contaban con una cantina dentro de la escuela, donde podían comprar alimentos para el recreo. En este punto, Patricia reconoció dos problemáticas: primero, la cantina funcionaba únicamente con efectivo, por lo que en caso de tener que comprar comida los niños debían manipular dinero (hablamos de niños de 6 a 11 años). Al ser tan chicos, muchas veces extraviaban el dinero antes del recreo y no podían acceder a la cantina. Por otro lado, aunque la cantina contaba con alimentos "sanos" (refuerzos, cereales, yogurt, etc) también tenia opciones como papitas, pizza, etc, y ella no tenía control sobre los pedidos de sus hijos mas que su palabra. Aqui se reconoce la importancia de que los padres además de acceder a la información sobre el consumo de sus hijos, puedan tener control y decidir que se les debe proporcionar, y la importancia de los pagos online para que los niños no manipulen dinero.

#### Entrevista 2
En segundo lugar entrevistamos a Matias Gonzalez, de 14 años. Matias actualmente cursa las materias de su 3er año en el liceo durante la mañana, y en la tarde concurre a diversos talleres en el mismo. Debido a la gran carga horaria que tiene, cuenta con la posibilidad de concurrir al comedor escolar de la escuela que se encuentra en frente a su liceo. Al igual que Patricia, Matias no cuenta con información de su menú diario, hasta ya encontrarse ahí. Tampoco ve variadas opciones, sino que los menús disponibles generalmente son dos, salvo excepciones como alérgicos y celíacos.
Según nos cuenta Matias, para obtener su menú diario deben hacer una fila en la cual les dan un plato y cubiertos a cada uno, pasan por el mostrador y les sirven su plato. Luego de esto ya puede sentarse y comer. 
Además, dentro de su liceo también cuenta con una cantina para poder comprar alimentos durante los recreos. Matias menciona que tiene opciones como refuerzos, pizza, papas, galletas, milanesas al pan, refrescos, etc. Esta cantina, al igual que la mecionada por Patricia, cuenta también solo con pagos en efectivo.

#### Entrevista 3
Por último, entrevistamos a Malena Olivera, de 24 años, maestra en un colegio que cuenta con comedor escolar. En dicho comedor actualmente trabajan con una aplicación propia del colegio, que satisface la necesidad de realizar pedidos a traves de ella y pagar de forma online. Esta aplicación les permitió evitar largos tiempos de espera y largas filas en el comedor, además de evitar que los niños manipularan dinero al contar con pagos online. 

### Análisis de documentación
Cómo segunda técnica de elicitación hemos utilizado el análisis de documentación.

#### Ley 19140
En Uruguay la alimentación escolar se encuentra regulada por la [Ley 19140](https://www.impo.com.uy/bases/leyes/19140-2013) de **Alimentación Saludable en Centros Educativos**. Esta Ley tiene como objetivo proteger la salud de la población infantil y adolescente que concurre a centros educativos publicos y privados promoviendo habitos alimenticios saludables. Provee un listado de grupos de alimentos y bebidas nutritivamente adecuados, y prohibe la publicidad en dichos centros educativos de los grupos de alimentos no includos en el listado. Además, incorpora alimentos y bebidas aptos para celíacos y diabéticos.

#### OrderEat
Durante nuestra investigación dimos con un sistema diseñado en nuestro país llamado [OrderEAT](https://ordereat.tech/). Esta sistema se utiliza para la gestión de cantinas no solo en escuelas y colegios, sino que también en universidades, clubes deportivos y grandes empresas. 

Tal como se puede ver en su página oficial, esta aplicación cuenta con varias funcionalidades:
- Los clientes cuentan con una billetera pre-paga con la cual pueden realizar compras sin generar deudas.
- Brinda la posibilidad de realizar pedidos para el día y por adelantado desde el celular.
- Acceso a un registro de todas las compras realizadas.
- Notificaciones de compras realizadas y saldo restante.

Esta aplicación utiliza el concepto de comensales, que son las personas autorizadas a consumir de el balance de un usuario. El padre, madre o tutor debe configurar un comensal por cada niño a cargo, y a la hora de realizar un pedido indica el o los comensales asociados a este.

### User Persona
Gracias a las entrevistas realizadas y a la documentación revisada, hemos podido identificar las necesidades, comportamientos y expectativas de los usuarios en relación con el uso del comedor escolar. Estos user persona nos ayudarán a diseñar una app que sea relevante y útil para nuestros usuarios, al mismo tiempo que nos permitirá centrarnos en sus necesidades y expectativas específicas para poder crear una experiencia de usuario satisfactoria.

![Laura](../elicitacion/user-persona/user-persona-Laura.png?raw=true  "Laura")

![Jose](../elicitacion/user-persona/user-persona-Jose.png?raw=true  "Jose")

### Modelo conceptual del problema
![ModeloConceptual](../elicitacion/DiagramaConceptual.jpeg "Modelo conceptual")

## Especificación

### Requerimientos funcionales

Detectamos dos posibles tipos de usuarios: por un lado los padres, madres o tutores de los niños de las escuelas, de los cuales de aquí en adelante nos referiremos como *tutores*, y por otro lado los administradores de los comedores. 

#### RF01: Registrar niños en la cuenta
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir registrar los niños a cargo del usuario en su cuenta, indicando nombre, apellido, cedula de identidad, clase, y fecha de nacimiento de cada uno, e indicando también condiciones médicas (celiaquía, diabetes, alergias).
- **Prioridad:** 

#### RF02: Modificar datos de los niños asociados a la cuenta
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir modificar el nombre, apellido, clase, fecha de nacimiento y condiciones médicas de los niños asociados a la cuenta del usuario.
- **Prioridad:** 

#### RF03: Eliminar niños asociados a la cuenta
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir eliminar niños previamente asociados a la cuenta del usuario.
- **Prioridad:** 

#### RF04: Cargar billetera virtual
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir recargar el saldo de la billetera virtual ingresando el saldo a recargar, tipo de tarjeta (crédito o débito), y número de tarjeta.
- **Prioridad:** 

#### RF05: Realizar pedido
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir realizar un pedido, seleccionando menús, cantidad de cada uno, los niños previamente asociados a la cuenta que retiraran el pedido en el comedor, y fecha del retiro. También seleccionar un cupón previamente ingresado para obtener una bonificación en el precio.
- **Prioridad:** 

#### RF06: Cancelar pedido
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir cancelar un pedido hasta un día antes de la fecha de entrega especificada.
- **Prioridad:** 

#### RF07: Modificar pedido
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir modificar los datos de un pedido ya realizado, exeptuando la fecha de entrega.
- **Prioridad:** 

#### RF08: Historial de pedidos
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir ver el historial de pedidos realizados por el usuario, ordenados por fecha hacia atrás.
- **Prioridad:** 

#### RF09: Publicar menú
- **Actor:** Administrador del comedor
- **Descripción:** El sistema debe permitir publicar un menú en el sistema, ingresando nombre del plato, descripción, ingredientes, si es apto para celíacos, y si es apto para diabéticos. 
- **Prioridad:** 

#### RF10: Modificar menú
- **Actor:** Administrador del comedor
- **Descripción:** El sistema debe permitir modificar el nombre, descripción e ingredientes de un menú existente en el sistema. También puede modificarse si es apto para celíacos o diabéticos.
- **Prioridad:** 

#### RF11: Eliminar menú
- **Actor:** Administrador del comedor
- **Descripción:** El sistema debe permitir eliminar un menú existente en el sistema.
- **Prioridad:** 

#### RF12: Enviar alerta
- **Actor:** Administrador del comedor
- **Descripción:** El sistema debe permitir al administrador enviar una alerta asociada a un pedido específico al usuario que la realizó, indicando motivo de la alerta (por ejemplo, una razón para un envío de alerta es la compra de un alimento con gluten para un estudiante celíaco).
- **Prioridad:** 

#### RF13: Obtener menú de niño
- **Actor:** Administrador del comedor
- **Descripción:** Ingresando el dato identificador del niño, el usuario debe poder obtener el menú solicitado para el mismo día para él niño. 
- **Prioridad:** 

#### RF14: Registrar compra
- **Actor:** Administrador del comedor
- **Descripción:** El administrador debe poder registrar la compra de un menú por un niño, ingresando la cédula del niño y el menú elegido, debitandose el monto de la villetera virtual del usuario a cargo de este (para casos en que el niño pide en el mostrador).
- **Prioridad:** 

#### RF15: Alta de cupón
- **Actor:** Administrador del comedor
- **Descripción:** El sistema debe permitir al administrador registrar un cupón de bonificación en el sistema, ingresando el código de cupón, descripción, y porcentaje de bonificación.
- **Prioridad:** 

#### RF16: Agregar cupón
- **Actor:** Tutor
- **Descripción:** El sistema debe permitir al tutor agregar un cupón a su cuenta ingresando el código de cupón.
- **Prioridad:** 

#### RF17: Ver listado de pedidos
- **Actor:** Administrador del comedor
- **Descripción:** Se debe permitir al usuario acceder al listado de pedidos del día que indique este, con el detalle de cada uno.
- **Prioridad:** 

### Requerimientos no funcionales

#### RNF1: Interfaz
- **Descripción:**  La aplicación en su v1 debe tener como color primario Green 900, como color secundario Light Blue 800, basandose en la paleta de colores creada en 2014 por [Material Design](https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors/), fuente Roboto e Iconos de tipo "Filled",

#### RNF2: Velocidad de refresco
- **Descripción:**  La aplicación en su v1 ser rápida y eficiente, especialmente cuando se trata de la carga de menús y la selección de comidas. Se debe establecer un tiempo de refresco máximo de 2 segundos para que los usuarios no tengan que  esperar a que la aplicación cargue o responda a sus acciones.

#### RNF3: Seguridad
- **Descripción:** La aplicación en su v1 debe ser segura y mantener la privacidad de los datos de los usuarios, para esto deberá utilizar SSL (Secure Socket Layer). Es un protocolo que cifra la información entre el dispositivo móvil y el servidor, garantizando la privacidad y la seguridad de los datos.

#### RNF4: Concurrencia
- **Descripción:**  La aplicación en su v1 debe soportar hasta 150 usuarios concurrentes.

#### RNF5: Accesibilidad
 - **Descripción:**  La aplicación debe ser accesible para todos los usuarios, independientemente de su capacidad. En su v1, la aplicación deberá cumplir con los estándares de accesibilidad WCAG, que garantizan que la aplicación sea fácilmente comprensible y utilizada por todos.

#### RNF6: Idioma
- **Descripción:**  La aplicación, en su v1, deberá estar disponible únicamente en idioma Español.

#### RNF7: Codificación
- **Descripción:**  La aplicación deberá seguir los estándares de codificación HTML/JS de Google, el uso de un sistema de control de versiones de Git, y el análisis estático de código utilizando ESLint. 

#### RNF8: Compatibilidad
- **Descripción:**  La aplicación en su v1 debe ser responsiva, compatible con dispositivos móviles con sistema operativo Android 7.0 o superior, iOS 11 o superior, así como con los navegadores web Chrome 94.0.4606.81 o superior, y Firefox 96.0.4 o superior.

### User stories

## Historias de Usuarios

### Historia usuario Ana (madre de un niño)
####  Título: Quiero registrar a mi hijo y detallar sus alergias.

**Como** madre de un niño, quiero poder registrar a mi hijo en el comedor estudiantil y especificar si tiene alguna alergia alimentaria para asegurarme de que reciba comidas seguras y nutritivas.

**Criterios de aceptación:**
- Le muestra una amplia lista de alergías y en caso de no estar, permite escribir libremente.
- Le envía una notificación de que se registró una nueva alergía a las encargadas del comedor.
- Le permite editar la información de su hijo.

---

### Historia usuario Diego (padre de un niño)
#### Título: Realizar pedidos de menú.

**Como** padre de un niño que utiliza la aplicación del comedor escolar, quiero poder realizar pedidos de comida para mi hijo de manera fácil y rápida, para ahorrar tiempo y evitar largas filas en el comedor.

**Criterios de aceptación:**
- Interfaz amigable y fácil de usar para realizar pedidos.
- Opciones para seleccionar los platos que se desean para el almuerzo.
- Información actualizada sobre el menú y la disponibilidad de platos para niños con alergias.
- Sistema de pago en línea seguro y confiable.

---

### Historia usuario Pedro (administrador del comedor)
#### Título: Controlar y administrar los pedidos.

**Como** administrador del comedor escolar, quiero poder gestionar las órdenes de comida recibidas a través de la aplicación, para garantizar que se entreguen las comidas adecuadas a los niños y que se cumplan los requisitos de seguridad alimentaria.

**Criterios de aceptación:**
- Interfaz de administrador para ver y gestionar los pedidos recibidos.
- Capacidad de filtrar los pedidos por fecha, grado y tipo de comida.
- Información detallada sobre las órdenes, incluyendo los platos solicitados y la información de alergias y preferencias.
- Alertas automáticas sobre pedidos especiales y alergias, para evitar errores en la entrega de comidas.


### Use cases

###  Iniciar sesión en la aplicación del comedor escolar

**Actor primario:** Padre o tutor legal de un estudiante en la escuela

**Precondiciones:**

1. El padre o tutor legal tiene acceso a un dispositivo con conexión a internet.
2. La aplicación del comedor escolar está instalada en el dispositivo.
3. El padre o tutor legal tiene información de inicio de sesión válida (si ya tiene una cuenta).

**Curso principal de eventos:**
 
1. El padre o tutor legal abre la aplicación del comedor escolar en su dispositivo.
2. Si el padre o tutor legal no tiene una cuenta, selecciona la opción de "Crear cuenta".
3. El padre o tutor legal proporciona su información personal, incluyendo código de la cantina, nombre completo, dirección de correo electrónico, y una contraseña segura.
4. El padre o tutor legal acepta los términos y condiciones de uso de la aplicación y la política de privacidad.
5. Si el padre o tutor legal ya tiene una cuenta, selecciona la opción de "Iniciar sesión".
6. El padre o tutor legal proporciona su dirección de correo electrónico y su contraseña para iniciar sesión.
7. La aplicación verifica la información de inicio de sesión y autentica al padre o tutor legal.
8. Si la información de inicio de sesión es válida, la aplicación muestra la página principal de la cuenta del padre o tutor legal.

**Cursos alternativos:**

3.1. Si la contraseña ingresada es demasiado débil, la aplicación puede solicitar que la contraseña sea más segura para garantizar la protección de la información de la cuenta.

6.1. La información de inicio de sesión es incorrecta, la aplicación debe proporcionar un mensaje de error y permitir al padre o tutor legal intentar iniciar sesión nuevamente o recuperar la contraseña.

---

### Registro de un estudiante con alergias

**Actor:** Madre del estudiante

**Descripción:** Este caso de uso describe cómo la madre de un estudiante puede registrar a su hijo en la aplicación del comedor escolar y especificar sus alergias para que el personal del comedor pueda tomar las precauciones necesarias al servir sus comidas.

**Precondiciones:**
1. La madre tiene una cuenta en la aplicación del comedor escolar.
2. El estudiante no está registrado en el comedor escolar.

Curso principal de eventos:

 1. La madre inicia sesión en la aplicación del comedor escolar.
2. La madre accede a la sección de registro de estudiantes.
3. La madre ingresa los datos personales del estudiante, incluyendo su nombre completo y su fecha de nacimiento.
4. La madre especifica las alergias del estudiante, indicando los alimentos que debe evitar y cualquier otra información relevante.
5. La madre guarda los datos del estudiante.
6. La aplicación confirma el registro del estudiante y muestra un mensaje indicando que el estudiante ahora está registrado en el comedor escolar.

**Cursos alternativos:**

3.1. Si el estudiante ya está registrado en el comedor escolar, la aplicación muestra un mensaje de error indicando que el estudiante ya está registrado y no permite el registro nuevamente.

5.1. Si la madre deja algún campo en blanco, la aplicación muestra un mensaje de error indicando que se requieren todos los campos para completar el registro.

5.2. Completa los campos que dejó en blanco, sin especificar las alergías.

5.3. Si la madre no especifica las alergias del estudiante, la aplicación muestra un mensaje de advertencia indicando que es importante proporcionar esta información para garantizar la seguridad del estudiante durante las comidas escolares.

Este caso de uso es importante para garantizar la seguridad de los estudiantes con alergias alimentarias en el comedor escolar. Al permitir a los padres o tutores legales registrar a sus hijos y especificar sus alergias en la aplicación del comedor escolar, el personal del comedor puede tomar las precauciones necesarias al servir sus comidas.

---

### Acceso a información de pedidos y alergias de los estudiantes

**Actor:** Administrador del comedor

Descripción: Este caso de uso describe cómo el administrador del comedor escolar puede acceder a la información de los pedidos y las alergias de los estudiantes en la aplicación del comedor escolar para asegurarse de que se preparen las comidas adecuadas y se tomen las precauciones necesarias para garantizar la seguridad de los estudiantes con alergias alimentarias.

**Precondiciones:**

1. El administrador tiene una cuenta en la aplicación del comedor escolar.
2. Se han registrado estudiantes y sus pedidos en la aplicación del comedor escolar.
3. Se han registrado alergias y condiciones de los estudiantes en la aplicación del comedor escolar.

**Curso principal de eventos:**

1. El administrador inicia sesión en la aplicación del comedor escolar.
2. Accede a la sección de información de pedidos y alergias.
3. La aplicación muestra una lista de los pedidos de comida que se han realizado para el día.
4. El administrador revisa la lista de pedidos y verifica que se hayan hecho los pedidos adecuados para cada estudiante.
5. La aplicación muestra una lista de los estudiantes con alergias alimentarias y otras condiciones especiales.
6. El administrador revisa la lista de estudiantes con alergias y otras condiciones y verifica que se hayan tomado las precauciones adecuadas al preparar sus comidas.
7. El administrador cierra la sección de información de pedidos y alergias.

**Cursos alternativos:**

2.1. Si no se han registrado pedidos o alergias en la aplicación del comedor escolar, la aplicación muestra un mensaje indicando que no hay información disponible.

4.1 Si el administrador detecta un error en la lista de pedidos o alergias, puede notificar a su responsable a cargo para que este edite la información correspondiente.


## Validación y verificación
## Reflexión
