---
title: "Congelación automática: congela apps al apagar la pantalla"
short: Congelación automática
description: Con la Congelación automática activada, Ice Box congela las apps de tu lista al apagar la pantalla o al tocar Inicio una o dos veces. Activadores, espera, excepción durante la carga y soluciones.
section: guide
group: tips
order: 1
faq: true
related: guide/shortcuts, guide/devices, use-cases/stop-background-apps
---

Cuando abres una app, Ice Box primero la descongela, y al terminar hay que volver a congelarla. Con la "Congelación automática" activada, Ice Box se encarga de ese paso por ti.

## Cuándo se congelan las apps {#when}

En la configuración de Ice Box, abre "Congelación automática" y usa "Congelar automáticamente" para elegir cuándo se congelan las apps:

- **Al apagar la pantalla**: congela después de que se apaga la pantalla. Puedes fijar una "Espera tras apagar la pantalla" para que congele un tiempo después de apagarse.
- **Al tocar Inicio**: congela cuando vuelves a la pantalla principal.
- **Al tocar Inicio dos veces**: congela cuando presionas dos veces rápido el botón de inicio.
- **Nunca**: desactiva la congelación automática.

En "Excepto" también puedes elegir "Durante la carga" para que las apps no se congelen automáticamente mientras el teléfono se carga.

## Ejecución en segundo plano {#background}

La Congelación automática necesita que Ice Box se ejecute en segundo plano. Como Android lo exige, Ice Box muestra una notificación mientras se ejecuta en segundo plano. Puedes desactivar esta notificación en la configuración del sistema sin afectar a la función.

Si desactivas la Congelación automática y las demás funciones que necesitan el segundo plano, Ice Box no se ejecutará en segundo plano.

## ¿La Congelación automática no funciona? {#faq}

### Las apps no se congelan después de apagar la pantalla

Revisa si una app de limpieza o de administración del teléfono impide que Ice Box se ejecute en segundo plano. En la configuración del sistema, dale a Ice Box permisos como "Ejecutar en segundo plano" e "Inicio automático", y configura su uso de batería como "Sin optimizar" o "Sin restricciones".

### La Espera tras apagar la pantalla no se aplica

En algunos teléfonos, congelar unos minutos después de apagar la pantalla puede no funcionar. Es el sistema, que limita las tareas en segundo plano. Fija una espera más corta o congela justo al apagar la pantalla.

### Los teléfonos Huawei no congelan al apagar la pantalla

Por limitaciones del sistema, la congelación automática "Al apagar la pantalla" puede no funcionar en teléfonos Huawei. Usa en su lugar "Al tocar Inicio" o "Al tocar Inicio dos veces".
