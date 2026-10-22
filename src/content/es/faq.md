---
title: Preguntas frecuentes de Ice Box
short: Preguntas frecuentes
description: "Preguntas frecuentes de Ice Box: acceso root, el aviso de Device Owner, desinstalación, notificaciones push, accesos directos, Congelación automática, cómo actualizar apps congeladas y cómo cambiar de modo de funcionamiento."
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

Para preguntas sobre compras y pagos, consulta la [guía de compra](/purchase/). Para consejos sobre marcas de teléfono específicas, consulta los [avisos para cada marca de teléfono](/guide/devices/).

## Lo básico {#basics}

### ¿Qué significa congelar una app? {#what-is-freeze}

El sistema desactiva u oculta la app congelada. No puede ejecutarse ni iniciarse sola en segundo plano, y no aparece en la pantalla principal ni en el panel de apps, pero la app y sus datos siguen ahí. Cuando la descongelas en Ice Box, la app vuelve a la normalidad.

### ¿Qué diferencia hay entre congelar y desinstalar? {#freeze-vs-uninstall}

Desinstalar borra la app y sus datos. Congelar solo impide que la app se ejecute por un tiempo: sus datos no se ven afectados y puedes seguir usándola después de descongelarla. Para las apps del sistema preinstaladas que no se pueden desinstalar, congelarlas también es una forma de desactivarlas.

### ¿Cómo vuelvo a poner una app congelada en la pantalla principal? {#add-to-home}

En Ice Box, mantén presionado el ícono de la app y elige "Agregar a la pantalla principal". Cuando tocas este acceso directo, Ice Box primero descongela la app y luego la abre. Consulta [Accesos directos en la pantalla principal](/guide/shortcuts/).

### ¿Cómo actualizo una app congelada? {#update-frozen}

Si usas CoolApk (酷安), una tienda de apps Android de China, activa "Mostrar apps ocultas" (显示隐藏应用) en la sección de laboratorio de la configuración de CoolApk. Si usas otra tienda de apps, primero toca "Descongelar todo" en la configuración de Ice Box y vuelve a congelar las apps después de actualizarlas.

### ¿No puedes descongelar apps después de cambiar de modo de funcionamiento? {#mode-switch}

Los modos de funcionamiento no son compatibles entre sí. Vuelve a poner Ice Box en el modo de funcionamiento que usabas antes: una app se debe descongelar en el mismo modo con el que se congeló.

## Root {#root}

### El modo Root dice "No se pudo obtener el permiso root" {#root-failed}

Abre tu gestor de root (como Magisk), borra el registro de autorización existente de Ice Box y vuelve a darle acceso root.

### ¿Qué pasó con el Plugin del sistema? {#system-plugin}

Por exigencia de Google Play, el modo Plugin del sistema se eliminó en la versión 3.22.0. Si el Plugin del sistema sigue instalado, borra `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk` con un administrador de archivos con acceso root y reinicia para terminar de desinstalarlo.

## Modo Device Owner {#device-owner}

### El panel de notificaciones dice "Tu organización administra este dispositivo". ¿Es normal? {#managed-notice}

Sí. Así es exactamente como funciona el modo Device Owner de Ice Box. Configurar Device Owner es, por ahora, la única forma permanente de congelar apps sin root. El sistema muestra este texto y no se puede quitar, pero puedes cambiar el "Nombre de la organización" por el texto que quieras en "Laboratorio" de Ice Box.

### La configuración del teléfono dice que Device Owner puede leer mi calendario, mi correo y otra información personal. ¿Ice Box los lee? {#dpm-privacy}

No. Ice Box se actualiza sin parar desde 2015 y solo usa las funciones de Device Owner que necesita, como congelar apps. No usa ninguna función que no tenga relación, así que puedes usarlo con tranquilidad.

### ¿Después de configurar Device Owner dejaron de funcionar las apps duplicadas y la Carpeta segura del sistema? {#dual-apps}

Es una limitación de algunos sistemas de teléfono (como Samsung y Xiaomi). Cuando se configura un Device Owner, el sistema desactiva automáticamente algunas funciones, y Ice Box no puede arreglarlo. Si de verdad necesitas apps duplicadas, puedes considerar lo siguiente:

- Configurar Island como Device Owner y usar la función de apps duplicadas que ofrece. Así, Ice Box puede funcionar con el [modo Island](/guide/other-modes/#island).
- Usar un modo de funcionamiento distinto de Device Owner. Ninguno de los otros modos afecta a las apps duplicadas.

### ¿Los permisos de la app se restablecen cada vez que la descongelo? {#permissions-reset}

Es un problema del sistema. AppOps de Rikka ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)) puede volver a aplicar automáticamente tus reglas de permisos cuando se descongela una app.

### ¿En teléfonos Huawei y Xiaomi las apps vuelven a pedir permisos cada vez que se abren, y al congelar dice que la app se desinstaló? {#reinstall-prompt}

En teléfonos Xiaomi, desactiva "Optimización de MIUI". En otros teléfonos todavía no encontramos un interruptor equivalente.

### ¿Una app recién descongelada a veces no puede conectarse a la red? {#no-network}

El sistema de algunos modelos (como OnePlus y Huawei) tiene este problema de vez en cuando. Asegúrate de tener el sistema actualizado a la versión más reciente. Congelar y descongelar la app otra vez suele solucionarlo.

### ¿Cómo desinstalo Ice Box? {#uninstall}

Toca "Desinstalar" en la configuración de Ice Box. Antes de desinstalar, verifica bien que todas las apps estén descongeladas. Si usas Xiaomi, ten en cuenta: **no desinstales Ice Box directamente desde la pantalla principal. Así se pierde el permiso de administrador y las apps congeladas ya no se podrán descongelar nunca.** Consulta [Desinstalar Ice Box](/guide/uninstall/).

## Notificaciones y segundo plano {#background}

### ¿Las apps congeladas siguen recibiendo notificaciones push? {#push}

En teléfonos como OPPO, vivo y OnePlus, algunas apps usan el servicio push del sistema. Después de congelarlas, el sistema sigue mostrando notificaciones en su nombre, pero la app en sí no se ejecuta en segundo plano. Si no quieres esas notificaciones, desactiva las notificaciones de esa app en la configuración del sistema.

### Quiero que las apps congeladas sigan recibiendo notificaciones {#keep-push}

Puedes probar a instalar [MiPushFramework](https://github.com/MiPushFramework/MiPushFramework).

### ¿Por qué Ice Box muestra una notificación? {#ongoing-notification}

Android exige que toda app que se ejecuta en segundo plano muestre una notificación. Cuando activas funciones que necesitan ejecutarse en segundo plano, como la "Congelación automática", Ice Box muestra una notificación en el panel de notificaciones. Puedes desactivar esta notificación en la configuración del sistema sin afectar a ninguna función. Con la Congelación automática desactivada, Ice Box no se ejecuta en segundo plano en absoluto.

### ¿Las apps no se congelan después de apagar la pantalla? {#auto-freeze-fail}

Revisa si una app de administración del teléfono o de bloqueo de apps impide que Ice Box se ejecute en segundo plano. En la configuración del sistema, dale a Ice Box permisos como "Ejecutar en segundo plano" y "Activar el dispositivo", y configura su uso de batería como "Sin optimizar". En teléfonos Huawei, la opción "Al apagar la pantalla" de "Congelar automáticamente" puede no funcionar por limitaciones del sistema, así que elige otra opción. Consulta [Congelación automática](/guide/auto-freeze/).

## Accesos directos {#shortcuts}

### ¿No se pueden agregar accesos directos en la pantalla principal en Xiaomi, Huawei, Smartisan u otros teléfonos? {#shortcut-missing}

En Xiaomi, Huawei y teléfonos parecidos, activa manualmente para Ice Box el permiso de agregar accesos directos en la pantalla principal en la configuración del sistema. Los teléfonos Smartisan no admiten accesos directos de ninguna app.

### ¿Los accesos directos se agregaron en un Xiaomi o un Meizu, pero no funcionan? {#shortcut-broken}

En teléfonos Xiaomi, permite que Ice Box pueda "iniciar otras apps" y "mostrar ventanas emergentes mientras se ejecuta en segundo plano" en la configuración del sistema. En teléfonos Meizu todavía no encontramos un interruptor del sistema equivalente.

### ¿Cómo quito la insignia de Ice Box de los accesos directos? {#shortcut-badge}

En Android 7.0 y versiones posteriores, el sistema agrega la insignia a los accesos directos y no se puede cambiar ni quitar.

## Otras preguntas {#other}

### ¿Algunas apps del sistema, como Xiaomi Music, la tienda de apps o Huawei Home, no se pueden congelar o se descongelan solas después de reiniciar? {#system-unfreeze}

MIUI y algunos otros sistemas descongelan automáticamente las apps clave del sistema. En las versiones recientes de EMUI, Huawei Home ya no se puede congelar. En las versiones anteriores a EMUI 9.0 sí se puede.

### ¿En teléfonos OPPO y vivo la lista de apps solo muestra unas pocas? {#app-list}

En la configuración de permisos del sistema, permite que Ice Box lea la lista de apps.

### ¿Después de descongelar una app en un teléfono Smartisan, todos sus permisos quedan permitidos de forma predeterminada? {#smartisan-permissions}

Así está diseñado el sistema de Smartisan. No tiene relación con Ice Box.

### ¿Ice Box funciona en tablets? {#tablet}

Sí. Ice Box tiene diseños propios para tablets y para el modo horizontal.

### ¿Ice Box lee mi portapapeles? {#clipboard}

Solo una vez, cuando tocas "Importar del portapapeles" en la configuración, para buscar el enlace de un tema o de una lista de congelación.

### ¿Todavía tienes preguntas? {#contact}

Envíanos un correo con la opción "Comentarios" de la app Ice Box. Si puedes, incluye el modelo de tu teléfono, la versión del sistema y una captura de pantalla del problema.
