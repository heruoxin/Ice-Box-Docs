---
title: Comment désinstaller Ice Box et retirer le Device Owner
short: Désinstaller Ice Box
description: Décongelez toutes les applications avant de désinstaller Ice Box. En mode Device Owner, désinstallez depuis les paramètres d'Ice Box, pas depuis l'écran d'accueil, sinon les applications congelées ne pourront plus être décongelées.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Seul Ice Box peut décongeler les applications qu'il a congelées. Avant de désinstaller Ice Box, vérifiez bien que toutes les applications ont été décongelées.

## Étapes de désinstallation {#steps}

1. Ouvrez Ice Box, utilisez « Tout décongeler » pour décongeler toutes les applications d'Ice Box, et vérifiez qu'elles sont toutes réapparues sur l'écran d'accueil.
2. Allez dans les paramètres d'Ice Box et appuyez sur « Désinstaller ».
3. Après votre confirmation, Ice Box retire sa propre autorisation Device Owner (s'il en a une) et termine la désinstallation.

> [!WARNING]
> En mode Device Owner, **ne désinstallez pas Ice Box directement depuis l'écran d'accueil**. Sur Xiaomi et certains autres téléphones, l'autorisation Device Owner serait perdue, et les applications congelées ne pourraient plus jamais être décongelées.

## Remarques selon le mode de fonctionnement {#modes}

- **Mode Device Owner** : vous devez retirer l'autorisation Device Owner avec « Désinstaller » dans les paramètres d'Ice Box. Sinon, le système ne vous laissera pas le désinstaller.
- **Modes root, Débogage sans fil, ADB et Shizuku** : de même, décongelez tout d'abord, puis désinstallez Ice Box.
- Si vous avez changé de mode de fonctionnement, revenez au mode utilisé pour la congélation avant de décongeler. Les modes de fonctionnement ne sont pas compatibles entre eux.

## Vous avez oublié de décongeler avant de désinstaller ? {#already-removed}

- **Modes root, Débogage sans fil, ADB et Shizuku** : réinstallez Ice Box, passez au mode de fonctionnement utilisé pour la congélation, puis retrouvez les applications congelées dans la liste et décongelez-les.
- **Mode Device Owner** : désinstaller Ice Box directement fait perdre l'autorisation Device Owner, et les applications congelées ne peuvent plus être décongelées. Suivez donc bien les étapes ci-dessus et désinstallez depuis les paramètres d'Ice Box.
