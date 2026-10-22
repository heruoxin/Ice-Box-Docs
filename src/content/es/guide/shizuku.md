---
title: Activar Ice Box con Shizuku
short: Modo Shizuku
description: Instala Shizuku, inícialo con la Depuración inalámbrica y Ice Box funcionará sin root ni computadora. Los teléfonos con root también pueden usar Sui. Aquí tienes los pasos y las notas.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/) es una herramienta que ayuda a otras apps a obtener permisos del sistema. Con Shizuku instalado, puedes usar la función "Depuración inalámbrica" del sistema para activar Ice Box sin root ni computadora.

Antes de empezar, ten en cuenta lo siguiente:

- Para iniciar Shizuku con la Depuración inalámbrica necesitas Android 11 o una versión posterior.
- Cada vez que reinicies el teléfono, tendrás que volver a iniciar Shizuku. Si no, Ice Box no podrá congelar ni descongelar apps.
- Mientras el servicio de Shizuku esté detenido, tampoco se podrán descongelar las apps congeladas. Todo vuelve a funcionar normalmente cuando el servicio de Shizuku se reanuda.

## Pasos para activarlo {#steps}

1. Instala Shizuku en el teléfono desde [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) o desde [CoolApk (酷安)](https://www.coolapk.com/), una tienda de apps Android de China.
2. Sigue la [guía oficial de Shizuku](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) para iniciarlo con la Depuración inalámbrica.
3. Abre Ice Box, elige "Shizuku Manager" en "Cambiar modo de funcionamiento" y permite el acceso a Ice Box cuando Shizuku lo pida.

Listo, ya puedes usar Ice Box. Después de reiniciar el teléfono, primero vuelve a iniciar Shizuku.

## Teléfonos con root: usa Sui {#sui}

Sui es la versión root de Shizuku. Funciona como módulo de Magisk y se inicia automáticamente después de reiniciar. Ice Box también es compatible con Sui. Después de instalarlo, elige "Sui" en "Cambiar modo de funcionamiento" de Ice Box.

Los teléfonos con root también pueden usar directamente el [modo Root](/guide/root/).

## Preguntas frecuentes {#faq}

### Aparece "No se pudo obtener el permiso de Shizuku"

Asegúrate de que el servicio de Shizuku esté en ejecución y dale permiso a Ice Box en Shizuku.

### Shizuku no funciona con Ice Box en teléfonos Xiaomi

A partir de MIUI 11, el traspaso de permisos entre apps de terceros puede fallar. Primero desactiva "Optimización de MIUI". Luego mantén presionado el ícono de Ice Box en la pantalla principal, abre Información de la app y activa manualmente "Otros permisos" en la configuración de permisos.
