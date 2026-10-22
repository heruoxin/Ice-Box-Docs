---
title: Registro de cambios de Ice Box
short: Registro de cambios
description: Qué cambió en cada versión de Ice Box, desde la 3.4.0 hasta la más reciente, con funciones nuevas, mejoras de compatibilidad y correcciones de errores.
section: product
toc: false
priority: 0.5
related: download, features
---

Puedes ver tu número de versión actual y el canal en "Configuración > Acerca de" de Ice Box. Para ver los detalles de cada canal de distribución y descargar el APK más reciente, consulta la [página de descarga](/download/#channels).

## 3.30.14 {#v3-30-14}

- Ahora disponible en español
- Compatible con Android 17 y mejoras en la compatibilidad de la Depuración inalámbrica

## 3.30.11 {#v3-30-11}

- Se corrigieron problemas de diseño en dispositivos plegables
- Compatibilidad con el permiso de Xiaomi para leer la lista de apps
- La Depuración inalámbrica ya no requiere desactivar la VPN a partir de la segunda vinculación

## 3.30.10 {#v3-30-10}

- Compatibilidad con páginas de memoria de 16 KB
- Cambios para cumplir los requisitos de revisión de la tienda de apps de Xiaomi

## 3.30.9 {#v3-30-9}

- Mejora: después de la primera vinculación correcta, ya no hace falta mantener activada la "Depuración por USB"
- Mejor compatibilidad del servicio en segundo plano

## 3.30.8 {#v3-30-8}

- Se agregó un video tutorial a las instrucciones para iniciar la Depuración inalámbrica
- Se corrigió que en algunos dispositivos apareciera con frecuencia el diálogo de permiso "Ice Box solicita iniciar xxx"

## 3.30.7 {#v3-30-7}

- Puede congelar más componentes del sistema en MIUI y HyperOS
- Se actualizó el SDK de destino a 35

## 3.25.0 {#v3-25-0}

- Se agregó una guía para activar Shizuku de forma inalámbrica
- Se actualizó Shizuku, con compatibilidad con Sui
- Compatibilidad con íconos monocromáticos
- Interfaz con colores dinámicos desde Android S, con un nuevo efecto de fondo desenfocado
- El modo claro/oscuro puede seguir al sistema
- La versión para China admite WeChat Pay
- Se corrigieron algunos diseños desalineados
- Se eliminó el Plugin del sistema para cumplir los requisitos de Google Play

## 3.22.0 {#v3-22-0}

- Por exigencia del equipo de Google Play Protect, se eliminó el modo "Plugin del sistema". Si lo necesitas, busca en internet una versión anterior e instálala
- Nuevo: el tema claro/oscuro puede cambiar automáticamente según el sistema

## 3.21.0 {#v3-21-0}

- Se corrigieron algunas funciones en el modo Shizuku
- Se actualizó el SDK por exigencia de Alipay
- Otras correcciones

## 3.20.0 {#v3-20-0}

- Se corrigió que algunos números de pedido poco comunes no se pudieran activar
- Intento de corrección (todavía en pruebas) de las apps duplicadas integradas que dejaban de funcionar en MIUI y otras ROM después de configurar Ice Box como Device Owner
- El bloqueo con PIN ahora admite reconocimiento facial

## 3.19.0 {#v3-19-0}

- Nueva opción: centrar el botón de congelar
- Se reemplazó Fabric, que va a cerrar, por Microsoft App Center
- Algunas correcciones

## 3.18.5 {#v3-18-5}

- Se corrigió que a veces los íconos se escalaran mal
- Se corrigieron animaciones desalineadas en algunas pantallas

## 3.18.2 {#v3-18-2}

- Se corrigieron problemas de visualización con la navegación por gestos en algunos sistemas

## 3.18.0 {#v3-18-0}

- Nueva opción: agregar automáticamente un acceso directo cuando se agrega una app a la lista de congelación.
- Nueva opción: elegir si el botón de congelar se desliza hacia la izquierda o hacia la derecha.

## 3.17.5 {#v3-17-5}

- Se corrigió la compatibilidad con Android Q Beta 6.
- Se actualizaron los servidores que se usan en China continental para que sean más estables. Los usuarios en China deberían actualizar; los usuarios fuera de China no se ven afectados.
- Otras correcciones de errores y mejoras de rendimiento.

## 3.17.0 {#v3-17-0}

- Nueva app complementaria: IceBridge.
- Se cambió el diseño de la pantalla del bloqueo con huella para que el botón de PIN se pueda alcanzar en dispositivos con sensor de huellas en la pantalla.

## 3.16.5 {#v3-16-5}

- Compatibilidad con una nueva app complementaria: 划卡冻结 (deslizar para congelar, solo con root)
- Correcciones de errores y mejoras de rendimiento

## 3.16.0 {#v3-16-0}

- Se agregó una página que presenta las apps complementarias

## 3.15.8 {#v3-15-8}

- Se corrigieron algunos problemas que podían gastar batería en segundo plano
- Los tutoriales y la documentación de ayuda ahora usan enlaces alojados en China para cargar más rápido

## 3.15.3 {#v3-15-3}

- El modo Root y el modo ADB simple ahora pueden mostrar los clones de apps creados por la función de apps duplicadas del sistema
- Se corrigió un conflicto con los gestos de Android Q Beta 3

## 3.14.2 {#v3-14-2}

- Se agregó un SDK de uso general: [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager)
- Compatibilidad experimental con WeChat Pay y QQ Pay (transferencia manual). Consulta [WeChat Pay](/purchase/wechat-pay/)

## 3.14.0 {#v3-14-0}

- Nuevo modo "ADB simple" para dispositivos sin root en los que configurar Device Owner no es práctico. Este modo se debe volver a activar después de cada reinicio
- Se actualizó a Shizuku API v3
- Se corrigió que tocar dos veces un acceso directo no abriera la app en Android Q
- Otras correcciones

## 3.13.0 {#v3-13-0}

- Correcciones básicas de compatibilidad con Android Q
- Todas las funciones ahora funcionan dentro del perfil de trabajo de Island
- Compatibilidad con 权限猫
- Si las opciones de Congelación automática no funcionan bien, agrega manualmente Ice Box a la lista blanca de batería en la configuración del sistema. Si no necesitas la Congelación automática, desactiva la opción y Ice Box no se ejecutará en segundo plano en absoluto

## 3.12.2 {#v3-12-2}

- Ahora se pueden ordenar los íconos
- Ahora se pueden agregar varios accesos directos a la vez en Android 8.0+ (por limitaciones del sistema, no se garantiza que la adición por lotes funcione)

## 3.12.0 {#v3-12-0}

- Se rehicieron los diseños de algunas páginas
- Se rehízo la función "Avisar al instalar apps"
- Compatibilidad con agregar accesos directos desde apps de terceros como Fluid NG
- Por limitaciones del sistema de Huawei, los usuarios de Huawei con un launcher de terceros no pueden agregar accesos directos desde Ice Box. Prueba a mantener presionada un área vacía de la pantalla principal para agregarlos

## 3.11.1 {#v3-11-1}

- Correcciones de errores
- Se ajustaron el diseño y los elementos de la interfaz.

## 3.10.0 {#v3-10-0}

- Se corrigió que la lista de apps se cerrara de forma inesperada en Android 9 por un conflicto con Nevolution.
- Se rediseñó la guía de activación del primer inicio y se agregó un enlace al activador en un clic.

## 3.9.9 {#v3-9-9}

- Si configuraste Ice Box sin root con un código QR, puedes activar las apps preinstaladas en "Configuración de Ice Box > Laboratorio > Activar apps del sistema preinstaladas". Las apps que no actives seguirán desinstaladas.
- Otras correcciones de errores.

## 3.9.8 {#v3-9-8}

- Se corrigieron algunos cierres inesperados al editar la lista
- En el modo sin root, ahora se puede personalizar el nombre de la organización que aparece en la pantalla de bloqueo (el sistema lo exige, así que no se puede quitar)

## 3.9.6 {#v3-9-6}

- Se unieron los botones de filtro y de menú en la pantalla de edición de la lista
- Se agregó el modo Root (más rápido)

## 3.9.5.1 {#v3-9-5-1}

- El estado de congelación rápida en el panel de notificaciones ahora sigue el estado de la Congelación automática
- Se corrigió que algunos usuarios sin root no pudieran conectarse al servidor de compras

## 3.9.5 {#v3-9-5}

- El SDK ahora admite instalar y desinstalar apps. Los desarrolladores pueden integrarlo: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)
- Se agregó un centro de registros al SDK. Se registra cada acción de congelar, instalar y desinstalar que hacen las apps de terceros
- Si BlackHouse (小黑屋) ya está configurado como Device Owner, Ice Box se puede usar directamente
- Nueva opción solo por diversión: efecto de sonido de espada desenvainándose

## 3.9.3 {#v3-9-3}

- Se actualizó el target a 28
- Se mejoró el motor Root (modo rápido) para que funcione bien en Android P
- Se corrigió que a veces las apps quitadas de la lista siguieran congeladas

## 3.9.2 {#v3-9-2}

- Se actualizó la API de destino a 26. Android exige que las apps que se ejecutan en segundo plano muestren una notificación, así que, cuando hay funciones activadas que se ejecutan en segundo plano, como la "Congelación automática", Ice Box debe mostrar una notificación en tu panel de notificaciones. Puedes buscar y desactivar esta notificación de Ice Box en la configuración del sistema sin afectar a ninguna función

- Se corrigió que el modo sin root a veces no se abriera en la beta anterior
- Se corrigió que a veces faltaran apps en la lista al abrir la app
- Se cambió a una base de datos nueva
- Se actualizó la API de Island
- Otras actualizaciones y correcciones de errores

## 3.9.0 {#v3-9-0}

- Nuevo: compartir listas de apps del sistema que se pueden congelar sin riesgo:
Las ROM de algunos teléfonos traen mucho bloatware y publicidad integrados, y muchos usuarios los limpian congelándolos uno por uno.
Si se te da bien, puedes compartir con otras personas tu lista de apps integradas congeladas, o guardarla para la próxima vez que flashees tu teléfono.
(Crear listas solo está disponible para algunos usuarios activos)

- Nuevo reconocimiento de códigos QR:
Cuando vuelvas a activar Ice Box, ya no tendrás que escribir el número de pedido largo. Haz una captura de pantalla de la página del comprobante de Alipay, compártela y elige "Lector de códigos de barras (Ice Box)" para reconocerla y activarlo.

- Ya no hay límite en la cantidad de pestañas

## 3.8.6 {#v3-8-6}

- Los accesos directos ahora aparecen un poco más seguido en el launcher de Android P
- Se agregó en el laboratorio una opción que abre el [módulo de Xposed 1ceboxTurner](https://repo.xposed.info/module/gs.https.icebox.tuner) (aporte de @web1n)
- Otras correcciones de errores

## 3.8.1 {#v3-8-1}

- Se agregó compatibilidad con "Configurar en otras apps" (android.intent.action.SHOW_APP_INFO), que funciona con apps como Greenify y AppOps.
- Otras correcciones menores.

## 3.7.6 {#v3-7-6}

- Compatibilidad con Magisk 16.3.
- Se corrigió que la acción de bloquear la pantalla no funcionara en los modos Shizuku Manager y Brevent.
- Otras correcciones menores.

## 3.7.0 {#v3-7-0}

- Las apps sin ícono se pueden volver a agregar a Ice Box.
- Se corrigió que a veces mantener presionado seleccionara la app equivocada.
- Se actualizó el SDK de Brevent.
- Otras correcciones de errores.

(Se omiten las notas de las versiones beta)

## 3.6.1 {#v3-6-1}

- El panel de temas ahora admite transparencia.
- Se agregó un acceso directo "Descongelar todo".
- El contenido de Ice Box se oculta en la pantalla de apps recientes cuando el bloqueo con huella está activado.
- Nuevo SDK. Otras apps de congelación pueden integrarlo: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 3.5.2 Beta {#v3-5-2}

- Se agregaron algunas opciones al laboratorio:
- Si cambiaste el paquete de íconos, toca "Borrar caché de íconos"
- Si los tamaños de los íconos no son uniformes, borra la caché y luego considera desactivar "Normalizar tamaño de íconos"
- Usa "Mantener en memoria al presionar Atrás" para decidir si Ice Box se queda en caché en segundo plano
- Puedes cambiar entre varios motores en el laboratorio. Antes de cada cambio, asegúrate de que todas las apps estén descongeladas
- Se agregaron más filtros y opciones de orden al editor de la lista de apps

## 3.5.1 {#v3-5-1}

- Se corrigió la compatibilidad con Android P.
- Correcciones de errores y mejoras de rendimiento.

## 3.4.0 {#v3-4-0}

- Se agregaron Brevent y Shizuku Manager como motores. Usa este modo si no tienes root y configurar Island o el modo Device Owner no es práctico.
