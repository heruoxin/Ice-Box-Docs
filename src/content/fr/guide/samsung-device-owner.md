---
title: Risques de la configuration Device Owner sur les téléphones Samsung
short: Remarques sur les appareils Samsung
description: Sur Samsung, configurer Device Owner peut casser le Dossier sécurisé et Dual Messenger, voire réinitialiser le mot de passe de l'écran de verrouillage. Utilisateurs Samsung, lisez ceci avant de décider.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

Ice Box repose sur les fonctions Device Owner natives d'Android. Samsung est un cas à part parmi les fabricants de téléphones Android : il utilise son propre cadre de sécurité, appelé KNOX.

Après avoir configuré et activé sur un téléphone Samsung une solution sans root basée sur le Device Owner natif d'Android, vous pouvez rencontrer ces problèmes :

- Certaines fonctions KNOX, comme le Dossier sécurisé, peuvent ne plus fonctionner.
- La fonction Dual Messenger intégrée ne fonctionne plus.
- Le système réinitialise le mot de passe de l'écran de verrouillage, ce qui oblige à une réinitialisation d'usine et fait perdre vos données.

Aucun de ces problèmes ne se produit à chaque fois. Prenons le plus grave, la réinitialisation du mot de passe de l'écran de verrouillage : en 2018, sur environ 200 000 utilisateurs Samsung d'Ice Box, nous avons reçu 6 signalements au total, et le nombre réel d'utilisateurs touchés est peut-être plus élevé. Depuis la sortie de One UI par Samsung, davantage d'utilisateurs semblent avoir rencontré ce problème : nous déconseillons donc le mode Device Owner sur One UI.

Pour l'instant, nous ne connaissons pas la cause exacte de ces problèmes, et il n'existe pas de bonne solution.

> [!CAUTION]
> Utilisateurs Samsung, réfléchissez bien, très bien, avant d'utiliser le mode Device Owner.

## Modes recommandés pour les utilisateurs Samsung {#recommended}

- Téléphone rooté : utilisez le [mode root](/guide/root/).
- Non rooté, Android 11 ou version ultérieure : utilisez le [mode Débogage sans fil](/guide/wireless-debugging/) ou le [mode Shizuku](/guide/shizuku/).
- Non rooté, avec un ordinateur : utilisez le [mode ADB](/guide/adb/).

Aucun de ces modes n'a besoin de Device Owner. Sauf le mode root, ils doivent tous être réactivés à chaque redémarrage du téléphone.
