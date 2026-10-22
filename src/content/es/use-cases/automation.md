---
title: Cómo automatizar la congelación y descongelación de apps en Android
short: Automatización e integración para desarrolladores
card: Congela automáticamente al apagar la pantalla, usa acciones de un toque en la pantalla principal o deja que otras apps congelen a través de Ice Box con el SDK.
description: "Automatiza la congelación y descongelación en Android con Ice Box: Congelación automática, accesos directos para Congelar todo y Descongelar todo, y un SDK abierto para integrarlo en tu propia app."
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## Respuesta corta {#answer}

Si eres un usuario común, puedes usar la [Congelación automática](/guide/auto-freeze/) y los [accesos directos en la pantalla principal](/guide/shortcuts/) de Ice Box para congelar apps automáticamente cuando se apaga la pantalla o cuando vuelves a la pantalla principal. Si eres desarrollador, puedes usar el [SDK de Ice Box](/developers/) para congelar y descongelar apps desde tu propia app, después de que el usuario dé su permiso.

## Automatización sin código {#no-code}

- **Congelación automática**: Congela automáticamente las apps de Ice Box cuando se apaga la pantalla, o cuando tocas una o dos veces el botón de inicio. Puedes fijar una espera tras apagar la pantalla y hacer una excepción mientras el teléfono se carga.
- **Accesos directos en la pantalla principal**: "Congelar todo", "Congelar y bloquear pantalla" y "Descongelar todo" se pueden agregar a la pantalla principal, así que cada uno se usa con un solo toque.
- **Accesos directos para apps congeladas**: Toca uno para descongelar y abrir la app automáticamente, sin abrir Ice Box primero.
- **划卡冻结 (deslizar para congelar)**: La app de terceros 划卡冻结 puede congelar una app cuando deslizas su tarjeta para cerrarla en la pantalla de apps recientes (solo con root).

## Para desarrolladores: el SDK de Ice Box {#sdk}

En teléfonos con Ice Box instalado y activado, el SDK de Ice Box permite que apps de terceros congelen y descongelen apps:

- Consultar el modo de funcionamiento actual de Ice Box y el estado de congelación de una app. No requiere permiso.
- Congelar y descongelar apps, también por lotes. Requiere el permiso del usuario.
- Instalar y desinstalar APK de forma silenciosa en el modo Device Owner.
- Cada acción que una app de terceros hace a través de Ice Box queda registrada en el centro de registros de Ice Box, donde el usuario puede revisarla cuando quiera.

Consulta la [guía para desarrolladores](/developers/) para saber cómo integrarlo.

## Preguntas frecuentes {#faq}

### ¿Pueden otras apps congelar apps sin que yo lo sepa?

Una app de terceros necesita tu permiso antes de poder congelar o descongelar apps a través de Ice Box. Cada acción queda registrada en el centro de registros de Ice Box y puedes revisarla cuando quieras.
