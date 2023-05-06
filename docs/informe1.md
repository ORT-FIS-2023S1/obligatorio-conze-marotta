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

## Especificación

## Validación y verificación
## Reflexión
