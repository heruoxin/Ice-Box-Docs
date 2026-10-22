---
title: Remarques par marque de téléphone
short: Remarques par marque
description: Remarques sur Ice Box pour Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu et d'autres : Options pour les développeurs, problèmes Device Owner, raccourcis et notifications push.
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Chaque marque de téléphone modifie Android plus ou moins profondément, si bien qu'Ice Box se comporte un peu différemment d'une marque à l'autre. Voici les problèmes connus, classés par marque. Avant de commencer la configuration, cherchez la marque de votre téléphone et jetez un œil.

## Xiaomi / Redmi / POCO {#xiaomi}

- Avant d'utiliser le mode ADB, Débogage sans fil ou Device Owner, activez « Débogage USB (paramètres de sécurité) » dans les Options pour les développeurs.
- Avant de configurer Device Owner, désactivez « Optimisation MIUI ». Ainsi, les applications ne redemanderont pas leurs autorisations à chaque congélation, et vous ne verrez plus de messages indiquant que l'application a été désinstallée.
- Après la configuration de Device Owner, la fonction « Applications doubles » intégrée au système peut ne plus fonctionner.
- Si vous ne pouvez pas ajouter de raccourcis sur l'écran d'accueil, activez pour Ice Box l'autorisation des raccourcis sur l'écran d'accueil dans les paramètres du système. Si les raccourcis sont ajoutés mais ne fonctionnent pas, autorisez Ice Box à « démarrer d'autres applications » et à « afficher des fenêtres pop-up lors de l'exécution en arrière-plan ».
- Depuis MIUI 11, le transfert d'autorisations entre Ice Box et des applications comme Brevent, Island et Shizuku peut échouer. Désactivez d'abord « Optimisation MIUI ». Ensuite, appuyez de manière prolongée sur l'icône d'Ice Box sur l'écran d'accueil, ouvrez « Infos sur l'appli » et activez manuellement « Autres autorisations » dans les paramètres d'autorisations.
- Certaines applications système clés (comme Mi Musique et la boutique d'applications) peuvent ne pas être congelables, ou être décongelées automatiquement par le système après un redémarrage. Depuis la version 3.30.7, Ice Box peut congeler davantage de composants système MIUI / HyperOS.
- En mode Device Owner, **ne désinstallez pas Ice Box directement depuis l'écran d'accueil**. Vous perdriez l'autorisation Device Owner, et les applications congelées ne pourraient plus être décongelées. Suivez plutôt les étapes de [Désinstaller Ice Box](/guide/uninstall/).

## Samsung {#samsung}

- Après la configuration de Device Owner, le Dossier sécurisé et Dual Messenger peuvent ne plus fonctionner, et le mot de passe de l'écran de verrouillage peut même être réinitialisé. Lisez impérativement d'abord les [remarques sur les appareils Samsung](/guide/samsung-device-owner/).
- Pour les utilisateurs Samsung, nous recommandons le mode root, Débogage sans fil, Shizuku ou ADB.

## Huawei / Honor {#huawei}

- En mode ADB ou Débogage sans fil, activez « Autoriser le débogage ADB en mode Charge uniquement » dans les Options pour les développeurs.
- Après la configuration de Device Owner, une demande de désinstallation peut s'afficher à chaque congélation, et une demande d'autorisation à chaque décongélation. La fonction « App jumelle » intégrée au système peut ne plus fonctionner.
- Si vous ne pouvez pas ajouter de raccourcis sur l'écran d'accueil, accordez manuellement à Ice Box l'autorisation d'ajouter des raccourcis dans les paramètres du système. Avec un lanceur tiers, il est possible que vous ne puissiez pas ajouter de raccourcis depuis Ice Box. Essayez plutôt d'appuyer de manière prolongée sur une zone vide de l'écran d'accueil pour les ajouter.
- À cause des limites du système, la Congélation auto sur « Écran éteint » peut ne pas fonctionner. Utilisez plutôt la Congélation auto sur « Appui sur Accueil » ou « Double appui sur Accueil ».
- Dans les versions récentes d'EMUI, le lanceur Huawei ne peut plus être congelé. Les versions antérieures à EMUI 9.0 permettent encore de le congeler.

## OPPO / OnePlus / realme {#oppo}

- En mode ADB ou Débogage sans fil, activez « Désactiver la surveillance des autorisations » dans les Options pour les développeurs.
- Après la configuration de Device Owner, la barre de notifications peut afficher brièvement « L'administration de l'appareil est activée, appuyez pour la désactiver ».
- Si la liste n'affiche que quelques applications, autorisez Ice Box à lire la liste des applications dans les paramètres d'autorisations du système.
- Certaines applications passent par le service push du système : le système peut donc continuer d'afficher leurs notifications une fois qu'elles sont congelées, mais les applications elles-mêmes ne s'exécutent pas en arrière-plan. Si vous ne voulez pas de ces notifications, désactivez les notifications de cette application dans les paramètres du système.
- Une application tout juste décongelée n'arrive parfois pas à se connecter à Internet. Fermez-la puis rouvrez-la.

## vivo / iQOO {#vivo}

- Après la configuration de Device Owner, la barre de notifications peut afficher brièvement « L'administration de l'appareil est activée, appuyez pour la désactiver ».
- Si la liste n'affiche que quelques applications, autorisez Ice Box à lire la liste des applications dans les paramètres d'autorisations du système.
- Comme sur OPPO, certaines applications peuvent encore afficher des notifications via le service push du système une fois congelées.

## Sony {#sony}

- Retirez la carte SIM avant de configurer Device Owner.
- Nous vous conseillons de configurer Ice Box avant de passer à Android 9. Android 9 ajoute un compte masqué difficile à supprimer. Si vous avez déjà fait la mise à jour, utilisez la [configuration par code QR](/guide/qr-code/). Les téléphones déjà configurés ne sont pas concernés.

## Meizu et Smartisan {#meizu}

- Meizu : les raccourcis sur l'écran d'accueil peuvent ne pas fonctionner, même une fois ajoutés. Nous n'avons pas encore trouvé d'option système pour régler ce problème.
- Smartisan : les raccourcis ne sont pris en charge pour aucune application. Après la configuration de Device Owner, une demande de désinstallation peut s'afficher à chaque congélation, et les applications décongelées ont toutes leurs autorisations accordées par défaut. C'est ainsi que le système Smartisan est conçu, et cela n'a rien à voir avec Ice Box.

## Pixel et Android d'origine {#pixel}

- Les systèmes Android d'origine ou proches d'Android d'origine offrent la meilleure compatibilité avec tous les modes de fonctionnement.
- Sans ordinateur, vous pouvez utiliser la [configuration par code QR](/guide/qr-code/) pour faire d'Ice Box le Device Owner pendant une réinitialisation d'usine, ou utiliser le [mode Débogage sans fil](/guide/wireless-debugging/) sur Android 11 et versions ultérieures.
