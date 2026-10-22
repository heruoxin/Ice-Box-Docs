---
title: Activer Ice Box avec AutumnBox
short: AutumnBox
description: AutumnBox est une boîte à outils Windows qui simplifie les opérations ADB et peut activer le mode Device Owner d'Ice Box en un clic. Étapes et points d'attention.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox (秋之盒) est une boîte à outils en un clic qui simplifie les opérations ADB. Un grand merci à [zsh2401](https://zsh2401.top/) pour tout le travail fourni pour la développer.

AutumnBox ne fonctionne que sous Windows. Si votre ordinateur est sous macOS ou Linux, utilisez l'[activateur web](/guide/web-activator/) ou suivez les [étapes de configuration en ligne de commande](/guide/device-owner/#steps).

> [!NOTE]
> Le site d'AutumnBox est actuellement inaccessible et le projet n'est plus mis à jour. Son code source et ses anciennes versions sont sur [GitHub](https://github.com/zsh2401/AutumnBox). Nous recommandons plutôt l'[activateur en un clic](/guide/activator/) ou l'[activateur web](/guide/web-activator/), qui font la même chose.

## À lire avant de commencer {#before}

Les systèmes des marques de téléphones chinoises ajoutent souvent leurs propres fonctions, ce qui cause des problèmes de compatibilité avec le mode Device Owner. Les plus courants :

- Les téléphones Samsung peuvent être verrouillés par mot de passe par le système (environ 4 signalements sur 200 000 à ce jour). Lisez d'abord les [remarques sur les appareils Samsung](/guide/samsung-device-owner/).
- Une demande de désinstallation s'affiche à chaque congélation, et une demande d'autorisation s'affiche à chaque décongélation (Huawei, Smartisan).
- La barre de notifications affiche brièvement « L'administration de l'appareil est activée, appuyez pour la désactiver » (OPPO, vivo).
- La fonction d'applications doubles intégrée au système ne fonctionne plus (Huawei, MIUI).
- Une application tout juste décongelée n'arrive parfois pas à se connecter à Internet. Fermez-la puis rouvrez-la (OnePlus et d'autres).
- Sur les téléphones Sony, nous vous conseillons de configurer Ice Box avant de passer à Android 9. Android 9 ajoute un compte masqué difficile à supprimer. Si vous avez déjà fait la mise à jour, utilisez la [configuration par code QR](/guide/qr-code/). Les téléphones déjà configurés ne sont pas concernés.

Si ces problèmes ne vous conviennent pas, utilisez [Shizuku](/guide/shizuku/) ou le [mode ADB](/guide/adb/). Ils ne demandent pas de root non plus, mais il faut les réactiver à chaque redémarrage du téléphone.

Le mode Device Owner, lui, ne demande pas de repasser sans cesse par l'ordinateur. Configurez-le une fois et il continue de fonctionner, même après les redémarrages et les mises à jour du système.

## Étapes {#steps}

Une fois que vous avez décidé d'activer Ice Box en mode Device Owner, suivez ces étapes :

1. Vérifiez qu'Ice Box est installé sur le téléphone. Retirez le verrouillage de l'écran. Sur les téléphones Sony, retirez la carte SIM. Sur les téléphones Xiaomi, activez « Débogage USB (paramètres de sécurité) » et désactivez « Optimisation MIUI ».
2. Dans les paramètres du système, retirez tous les comptes, par exemple les comptes Xiaomi, Huawei et Google. Vous pourrez vous reconnecter après l'activation.
3. Téléchargez et ouvrez AutumnBox.
4. Activez le débogage USB sur le téléphone et connectez-le à l'ordinateur. Si la connexion ne se fait pas, c'est généralement que le pilote n'est pas installé ou qu'une autre suite PC entre en conflit. Vérifiez le pilote et fermez tout autre logiciel de gestion de téléphone.
5. Cliquez sur la fonction « Activer Ice Box » (激活冰箱) dans AutumnBox.

Normalement, vous pouvez maintenant ouvrir Ice Box et commencer à l'utiliser. En cas de problème, vérifiez d'abord que tous les comptes système ont bien été retirés. Si cela ne fonctionne toujours pas, comparez le journal affiché avec la [FAQ du mode Device Owner](/guide/device-owner/#faq).
