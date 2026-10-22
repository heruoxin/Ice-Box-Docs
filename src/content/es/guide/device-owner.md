---
title: Configurar el modo Device Owner
short: Modo Device Owner
description: "Configura el modo Device Owner de Ice Box sin root: quita tus cuentas por un momento y ejecuta un comando ADB en una computadora. Sigue funcionando después de reiniciar y de actualizar el sistema."
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

Si tu teléfono tiene root, solo abre Ice Box y empieza a usarlo. No hace falta ninguna configuración extra. Si tu teléfono no se puede rootear y quieres algo que configuras una vez y sigues usando, elige el modo Device Owner. La configuración necesita una computadora, así que lee primero esta página completa.

## ¿Qué es Device Owner? {#what}

Device Owner (propietario del dispositivo) es una función del marco de administración empresarial de Android. Permite congelar y descongelar cualquier app sin root. Ice Box solo usa las capacidades relacionadas, como congelar apps.

- Un teléfono solo puede tener un Device Owner a la vez.
- Solo se puede configurar con un comando ADB o con un código QR. Activarlo en "Apps de administración de dispositivos", en la configuración del teléfono, no funciona y no te da este permiso.
- Una vez configurado, no tienes que volver a configurarlo después de reiniciar o de actualizar el sistema.

## Lee esto primero {#before}

Los sistemas de las marcas de teléfonos chinas suelen agregar funciones personalizadas propias, y estas causan algunos problemas de compatibilidad con el modo Device Owner. Los más comunes son:

- El sistema puede bloquear con contraseña los teléfonos Samsung. Lee sin falta los [avisos para Samsung](/guide/samsung-device-owner/) antes.
- Aparece un aviso de desinstalación cada vez que congelas una app y una solicitud de permiso cuando la descongelas (Huawei, Smartisan).
- La barra de notificaciones muestra a cada rato "Administrador de dispositivos activado, toca para desactivar" (OPPO, vivo).
- La función integrada del sistema para duplicar apps deja de funcionar (Huawei, MIUI).
- De vez en cuando, una app recién descongelada no puede conectarse a internet. Cierra la app y vuelve a abrirla (OnePlus, Smartisan y otros).

Si no puedes aceptar estos problemas, considera el [modo ADB](/guide/adb/) o el [modo Depuración inalámbrica](/guide/wireless-debugging/). Tampoco necesitan root, pero tienes que volver a activarlos cada vez que reinicias el teléfono.

## ¿Activador o línea de comandos? {#tools}

Si no conoces ADB ni la línea de comandos, usa una de las herramientas de activación. El resultado es exactamente el mismo que con la línea de comandos:

- [Activador en un clic](/guide/activator/): para computadoras con Windows.
- [Activador web](/guide/web-activator/): funciona en Windows, macOS y Linux. Se recomienda Chrome.
- [AutumnBox (秋之盒)](/guide/autumnbox/): para computadoras con Windows.

¿No tienes computadora? Prueba la [configuración con código QR](/guide/qr-code/). El resultado es exactamente el mismo, pero primero necesitas restablecer la configuración de fábrica, y algunos sistemas de marcas de teléfonos chinas no lo admiten.

## Configurar con la línea de comandos {#steps}

1. Asegúrate de que tu teléfono tenga Android 7.0 o una versión posterior y la versión más reciente de Ice Box instalada. Asegúrate de saber usar comandos [ADB](https://developer.android.com/tools/adb) y de haber leído esta página completa.
2. En teléfonos Sony, saca la tarjeta SIM. En teléfonos Xiaomi, activa "Depuración USB (ajustes de seguridad)" en Opciones para desarrolladores y desactiva "Optimización de MIUI".
3. Ve a "Configuración > Cuentas" en tu teléfono y quita todas las cuentas, incluidas las cuentas del sistema como Google, Xiaomi y Huawei. Puedes volver a iniciar sesión después de la configuración.
4. Si configuraste varios usuarios, el modo invitado o apps duplicadas, desactívalos o quítalos también. Puedes volver a activarlos después de la configuración.
5. Ejecuta el siguiente comando en tu computadora (un emulador de terminal en el teléfono no sirve).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

Si ves algo como "Success", la configuración funcionó. Abre Ice Box y empieza a usarlo. También puedes volver a agregar las cuentas que quitaste.

ADB se puede descargar oficialmente desde Google: [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## ¿No funcionó la configuración? {#faq}

### Aparece "'adb' is not recognized as an internal or external command, operable program or batch file"

Es posible que no estés familiarizado con la línea de comandos de la computadora. Te sugerimos activarlo con el [activador en un clic](/guide/activator/) o con el [activador web](/guide/web-activator/).

### El activador se queda cargando

Extrae todos los archivos del comprimido del activador en tu computadora antes de ejecutarlo. No los extraigas en el almacenamiento del teléfono y no hagas doble clic en el exe dentro del comprimido.

### Aparece "error: no devices/emulators found"

El teléfono no está conectado a la computadora. Comprueba que la Depuración por USB esté activada, que el controlador del teléfono esté bien instalado en la computadora y que ninguna suite para PC, administrador de teléfonos o antivirus esté bloqueando la conexión.

### Aparece "Not allowed to ... already several accounts on the device"

No se quitaron todas las cuentas en el paso 3. Cierra sesión en todas las cuentas del teléfono, incluida tu cuenta de Google y las cuentas integradas del sistema como Xiaomi y Huawei. En teléfonos Sony, saca la tarjeta SIM y reinicia.

### Aparece "Not allowed to ... already several users on the device"

No se quitaron todos los usuarios o apps duplicadas del paso 4. Quita o desactiva todos los usuarios adicionales, el modo invitado y las apps duplicadas.

### Aparece "Trying to set the device owner, but device owner is already set."

Otra app del teléfono ya está configurada como Device Owner, y un teléfono solo puede tener un Device Owner. Si esa app funciona con Ice Box, como Island o BlackHouse (小黑屋), cambia Ice Box al modo de funcionamiento correspondiente y podrás usarlo de inmediato. Consulta [otros modos de funcionamiento](/guide/other-modes/).

### Los teléfonos Xiaomi dicen "Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS"

En Opciones para desarrolladores, en la configuración del sistema, activa manualmente "Depuración USB (ajustes de seguridad)". Si sigue fallando, desactiva "Optimización de MIUI" y vuelve a intentarlo.

## Preguntas después de configurarlo correctamente {#faq-after}

### ¿Es normal ver en la barra de notificaciones un aviso como "Tu organización administra este dispositivo"?

Sí. Así funciona el modo Device Owner. El texto lo muestra el sistema y no se puede quitar, pero puedes cambiar el "Nombre de la organización" en "Laboratorio" de Ice Box por el texto que quieras.

### En algunos teléfonos, la configuración dice que el Device Owner puede leer información personal como el calendario y el correo. ¿Ice Box la lee?

No. Ice Box solo usa los permisos de Device Owner relacionados con congelar apps. No usa permisos que no tengan relación, y nunca lee tu calendario, tu correo ni información parecida.

### ¿Cómo quito el permiso de Ice Box cuando ya no lo quiero?

Primero descongela todas las apps y luego toca "Desinstalar" en la configuración de Ice Box. Cuando confirmes, Ice Box quita su autorización de Device Owner y se desinstala. Consulta [Desinstalar Ice Box](/guide/uninstall/).

### ¿Por qué no puedo descongelar apps que congelé antes en el modo Root o ADB?

Los modos de funcionamiento no son compatibles entre sí. Vuelve a tu modo de funcionamiento anterior en "Laboratorio" de Ice Box. Las apps se deben descongelar en el mismo modo con el que se congelaron.
