---
title: Funciones de Ice Box
short: Funciones
description: Funciones de Ice Box: congelar y descongelar con un toque, Congelación automática, accesos directos, pestañas, temas, paquetes de íconos, bloqueo de la app, congelar apps del sistema, un SDK y modos con y sin root.
section: product
priority: 0.9
related: guide, themes, guide/auto-freeze, developers
---

Ice Box es un congelador de apps para Android. Pon en Ice Box las apps que casi no usas y ya no podrán ejecutarse en segundo plano ni aparecer en tu pantalla principal. Cuando necesites una, tócala: Ice Box la descongela y la abre.

## Congelar y descongelar {#freeze}

- **Congelar**: Una app congelada no puede ejecutarse ni iniciarse sola en segundo plano, y queda oculta en la pantalla principal y en el panel de apps. La app y sus datos se conservan.
- **Descongelar**: Toca una app en Ice Box, o toca su acceso directo en la pantalla principal, y Ice Box la descongela y la abre.
- **Congelar todo / Descongelar todo**: Desliza o toca el botón de congelar en la parte inferior de Ice Box para congelar a la vez todas las apps de la lista. "Descongelar todo" restaura todas las apps a la vez. Puedes cambiar la posición del botón de congelar y la dirección del deslizamiento en la configuración.
- **Congelar y bloquear pantalla**: Congela todas las apps y bloquea la pantalla al instante, con un solo toque.

Según el modo de funcionamiento, Ice Box congela las apps con uno de los dos métodos que ofrece el sistema: "desactivar" u "ocultar".

## Congelación automática {#auto-freeze}

Ice Box puede congelar automáticamente las apps de tu lista cuando se apaga la pantalla, o cuando tocas una o dos veces el botón de inicio. Puedes fijar una espera después de que se apague la pantalla y elegir que no se congelen automáticamente mientras el teléfono se carga. Consulta [Congelación automática](/guide/auto-freeze/).

## Accesos directos en la pantalla principal {#shortcuts}

Crea accesos directos en la pantalla principal para las apps congeladas. Al tocar uno, la app se descongela y se abre, sin tener que abrir Ice Box primero. También puedes activar la opción de agregar un acceso directo automáticamente cuando agregas una app a la lista de congelación. Consulta [Accesos directos en la pantalla principal](/guide/shortcuts/).

## Varias pestañas {#tabs}

Crea varias pestañas para ordenar las apps por uso, por ejemplo Diario, Social y Juegos. Puedes renombrar las pestañas y mover apps de una a otra. También puedes ordenar a mano las apps dentro de Ice Box.

## Temas y paquetes de íconos {#themes}

- Puedes cambiar el color de casi todos los elementos de la pantalla principal, con soporte de transparencia.
- En Android 12 y versiones posteriores, Ice Box puede usar los colores dinámicos del sistema. También puedes usar tu fondo de pantalla como fondo.
- Los temas claro y oscuro pueden cambiar automáticamente según el sistema.
- Admite paquetes de íconos de terceros y puedes ajustar el tamaño de los íconos.
- Los temas se pueden compartir e importar como enlaces. Mira las combinaciones de colores que compartieron otras personas en [Temas compartidos](/themes/).

## Bloqueo con huella y PIN {#lock}

Si lo activas, Ice Box pide tu huella o tu PIN antes de abrirse, y también puedes usar el reconocimiento facial. Con el bloqueo con huella activado, el contenido de Ice Box se oculta en la pantalla de apps recientes.

## Congelar apps del sistema preinstaladas {#system-apps}

Además de las apps que instalaste tú, Ice Box también puede congelar algunas apps del sistema preinstaladas, incluso en los modos sin root. También puedes importar una "lista de apps del sistema que se pueden congelar sin riesgo" que haya compartido otra persona. Consulta [Congelar apps del sistema preinstaladas](/guide/system-apps/).

## Aviso de apps nuevas {#new-app}

Cuando instalas una app nueva, Ice Box puede mostrarte un aviso para preguntarte si quieres agregarla a Ice Box.

## Modos de funcionamiento {#modes}

Ice Box puede obtener los permisos del sistema de varias formas, así que funciona tanto en teléfonos con root como sin root:

[[mode-cards]]

¿No sabes cuál elegir? Responde tres preguntas en el [Centro de ayuda](/guide/) para recibir una recomendación.

## SDK abierto e integraciones {#sdk}

- **SDK de Ice Box**: Con el permiso del usuario, otras apps pueden congelar y descongelar apps a través de Ice Box. En el modo Device Owner, también pueden instalar y desinstalar APK de forma silenciosa. Cada acción que hace una app de terceros queda registrada en el centro de registros de Ice Box. Consulta [Para desarrolladores](/developers/).
- **Configurar en otras apps**: Admite la entrada "Información de la app" de Android, así que Ice Box funciona junto con apps como Greenify y AppOps.
- **Island**: Todas las funciones de Ice Box también funcionan dentro del perfil de trabajo de Island.

## Versiones y requisitos {#requirements}

- Teléfonos y tablets con Android 7.0 o versiones posteriores.
- La descarga es gratuita. Algunas funciones requieren actualizar a Pro. Si algo no coincide, se aplica la descripción que aparece en la app.
- Los cambios de cada versión están en el [registro de cambios](/changelog/).

[[download-buttons]]
