---
title: Comment désactiver les applications préinstallées sur Android sans root
short: Désactiver les applications préinstallées
card: Les applications système préinstallées que vous ne pouvez pas désinstaller peuvent quand même être congelées, et sans root.
description: Désactivez les applications préinstallées sans root : congelez les applications système et publicitaires avec Ice Box pour qu'elles quittent l'écran d'accueil et ne puissent plus s'exécuter. Fonctionne avec Device Owner et d'autres modes.
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## En bref {#answer}

La plupart des applications préinstallées ne peuvent pas être désinstallées, mais elles peuvent être congelées. Une fois congelées avec Ice Box, elles disparaissent de l'écran d'accueil et du tiroir d'applications, et ne peuvent plus tourner en arrière-plan. Si vous en avez besoin plus tard, décongelez-la dans Ice Box pour la retrouver. Congeler les applications préinstallées ne demande pas de root : les modes sans root comme Device Owner, Débogage sans fil et ADB fonctionnent tous.

## Étapes {#steps}

1. [Téléchargez Ice Box](/download/) et activez-le en suivant la recommandation du [Centre d'aide](/guide/).
2. Dans la liste des applications d'Ice Box, passez aux applications système et cochez les applications préinstallées dont vous êtes sûr de ne pas avoir besoin.
3. Congelez-les. Dès lors, ces applications n'apparaissent plus sur l'écran d'accueil et ne tournent plus en arrière-plan.
4. Pour en retrouver une, décongelez-la dans Ice Box.

Vous pouvez aussi importer une « liste des applications système congelables sans risque » partagée par quelqu'un d'autre. Ice Box affiche celles qui peuvent être congelées sur votre téléphone, et les congèle après votre confirmation. Consultez [Congeler les applications système préinstallées](/guide/system-apps/).

## À savoir {#notes}

- Ne congelez que les applications dont vous êtes sûr de ne pas avoir besoin. Congeler des composants clés du système peut empêcher certaines parties du téléphone de fonctionner correctement.
- Sur MIUI et certains autres systèmes, certaines applications clés ne peuvent pas être congelées, ou le système peut les décongeler automatiquement après un redémarrage.
- Sur les téléphones configurés par [configuration par code QR](/guide/qr-code/), le système n'installe pas les applications préinstallées par défaut. Si vous en avez besoin, vous pouvez les activer dans le « Laboratoire » d'Ice Box.
- Pour les détails propres à chaque marque, consultez les [remarques par marque de téléphone](/guide/devices/).

## Questions fréquentes {#faq}

### Quelle différence entre congeler les applications préinstallées et les désactiver avec des commandes ADB ?

Le résultat est similaire, mais Ice Box vous offre une interface graphique pour vérifier, congeler et décongeler les applications à tout moment, sans commande à retenir.

### Les applications congelées peuvent-elles être restaurées ?

Oui. Dès que vous décongelez une application dans Ice Box, elle fonctionne de nouveau normalement. Avant de désinstaller Ice Box, décongelez d'abord toutes les applications.

### Les applications préinstallées congelées reviennent-elles après une mise à jour du système ?

Certains systèmes décongèlent automatiquement les applications clés après un redémarrage ou une mise à jour. Dans ce cas, congelez-les de nouveau dans Ice Box.
