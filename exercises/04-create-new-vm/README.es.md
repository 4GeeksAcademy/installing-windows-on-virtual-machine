# `03` Instalación de máquinas virtuales

En ésta práctica aprenderás a crear una maquina virtual con VirtualBox, y luego a instalar un sistema operativo en ella. Estas maquinas serán tu laboratorio a lo largo del curso, en ellas podrás explorar de manera segura sin afectar el propio sistema operativo de tu máquina. Lo peor que puede pasar es que tengas que instalar la maquina virtual de nuevo, pero tu computadora estará a salvo.

## 1. Crea una nueva máquina Virtual

Al abrir VirtualBox podrás ver el icono de "Nueva" marcado con un ícono azul.

![Inicio de instalador](../../.learn/assets/createvm0.png)

## 2. Escribe un nombre para tu máquina y un sistema operativo

A continuación te presentamos la configuración que debe tener la máquina virtual, las imagenes que se presentan son del `Modo Experto`, verifica que tengas el modo activado y que la pantalla que veas sean como las imagenes. Las mismas opciones se pueden encontrar en `Modo guiado` pero con distinta presentacion.

![Inicio de instalador](../../.learn/assets/createvm0-1.png)

En la lista "Imagen ISO" deberás seleccionar la opcion "Otro" y agregar el archivo que creaste en el paso anterior

![Inicio de instalador](../../.learn/assets/createvm1.png)

## 3. Instalación desatendida

En este paso puedes personalizar configuraciones de la maquina que estas creando y que se aplicarán automáticamente durante la instalación, para que esta no se vea interrumpida en su proceso. Al finalizar el proceso deberás elegir un par de opciones de privacidad, pero ya el trabajo pesado estará hecho.

### Clave de prodcuto

En este caso es importante utilizar una clave de producto genérica, ésta se utiliza para instalar Windows pero no para activarlo. Omitir este paso generará un error en la instalación.

> VK7JG-NPHTM-C97JM-9MPGT-3V66T

![Inicio de instalador](../../.learn/assets/createvm2.png)

## 4. Configuración de hardware

Aquí es donde eliges de cuanta memoria y procesador va a disponer tu maquina. Es importante asignar lo necesario para un funcionamiento optimo, sin comprometer el propio desempeño de la maquina anfitrión.

> Debes asignar como mínimo 2 cpus y 2 GB de memoria a la máquina

![Inicio de instalador](../../.learn/assets/createvm3.png)

## 5. Configuración de almacenamiento

En este caso, usaremos la configuración recomendada.

![Inicio de instalador](../../.learn/assets/createvm4.png)

## 6. Terminar

Cuando presiones el botón "Terminar" se abrirá una ventana donde verás tu maquina virtual. Inmediatamente empieza el proceso de instalación, y gracias a la instalación desatendida solo tendrás que esperar hasta que el proceso termine y tendrás tu nueva maquina virtual con Windows 10.
