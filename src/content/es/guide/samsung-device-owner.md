---
title: Riesgos de configurar Device Owner en teléfonos Samsung
short: Avisos para Samsung
description: Configurar Device Owner en Samsung puede dañar la Carpeta segura y Dual Messenger, o incluso restablecer la contraseña de la pantalla de bloqueo. Si tienes Samsung, lee esto antes de decidir.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

Ice Box se basa en las funciones nativas de propietario del dispositivo (Device Owner) de Android. Samsung es un caso especial entre los fabricantes de teléfonos Android: tiene su propio marco de seguridad llamado KNOX.

Si en un teléfono Samsung configuras y activas una solución sin root basada en el Device Owner nativo de Android, podrías tener estos problemas:

- Algunas funciones de KNOX, como la Carpeta segura, podrían dejar de funcionar.
- La función integrada Dual Messenger deja de funcionar.
- El sistema restablece la contraseña de la pantalla de bloqueo, lo que obliga a restablecer la configuración de fábrica y se pierden los datos.

Ninguno de estos problemas ocurre siempre. Tomemos el más grave, el restablecimiento de la contraseña de bloqueo: en 2018, entre unos 200 000 usuarios de Ice Box con Samsung, recibimos 6 reportes en total, y la cantidad real de usuarios afectados podría ser mayor. Desde que Samsung lanzó One UI, parece que más usuarios han tenido este problema, así que no recomendamos el modo Device Owner en One UI.

Por ahora no sabemos la causa exacta de estos problemas y no hay una buena solución.

> [!CAUTION]
> Si tienes un Samsung, piénsalo bien, muy bien, antes de usar el modo Device Owner.

## Modos recomendados para Samsung {#recommended}

- Con root: usa el [modo Root](/guide/root/).
- Sin root, con Android 11 o versiones posteriores: usa el [modo Depuración inalámbrica](/guide/wireless-debugging/) o el [modo Shizuku](/guide/shizuku/).
- Sin root, con una computadora: usa el [modo ADB](/guide/adb/).

Ninguno de estos modos necesita Device Owner. Salvo el modo Root, todos se deben volver a activar cada vez que reinicias el teléfono.
