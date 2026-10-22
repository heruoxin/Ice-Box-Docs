---
title: "Modo ADB: activa Ice Box con una computadora"
short: Modo ADB
description: ¿No puedes configurar Device Owner o quieres conservar tus cuentas? Activa Ice Box por ADB desde una computadora (modo ADB simple). Sin root, pero hay que reactivarlo después de cada reinicio.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

Si no pudiste configurar el [modo Device Owner](/guide/device-owner/), o no quieres quitar las cuentas de tu teléfono, puedes usar el modo ADB (también llamado modo ADB simple). En qué se diferencia del modo Device Owner:

- **Ventajas**: no hay pasos complicados como quitar cuentas. Puedes usarlo en cuanto lo activas.
- **Desventajas**: tienes que volver a activarlo cada vez que reinicias el teléfono. Si no, no se podrán congelar ni descongelar apps.

En Ice Box, el modo ADB aparece como el modo de funcionamiento "Depuración inalámbrica". En Android 11 y versiones posteriores, también puedes activarlo en el propio teléfono, sin computadora. Consulta [Modo Depuración inalámbrica](/guide/wireless-debugging/).

## Pasos para activarlo {#steps}

1. Asegúrate de tener instalada la versión más reciente de Ice Box.
2. Activa la Depuración por USB en el teléfono y déjala siempre activada. Configura el modo de conexión USB como "Solo carga". En teléfonos Xiaomi, también tienes que activar "Depuración USB (ajustes de seguridad)".
3. Conecta el teléfono a la computadora, abre el activador y elige el modo ADB para activarlo.

[[activator-download]]

Si sabes usar comandos ADB, puedes saltarte el activador y ejecutar esto en tu computadora:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## Preguntas frecuentes {#faq}

### El activador se queda cargando

Extrae todos los archivos del comprimido del activador en tu computadora antes de ejecutarlo. No los extraigas en el almacenamiento del teléfono y no hagas doble clic en el exe dentro del comprimido.

### Ice Box deja de funcionar poco después de desconectar el cable

Deja siempre activada la Depuración por USB y mantén el modo de conexión USB en "Solo carga" sin cambiarlo. En teléfonos Xiaomi, también debe estar activada "Depuración USB (ajustes de seguridad)". Si cambias cualquiera de estos interruptores, el sistema le retira automáticamente el permiso a Ice Box.

### No puedo congelar ni descongelar después de reiniciar el teléfono

Es normal en el modo ADB. Después de reiniciar, conéctalo a la computadora y vuelve a activarlo o, en Android 11 y versiones posteriores, vuelve a activarlo con la [Depuración inalámbrica](/guide/wireless-debugging/).
