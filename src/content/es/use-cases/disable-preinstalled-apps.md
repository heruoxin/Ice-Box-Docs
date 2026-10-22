---
title: Cómo desactivar el bloatware en Android sin root
short: Desactivar bloatware
card: Las apps del sistema preinstaladas que no se pueden desinstalar sí se pueden congelar, y no necesitas root para hacerlo.
description: "Desactiva el bloatware sin root: congela las apps preinstaladas y de publicidad con Ice Box para que desaparezcan de la pantalla principal y no puedan ejecutarse. Funciona con Device Owner y más."
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## Respuesta corta {#answer}

La mayoría de las apps preinstaladas no se pueden desinstalar, pero sí se pueden congelar. Una vez congeladas con Ice Box, desaparecen de la pantalla principal y del panel de apps, y no pueden ejecutarse en segundo plano. Si más adelante necesitas una, descongélala en Ice Box para recuperarla. Congelar apps preinstaladas no requiere root: los modos sin root como Device Owner, Depuración inalámbrica y ADB funcionan todos.

## Pasos {#steps}

1. [Descarga Ice Box](/download/) y actívalo siguiendo la recomendación del [Centro de ayuda](/guide/).
2. En la lista de apps de Ice Box, cambia a las apps del sistema y marca las apps preinstaladas que tengas claro que no vas a necesitar.
3. Congélalas. A partir de ahí, esas apps ya no aparecen en la pantalla principal ni se ejecutan en segundo plano.
4. Para recuperar una, descongélala en Ice Box.

También puedes importar una "lista de apps del sistema que se pueden congelar sin riesgo" que haya compartido otra persona. Ice Box muestra las apps de esa lista que se pueden congelar en tu teléfono y las congela cuando confirmas. Consulta [Congelar apps del sistema preinstaladas](/guide/system-apps/).

## Qué tener en cuenta {#notes}

- Congela solo las apps que tengas claro que no vas a necesitar. Congelar componentes clave del sistema puede hacer que partes de tu teléfono dejen de funcionar bien.
- En MIUI y otros sistemas, ciertas apps clave pueden no ser congelables, o el sistema puede descongelarlas automáticamente después de reiniciar.
- En los teléfonos configurados con la [configuración con código QR](/guide/qr-code/), el sistema no instala de forma predeterminada las apps preinstaladas. Si las necesitas, puedes activarlas en "Laboratorio" de Ice Box.
- Para ver los detalles de cada marca, consulta los [avisos para cada marca de teléfono](/guide/devices/).

## Preguntas frecuentes {#faq}

### ¿En qué se diferencia congelar apps preinstaladas de desactivarlas con comandos ADB?

El efecto es parecido, pero Ice Box te da una interfaz gráfica donde puedes revisar, congelar y descongelar apps cuando quieras, sin tener que recordar comandos.

### ¿Se pueden recuperar las apps congeladas?

Sí. Cuando descongelas una app en Ice Box, vuelve a la normalidad. Antes de desinstalar Ice Box, primero descongela todas las apps.

### ¿Las apps preinstaladas congeladas vuelven después de una actualización del sistema?

Algunos sistemas descongelan automáticamente las apps clave después de reiniciar o de actualizar. Si pasa, vuelve a congelarlas en Ice Box.
