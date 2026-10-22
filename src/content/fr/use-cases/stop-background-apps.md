---
title: Comment empêcher les applications Android de tourner en arrière-plan
short: Bloquer les applications en arrière-plan
card: Placez dans Ice Box les applications que vous utilisez rarement : elles ne peuvent plus démarrer ni tourner en arrière-plan, ni y vider la batterie et les données.
description: Empêchez les applications Android de tourner en arrière-plan : congelez avec Ice Box celles qui se lancent toutes seules, et décongelez-les en un appui quand vous en avez besoin. Fonctionne sans root.
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## En bref {#answer}

Congelez-les. Une application congelée ne peut pas s'exécuter : elle ne peut ni se lancer toute seule ni rester active en arrière-plan, et n'y consomme ni batterie ni données. Ice Box peut congeler ces applications en un seul appui. Quand vous avez besoin de l'une d'elles, appuyez dessus pour la décongeler et l'ouvrir, et Ice Box la congèle de nouveau automatiquement quand vous avez fini. Ice Box fonctionne sur les téléphones rootés comme non rootés.

## Pourquoi les applications tournent-elles en arrière-plan ? {#why}

Beaucoup d'applications démarrent automatiquement quand le téléphone s'allume, se connecte à un réseau, commence à charger ou reçoit un message push, même si vous ne les avez pas ouvertes depuis longtemps. La fonction « Forcer l'arrêt » d'Android n'arrête une application qu'une seule fois : ensuite, l'application peut redémarrer toute seule.

La congélation, c'est différent : une fois l'application congelée, le système ne la redémarre plus tant que vous ne l'avez pas décongelée dans Ice Box.

## Bloquer les applications en arrière-plan avec Ice Box {#steps}

1. [Téléchargez Ice Box](/download/) et activez-le en suivant la recommandation du [Centre d'aide](/guide/).
2. Dans la liste des applications d'Ice Box, cochez celles que vous utilisez rarement mais que vous ne voulez pas désinstaller.
3. Appuyez sur le bouton de congélation en bas d'Ice Box, ou balayez-le, pour congeler ces applications.
4. Quand vous avez besoin de l'une d'elles, appuyez dessus dans Ice Box ou sur son raccourci de l'écran d'accueil. Ice Box la décongèle d'abord, puis l'ouvre.
5. Activez la [Congélation auto](/guide/auto-freeze/) : Ice Box les congèle de nouveau automatiquement quand l'écran s'éteint.

## À savoir {#notes}

- Les applications congelées ne reçoivent pas leurs propres messages push. Sur des téléphones comme OPPO, vivo et OnePlus, certaines applications utilisent le service push du système et peuvent encore afficher des notifications, mais l'application elle-même ne s'exécute pas.
- Les applications qui doivent continuer à fonctionner en arrière-plan, comme les messageries qui doivent recevoir les messages en temps réel, les réveils et la navigation, ne sont pas de bonnes candidates à la congélation.
- La Congélation auto nécessite qu'Ice Box tourne en arrière-plan. Consultez [Congélation auto](/guide/auto-freeze/) pour régler les autorisations d'arrière-plan d'Ice Box.

## Questions fréquentes {#faq}

### Quelle différence entre la congélation et « Forcer l'arrêt » ?

« Forcer l'arrêt » arrête seulement l'application en cours d'exécution, et d'autres événements peuvent la réveiller plus tard. Une application congelée ne peut pas s'exécuter du tout tant qu'elle n'est pas décongelée.

### Est-ce que ça fonctionne sans root ?

Oui. Ice Box prend en charge des modes de fonctionnement sans root comme Device Owner, Débogage sans fil, ADB et Shizuku. Répondez à trois questions dans le [Centre d'aide](/guide/#modes) pour trouver le mode qui vous convient.

### La congélation supprime-t-elle les données des applications ?

Non. La congélation empêche seulement l'application de s'exécuter pour un temps. Toutes ses données sont conservées, et vous pouvez continuer à l'utiliser après l'avoir décongelée.
