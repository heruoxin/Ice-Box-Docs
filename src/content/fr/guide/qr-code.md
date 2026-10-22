---
title: Configurer Ice Box avec un code QR (sans root, sans ordinateur)
short: Configuration par code QR
description: Pas d'ordinateur ? Après une réinitialisation d'usine, scannez un code QR sur l'écran de configuration pour faire d'Ice Box le Device Owner. Pour Android 7.0 et versions ultérieures, d'origine ou proche d'origine.
section: guide
group: activate
order: 8
howto: true
related: guide/device-owner, guide/wireless-debugging, guide/other-modes
---

> [!WARNING]
> Cette méthode demande une **réinitialisation d'usine**, qui efface toutes les données du téléphone. Faites d'abord une sauvegarde. Elle ne fonctionne que sur Android 7.0 et versions ultérieures, d'origine ou proche d'origine. De nombreux systèmes de marques chinoises ont supprimé cette fonction.

Si vous avez un ordinateur, mieux vaut configurer avec l'[activateur en un clic](/guide/activator/) ou l'[activateur web](/guide/web-activator/). Le résultat est exactement le même, et aucune réinitialisation d'usine n'est nécessaire.

## Étapes de configuration {#steps}

0. Enregistrez le code QR ci-dessous sur un autre téléphone ou un ordinateur, ou imprimez-le, pour l'avoir sous la main.
1. Rétablissez la configuration d'usine du téléphone.
2. Sur l'écran de configuration, appuyez au moins 6 fois de suite sur le texte « Bienvenue ». Si rien ne se passe, votre système a supprimé cette fonction.
3. Suivez les instructions pour vous connecter au Wi-Fi et télécharger le lecteur de code QR, puis scannez le code QR ci-dessous. Le téléphone installe et configure Ice Box automatiquement.

![Code QR pour configurer Ice Box en mode Device Owner](https://files.catchingnow.com/dpm/icebox_en.png)

## Remarques {#notes}

- Une fois la configuration faite, elle continue de fonctionner après les redémarrages et les mises à jour du système, sauf si les données sont effacées. Pour désinstaller Ice Box, appuyez sur « Désinstaller » dans les paramètres d'Ice Box.
- Après une configuration de ce type, le système n'installe pas les applications préinstallées par défaut. Cela concerne toutes sortes d'applications publicitaires, mais aussi des fonctions comme l'appareil photo. Pour récupérer des applications préinstallées, allez dans « Laboratoire » dans les paramètres d'Ice Box, appuyez sur « Activer les applications système préinstallées » et choisissez les applications à installer.
- Si le téléphone indique qu'il doit être réinitialisé pendant la configuration, c'est généralement que le réseau a été détourné et qu'Ice Box n'a pas pu être téléchargé.

## Codes QR pour d'autres applications {#other-apps}

Un téléphone ne peut avoir qu'un seul Device Owner. Si vous voulez faire d'une autre application, comme Island ou BlackHouse (小黑屋), le Device Owner, scannez le code QR correspondant ci-dessous.

![Codes QR de configuration Device Owner pour Island, BlackHouse et d'autres applications](https://files.catchingnow.com/dpm/all_apps.png)
