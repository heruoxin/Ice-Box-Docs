---
title: Congélation auto : congeler automatiquement les applications quand l'écran s'éteint
short: Congélation auto
description: Avec la Congélation auto, Ice Box congèle les applications de votre liste quand l'écran s'éteint, ou quand vous appuyez une ou deux fois sur Accueil. Déclencheurs, délai, exception pendant la charge et solutions.
section: guide
group: tips
order: 1
faq: true
related: guide/shortcuts, guide/devices, use-cases/stop-background-apps
---

Quand vous ouvrez une application, Ice Box la décongèle d'abord, et il faut la congeler de nouveau une fois que vous avez fini. Avec la « Congélation auto », Ice Box s'occupe de cette étape à votre place.

## Quand les applications sont congelées {#when}

Dans les paramètres d'Ice Box, ouvrez « Congélation auto » et utilisez « Congélation auto quand » pour choisir le moment de la congélation automatique :

- **Écran éteint** : congeler après l'extinction de l'écran. Vous pouvez définir un « Délai après extinction de l'écran » pour congeler un peu plus tard.
- **Appui sur Accueil** : congeler quand vous revenez à l'écran d'accueil.
- **Double appui sur Accueil** : congeler quand vous appuyez deux fois rapidement sur le bouton Accueil.
- **Jamais** : désactiver la congélation automatique.

Dans « Exceptions », vous pouvez aussi choisir « Pendant la charge » pour que les applications ne soient pas congelées automatiquement pendant que le téléphone charge.

## Exécution en arrière-plan {#background}

La Congélation auto nécessite qu'Ice Box tourne en arrière-plan. Comme Android l'exige, Ice Box affiche une notification tant qu'il tourne en arrière-plan. Vous pouvez désactiver cette notification dans les paramètres du système sans affecter la fonction.

Si vous désactivez la Congélation auto et les autres fonctions qui ont besoin de l'arrière-plan, Ice Box ne tourne pas en arrière-plan.

## La Congélation auto ne fonctionne pas ? {#faq}

### Les applications ne sont pas congelées quand l'écran s'éteint

Vérifiez qu'aucun gestionnaire de téléphone ni application de nettoyage n'empêche Ice Box de tourner en arrière-plan. Dans les paramètres du système, accordez à Ice Box des autorisations comme « Exécution en arrière-plan » et « Démarrage automatique », et réglez son utilisation de la batterie sur « Ne pas optimiser » ou « Non restreinte ».

### Le Délai après extinction de l'écran ne s'applique pas

Sur certains téléphones, la congélation quelques minutes après l'extinction de l'écran peut ne pas fonctionner. C'est le système qui limite les tâches en arrière-plan. Choisissez un délai plus court, ou congelez dès l'extinction de l'écran.

### Les téléphones Huawei ne congèlent pas quand l'écran s'éteint

En raison des limites du système, la congélation auto sur « Écran éteint » peut ne pas fonctionner sur les téléphones Huawei. Utilisez plutôt la congélation auto sur « Appui sur Accueil » ou « Double appui sur Accueil ».
