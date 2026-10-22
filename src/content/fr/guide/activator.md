---
title: Activer Ice Box avec l'activateur en un clic (Windows)
short: Activateur en un clic
description: Utilisez l'activateur en un clic sur un PC Windows pour activer le mode Device Owner ou le mode ADB d'Ice Box sans taper de commandes. Téléchargement, étapes et FAQ.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

L'activateur en un clic est développé par [@web1n](https://github.com/web1n). Il fonctionne sur les ordinateurs Windows et active le mode Device Owner d'Ice Box, sans que vous ayez à taper de commandes ADB à la main.

[[activator-download]]

Si vous n'avez pas d'ordinateur Windows, ou si l'activateur exe pose problème, utilisez plutôt l'[activateur web](/guide/web-activator/). Il fait la même chose.

## À lire avant de commencer {#before}

Les systèmes des marques de téléphones chinoises modifient souvent Android, ce qui cause des problèmes de compatibilité avec le mode Device Owner. Les plus courants :

- Les téléphones Samsung peuvent être verrouillés par mot de passe par le système (environ 4 signalements sur 200 000 à ce jour). Lisez d'abord les [remarques sur les appareils Samsung](/guide/samsung-device-owner/).
- Une demande de désinstallation s'affiche à chaque congélation, et une demande d'autorisation s'affiche à chaque décongélation (Huawei, Smartisan).
- La barre de notifications affiche brièvement « L'administration de l'appareil est activée, appuyez pour la désactiver » (OPPO, vivo).
- La fonction d'applications doubles intégrée au système ne fonctionne plus (Huawei, MIUI).
- Une application tout juste décongelée n'arrive parfois pas à se connecter à Internet. Fermez-la puis rouvrez-la (OnePlus, Smartisan et d'autres).

Si ces problèmes ne vous conviennent pas, utilisez le [mode ADB](/guide/adb/). Il ne demande pas de root non plus, mais il faut le réactiver avec un ordinateur à chaque redémarrage du téléphone.

Le mode Device Owner, lui, ne demande pas de repasser sans cesse par l'ordinateur. Configurez-le une fois et il continue de fonctionner, même après les redémarrages et les mises à jour du système.

## Étapes {#steps}

Une fois que vous avez décidé d'activer Ice Box en mode Device Owner, suivez ces étapes :

1. Vérifiez qu'Ice Box est installé sur le téléphone. Retirez le verrouillage de l'écran. Sur les téléphones Sony, retirez la carte SIM. Sur les téléphones Xiaomi, activez « Débogage USB (paramètres de sécurité) » et désactivez « Optimisation MIUI ».
2. Dans les paramètres du système, déconnectez-vous de tous les comptes, par exemple les comptes Xiaomi, Huawei et Google. Vous pourrez vous reconnecter après l'activation.
3. Téléchargez et extrayez l'activateur. Extrayez-le sur l'ordinateur, pas dans la mémoire du téléphone.
4. Activez le débogage USB sur le téléphone et connectez-le à l'ordinateur avec un câble USB.
5. Cliquez sur « Activer Ice Box » (激活冰箱) dans l'activateur.

Une fois l'activation réussie, ouvrez Ice Box et commencez à l'utiliser.

En cas d'autre problème, vérifiez d'abord que tous les comptes système ont bien été retirés. Si cela ne fonctionne toujours pas, comparez le journal de l'activateur avec la [FAQ du mode Device Owner](/guide/device-owner/#faq).

## FAQ {#faq}

### L'activateur reste bloqué sur le chargement

Extrayez tous les fichiers de l'archive de l'activateur sur votre ordinateur avant de le lancer. Ne les extrayez pas dans la mémoire du téléphone, et ne double-cliquez pas sur le fichier exe à l'intérieur de l'archive.

### L'activateur indique qu'il ne trouve pas l'appareil

Vérifiez que le débogage USB est activé, que votre câble permet le transfert de données, que le pilote du téléphone est installé sur l'ordinateur, et qu'aucune suite PC, aucun gestionnaire de téléphone ni aucun antivirus n'occupe la connexion.
