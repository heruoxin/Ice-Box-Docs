---
title: Cómo desinstalar Ice Box y quitar el Device Owner
short: Desinstalar Ice Box
description: Descongela todas las apps antes de desinstalar Ice Box. En el modo Device Owner, desinstálalo desde la configuración de Ice Box, no desde la pantalla principal, o no podrás descongelar las apps.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Solo Ice Box puede descongelar las apps que congeló. Antes de desinstalar Ice Box, verifica bien que todas las apps estén descongeladas.

## Pasos para desinstalar {#steps}

1. Abre Ice Box, usa "Descongelar todo" para descongelar todas las apps de Ice Box y comprueba que todas volvieron a aparecer en la pantalla principal.
2. Ve a la configuración de Ice Box y toca "Desinstalar".
3. Cuando confirmes, Ice Box quita su propia autorización de Device Owner (si la tiene) y termina de desinstalarse.

> [!WARNING]
> Si usas el modo Device Owner, **no desinstales Ice Box directamente desde la pantalla principal**. En Xiaomi y otros teléfonos, así se pierde el permiso de Device Owner y las apps congeladas ya no se podrán descongelar nunca.

## Notas para cada modo de funcionamiento {#modes}

- **Modo Device Owner**: tienes que quitar la autorización de Device Owner con "Desinstalar", en la configuración de Ice Box. Si no, el sistema no te dejará desinstalarlo.
- **Modos Root, Depuración inalámbrica, ADB y Shizuku**: igualmente, primero descongela todo y luego desinstala Ice Box.
- Si cambiaste de modo de funcionamiento, vuelve al modo con el que congelaste antes de descongelar. Los modos de funcionamiento no son compatibles entre sí.

## ¿Olvidaste descongelar antes de desinstalar? {#already-removed}

- **Modos Root, Depuración inalámbrica, ADB y Shizuku**: vuelve a instalar Ice Box, cambia al modo con el que congelaste, busca las apps congeladas en la lista de apps y descongélalas.
- **Modo Device Owner**: si desinstalas Ice Box directamente, se pierde el permiso de Device Owner y las apps congeladas ya no se pueden descongelar. Por eso, sigue sin falta los pasos de arriba y desinstálalo desde la configuración de Ice Box.
