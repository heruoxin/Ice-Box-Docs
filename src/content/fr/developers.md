---
title: SDK Ice Box pour les développeurs
short: Développeurs
description: Le SDK Ice Box permet à d'autres applications de congeler et décongeler des applications, et d'installer ou désinstaller des APK en silence, sur les téléphones équipés d'Ice Box. Intégration, autorisations et principales API.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

Sur les appareils où Ice Box est installé et activé, le SDK Ice Box permet aux applications tierces de congeler et décongeler des applications. En mode Device Owner, il permet aussi d'installer et de désinstaller des APK en silence.

Code source et documentation complète : [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Configuration requise {#requirements}

- Congélation et décongélation : Ice Box 3.6.0 ou version ultérieure.
- Installation et désinstallation silencieuses : Ice Box 3.9.5 ou version ultérieure, avec Ice Box en mode Device Owner.

## Autorisation {#permission}

Les API d'action, comme la congélation, la décongélation et l'installation d'APK, exigent de demander d'abord l'autorisation du SDK Ice Box à l'utilisateur. Les API de consultation ne nécessitent aucune autorisation.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## Principales API {#api}

### Connaître le mode de fonctionnement

Ice Box peut congeler les applications de deux façons, `pm disable-user` ou `pm hide`. Aucune autorisation nécessaire.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Connaître l'état de congélation d'une application

Renvoie normal, congelée avec `pm disable`, congelée avec `pm hide`, ou les deux. Aucune autorisation nécessaire.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Congeler ou décongeler des applications

Autorisation nécessaire. Prend en charge le traitement par lots.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Installation et désinstallation silencieuses

Disponibles quand Ice Box fonctionne en mode Device Owner. Vous pouvez d'abord vérifier si c'est possible actuellement :

```java
IceBox.querySupportSilentInstall(context);
```

Pour les paramètres et valeurs de retour complets de chaque API, c'est la [documentation sur GitHub](https://github.com/heruoxin/IceBox-SDK) qui fait foi.

## Transparence et autorisation {#transparency}

Chaque action de congélation, d'installation ou de désinstallation effectuée par une application tierce via Ice Box est enregistrée dans le journal d'Ice Box, que l'utilisateur peut consulter à tout moment.

## Autres intégrations {#integrations}

- **Configurer dans une autre application** : Ice Box prend en charge `android.intent.action.SHOW_APP_INFO` d'Android, et fonctionne donc avec des applications comme Greenify et AppOps.
- **Island** : Ice Box peut fonctionner grâce aux autorisations d'Island, et peut aussi être installé et utilisé dans le profil professionnel d'Island.
