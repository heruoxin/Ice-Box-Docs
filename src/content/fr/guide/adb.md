---
title: Mode ADB : activer Ice Box avec un ordinateur
short: Mode ADB
description: Impossible de configurer Device Owner, ou vous voulez garder vos comptes ? Activez Ice Box via ADB sur un ordinateur (mode ADB simple). Sans root, mais à réactiver après chaque redémarrage.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

Si vous n'avez pas réussi à configurer le [mode Device Owner](/guide/device-owner/), ou si vous ne voulez pas retirer les comptes de votre téléphone, vous pouvez utiliser le mode ADB (aussi appelé mode ADB simple). Ce qui le distingue du mode Device Owner :

- **Avantages** : aucune étape compliquée comme le retrait des comptes. Utilisable dès l'activation.
- **Inconvénients** : il faut le réactiver à chaque redémarrage du téléphone. Sinon, les applications ne peuvent être ni congelées ni décongelées.

Dans Ice Box, le mode ADB apparaît sous le nom de mode de fonctionnement « Débogage sans fil ». Sur Android 11 et versions ultérieures, vous pouvez aussi l'activer sur le téléphone lui-même, sans ordinateur. Consultez [Mode Débogage sans fil](/guide/wireless-debugging/).

## Étapes d'activation {#steps}

1. Vérifiez que la dernière version d'Ice Box est installée.
2. Activez le débogage USB sur le téléphone et laissez-le toujours activé. Réglez le mode de connexion USB sur « Recharge uniquement ». Sur les téléphones Xiaomi, activez aussi « Débogage USB (paramètres de sécurité) ».
3. Connectez le téléphone à l'ordinateur, ouvrez l'activateur et choisissez le mode ADB pour activer.

[[activator-download]]

Si vous êtes à l'aise avec les commandes ADB, vous pouvez vous passer de l'activateur et lancer plutôt ceci sur votre ordinateur :

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## FAQ {#faq}

### L'activateur reste bloqué sur le chargement

Extrayez tous les fichiers de l'archive de l'activateur sur votre ordinateur avant de le lancer. Ne les extrayez pas dans la mémoire du téléphone, et ne double-cliquez pas sur le fichier exe à l'intérieur de l'archive.

### Ice Box cesse de fonctionner peu après que je débranche le câble

Laissez le débogage USB toujours activé, et laissez le mode de connexion USB sur « Recharge uniquement » sans le modifier. Sur les téléphones Xiaomi, « Débogage USB (paramètres de sécurité) » doit aussi être activé. Si vous modifiez l'une de ces options, le système retire automatiquement l'autorisation d'Ice Box.

### Impossible de congeler ou de décongeler après un redémarrage du téléphone

C'est normal en mode ADB. Après un redémarrage, reconnectez le téléphone à l'ordinateur et réactivez, ou, sur Android 11 et versions ultérieures, réactivez avec le [Débogage sans fil](/guide/wireless-debugging/).
