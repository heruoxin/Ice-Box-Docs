---
title: Activar Ice Box con el activador en un clic (Windows)
short: Activador en un clic
description: Usa el activador en un clic en una PC con Windows para activar el modo Device Owner o el modo ADB de Ice Box sin escribir comandos. Incluye la descarga, los pasos y preguntas frecuentes.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

El activador en un clic lo desarrolla [@web1n](https://github.com/web1n). Funciona en computadoras con Windows y activa el modo Device Owner de Ice Box, así no tienes que escribir comandos ADB a mano.

[[activator-download]]

Si no tienes una computadora con Windows, o tienes problemas con el activador exe, usa el [activador web](/guide/web-activator/). Hace lo mismo.

## Lee esto primero {#before}

Los sistemas de las marcas de teléfonos chinas suelen personalizar Android, lo que causa algunos problemas de compatibilidad con el modo Device Owner. Los más comunes son:

- El sistema puede bloquear con contraseña los teléfonos Samsung (hasta ahora hay unos 4 reportes por cada 200 000). Lee primero los [avisos para Samsung](/guide/samsung-device-owner/).
- Aparece un aviso de desinstalación cada vez que congelas una app y una solicitud de permiso cuando la descongelas (Huawei, Smartisan).
- La barra de notificaciones muestra a cada rato "Administrador de dispositivos activado, toca para desactivar" (OPPO, vivo).
- La función integrada del sistema para duplicar apps deja de funcionar (Huawei, MIUI).
- De vez en cuando, una app recién descongelada no puede conectarse a internet. Cierra la app y vuelve a abrirla (OnePlus, Smartisan y otros).

Si no puedes aceptar estos problemas, usa el [modo ADB](/guide/adb/). Tampoco necesita root, pero tienes que volver a activarlo con una computadora cada vez que reinicias el teléfono.

En cambio, el modo Device Owner no te obliga a volver a la computadora una y otra vez. Lo configuras una vez y sigue funcionando, aunque reinicies o actualices el sistema.

## Pasos {#steps}

Si ya decidiste activar Ice Box en modo Device Owner, sigue estos pasos:

1. Asegúrate de que Ice Box esté instalado en el teléfono. Quita el bloqueo de pantalla. En teléfonos Sony, saca la tarjeta SIM. En teléfonos Xiaomi, activa "Depuración USB (ajustes de seguridad)" y desactiva "Optimización de MIUI".
2. En la configuración del sistema, cierra sesión en todas las cuentas, como las de Xiaomi, Huawei y Google. Puedes volver a iniciar sesión después de la activación.
3. Descarga y extrae el activador. Extráelo en la computadora, no en el almacenamiento del teléfono.
4. Activa la Depuración por USB en el teléfono y conéctalo a la computadora con un cable USB.
5. Haz clic en "Activar Ice Box" (激活冰箱) en el activador.

Cuando termine correctamente, abre Ice Box y empieza a usarlo.

Si tienes otros problemas, primero comprueba que quitaste todas las cuentas del sistema. Si aun así no funciona, compara el registro que muestra el activador con las [preguntas frecuentes del modo Device Owner](/guide/device-owner/#faq).

## Preguntas frecuentes {#faq}

### El activador se queda cargando

Extrae todos los archivos del comprimido del activador en tu computadora antes de ejecutarlo. No los extraigas en el almacenamiento del teléfono y no hagas doble clic en el exe dentro del comprimido.

### El activador dice que no encuentra el dispositivo

Comprueba que la Depuración por USB esté activada, que tu cable admita transferencia de datos, que el controlador del teléfono esté instalado en la computadora y que ninguna suite para PC, administrador de teléfonos o antivirus esté ocupando la conexión.
