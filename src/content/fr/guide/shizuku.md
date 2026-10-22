---
title: Activer Ice Box avec Shizuku
short: Mode Shizuku
description: Installez Shizuku et démarrez-le avec le débogage sans fil : Ice Box fonctionne alors sans root ni ordinateur. Les téléphones rootés peuvent aussi utiliser Sui. Étapes et remarques.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/) est un outil qui aide d'autres applications à obtenir des autorisations système. Une fois Shizuku installé, vous pouvez utiliser la fonction « Débogage sans fil » du système pour activer Ice Box sans root ni ordinateur.

Avant de commencer, notez que :

- Démarrer Shizuku avec le débogage sans fil nécessite Android 11 ou version ultérieure.
- Après chaque redémarrage du téléphone, vous devez redémarrer Shizuku. Sinon, Ice Box ne peut ni congeler ni décongeler les applications.
- Tant que le service Shizuku est arrêté, les applications congelées ne peuvent pas non plus être décongelées. Tout refonctionne normalement dès que le service Shizuku est relancé.

## Étapes d'activation {#steps}

1. Installez Shizuku sur le téléphone depuis [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) ou [CoolApk (酷安)](https://www.coolapk.com/), une boutique d'applications Android chinoise.
2. Suivez le [guide officiel de Shizuku](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) pour le démarrer avec le débogage sans fil.
3. Ouvrez Ice Box, choisissez « Shizuku Manager » dans « Changer de mode de fonctionnement », puis autorisez Ice Box quand Shizuku vous le demande.

Ice Box est alors prêt à l'emploi. Après un redémarrage du téléphone, pensez à redémarrer d'abord Shizuku.

## Téléphones rootés : utiliser Sui {#sui}

Sui est la version root de Shizuku. Il s'exécute comme module Magisk et démarre automatiquement après un redémarrage. Ice Box prend aussi en charge Sui. Après l'avoir installé, choisissez « Sui » dans « Changer de mode de fonctionnement » d'Ice Box.

Les téléphones rootés peuvent aussi utiliser directement le [mode root](/guide/root/).

## FAQ {#faq}

### Le message « Impossible d'obtenir l'autorisation Shizuku » s'affiche

Vérifiez que le service Shizuku est en cours d'exécution, puis accordez l'autorisation à Ice Box dans Shizuku.

### Shizuku ne fonctionne pas avec Ice Box sur les téléphones Xiaomi

Depuis MIUI 11, la transmission d'autorisations entre applications tierces peut échouer. Désactivez d'abord « Optimisation MIUI ». Ensuite, appuyez de manière prolongée sur l'icône d'Ice Box sur l'écran d'accueil, ouvrez « Infos sur l'appli », puis activez manuellement « Autres autorisations » dans les paramètres d'autorisations.
