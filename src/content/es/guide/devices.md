---
title: Avisos para cada marca de teléfono
short: Avisos por marca
description: "Avisos de Ice Box para Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu y más: Opciones para desarrolladores, problemas con Device Owner, accesos directos y notificaciones push."
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Cada marca de teléfono personaliza Android en distinta medida, así que Ice Box se comporta de forma un poco diferente según la marca. Abajo están los problemas conocidos, ordenados por marca. Antes de configurar nada, busca la marca de tu teléfono y échale un vistazo.

## Xiaomi / Redmi / POCO {#xiaomi}

- Antes de usar el modo ADB, Depuración inalámbrica o Device Owner, activa "Depuración USB (ajustes de seguridad)" en Opciones para desarrolladores.
- Antes de configurar Device Owner, desactiva "Optimización de MIUI". Así, las apps no volverán a pedir sus permisos cada vez que las congeles y no verás avisos de que la app se desinstaló.
- Después de configurar Device Owner, es posible que la función integrada del sistema para duplicar apps no funcione.
- Si no se pueden agregar accesos directos en la pantalla principal, activa para Ice Box el permiso de accesos directos en la pantalla principal en la configuración del sistema. Si los accesos directos se agregan pero no funcionan, permite que Ice Box pueda "iniciar otras apps" y "mostrar ventanas emergentes mientras se ejecuta en segundo plano".
- A partir de MIUI 11, el traspaso de permisos entre Ice Box y apps como Brevent, Island y Shizuku puede fallar. Primero desactiva "Optimización de MIUI". Luego mantén presionado el ícono de Ice Box en la pantalla principal, abre Información de la app y activa manualmente "Otros permisos" en la configuración de permisos.
- Algunas apps clave del sistema (como Mi Music y la tienda de apps) pueden no ser congelables, o el sistema puede descongelarlas automáticamente después de reiniciar. Desde la versión 3.30.7, Ice Box puede congelar más componentes del sistema de MIUI / HyperOS.
- Si usas el modo Device Owner, **no desinstales Ice Box directamente desde la pantalla principal**. Así se pierde el permiso de Device Owner y las apps congeladas no se podrán descongelar. Sigue los pasos de [Desinstalar Ice Box](/guide/uninstall/).

## Samsung {#samsung}

- Después de configurar Device Owner, la Carpeta segura y Dual Messenger pueden dejar de funcionar, e incluso se puede restablecer la contraseña de la pantalla de bloqueo. Lee sin falta los [avisos para Samsung](/guide/samsung-device-owner/) antes.
- Si tienes Samsung, te recomendamos el modo Root, Depuración inalámbrica, Shizuku o ADB.

## Huawei / Honor {#huawei}

- Si usas el modo ADB o Depuración inalámbrica, activa "Permitir depuración ADB en modo solo carga" en Opciones para desarrolladores.
- Después de configurar Device Owner, puede aparecer un aviso de desinstalación cada vez que congelas una app y una solicitud de permiso cuando la descongelas. Es posible que la función integrada del sistema App Twin no funcione.
- Si no se pueden agregar accesos directos en la pantalla principal, dale manualmente a Ice Box el permiso para agregar accesos directos en la configuración del sistema. Con un launcher de terceros, es posible que no puedas agregar accesos directos desde Ice Box. En ese caso, prueba a mantener presionada un área vacía de la pantalla principal para agregarlos.
- Por limitaciones del sistema, la congelación automática "Al apagar la pantalla" puede no funcionar. Usa en su lugar "Al tocar Inicio" o "Al tocar Inicio dos veces".
- En las versiones recientes de EMUI, el launcher de Huawei ya no se puede congelar. En las versiones anteriores a EMUI 9.0 todavía se puede.

## OPPO / OnePlus / realme {#oppo}

- Si usas el modo ADB o Depuración inalámbrica, activa "Desactivar supervisión de permisos" en Opciones para desarrolladores.
- Después de configurar Device Owner, la barra de notificaciones puede mostrar a cada rato "Administrador de dispositivos activado, toca para desactivar".
- Si la lista de apps solo muestra unas pocas, permite que Ice Box lea la lista de apps en la configuración de permisos del sistema.
- Algunas apps usan el servicio push del sistema, así que el sistema puede seguir mostrando sus notificaciones después de congelarlas, aunque las apps no se ejecuten en segundo plano. Si no quieres esas notificaciones, desactiva las notificaciones de esa app en la configuración del sistema.
- De vez en cuando, una app recién descongelada no puede conectarse a internet. Cierra la app y vuelve a abrirla.

## vivo / iQOO {#vivo}

- Después de configurar Device Owner, la barra de notificaciones puede mostrar a cada rato "Administrador de dispositivos activado, toca para desactivar".
- Si la lista de apps solo muestra unas pocas, permite que Ice Box lea la lista de apps en la configuración de permisos del sistema.
- Igual que en OPPO, algunas apps pueden seguir mostrando notificaciones a través del push del sistema después de congelarlas.

## Sony {#sony}

- Saca la tarjeta SIM antes de configurar Device Owner.
- Te recomendamos configurar Ice Box antes de actualizar a Android 9. Android 9 agrega una cuenta oculta que es difícil de quitar. Si ya actualizaste, usa la [configuración con código QR](/guide/qr-code/). Los teléfonos que ya estaban configurados no se ven afectados.

## Meizu y Smartisan {#meizu}

- Meizu: los accesos directos en la pantalla principal pueden no funcionar aunque se hayan agregado. Todavía no encontramos un interruptor del sistema para esto.
- Smartisan: no admite accesos directos de ninguna app. Después de configurar Device Owner, puede aparecer un aviso de desinstalación al congelar una app, y las apps descongeladas tienen todos sus permisos permitidos de forma predeterminada. Así está diseñado el sistema de Smartisan y no tiene nada que ver con Ice Box.

## Pixel y Android de stock {#pixel}

- Los sistemas de stock o casi de stock son los más compatibles con todos los modos de funcionamiento.
- Sin computadora, puedes usar la [configuración con código QR](/guide/qr-code/) para que Ice Box sea el Device Owner durante un restablecimiento de fábrica, o usar el [modo Depuración inalámbrica](/guide/wireless-debugging/) en Android 11 y versiones posteriores.
