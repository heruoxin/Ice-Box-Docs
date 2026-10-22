---
title: Activar Ice Box con el activador web
short: Activador web
description: "Sin instalar nada: activa el modo Device Owner o ADB de Ice Box con el activador web en tu navegador mediante WebUSB. Windows, macOS y Linux. Se recomienda Chrome."
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

El activador web lo desarrolla [@web1n](https://github.com/web1n). Hace lo mismo que el activador exe y funciona en cualquier sistema operativo de computadora. Te recomendamos usar Chrome.

[Abrir el activador web](https://adb.http.gs/icebox.html)

El activador web puede activar dos modos:

- **Modo Device Owner**: lo activas una vez y sigue funcionando, pero en algunos teléfonos puede tener efectos secundarios.
- **Modo ADB**: no tiene efectos secundarios, pero tienes que conectarte a una computadora y volver a activarlo cada vez que reinicias el teléfono o cambias la configuración USB del sistema.

## Posibles efectos secundarios del modo Device Owner {#side-effects}

Los sistemas de los teléfonos Samsung y de marcas chinas suelen personalizar Android, lo que causa algunos problemas de compatibilidad con el modo Device Owner. Los más comunes son:

- El sistema puede bloquear con contraseña los teléfonos Samsung (hasta ahora hay unos 4 reportes por cada 200 000). Lee primero los [avisos para Samsung](/guide/samsung-device-owner/).
- Aparece un aviso de desinstalación cada vez que congelas una app y una solicitud de permiso cuando la descongelas (Huawei, Smartisan).
- La barra de notificaciones muestra a cada rato "Administrador de dispositivos activado, toca para desactivar" (OPPO, vivo).
- La función integrada del sistema para duplicar apps deja de funcionar (Huawei, MIUI).
- De vez en cuando, una app recién descongelada no puede conectarse a internet. Cierra la app y vuelve a abrirla (OnePlus, Smartisan y otros).

Si no puedes aceptar estos problemas, elige el modo ADB. Tampoco necesita root, pero tienes que volver a activarlo con una computadora cada vez que reinicias el teléfono.

## Cómo activarlo {#steps}

1. Asegúrate de que Ice Box esté instalado en el teléfono. Quita el bloqueo de pantalla. En teléfonos Sony, saca la tarjeta SIM. En teléfonos Xiaomi, activa "Depuración USB (ajustes de seguridad)" y desactiva "Optimización de MIUI".
2. Conecta el teléfono a la computadora con un cable USB y cierra en la computadora cualquier software de seguridad, suite para PC o administrador de teléfonos.
3. En la computadora, abre el [activador web](https://adb.http.gs/icebox.html) en Chrome, conecta tu dispositivo y actívalo.

Antes de activar el modo Device Owner, también tienes que cerrar sesión en todas las cuentas del teléfono. Consulta [Configuración del modo Device Owner](/guide/device-owner/#steps).
