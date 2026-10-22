---
title: Comment automatiser la congélation et la décongélation des applications sur Android
short: Automatisation et intégration
card: Congelez automatiquement à l'extinction de l'écran, utilisez des actions en un appui sur l'écran d'accueil, ou laissez d'autres applications congeler via Ice Box grâce au SDK.
description: Automatisez la congélation et la décongélation sur Android avec Ice Box : Congélation auto, raccourcis « Tout congeler » et « Tout décongeler », et un SDK ouvert pour l'intégrer à votre propre application.
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## En bref {#answer}

Au quotidien, vous pouvez compter sur la [Congélation auto](/guide/auto-freeze/) et les [raccourcis sur l'écran d'accueil](/guide/shortcuts/) d'Ice Box pour congeler les applications automatiquement quand l'écran s'éteint ou quand vous revenez à l'écran d'accueil. Les développeurs peuvent utiliser le [SDK Ice Box](/developers/) pour congeler et décongeler des applications depuis leur propre application, une fois l'autorisation accordée par l'utilisateur.

## Automatiser sans code {#no-code}

- **Congélation auto** : congelez automatiquement les applications d'Ice Box quand l'écran s'éteint, ou quand vous appuyez une ou deux fois sur le bouton Accueil. Vous pouvez définir un délai après l'extinction de l'écran et faire une exception pendant la charge.
- **Raccourcis sur l'écran d'accueil** : « Tout congeler », « Congeler + verrouiller l'écran » et « Tout décongeler » peuvent tous être ajoutés à l'écran d'accueil, pour un seul appui à chaque fois.
- **Raccourcis des applications congelées** : un appui décongèle et ouvre automatiquement l'application, sans passer par Ice Box.
- **划卡冻结 (congeler en balayant)** : l'application tierce 划卡冻结 peut congeler une application quand vous balayez sa carte dans les applis récentes (root uniquement).

## Pour les développeurs : le SDK Ice Box {#sdk}

Sur les téléphones où Ice Box est installé et activé, le SDK Ice Box permet aux applications tierces de congeler et décongeler des applications :

- Consulter le mode de fonctionnement actuel d'Ice Box et l'état de congélation d'une application. Aucune autorisation nécessaire.
- Congeler et décongeler des applications, y compris par lots. Autorisation de l'utilisateur nécessaire.
- Installer et désinstaller des APK en silence en mode Device Owner.
- Chaque action effectuée par une application tierce via Ice Box est enregistrée dans le journal d'Ice Box, que l'utilisateur peut consulter à tout moment.

Consultez le [guide du développeur](/developers/) pour savoir comment l'intégrer.

## Questions fréquentes {#faq}

### D'autres applications peuvent-elles congeler des applications à mon insu ?

Une application tierce a besoin de votre autorisation pour congeler ou décongeler des applications via Ice Box. Chaque action est enregistrée dans le journal d'Ice Box, et vous pouvez la consulter à tout moment.
