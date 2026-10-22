---
title: Configurer le mode Device Owner
short: Mode Device Owner
description: Configurez le mode Device Owner d'Ice Box sans root : retirez vos comptes un moment et lancez une seule commande ADB sur un ordinateur. Il résiste aux redémarrages et aux mises à jour du système.
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

Si votre téléphone est rooté, ouvrez simplement Ice Box et commencez à l'utiliser : aucune configuration supplémentaire n'est nécessaire. Si votre téléphone ne peut pas être rooté et que vous voulez une solution à configurer une seule fois pour toutes, choisissez le mode Device Owner. La configuration demande un ordinateur : lisez d'abord toute cette page.

## Qu'est-ce que Device Owner ? {#what}

Device Owner (propriétaire de l'appareil) est une fonction du cadre de gestion d'entreprise d'Android. Il permet de congeler et de décongeler n'importe quelle application sans root. Ice Box n'utilise que les capacités utiles, comme la congélation des applications.

- Un téléphone ne peut avoir qu'un seul Device Owner à la fois.
- Il ne peut être défini qu'avec une commande ADB ou un code QR. L'activer dans « Applis d'administration de l'appareil » dans les paramètres du téléphone ne fonctionne pas et ne vous donnera pas cette autorisation.
- Une fois défini, il n'est pas nécessaire de le reconfigurer après un redémarrage ou une mise à jour du système.

## À lire avant de commencer {#before}

Les systèmes des marques de téléphones chinoises ajoutent souvent leurs propres fonctions, ce qui cause des problèmes de compatibilité avec le mode Device Owner. Les plus courants :

- Les téléphones Samsung peuvent être verrouillés par mot de passe par le système. Lisez impérativement d'abord les [remarques sur les appareils Samsung](/guide/samsung-device-owner/).
- Une demande de désinstallation s'affiche à chaque congélation, et une demande d'autorisation s'affiche à chaque décongélation (Huawei, Smartisan).
- La barre de notifications affiche brièvement « L'administration de l'appareil est activée, appuyez pour la désactiver » (OPPO, vivo).
- La fonction d'applications doubles intégrée au système ne fonctionne plus (Huawei, MIUI).
- Une application tout juste décongelée n'arrive parfois pas à se connecter à Internet. Fermez-la puis rouvrez-la (OnePlus, Smartisan et d'autres).

Si ces problèmes ne vous conviennent pas, envisagez le [mode ADB](/guide/adb/) ou le [mode Débogage sans fil](/guide/wireless-debugging/). Ils ne demandent pas de root non plus, mais il faut les réactiver à chaque redémarrage du téléphone.

## Activateur ou ligne de commande ? {#tools}

Si vous ne connaissez pas bien ADB et la ligne de commande, utilisez plutôt un outil d'activation. Le résultat est exactement le même qu'avec la ligne de commande :

- [Activateur en un clic](/guide/activator/) : pour les ordinateurs Windows.
- [Activateur web](/guide/web-activator/) : fonctionne sous Windows, macOS et Linux. Chrome est recommandé.
- [AutumnBox (秋之盒)](/guide/autumnbox/) : pour les ordinateurs Windows.

Pas d'ordinateur ? Essayez la [configuration par code QR](/guide/qr-code/). Le résultat est exactement le même, mais elle demande d'abord une réinitialisation d'usine, et certains systèmes de marques chinoises ne la prennent pas en charge.

## Configurer avec la ligne de commande {#steps}

1. Vérifiez que votre téléphone est sous Android 7.0 ou version ultérieure et que la dernière version d'Ice Box est installée. Assurez-vous de savoir utiliser les commandes [ADB](https://developer.android.com/tools/adb) et d'avoir lu toute cette page.
2. Sur les téléphones Sony, retirez la carte SIM. Sur les téléphones Xiaomi, activez « Débogage USB (paramètres de sécurité) » dans les Options pour les développeurs et désactivez « Optimisation MIUI ».
3. Allez dans « Paramètres > Comptes » sur votre téléphone et retirez tous les comptes, y compris les comptes système comme Google, Xiaomi et Huawei. Vous pourrez vous reconnecter après la configuration.
4. Si vous avez configuré plusieurs utilisateurs, le mode invité ou des applications doubles, désactivez-les ou supprimez-les aussi. Vous pourrez les réactiver après la configuration.
5. Lancez la commande ci-dessous sur votre ordinateur (un émulateur de terminal sur le téléphone ne fonctionnera pas).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

Si vous voyez un message du type « Success », la configuration a réussi. Ouvrez Ice Box et commencez à l'utiliser. Vous pouvez aussi rajouter les comptes que vous avez retirés.

ADB est disponible en téléchargement officiel chez Google : [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## La configuration n'a pas fonctionné ? {#faq}

### Le message « 'adb' n'est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes » s'affiche

Vous n'avez peut-être pas l'habitude de la ligne de commande sur ordinateur. Nous vous conseillons d'activer plutôt avec l'[activateur en un clic](/guide/activator/) ou l'[activateur web](/guide/web-activator/).

### L'activateur reste bloqué sur le chargement

Extrayez tous les fichiers de l'archive de l'activateur sur votre ordinateur avant de le lancer. Ne les extrayez pas dans la mémoire du téléphone, et ne double-cliquez pas sur le fichier exe à l'intérieur de l'archive.

### Le message « error: no devices/emulators found » s'affiche

Le téléphone n'est pas connecté à l'ordinateur. Vérifiez que le débogage USB est activé, que le pilote du téléphone est correctement installé sur l'ordinateur, et qu'aucune suite PC, aucun gestionnaire de téléphone ni aucun antivirus ne bloque la connexion.

### Le message « Not allowed to ... already several accounts on the device » s'affiche

Tous les comptes n'ont pas été retirés à l'étape 3. Déconnectez-vous de tous les comptes du téléphone, y compris votre compte Google et les comptes système intégrés comme Xiaomi et Huawei. Sur les téléphones Sony, retirez la carte SIM et redémarrez.

### Le message « Not allowed to ... already several users on the device » s'affiche

Les utilisateurs supplémentaires ou les applications doubles de l'étape 4 n'ont pas tous été supprimés. Supprimez ou désactivez tous les utilisateurs supplémentaires, le mode invité et les applications doubles.

### Le message « Trying to set the device owner, but device owner is already set. » s'affiche

Une autre application du téléphone est déjà définie comme Device Owner, et un téléphone ne peut en avoir qu'un seul. Si cette application fonctionne avec Ice Box, comme Island ou BlackHouse (小黑屋), passez Ice Box dans le mode de fonctionnement correspondant et vous pourrez l'utiliser tout de suite. Consultez les [autres modes de fonctionnement](/guide/other-modes/).

### Les téléphones Xiaomi affichent « Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS »

Dans les Options pour les développeurs des paramètres du système, activez manuellement « Débogage USB (paramètres de sécurité) ». Si cela échoue encore, désactivez « Optimisation MIUI » et réessayez.

## Questions après une configuration réussie {#faq-after}

### Est-il normal de voir un message comme « Cet appareil est géré par votre organisation » dans la barre de notifications ?

Oui. C'est ainsi que fonctionne le mode Device Owner. Le texte est affiché par le système et ne peut pas être supprimé, mais vous pouvez remplacer le « Nom de l'organisation » par le texte de votre choix dans le « Laboratoire » d'Ice Box.

### Les paramètres de certains téléphones disent que Device Owner peut lire des informations personnelles comme l'agenda et les e-mails. Ice Box les lit-il ?

Non. Ice Box n'utilise que les autorisations Device Owner liées à la congélation des applications. Il n'utilise aucune autorisation sans rapport et ne lit jamais votre agenda, vos e-mails ni aucune information de ce type.

### Comment retirer l'autorisation d'Ice Box quand je n'en veux plus ?

Décongelez d'abord toutes les applications, puis appuyez sur « Désinstaller » dans les paramètres d'Ice Box. Après confirmation, Ice Box retire son autorisation Device Owner et se désinstalle. Consultez [Désinstaller Ice Box](/guide/uninstall/).

### Pourquoi est-ce que je ne peux pas décongeler les applications congelées plus tôt en mode root ou ADB ?

Les modes de fonctionnement ne sont pas compatibles entre eux. Repassez dans votre mode de fonctionnement précédent depuis le « Laboratoire » d'Ice Box. Les applications doivent être décongelées dans le mode qui les a congelées.
