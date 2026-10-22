---
title: Congelar apps del sistema preinstaladas
short: Congelar apps preinstaladas
description: Ice Box puede congelar algunas apps del sistema preinstaladas, también en los modos sin root. Qué revisar antes, apps que no se pueden congelar, listas compartidas y cómo actualizar apps congeladas.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Muchos teléfonos traen un montón de software preinstalado y apps de publicidad que nunca vas a usar. Ice Box puede congelar estas apps preinstaladas: no se ejecutarán en segundo plano ni aparecerán en la pantalla principal. Cuando necesites alguna, descongélala en Ice Box para recuperarla.

## Antes de congelar {#before}

- Congela solo las apps que tengas claro que no vas a necesitar. Si tienes dudas, no la congeles. Congelar componentes clave del sistema puede hacer que el teléfono falle.
- Algunos sistemas tratan de forma especial las apps clave: en MIUI y sistemas parecidos, algunas apps clave no se pueden congelar o el sistema las descongela a la fuerza después de reiniciar.
- En las versiones recientes de EMUI, el launcher de Huawei ya no se puede congelar.
- Las apps que funcionan con permiso de administrador del dispositivo no se pueden congelar. Primero quítale el permiso a la app en "Configuración > Seguridad > Apps de administración de dispositivos" y luego congélala.

## Importar una lista de congelación compartida {#lists}

Ice Box puede compartir e importar listas de apps del sistema que se pueden congelar sin riesgo. Cuando abres el enlace de una lista que alguien compartió, Ice Box muestra las apps de esa lista que se pueden congelar en tu teléfono y las congela después de que confirmes cada una.

También puedes copiar el texto compartido y tocar "Importar del portapapeles" en la configuración de Ice Box.


## Apps preinstaladas después de configurar con código QR {#qr}

En los teléfonos configurados con la [configuración con código QR](/guide/qr-code/), el sistema no instala de forma predeterminada las apps preinstaladas. Cuando necesites alguna, ve a "Laboratorio" en la configuración de Ice Box, toca "Activar apps del sistema preinstaladas" y elige las apps que quieres instalar.

## Preguntas frecuentes {#faq}

### ¿Cómo actualizo una app congelada?

Si usas CoolApk (酷安), una tienda de apps Android de China, activa "Mostrar apps ocultas" en la sección de laboratorio de la configuración de CoolApk. Con otras tiendas de apps, primero descongela la app en Ice Box y vuelve a congelarla después de actualizarla.

### Algunas apps del sistema no se pueden congelar o se descongelan solas después de reiniciar

Es el sistema protegiendo sus apps clave, y Ice Box no puede evitarlo. MIUI y otros sistemas lo hacen.
