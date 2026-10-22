---
title: Congeler les applications système préinstallées
short: Congeler les applications préinstallées
description: Ice Box peut congeler certaines applications système préinstallées, y compris dans les modes sans root. Ce qu'il faut vérifier d'abord, les applications impossibles à congeler, les listes partagées et la mise à jour des applications congelées.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Beaucoup de téléphones arrivent avec quantité de logiciels préinstallés et d'applications publicitaires que vous n'utiliserez jamais. Ice Box peut congeler ces applications préinstallées : elles ne tourneront plus en arrière-plan et n'apparaîtront plus sur l'écran d'accueil. Si vous avez besoin de l'une d'elles, décongelez-la dans Ice Box pour la retrouver.

## Avant de congeler {#before}

- Ne congelez que les applications dont vous êtes sûr de ne pas avoir besoin. Dans le doute, ne la congelez pas. Congeler des composants clés du système peut perturber le fonctionnement du téléphone.
- Certains systèmes traitent les applications clés à part : sur MIUI et des systèmes similaires, certaines applications clés ne peuvent pas être congelées, ou sont décongelées de force par le système après un redémarrage.
- Sur les versions récentes d'EMUI, le lanceur Huawei ne peut plus être congelé.
- Les applications qui disposent de l'autorisation d'administration de l'appareil ne peuvent pas être congelées. Retirez d'abord l'autorisation de l'application dans « Paramètres > Sécurité > Applis d'administration de l'appareil », puis congelez-la.

## Importer une liste de congélation partagée {#lists}

Ice Box permet de partager et d'importer des listes d'applications système congelables sans risque. Quand vous ouvrez le lien d'une liste partagée par quelqu'un, Ice Box affiche celles qui peuvent être congelées sur votre téléphone, et les congèle après que vous avez confirmé chacune d'elles.

Vous pouvez aussi copier le texte partagé et appuyer sur « Importer depuis le presse-papiers » dans les paramètres d'Ice Box.


## Applications préinstallées après une configuration par code QR {#qr}

Sur les téléphones configurés par [configuration par code QR](/guide/qr-code/), le système n'installe pas les applications préinstallées par défaut. Si vous avez besoin de l'une d'elles, allez dans « Laboratoire » dans les paramètres d'Ice Box, appuyez sur « Activer les applications système préinstallées », puis choisissez les applications à installer.

## FAQ {#faq}

### Comment mettre à jour une application congelée ?

Si vous utilisez CoolApk (酷安), une boutique d'applications Android chinoise, activez « Afficher les applications masquées » dans la section Laboratoire des paramètres de CoolApk. Avec les autres boutiques d'applications, décongelez d'abord l'application dans Ice Box, puis congelez-la de nouveau après la mise à jour.

### Certaines applications système ne peuvent pas être congelées, ou sont décongelées discrètement après un redémarrage

C'est le système qui protège ses applications clés, et Ice Box ne peut pas le contourner. MIUI et certains autres systèmes procèdent ainsi.
