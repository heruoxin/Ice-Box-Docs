---
title: "Modo Depuración inalámbrica: activa Ice Box sin root ni computadora"
short: Modo Depuración inalámbrica
description: En Android 11 y versiones posteriores, activa Ice Box con la función Depuración inalámbrica del sistema, sin root ni computadora. Todos los pasos, consejos para la vinculación y preguntas frecuentes.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

El modo Depuración inalámbrica no necesita root ni computadora. Ice Box usa la función "Depuración inalámbrica" del sistema para obtener el permiso que necesita para congelar apps, y todo el proceso se hace en el teléfono.

Antes de empezar, ten en cuenta lo siguiente:

- Requiere Android 11 o una versión posterior.
- Durante la vinculación necesitas estar conectado a una red Wi-Fi. Cualquier red Wi-Fi sirve.
- Cada vez que reinicies el teléfono, tendrás que volver a activar el interruptor "Depuración inalámbrica". Si no, Ice Box no podrá congelar ni descongelar apps.

Si tu teléfono tiene una versión anterior a Android 11, o prefieres activarlo con una computadora, consulta [Modo ADB](/guide/adb/).

## Antes de empezar {#before}

Ice Box revisa cada uno de estos puntos en su página de configuración. Toca cualquier punto que todavía no se cumpla para ir directo a la opción correspondiente:

1. **Desactiva la VPN por ahora**. Puedes volver a activarla después de la vinculación.
2. **Permite las notificaciones de Ice Box**. El código de vinculación se ingresa en la notificación de Ice Box.
3. **Activa la Depuración por USB**. Si todavía no activaste las Opciones para desarrolladores, consulta la siguiente sección.
4. **Conéctate a una red Wi-Fi**. Cualquier red Wi-Fi sirve.
5. **Permite que Ice Box se ejecute en segundo plano**. En algunos teléfonos, tienes que configurar el uso en segundo plano de Ice Box como "Sin restricciones" en la configuración del sistema.

## Cómo activar la Depuración por USB {#usb-debugging}

1. Abre "Configuración", busca "Acerca del teléfono" y toca "Número de compilación" 7 veces seguidas hasta que veas un mensaje como "Modo de desarrollador activado".
2. Vuelve a "Configuración", busca "Opciones para desarrolladores" en "Sistema" o en "Ajustes adicionales" y activa el interruptor "Depuración por USB".

La ubicación de los menús varía según la marca y la versión del sistema. Ice Box incluye ilustraciones paso a paso para las marcas más comunes, que puedes seguir mientras lo haces.

## Obtén el código de vinculación en tres pasos {#pairing}

1. En Opciones para desarrolladores, busca "Depuración inalámbrica", actívala y tócala para abrir su página de configuración.
2. Elige "Vincular dispositivo con un código de vinculación".
3. Deja abierta la ventana del código de vinculación, desliza hacia abajo el panel de notificaciones e ingresa el código de vinculación de seis dígitos en la notificación de Ice Box.

Cuando la vinculación se complete, Ice Box mostrará "Depuración inalámbrica activada" y estará listo para usarse. Si tienes problemas para vincular, Ice Box también tiene un video tutorial que puedes desplegar.

> [!TIP]
> Si no ves "Depuración inalámbrica" en Opciones para desarrolladores, lo más probable es que las Opciones para desarrolladores todavía no estén activadas. Primero completa los pasos de la sección anterior.

## Después de reiniciar el teléfono {#after-reboot}

Cuando el teléfono se reinicia, el sistema le retira el permiso a Ice Box. Vuelve a Opciones para desarrolladores y activa el interruptor "Depuración inalámbrica", y Ice Box volverá a funcionar. Ice Box te lo recuerda con una notificación.

## Preguntas frecuentes {#faq}

### Al vincular aparece "Desactiva la VPN y la optimización de la batería"

Ice Box no puede conectarse al servicio de depuración inalámbrica del sistema. Desactiva tu VPN y cualquier app de proxy, desactiva la optimización de la batería para Ice Box en la configuración del sistema y vuelve a intentarlo.

### Aparece "El código de vinculación es incorrecto" o "El código venció"

El código de vinculación solo funciona mientras su ventana está abierta. Obtén un código nuevo e ingrésalo rápido mientras la ventana sigue abierta.

### No veo el cuadro para ingresar el código en la notificación

Asegúrate de que las notificaciones de Ice Box estén permitidas. Algunos sistemas contraen la notificación. Toca el botón para expandir que está a la derecha de la notificación para ver el cuadro.

### Xiaomi, Huawei, OPPO u otros teléfonos dicen que el permiso de ADB no es suficiente

Activa en Opciones para desarrolladores la opción correspondiente a tu marca. En teléfonos Xiaomi, activa "Depuración USB (ajustes de seguridad)". En teléfonos Huawei, activa "Permitir depuración ADB en modo solo carga". En teléfonos OPPO y OnePlus, activa "Desactivar supervisión de permisos". En otras marcas, activa opciones parecidas si hace falta. Para más información, consulta los [avisos por marca de teléfono](/guide/devices/).
