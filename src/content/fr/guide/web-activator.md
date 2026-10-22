---
title: Activer Ice Box avec l'activateur web
short: Activateur web
description: Rien à installer : activez le mode Device Owner ou ADB d'Ice Box avec l'activateur web dans votre navigateur, via WebUSB. Windows, macOS, Linux. Chrome recommandé.
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

L'activateur web est développé par [@web1n](https://github.com/web1n). Il fait la même chose que l'activateur exe et fonctionne sur n'importe quel système d'exploitation d'ordinateur. Nous recommandons Chrome.

[Ouvrir l'activateur web](https://adb.http.gs/icebox.html)

L'activateur web peut activer deux modes :

- **Mode Device Owner** : à activer une seule fois, il continue ensuite de fonctionner, mais il peut avoir des effets secondaires sur certains téléphones.
- **Mode ADB** : aucun effet secondaire, mais il faut reconnecter le téléphone à un ordinateur et réactiver à chaque redémarrage du téléphone ou à chaque modification des paramètres USB du système.

## Effets secondaires possibles du mode Device Owner {#side-effects}

Les systèmes des téléphones Samsung et des marques chinoises modifient souvent Android, ce qui cause des problèmes de compatibilité avec le mode Device Owner. Les plus courants :

- Les téléphones Samsung peuvent être verrouillés par mot de passe par le système (environ 4 signalements sur 200 000 à ce jour). Lisez d'abord les [remarques sur les appareils Samsung](/guide/samsung-device-owner/).
- Une demande de désinstallation s'affiche à chaque congélation, et une demande d'autorisation s'affiche à chaque décongélation (Huawei, Smartisan).
- La barre de notifications affiche brièvement « L'administration de l'appareil est activée, appuyez pour la désactiver » (OPPO, vivo).
- La fonction d'applications doubles intégrée au système ne fonctionne plus (Huawei, MIUI).
- Une application tout juste décongelée n'arrive parfois pas à se connecter à Internet. Fermez-la puis rouvrez-la (OnePlus, Smartisan et d'autres).

Si ces problèmes ne vous conviennent pas, choisissez le mode ADB. Il ne demande pas de root non plus, mais il faut le réactiver avec un ordinateur à chaque redémarrage du téléphone.

## Comment activer {#steps}

1. Vérifiez qu'Ice Box est installé sur le téléphone. Retirez le verrouillage de l'écran. Sur les téléphones Sony, retirez la carte SIM. Sur les téléphones Xiaomi, activez « Débogage USB (paramètres de sécurité) » et désactivez « Optimisation MIUI ».
2. Connectez le téléphone à l'ordinateur avec un câble USB, et fermez sur l'ordinateur tout logiciel de sécurité, toute suite PC et tout gestionnaire de téléphone.
3. Sur l'ordinateur, ouvrez l'[activateur web](https://adb.http.gs/icebox.html) dans Chrome, puis connectez votre appareil et lancez l'activation.

Avant d'activer le mode Device Owner, vous devez aussi vous déconnecter de tous les comptes du téléphone. Consultez [Configurer le mode Device Owner](/guide/device-owner/#steps).
