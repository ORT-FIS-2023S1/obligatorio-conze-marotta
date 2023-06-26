# Informe de testing 
Proyecto asignado: [link]

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

## Reporte de issues

## Informe de calidad del sistema

## Reflexión


## Reflexión
