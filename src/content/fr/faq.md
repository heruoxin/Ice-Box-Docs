---
title: FAQ Ice Box
short: FAQ
description: FAQ Ice Box : accès root, message Device Owner, désinstallation, notifications push, raccourcis, Congélation auto, mise à jour des applications congelées et changement de mode de fonctionnement.
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

Pour les questions sur l'achat et le paiement, consultez le [guide d'achat](/purchase/). Pour les conseils propres à chaque marque de téléphone, consultez les [remarques par marque de téléphone](/guide/devices/).

## Les bases {#basics}

### Que signifie congeler une application ? {#what-is-freeze}

Une application congelée est désactivée ou masquée par le système. Elle ne peut pas s'exécuter, ne peut pas se lancer toute seule en arrière-plan et n'apparaît ni sur l'écran d'accueil ni dans le tiroir d'applications. Pourtant, l'application et ses données sont toujours là. Dès que vous la décongelez dans Ice Box, elle fonctionne de nouveau normalement.

### Quelle différence entre congeler et désinstaller ? {#freeze-vs-uninstall}

Désinstaller supprime l'application et ses données. Congeler empêche seulement l'application de s'exécuter pour le moment : ses données ne sont pas touchées et vous pouvez continuer à l'utiliser après l'avoir décongelée. Pour les applications système préinstallées qu'on ne peut pas désinstaller, la congélation est aussi un moyen de les désactiver.

### Comment remettre une application congelée sur l'écran d'accueil ? {#add-to-home}

Dans Ice Box, appuyez de manière prolongée sur l'icône de l'application et choisissez « Ajouter à l'écran d'accueil ». Quand vous appuyez sur ce raccourci, Ice Box décongèle d'abord l'application, puis l'ouvre. Consultez [Raccourcis sur l'écran d'accueil](/guide/shortcuts/).

### Comment mettre à jour une application congelée ? {#update-frozen}

Si vous utilisez CoolApk (酷安), une boutique d'applications Android chinoise, activez « Afficher les applications masquées » (显示隐藏应用) dans la section Laboratoire des paramètres de CoolApk. Si vous utilisez une autre boutique, appuyez d'abord sur « Tout décongeler » dans les paramètres d'Ice Box, puis congelez à nouveau les applications après la mise à jour.

### Impossible de décongeler des applications après un changement de mode de fonctionnement ? {#mode-switch}

Les modes de fonctionnement ne sont pas compatibles entre eux. Repassez Ice Box dans le mode que vous utilisiez avant : une application doit être décongelée dans le mode qui l'a congelée.

## Root {#root}

### Le mode root affiche « Impossible d'obtenir l'accès root » {#root-failed}

Ouvrez votre gestionnaire root (par exemple Magisk), supprimez l'autorisation déjà enregistrée pour Ice Box, puis accordez de nouveau l'accès root.

### Où est passé le plugin système ? {#system-plugin}

À la demande de Google Play, le mode Plugin système a été retiré dans la version 3.22.0. Si le plugin système est encore installé, supprimez `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk` avec un gestionnaire de fichiers disposant de l'accès root, puis redémarrez pour terminer la désinstallation.

## Mode Device Owner {#device-owner}

### Le volet des notifications indique « Cet appareil est géré par votre organisation ». Est-ce normal ? {#managed-notice}

Oui. C'est exactement ainsi que fonctionne le mode Device Owner d'Ice Box. Configurer Device Owner est aujourd'hui le seul moyen permanent de congeler des applications sans root. Ce texte est affiché par le système et ne peut pas être supprimé, mais vous pouvez remplacer le « Nom de l'organisation » par le texte de votre choix dans le « Laboratoire » d'Ice Box.

### Les paramètres du téléphone disent que Device Owner peut lire mon agenda, mes e-mails et d'autres informations personnelles. Ice Box les lit-il ? {#dpm-privacy}

Non. Ice Box est mis à jour en continu depuis 2015 et n'utilise que les fonctions Device Owner dont il a besoin, comme la congélation des applications. Il n'utilise aucune fonction sans rapport : vous pouvez l'utiliser en toute tranquillité.

### Après la configuration de Device Owner, les applications doubles et le dossier sécurisé du système ne fonctionnent plus ? {#dual-apps}

C'est une limite propre à certains systèmes de téléphone (par exemple Samsung et Xiaomi). Dès qu'un Device Owner est défini, le système désactive automatiquement certaines fonctions, et Ice Box ne peut rien y faire. Si vous avez vraiment besoin des applications doubles, vous pouvez :

- Définir Island comme Device Owner et utiliser sa propre fonction d'applications doubles. Ice Box peut alors fonctionner via le [mode Island](/guide/other-modes/#island).
- Utiliser un autre mode de fonctionnement que Device Owner. Aucun des autres modes n'a d'effet sur les applications doubles.

### Les autorisations d'une application sont réinitialisées à chaque décongélation ? {#permissions-reset}

C'est un problème du système. AppOps de Rikka ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)) peut réappliquer automatiquement vos règles d'autorisation quand une application est décongelée.

### Sur les téléphones Huawei et Xiaomi, les applications redemandent leurs autorisations à chaque ouverture, et la congélation indique que l'application a été désinstallée ? {#reinstall-prompt}

Sur les téléphones Xiaomi, désactivez « Optimisation MIUI ». Nous n'avons pas encore trouvé d'option équivalente sur les autres téléphones.

### Une application tout juste décongelée n'arrive parfois pas à se connecter au réseau ? {#no-network}

Le système de certains modèles (par exemple OnePlus et Huawei) a parfois ce problème. Vérifiez que votre système est à jour. Congeler puis décongeler l'application une nouvelle fois suffit généralement à régler le problème.

### Comment désinstaller Ice Box ? {#uninstall}

Appuyez sur « Désinstaller » dans les paramètres d'Ice Box. Avant de désinstaller, vérifiez bien que toutes les applications ont été décongelées. Utilisateurs Xiaomi, attention : **ne désinstallez pas Ice Box directement depuis l'écran d'accueil. Vous perdriez l'autorisation d'administration, et les applications congelées ne pourraient plus jamais être décongelées.** Consultez [Désinstaller Ice Box](/guide/uninstall/).

## Notifications et arrière-plan {#background}

### Les applications congelées reçoivent encore des notifications push ? {#push}

Sur des téléphones comme OPPO, vivo et OnePlus, certaines applications passent par le service push du système. Une fois qu'elles sont congelées, le système continue d'afficher des notifications à leur place, mais l'application elle-même ne s'exécute pas en arrière-plan. Si vous ne voulez pas de ces notifications, désactivez les notifications de cette application dans les paramètres du système.

### Je veux que les applications congelées reçoivent quand même des notifications {#keep-push}

Vous pouvez essayer d'installer [MiPushFramework](https://github.com/MiPushFramework/MiPushFramework).

### Pourquoi Ice Box affiche-t-il une notification ? {#ongoing-notification}

Android exige que chaque application qui s'exécute en arrière-plan affiche une notification. Quand vous activez des fonctions qui doivent tourner en arrière-plan, comme la « Congélation auto », Ice Box affiche une notification dans le volet des notifications. Vous pouvez désactiver cette notification dans les paramètres du système sans que cela affecte les fonctions. Si la Congélation auto est désactivée, Ice Box ne s'exécute pas du tout en arrière-plan.

### Les applications ne sont pas congelées quand l'écran s'éteint ? {#auto-freeze-fail}

Vérifiez si un gestionnaire de téléphone ou un outil de blocage d'applications empêche Ice Box de s'exécuter en arrière-plan. Dans les paramètres du système, accordez à Ice Box des autorisations comme « Exécution en arrière-plan » et « Réveiller l'appareil », et réglez son utilisation de la batterie sur « Ne pas optimiser ». Sur les téléphones Huawei, l'option « Écran éteint » de « Congélation auto quand » peut ne pas fonctionner à cause des limites du système : choisissez plutôt une autre option. Consultez [Congélation auto](/guide/auto-freeze/).

## Raccourcis {#shortcuts}

### Impossible d'ajouter des raccourcis sur l'écran d'accueil sur Xiaomi, Huawei, Smartisan ou d'autres téléphones ? {#shortcut-missing}

Sur Xiaomi, Huawei et les téléphones similaires, activez manuellement pour Ice Box l'autorisation d'ajouter des raccourcis à l'écran d'accueil dans les paramètres du système. Les téléphones Smartisan ne prennent en charge les raccourcis d'aucune application.

### Les raccourcis ont été ajoutés sur un téléphone Xiaomi ou Meizu, mais ne fonctionnent pas ? {#shortcut-broken}

Sur les téléphones Xiaomi, autorisez Ice Box à « démarrer d'autres applications » et à « afficher des fenêtres pop-up lors de l'exécution en arrière-plan » dans les paramètres du système. Nous n'avons pas encore trouvé d'option système équivalente sur les téléphones Meizu.

### Comment retirer le badge Ice Box des raccourcis ? {#shortcut-badge}

Sur Android 7.0 et versions ultérieures, c'est le système qui ajoute ce badge aux raccourcis : il ne peut être ni modifié ni retiré.

## Autres questions {#other}

### Certaines applications système, comme Mi Musique, la boutique d'applications ou le lanceur Huawei, ne peuvent pas être congelées ou se décongèlent toutes seules après un redémarrage ? {#system-unfreeze}

MIUI et certains autres systèmes décongèlent automatiquement les applications système clés. Dans les versions récentes d'EMUI, le lanceur Huawei ne peut plus être congelé. Il peut l'être dans les versions antérieures à EMUI 9.0.

### Sur les téléphones OPPO et vivo, la liste n'affiche que quelques applications ? {#app-list}

Dans les paramètres d'autorisations du système, autorisez Ice Box à lire la liste des applications.

### Après la décongélation d'une application sur un téléphone Smartisan, toutes ses autorisations sont accordées par défaut ? {#smartisan-permissions}

C'est ainsi que le système Smartisan est conçu. Cela n'a rien à voir avec Ice Box.

### Ice Box fonctionne-t-il sur les tablettes ? {#tablet}

Oui. Ice Box propose des dispositions dédiées aux tablettes et au mode paysage.

### Ice Box lit-il mon presse-papiers ? {#clipboard}

Une seule fois, quand vous appuyez sur « Importer depuis le presse-papiers » dans les paramètres, pour y chercher un lien de thème ou de liste de congélation.

### Vous avez encore des questions ? {#contact}

Envoyez-nous un e-mail via l'option « Commentaires » de l'application Ice Box. Si possible, indiquez le modèle de votre téléphone, la version du système et une capture d'écran du problème.
