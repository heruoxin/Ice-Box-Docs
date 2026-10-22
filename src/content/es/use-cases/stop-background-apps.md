---
title: Cómo evitar que las apps de Android se ejecuten en segundo plano
short: Detener apps en segundo plano
card: Pon en Ice Box las apps que casi no usas y no podrán iniciarse ni ejecutarse en segundo plano, ni gastar ahí tu batería y tus datos.
description: "Evita que las apps de Android se ejecuten en segundo plano: congela con Ice Box las apps que se inician solas y descongélalas con un toque cuando las necesites. Funciona sin root."
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## Respuesta corta {#answer}

Congélalas. Una app congelada no puede ejecutarse, así que no puede iniciarse sola ni quedarse en ejecución en segundo plano, y no gasta batería ni datos ahí. Ice Box puede congelar estas apps con un toque. Cuando necesites una, tócala para descongelarla y abrirla, y Ice Box la vuelve a congelar automáticamente cuando terminas. Ice Box funciona tanto en teléfonos con root como sin root.

## ¿Por qué las apps se ejecutan en segundo plano? {#why}

Muchas apps se inician automáticamente cuando el teléfono enciende, se conecta a una red, empieza a cargarse o recibe un mensaje push, aunque no las hayas abierto en mucho tiempo. "Forzar detención" de Android solo detiene una app una vez. Después, la app puede volver a iniciarse sola.

Congelar es diferente: una vez que una app está congelada, el sistema no la volverá a iniciar hasta que la descongeles en Ice Box.

## Detén las apps en segundo plano con Ice Box {#steps}

1. [Descarga Ice Box](/download/) y actívalo siguiendo la recomendación del [Centro de ayuda](/guide/).
2. En la lista de apps de Ice Box, marca las apps que casi no usas pero no quieres desinstalar.
3. Toca o desliza el botón de congelar en la parte inferior de Ice Box para congelar esas apps.
4. Cuando necesites una, tócala en Ice Box o en su acceso directo de la pantalla principal. Ice Box primero la descongela y luego la abre.
5. Activa la [Congelación automática](/guide/auto-freeze/) y Ice Box las volverá a congelar automáticamente cuando se apague la pantalla.

## Qué tener en cuenta {#notes}

- Las apps congeladas no pueden recibir sus propios mensajes push. En teléfonos como OPPO, vivo y OnePlus, algunas apps usan el servicio push del sistema y pueden seguir mostrando notificaciones, pero la app en sí no se ejecuta.
- Las apps que tienen que seguir funcionando en segundo plano, como las apps de chat que deben recibir mensajes al instante, las alarmas y la navegación, no son buenas candidatas para congelar.
- La Congelación automática necesita que Ice Box se ejecute en segundo plano. Consulta [Congelación automática](/guide/auto-freeze/) para configurar los permisos de segundo plano de Ice Box.

## Preguntas frecuentes {#faq}

### ¿Qué diferencia hay entre congelar y "Forzar detención"?

"Forzar detención" solo detiene la app en ese momento, y otros eventos pueden volver a activarla más tarde. Una app congelada no puede ejecutarse en absoluto hasta que se descongela.

### ¿Funciona sin root?

Sí. Ice Box admite modos de funcionamiento sin root como Device Owner, Depuración inalámbrica, ADB y Shizuku. Responde tres preguntas en el [Centro de ayuda](/guide/#modes) para encontrar el modo adecuado para ti.

### ¿Congelar borra los datos de la app?

No. Congelar solo impide que la app se ejecute por un tiempo. Todos sus datos se conservan y puedes seguir usándola después de descongelarla.
