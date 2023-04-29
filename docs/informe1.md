# Informe entrega 1
## Repositorio Git

### Comandos Git que utilizaremos

A continuación se detallan los comandos de git que serán utilizados durante el transcurso del proyecto:

- **git clone**: utilizado para clonar el repositorio localmente.

- **git add**: comando para indicar que archivos pasan al área de *Staging*, para que los cambios realizados en dichos archivos sean incluidos en el proximo commit.

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

Por otro lado, tambien utilizaremos una rama separada para cada feature a implementar, con un nombre descriptivo de dicha feature. Al terminar de implementar y probar la nueva feature, se deberá hacer el merge de esta rama hacia *development*, donde se irán testeando todas las funcionalidades en conjunto. 

Una vez estabilizada la rama *development* y seguros de que contiene lo necesario para cada instancia de entrega, se hará el merge de dicha rama hacia *main*.

### Commits

Para mantener un historial de cambios lo mas prolijo posible, utilizaremos mensajes de commits que describan de forma especifica y concisa cuales son los cambios realizados en dicho commit.

### Pull/Push

Consideramos importante trabajar sobre una versión lo mas actualizada posible del repositorio, por lo cual recomendamos realizar un *git pull* del repositorio remoto al menos una vez al día antes de trabajar.

También consideramos importante mantener la versión del repositorio remoto actualizada, por lo cual recomendamos también hacer *git push* una vez al día al finalizar el trabajo.

## Elicitación

## Especificación

## Validación y verificación
## Reflexión
