---
title: Activar Ice Box con AutumnBox
short: AutumnBox
description: AutumnBox es una caja de herramientas para Windows que simplifica las tareas de ADB y puede activar el modo Device Owner de Ice Box en un clic. Pasos y precauciones.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox (秋之盒) es una caja de herramientas en un clic que simplifica las operaciones de ADB. Muchas gracias a [zsh2401](https://zsh2401.top/) por todo su trabajo para desarrollarla.

AutumnBox solo funciona en Windows. Si tu computadora usa macOS o Linux, usa el [activador web](/guide/web-activator/) o sigue los [pasos de configuración por línea de comandos](/guide/device-owner/#steps).

> [!NOTE]
> El sitio web de AutumnBox no está disponible en este momento y el proyecto ya no se actualiza. Su código fuente y sus versiones anteriores están en [GitHub](https://github.com/zsh2401/AutumnBox). Te recomendamos usar el [activador en un clic](/guide/activator/) o el [activador web](/guide/web-activator/), que hacen lo mismo.

## Lee esto primero {#before}

Los sistemas de las marcas de teléfonos chinas suelen agregar funciones personalizadas propias, y estas causan algunos problemas de compatibilidad con el modo Device Owner. Los más comunes son:

- El sistema puede bloquear con contraseña los teléfonos Samsung (hasta ahora hay unos 4 reportes por cada 200 000). Lee primero los [avisos para Samsung](/guide/samsung-device-owner/).
- Aparece un aviso de desinstalación cada vez que congelas una app y una solicitud de permiso cuando la descongelas (Huawei, Smartisan).
- La barra de notificaciones muestra a cada rato "Administrador de dispositivos activado, toca para desactivar" (OPPO, vivo).
- La función integrada del sistema para duplicar apps deja de funcionar (Huawei, MIUI).
- De vez en cuando, una app recién descongelada no puede conectarse a internet. Cierra la app y vuelve a abrirla (OnePlus y otros).
- En teléfonos Sony, te recomendamos configurar Ice Box antes de actualizar a Android 9. Android 9 agrega una cuenta oculta que es difícil de quitar. Si ya actualizaste, usa la [configuración con código QR](/guide/qr-code/). Los teléfonos que ya estaban configurados no se ven afectados.

Si no puedes aceptar estos problemas, usa [Shizuku](/guide/shizuku/) o el [modo ADB](/guide/adb/). Tampoco necesitan root, pero tienes que volver a activarlos cada vez que reinicias el teléfono.

En cambio, el modo Device Owner no te obliga a volver a la computadora una y otra vez. Lo configuras una vez y sigue funcionando, aunque reinicies o actualices el sistema.

## Pasos {#steps}

Si ya decidiste activar Ice Box en modo Device Owner, sigue estos pasos:

1. Asegúrate de que Ice Box esté instalado en el teléfono. Quita el bloqueo de pantalla. En teléfonos Sony, saca la tarjeta SIM. En teléfonos Xiaomi, activa "Depuración USB (ajustes de seguridad)" y desactiva "Optimización de MIUI".
2. En la configuración del sistema, quita todas las cuentas, como las de Xiaomi, Huawei y Google. Puedes volver a iniciar sesión después de la activación.
3. Descarga y abre AutumnBox.
4. Activa la Depuración por USB en el teléfono y conéctalo a la computadora. Si no se conecta, normalmente es porque falta el controlador o porque otra suite para PC está en conflicto. Revisa el controlador y cierra cualquier otro software de administración de teléfonos.
5. Haz clic en la función "Activar Ice Box" (激活冰箱) en AutumnBox.

Normalmente, ya puedes abrir Ice Box y empezar a usarlo. Si tienes problemas, primero comprueba que quitaste todas las cuentas del sistema. Si aun así no funciona, compara el registro de salida con las [preguntas frecuentes del modo Device Owner](/guide/device-owner/#faq).
