---
title: Mode Débogage sans fil : activer Ice Box sans root ni ordinateur
short: Mode Débogage sans fil
description: Sur Android 11 et versions ultérieures, activez Ice Box grâce à la fonction « Débogage sans fil » du système, sans root ni ordinateur. Toutes les étapes, des conseils pour l'association et une FAQ.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

Le mode Débogage sans fil ne demande ni root ni ordinateur. Ice Box utilise la fonction « Débogage sans fil » du système pour obtenir l'autorisation dont il a besoin pour congeler les applications, et tout se fait sur le téléphone.

Avant de commencer, notez que :

- Android 11 ou version ultérieure est nécessaire.
- Une connexion Wi-Fi est nécessaire pendant l'association. N'importe quel réseau Wi-Fi fait l'affaire.
- Après chaque redémarrage du téléphone, vous devez réactiver l'option « Débogage sans fil ». Sinon, Ice Box ne peut ni congeler ni décongeler les applications.

Si votre téléphone a une version antérieure à Android 11, ou si vous préférez passer par un ordinateur, consultez le [mode ADB](/guide/adb/).

## Avant de commencer {#before}

La page de configuration d'Ice Box vérifie chacun des points suivants. Appuyez sur un point non rempli pour ouvrir directement le bon paramètre :

1. **Désactivez le VPN pour le moment**. Vous pourrez le réactiver après l'association.
2. **Autorisez les notifications d'Ice Box**. C'est dans la notification d'Ice Box que vous saisissez le code d'association.
3. **Activez le débogage USB**. Si vous n'avez pas encore activé les options pour les développeurs, consultez la section suivante.
4. **Connectez-vous au Wi-Fi**. N'importe quel réseau Wi-Fi fait l'affaire.
5. **Autorisez Ice Box à s'exécuter en arrière-plan**. Sur certains téléphones, vous devez régler l'utilisation de la batterie d'Ice Box sur « Non restreinte » dans les paramètres du système.

## Activer le débogage USB {#usb-debugging}

1. Ouvrez « Paramètres », trouvez « À propos du téléphone », puis appuyez 7 fois de suite sur « Numéro de build » jusqu'à voir un message du type « Mode développeur activé ».
2. Revenez à « Paramètres », trouvez « Options pour les développeurs » dans « Système » ou « Paramètres supplémentaires », puis activez l'option « Débogage USB ».

L'emplacement des menus varie selon la marque et la version du système. Ice Box propose des illustrations pas à pas pour les marques courantes, que vous pouvez suivre en même temps.

## Obtenir le code d'association en trois étapes {#pairing}

1. Dans les options pour les développeurs, trouvez « Débogage sans fil », activez-le, puis appuyez dessus pour ouvrir sa page de paramètres.
2. Choisissez « Associer l'appareil avec un code d'association ».
3. Laissez ouverte la fenêtre qui affiche le code, faites glisser le volet des notifications vers le bas, puis saisissez le code d'association à six chiffres dans la notification d'Ice Box.

Une fois l'association réussie, Ice Box affiche « Débogage sans fil activé » et il est prêt à l'emploi. Ice Box propose aussi un tutoriel vidéo, que vous pouvez afficher si l'association pose problème.

> [!TIP]
> Si vous ne voyez pas « Débogage sans fil » dans les options pour les développeurs, c'est probablement que celles-ci ne sont pas encore activées. Suivez d'abord les étapes de la section précédente.

## Après un redémarrage du téléphone {#after-reboot}

Au redémarrage du téléphone, le système retire l'autorisation d'Ice Box. Retournez dans les options pour les développeurs et réactivez l'option « Débogage sans fil » : Ice Box fonctionnera de nouveau. Ice Box vous le rappelle par une notification.

## FAQ {#faq}

### Le message « Désactivez le VPN et l'optimisation de la batterie » s'affiche pendant l'association

Ice Box n'arrive pas à se connecter au service de débogage sans fil du système. Désactivez votre VPN et vos applications proxy, désactivez l'optimisation de la batterie pour Ice Box dans les paramètres du système, puis réessayez.

### Le message « Code d'association incorrect » ou « Code expiré » s'affiche

Le code d'association ne fonctionne que tant que sa fenêtre est affichée. Obtenez un nouveau code et saisissez-le rapidement, sans fermer la fenêtre.

### Je ne vois pas le champ de saisie dans la notification

Vérifiez que les notifications d'Ice Box sont autorisées. Certains systèmes réduisent la notification : appuyez sur le bouton de développement à droite de la notification pour afficher le champ de saisie.

### Sur un téléphone Xiaomi, Huawei, OPPO ou autre, un message indique que l'autorisation ADB est insuffisante

Activez l'option correspondant à votre marque dans les options pour les développeurs. Sur Xiaomi, activez « Débogage USB (paramètres de sécurité) ». Sur Huawei, activez « Autoriser le débogage ADB en mode Charge uniquement ». Sur OPPO et OnePlus, activez « Désactiver la surveillance des autorisations ». Sur les autres marques, activez une option similaire si besoin. Pour en savoir plus, consultez les [remarques par marque de téléphone](/guide/devices/).
