---
title: Fonctionnalités d'Ice Box
short: Fonctionnalités
description: Fonctionnalités d'Ice Box : congélation et décongélation en un geste, Congélation auto, raccourcis, onglets, thèmes, packs d'icônes, verrouillage, congélation des applications système, SDK, modes avec ou sans root.
section: product
priority: 0.9
related: guide, themes, guide/auto-freeze, developers
---

Ice Box est un congélateur d'applications pour Android. Placez dans Ice Box les applications que vous utilisez rarement : elles ne peuvent plus tourner en arrière-plan ni apparaître sur votre écran d'accueil. Quand vous en avez besoin, appuyez dessus : Ice Box la décongèle, puis l'ouvre.

## Congeler et décongeler {#freeze}

- **Congeler** : une application congelée ne peut pas s'exécuter ni se lancer toute seule en arrière-plan, et elle est masquée de l'écran d'accueil et du tiroir d'applications. L'application et ses données sont conservées.
- **Décongeler** : appuyez sur une application dans Ice Box, ou sur son raccourci de l'écran d'accueil, et Ice Box la décongèle puis l'ouvre.
- **Tout congeler / Tout décongeler** : balayez ou appuyez sur le bouton de congélation en bas d'Ice Box pour congeler d'un coup toutes les applications de la liste. « Tout décongeler » les rétablit toutes d'un coup. Vous pouvez changer la position du bouton de congélation et le sens du balayage dans les paramètres.
- **Congeler + verrouiller l'écran** : congelez toutes les applications et verrouillez l'écran immédiatement, en un seul appui.

Selon le mode de fonctionnement, Ice Box congèle les applications avec l'une des deux méthodes fournies par le système : « désactiver » ou « masquer ».

## Congélation auto {#auto-freeze}

Ice Box peut congeler automatiquement les applications de votre liste quand l'écran s'éteint, ou quand vous appuyez une ou deux fois sur le bouton Accueil. Vous pouvez définir un délai après l'extinction de l'écran et choisir de ne pas congeler automatiquement pendant la charge. Consultez [Congélation auto](/guide/auto-freeze/).

## Raccourcis sur l'écran d'accueil {#shortcuts}

Créez des raccourcis sur l'écran d'accueil pour les applications congelées. Un appui sur le raccourci décongèle l'application et l'ouvre, sans passer par Ice Box. Vous pouvez aussi activer l'ajout automatique d'un raccourci quand une application est ajoutée à la liste de congélation. Consultez [Raccourcis sur l'écran d'accueil](/guide/shortcuts/).

## Onglets multiples {#tabs}

Créez plusieurs onglets pour classer les applications par usage, par exemple Quotidien, Réseaux sociaux et Jeux. Les onglets peuvent être renommés et les applications déplacées d'un onglet à l'autre. Vous pouvez aussi trier vous-même les applications dans Ice Box.

## Thèmes et packs d'icônes {#themes}

- Presque tous les éléments de l'écran principal peuvent changer de couleur, avec prise en charge de la transparence.
- Sur Android 12 et versions ultérieures, Ice Box peut utiliser les couleurs dynamiques du système. Vous pouvez aussi utiliser votre fond d'écran en arrière-plan.
- Les thèmes clair et sombre peuvent suivre automatiquement le système.
- Les packs d'icônes tiers sont pris en charge, et vous pouvez régler la taille des icônes.
- Les thèmes se partagent et s'importent sous forme de liens. Découvrez les palettes partagées par d'autres utilisateurs dans [Thèmes partagés](/themes/).

## Verrouillage par empreinte et code PIN {#lock}

Une fois cette option activée, Ice Box demande votre empreinte ou votre code PIN avant de s'ouvrir, et la reconnaissance faciale peut aussi être utilisée. Avec le verrouillage par empreinte, le contenu d'Ice Box est masqué dans les applis récentes.

## Congeler les applications système préinstallées {#system-apps}

En plus des applications que vous avez installées vous-même, Ice Box peut aussi congeler certaines applications système préinstallées, y compris dans les modes sans root. Vous pouvez aussi importer une « liste des applications système congelables sans risque » partagée par quelqu'un d'autre. Consultez [Congeler les applications système préinstallées](/guide/system-apps/).

## Proposition pour les nouvelles applications {#new-app}

Après l'installation d'une nouvelle application, Ice Box peut afficher une notification qui vous propose de l'ajouter à Ice Box.

## Modes de fonctionnement {#modes}

Ice Box peut obtenir les autorisations système de plusieurs façons, il fonctionne donc sur les téléphones rootés comme sur les téléphones non rootés :

[[mode-cards]]

Vous ne savez pas lequel choisir ? Répondez à trois questions dans le [Centre d'aide](/guide/) pour obtenir une recommandation.

## SDK ouvert et intégrations {#sdk}

- **SDK Ice Box** : avec l'accord de l'utilisateur, d'autres applications peuvent congeler et décongeler des applications via Ice Box. En mode Device Owner, elles peuvent aussi installer et désinstaller des APK en silence. Chaque action effectuée par une application tierce est enregistrée dans le journal d'Ice Box. Consultez [Pour les développeurs](/developers/).
- **Configurer dans une autre application** : Ice Box prend en charge le point d'entrée « Infos sur l'appli » d'Android, et fonctionne donc avec des applications comme Greenify et AppOps.
- **Island** : toutes les fonctionnalités d'Ice Box marchent aussi dans le profil professionnel d'Island.

## Versions et configuration requise {#requirements}

- Téléphones et tablettes sous Android 7.0 ou version ultérieure.
- Téléchargement gratuit. Certaines fonctionnalités nécessitent la version Pro. En cas de différence, c'est la description dans l'application qui fait foi.
- Les nouveautés de chaque version sont listées dans le [journal des modifications](/changelog/).

[[download-buttons]]
