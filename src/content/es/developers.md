---
title: SDK de Ice Box para desarrolladores
short: Desarrolladores
description: El SDK de Ice Box permite que otras apps congelen y descongelen apps, e instalen o desinstalen APK de forma silenciosa, en teléfonos con Ice Box. Configuración, permisos y las API principales.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

En los dispositivos con Ice Box instalado y activado, el SDK de Ice Box permite que apps de terceros congelen y descongelen apps. En el modo Device Owner, también puede instalar y desinstalar APK de forma silenciosa.

Código fuente y documentación completa: [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Requisitos {#requirements}

- Congelar y descongelar: Ice Box 3.6.0 o una versión posterior.
- Instalación y desinstalación silenciosas: Ice Box 3.9.5 o una versión posterior, con Ice Box funcionando en el modo Device Owner.

## Permiso {#permission}

Las API de acción, como congelar, descongelar e instalar APK, requieren que primero le pidas al usuario el permiso del SDK de Ice Box. Las API de consulta no necesitan ningún permiso.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## API principales {#api}

### Consultar el modo de funcionamiento

Ice Box puede congelar apps de una de dos formas, `pm disable-user` o `pm hide`. No requiere permiso.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Consultar el estado de congelación de una app

Devuelve normal, congelada con `pm disable`, congelada con `pm hide` o ambas. No requiere permiso.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Congelar o descongelar apps

Requiere permiso. Admite operaciones por lotes.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Instalación y desinstalación silenciosas

Disponible cuando Ice Box funciona en el modo Device Owner. Primero puedes comprobar si se admite en ese momento:

```java
IceBox.querySupportSilentInstall(context);
```

Para ver todos los parámetros y valores de retorno de cada API, la referencia es la [documentación en GitHub](https://github.com/heruoxin/IceBox-SDK).

## Transparencia y autorización {#transparency}

Cada acción de congelar, instalar o desinstalar que una app de terceros hace a través de Ice Box queda registrada en el centro de registros de Ice Box, donde el usuario puede revisarla cuando quiera.

## Otras integraciones {#integrations}

- **Configurar en otras apps**: Ice Box admite `android.intent.action.SHOW_APP_INFO` de Android, así que funciona junto con apps como Greenify y AppOps.
- **Island**: Ice Box puede funcionar con los permisos de Island, y también se puede instalar y usar dentro del perfil de trabajo de Island.
