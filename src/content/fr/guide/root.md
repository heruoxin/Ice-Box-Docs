---
title: Mode root
short: Mode root
description: Mode root : sur un téléphone rooté, ouvrez Ice Box et accordez l'accès root. Comment changer de moteur root, résoudre les échecs d'autorisation root et passer à un autre mode de fonctionnement.
section: guide
group: activate
order: 9
faq: true
related: guide/shizuku, guide/other-modes, faq
---

Si votre téléphone est rooté, ouvrez simplement Ice Box et acceptez la demande d'autorisation quand votre gestionnaire root (Magisk, par exemple) l'affiche. Aucune autre configuration n'est nécessaire.

Le mode root continue de fonctionner après un redémarrage, et ne demande pas d'ordinateur.

## Moteurs root {#engines}

Ice Box propose plusieurs moteurs root, dont « Root (le plus rapide) » et « Root (classique) ». Vous pouvez passer de l'un à l'autre dans « Choisir le moteur root », dans le « Laboratoire ». Si le moteur actuel ne fonctionne pas correctement sur votre téléphone, essayez-en un autre.

Avant de changer de moteur, assurez-vous que toutes les applications sont décongelées.

## FAQ {#faq}

### Le message « Impossible d'obtenir l'accès root » s'affiche

Ouvrez votre gestionnaire root, supprimez l'autorisation enregistrée pour Ice Box, puis accordez de nouveau l'accès root à Ice Box.

### Passer du mode root à un autre mode de fonctionnement

Vous pouvez le faire dans « Changer de mode de fonctionnement », dans les paramètres d'Ice Box. Décongelez toutes les applications avant de changer. Les modes de fonctionnement ne sont pas compatibles entre eux : une application doit être décongelée dans le mode qui l'a congelée.

### Où est passé l'ancien « Plugin système » ?

Pour respecter les exigences de Google Play, le mode Plugin système a été retiré dans la version 3.22.0. Sur un téléphone rooté, utilisez directement le mode root.
