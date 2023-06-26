# Informe de testing 
Proyecto asignado: [Obligatorio Layerle-Piria](https://github.com/ORT-FIS-2023S1/obligatorio-layerle-piria)

## Test de sistema

### Clases de equivalencia

|Variable|Especificación|Particiones|Representante|
|--------|--------------|-----------|-------------|
|Nucleo familiar|Selección de una persona incluída en el núcleo familiar|**Validas**: persona seleccionada<br>**Invalidas**: ninguna persona seleccionada|**Válido**: Agustina <br>**Inválido**: sin selección|
|Fecha del pedido|Fecha mayor a la fecha actual|**Validas**: Fecha mayor a la fecha actual <br>**Inválidas**: Fecha igual o menor a la fecha actual|**Válido**: Día siguiente a la fecha actual <br>**Inválido**: día anterior a la fecha actual|
|Personalización del pedido|Cualquier texto|**Validas**: Cualquier texto <br>**Invalidas** No aplica|"Sin mayonesa y sin ketchup"|

### Casos de prueba
Para testear el sistema se realizaron casos de pruebas, utilizando test de caja negra.

ID         | Título | Descripción | Precondiciones | Pasos a seguir | Resultado esperado                                              
-------------|---------|----------|---------|---------|-------------------
CP1    |Pedido sin persona seleccionada|Se prueba realizar un pedido sin seleccionar una persona del núcleo familiar|Existen personas agregadas a mi nucleo familiar y menus en el sistema|1) Ingresar al sistema<br>2) Dejar sin seleccionar una persona del núcleo familiar<br>3) Seleccionar la fecha del dia siguiente a la fecha actual<br>4) Seleccionar un menú del listado de menús<br>5) En personalización del menú ingresar el texto: "Sin mayonesa y sin ketchup"<br>6) Hacer click en el botón guardar<br>|El sistema no ingresa el pedido y muestra mensaje de error|
 CP2  |Pedido con fecha pasada|Se prueba realizar un pedido seleccionando una fecha pasada|Existen personas agregadas a mi nucleo familiar y menus en el sistema|1) Ingresar al sistema<br>2) De las opciones del núcleo familiar seleccionar la primera<br>3) Seleccionar la fecha del dia anterior a la fecha actual<br>4) Seleccionar un menú del listado de menús<br>5) En personalización del menú ingresar el texto: "Sin mayonesa y sin ketchup"<br>6) Hacer click en el botón guardar|El sistema no ingresa el pedido y muestra mensaje de error|
 CP3 |Pedido sin personalización del menú|Se prueba realizar un pedido sin ingresar personalización del menú|Existen personas agregadas a mi nucleo familiar y menus en el sistema|1) Ingresar al sistema<br>2) De las opciones del núcleo familiar seleccionar la primera<br>3) Seleccionar la fecha del dia siguiente a la fecha actual<br>4) Seleccionar un menú del listado de menús<br>5) En personalización del menú no ingresar ningún texto<br>6) Hacer click en el botón guardar|El sistema ingresa el pedido correctamente|
 CP4  |Pedido con todos los datos|Se prueba realizar un pedido ingresando todos los datos solicitados|Existen personas agregadas a mi nucleo familiar y menus en el sistema|1) Ingresar al sistema<br>2) De las opciones del núcleo familiar seleccionar la primera<br>3) Seleccionar la fecha del dia siguiente a la fecha actual<br>4) Seleccionar un menú del listado de menús<br>5) En personalización del menú ingresar el texto "Sin mayonesa y sin ketchup"<br>6) Hacer click en el botón guardar|El sistema ingresa el pedido correctamente|

 ### Resultado de casos de prueba:

 ID Caso Prueba       | Datos de prueba | Fecha | Tester | Resultado obtenido | Estado | Ids Defectos                                              
-------------|---------|----------|---------|---------|-------------------|--------------
CP1    |**Nucleo familiar:** ninguna<br>**Fecha:** 26 de junio de 2023<br>**Pedido:** Opción 1<br>**Personalización:** "Sin mayonesa y sin ketchup"|25/06/2023|Rodrigo|El sistema no ingresa el pedido y muestra un mensaje indicando que se debe seleccionar un niño|Pasa|-|
 CP2  |**Nucleo familiar:** primera opción<br>**Fecha:** 24 de junio de 2023<br>**Pedido:** Opción 1<br>**Personalización:** "Sin mayonesa y sin ketchup"|25/06/2023|Emiliano|El sistema no ingresa el pedido y muestra un mensaje indicando que solo se pueden realizar pedidos futuros|Pasa|-|
 CP3 |**Nucleo familiar:** primera opción<br>**Fecha:** 26 de junio de 2023<br>**Pedido:** Opción 1<br>**Personalización:** ""|25/06/2023|Emiliano|El sistema ingresa el pedido y muestra mensaje de exito|Pasa|-|
 CP4  |**Nucleo familiar:** primera opción<br>**Fecha:** 26 de junio de 2023<br>**Pedido:** Opción 1<br>**Personalización:** "Sin mayonesa y sin ketchup"|25/06/2023|Rodrigo|El sistema ingresa el pedido y muestra mensaje de exito|Pasa|-|

 ### Testing exploratorio

- Sesión de Testing Exploratorio #1

|  |  |
| -------- | -------- |
| Misión      | Probar casos borde al agregar un gasto     |
| Inicio     | 26/06/2023 23:30    |
| Tester     | Emiliano     |
| Estructura de división      | Duración: Corta (25 minutos) Diseño y ejecución de pruebas: 5% Investigación y reporte de defectos: 90 % Armado de la sesión: 5% Objetivo vs. Oportunidad: 95 / 5 |
| Archivos de datos     |     |
| Notas de pruebas     | Se prueba el historial de pedidos <br>Se prueba agregar más de 20 menús  <br> Se prueba agregar más de un menú para el mismo comensale para el mismo día   |
| Defectos     |  #B1 - Al agrandar cuadro de texto "Personaliza tu pedido", luego no deja achicarlo y se sale del cuadro.    |
| Inconvenientes     | Ninguno   |

- Sesión de Testing Exploratorio #2

|  |  |
| -------- | -------- |
| Misión      | Probar la aplicación con diferentes resoluciones|
| Inicio     | 25/06/2023 23:00|
| Tester     | Rodrigo     |
| Estructura de división      | Duración: Corta (25 minutos) Diseño y ejecución de pruebas: 70% Investigación y reporte de defectos: 20 % Armado de la sesión: 10% Objetivo vs. Oportunidad: 90 / 10 |
| Archivos de datos     |     |
| Notas de pruebas     | Se prueba el funcionamiento del sistema utilizando 4 resoluciones distintas|
| Defectos     | #B2 - Error visual al ingresar un pedido con texto de personalización muy largo|
| Inconvenientes     | Ninguno   |

## Reporte de issues
Durante las sesiones de testing exploratorio se encontraron dos bugs, los cuales fueron reportados en los siguientes issues de GitHub:
- [#B1 - Al agrandar cuadro de texto "Personaliza tu pedido", luego no deja achicarlo y se sale del cuadro.](https://github.com/ORT-FIS-2023S1/obligatorio-layerle-piria/issues/38)
- [#B2 - Error visual al ingresar un pedido con texto de personalización muy largo](https://github.com/ORT-FIS-2023S1/obligatorio-layerle-piria/issues/39)

## Informe de calidad del sistema
En términos generales, en los entornos en los que fue testeado el sistema este tuvo un correcto desempeño. No se encontraron errores críticos o bloqueantes, solamente 2 de severidad baja.

## Reflexión

### Reflexión Emiliano Marotta
En lo personal, tanto el testing de nuestro proyecto, o el realizado a otro  grupo, fue una experiencia totalmente nueva y enriquecedora, que siento que me va a servir mucho en el futuro, ya que si bien el alcance del proyecto y las funcionalidades desarrolladas fueron pocas, la metodología de testing y haber abarcado todas las áreas de un proyecto, es algo que voy a tener que aplicar en el futuro.

### Reflexión Rodrigo Conze
Considero que la experiencia de testing me aportó mucho, ya que al trabajar como desarrollador, en esta instancia pude estar del otro lado y pude entender mejor el punto de vista de los testers. Me gustó también el testing cruzado con otro equipo, ya que esto significó probar una aplicación sin previo conocimiento de este, lo cual me obligó a ser mas creativo a la hora de realizar las pruebas.
