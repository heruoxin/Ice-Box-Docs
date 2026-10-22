---
title: Journal des modifications d'Ice Box
short: Journal des modifications
description: Les nouveautés de chaque version d'Ice Box, de la 3.4.0 à la dernière version : nouvelles fonctions, améliorations de compatibilité et corrections de bugs.
section: product
toc: false
priority: 0.5
related: download, features
---

Vous trouverez le numéro de votre version et son canal de distribution dans « Paramètres > À propos » d'Ice Box. Pour en savoir plus sur chaque canal de distribution et télécharger le dernier APK, consultez la [page de téléchargement](/download/#channels).

## 3.30.14 {#v3-30-14}

- Désormais disponible en français
- Prise en charge d'Android 17 et meilleure compatibilité du Débogage sans fil

## 3.30.11 {#v3-30-11}

- Correction de problèmes d'affichage sur les appareils pliables
- Prise en charge de l'autorisation Xiaomi pour lire la liste des applications
- Débogage sans fil : plus besoin de désactiver le VPN à partir de la deuxième association

## 3.30.10 {#v3-30-10}

- Prise en charge des pages mémoire de 16 Ko
- Modifications pour répondre aux exigences de validation de la boutique d'applications Xiaomi

## 3.30.9 {#v3-30-9}

- Amélioration : après la première association réussie, le « Débogage USB » n'a plus besoin de rester activé
- Meilleure compatibilité du service en arrière-plan

## 3.30.8 {#v3-30-8}

- Ajout d'un tutoriel vidéo aux instructions d'activation du Débogage sans fil
- Correction de la fenêtre d'autorisation « Ice Box demande à lancer xxx » qui apparaissait souvent sur certains appareils

## 3.30.7 {#v3-30-7}

- Possibilité de congeler davantage de composants système sur MIUI et HyperOS
- SDK cible mis à jour vers 35

## 3.25.0 {#v3-25-0}

- Ajout d'instructions pour activer Shizuku sans fil
- Mise à jour de Shizuku, avec prise en charge de Sui
- Prise en charge des icônes monochromes
- Interface aux couleurs dynamiques à partir d'Android S, avec un nouvel effet d'arrière-plan flou
- Le thème clair/sombre peut suivre le système
- La version chinoise prend en charge WeChat Pay
- Correction de quelques éléments mal alignés
- Suppression du plugin système pour respecter les exigences de Google Play

## 3.22.0 {#v3-22-0}

- À la demande de l'équipe Google Play Protect, le mode « Plugin système » a été supprimé. Si vous en avez besoin, cherchez une ancienne version sur Internet et installez-la
- Nouveau : le thème clair/sombre peut changer automatiquement avec le système

## 3.21.0 {#v3-21-0}

- Correction de certaines fonctions en mode Shizuku
- Mise à jour du SDK à la demande d'Alipay
- Autres corrections

## 3.20.0 {#v3-20-0}

- Correction de l'échec d'activation avec certains numéros de commande inhabituels
- Tentative de correction (encore en test) des applications doubles intégrées qui ne fonctionnaient plus sur MIUI et d'autres ROM une fois Ice Box défini comme Device Owner
- Le verrouillage par code PIN prend désormais en charge la reconnaissance faciale

## 3.19.0 {#v3-19-0}

- Nouvelle option : centrer le bouton Congeler
- Remplacement de Fabric, qui ferme, par Microsoft App Center
- Quelques corrections

## 3.18.5 {#v3-18-5}

- Correction des icônes parfois mal redimensionnées
- Correction d'animations décalées sur certains écrans

## 3.18.2 {#v3-18-2}

- Correction de problèmes d'affichage avec la navigation par gestes sur certains systèmes

## 3.18.0 {#v3-18-0}

- Nouvelle option : ajouter automatiquement un raccourci quand une application est ajoutée à la liste de congélation.
- Nouvelle option : choisir de faire glisser le bouton Congeler vers la gauche ou vers la droite.

## 3.17.5 {#v3-17-5}

- Correction de la compatibilité avec Android Q bêta 6.
- Mise à jour des serveurs utilisés en Chine continentale pour plus de stabilité. Les utilisateurs en Chine devraient mettre à jour ; ceux hors de Chine ne sont pas concernés.
- Autres corrections de bugs et amélioration des performances.

## 3.17.0 {#v3-17-0}

- Nouvelle application compagnon : IceBridge.
- Nouvelle disposition de l'écran du verrouillage par empreinte, pour que le bouton du code PIN reste accessible sur les appareils avec un capteur d'empreinte sous l'écran.

## 3.16.5 {#v3-16-5}

- Prise en charge d'une nouvelle application compagnon : 划卡冻结 (balayer pour congeler, root uniquement)
- Corrections de bugs et amélioration des performances

## 3.16.0 {#v3-16-0}

- Ajout d'une page de présentation des applications compagnons

## 3.15.8 {#v3-15-8}

- Correction de problèmes qui pouvaient vider la batterie en arrière-plan
- Les tutoriels et l'aide utilisent désormais des liens hébergés en Chine pour un accès plus rapide

## 3.15.3 {#v3-15-3}

- Les modes root et ADB simple peuvent désormais afficher les clones d'applications créés par la fonction d'applications doubles du système
- Correction d'un conflit avec les gestes d'Android Q bêta 3

## 3.14.2 {#v3-14-2}

- Ajout d'un SDK polyvalent : [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager)
- Prise en charge expérimentale de WeChat Pay et QQ Pay (virement manuel). Voir [WeChat Pay](/purchase/wechat-pay/)

## 3.14.0 {#v3-14-0}

- Nouveau mode « ADB simple » pour les appareils non rootés sur lesquels il est peu pratique de configurer Device Owner. Ce mode doit être réactivé après chaque redémarrage
- Passage à l'API Shizuku v3
- Correction du double appui sur un raccourci qui ne lançait pas l'application sur Android Q
- Autres corrections

## 3.13.0 {#v3-13-0}

- Corrections de compatibilité de base pour Android Q
- Toutes les fonctions marchent désormais dans le profil professionnel d'Island
- Prise en charge de 权限猫
- Si les options de « Congélation auto » ne fonctionnent pas correctement, ajoutez manuellement Ice Box à la liste blanche de la batterie dans les paramètres du système. Si vous n'avez pas besoin de la « Congélation auto », désactivez l'option : Ice Box ne s'exécutera plus du tout en arrière-plan

## 3.12.2 {#v3-12-2}

- Les icônes peuvent désormais être triées
- L'ajout de raccourcis en lot est disponible sur Android 8.0 et versions ultérieures (à cause des limites du système, sa réussite n'est pas garantie)

## 3.12.0 {#v3-12-0}

- Refonte de la disposition de certaines pages
- Refonte de la fonction « Proposer l'ajout à Ice Box »
- Compatibilité avec l'ajout de raccourcis depuis des applications tierces comme Fluid NG
- À cause des limites du système Huawei, les utilisateurs Huawei qui ont un lanceur tiers ne peuvent pas ajouter de raccourcis depuis Ice Box. Essayez plutôt d'appuyer de manière prolongée sur une zone vide de l'écran d'accueil pour les ajouter

## 3.11.1 {#v3-11-1}

- Corrections de bugs
- Ajustement de la disposition et des éléments de l'interface.

## 3.10.0 {#v3-10-0}

- Correction du plantage de la liste des applications sur Android 9, causé par un conflit avec Nevolution.
- Nouveau guide d'activation au premier lancement, avec un lien vers l'activateur en un clic.

## 3.9.9 {#v3-9-9}

- Si Ice Box a été configuré sans root à l'aide d'un code QR, vous pouvez activer les applications préinstallées dans « Paramètres d'Ice Box > Laboratoire > Activer les applications système préinstallées ». Les applications non activées restent désinstallées.
- Autres corrections de bugs.

## 3.9.8 {#v3-9-8}

- Correction de quelques plantages lors de la modification de la liste
- En mode sans root, le nom de l'organisation affiché sur l'écran de verrouillage peut désormais être personnalisé (le système l'impose, il ne peut donc pas être supprimé)

## 3.9.6 {#v3-9-6}

- Fusion des boutons de filtre et de menu sur l'écran de modification de la liste
- Ajout du mode « Root (le plus rapide) »

## 3.9.5.1 {#v3-9-5-1}

- L'état de la congélation rapide dans le volet des notifications suit désormais l'état de la « Congélation auto »
- Correction de l'impossibilité, pour certains utilisateurs sans root, de se connecter au serveur d'achat

## 3.9.5 {#v3-9-5}

- Le SDK permet désormais d'installer et de désinstaller des applications. Les développeurs sont invités à l'intégrer : [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)
- Ajout d'un journal au SDK. Chaque congélation, installation et désinstallation effectuée par une application tierce est enregistrée
- Si BlackHouse (小黑屋) est déjà défini comme Device Owner, Ice Box peut être utilisé directement
- Nouvelle option juste pour le plaisir : un bruitage de sabre qu'on dégaine

## 3.9.3 {#v3-9-3}

- Cible mise à jour vers 28
- Amélioration du moteur Root (mode rapide) pour qu'il fonctionne correctement sur Android P
- Correction des applications retirées de la liste qui étaient parfois encore congelées

## 3.9.2 {#v3-9-2}

- API cible mise à jour vers 26. Android oblige les applications qui s'exécutent en arrière-plan à afficher une notification : quand des fonctions qui tournent en arrière-plan, comme la « Congélation auto », sont activées, Ice Box doit afficher une notification dans votre volet des notifications. Vous pouvez trouver et désactiver cette notification d'Ice Box dans les paramètres du système, sans aucun effet sur les fonctions

- Correction du mode sans root qui ne s'ouvrait parfois pas dans la bêta précédente
- Correction des applications qui manquaient parfois dans la liste au lancement
- Passage à une nouvelle base de données
- Mise à jour de l'API Island
- Autres mises à jour et corrections de bugs

## 3.9.0 {#v3-9-0}

- Nouveau : partage de listes d'applications système congelables sans risque :
Certaines ROM de téléphone contiennent beaucoup de logiciels préinstallés inutiles et de publicités, et de nombreux utilisateurs les nettoient en les congelant un par un.
Si vous maîtrisez bien ce sujet, vous pouvez partager votre liste d'applications intégrées congelées avec les autres, ou la garder pour la prochaine fois que vous flasherez votre téléphone.
(La création de listes n'est ouverte qu'à certains utilisateurs actifs)

- Nouvelle reconnaissance de code QR :
Quand vous réactivez Ice Box, vous n'avez plus besoin de saisir le long numéro de commande. Faites une capture d'écran de la page de facture Alipay, partagez-la et choisissez « Lecture de codes-barres (Ice Box) » pour la reconnaître et activer.

- Plus de limite au nombre d'onglets

## 3.8.6 {#v3-8-6}

- Les raccourcis apparaissent un peu plus souvent dans le lanceur d'Android P
- Ajout dans le laboratoire d'une option qui ouvre le [module Xposed 1ceboxTurner](https://repo.xposed.info/module/gs.https.icebox.tuner) (proposé par @web1n)
- Autres corrections de bugs

## 3.8.1 {#v3-8-1}

- Prise en charge de « Configurer dans une autre application » (android.intent.action.SHOW_APP_INFO), compatible avec des applications comme Greenify et AppOps.
- Autres petites corrections.

## 3.7.6 {#v3-7-6}

- Prise en charge de Magisk 16.3.
- Correction de l'action de verrouillage de l'écran qui ne fonctionnait pas dans les modes Shizuku Manager et Brevent.
- Autres petites corrections.

## 3.7.0 {#v3-7-0}

- Les applications sans icône peuvent de nouveau être ajoutées à Ice Box.
- Correction de l'appui long qui sélectionnait parfois la mauvaise application.
- Mise à jour du SDK Brevent.
- Autres corrections de bugs.

(Notes des versions bêta omises)

## 3.6.1 {#v3-6-1}

- Le panneau des thèmes prend désormais en charge la transparence.
- Ajout d'un raccourci « Tout décongeler ».
- Le contenu d'Ice Box est masqué dans les applis récentes quand le verrouillage par empreinte est activé.
- Nouveau SDK. Les autres applications de congélation sont invitées à l'intégrer : [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 3.5.2 bêta {#v3-5-2}

- Ajout de quelques options au laboratoire :
- Si vous avez changé de pack d'icônes, appuyez sur « Vider le cache des icônes »
- Si la taille des icônes n'est pas homogène, videz le cache, puis envisagez de désactiver « Uniformiser la taille des icônes »
- « Rester en arrière-plan après Retour » permet de choisir si Ice Box reste en cache en arrière-plan
- Vous pouvez passer d'un moteur à l'autre dans le laboratoire. Avant chaque changement, assurez-vous que toutes les applications ont été décongelées
- Ajout de filtres et d'options de tri à l'éditeur de la liste des applications

## 3.5.1 {#v3-5-1}

- Correction de la compatibilité avec Android P.
- Corrections de bugs et amélioration des performances.

## 3.4.0 {#v3-4-0}

- Ajout de Brevent et Shizuku Manager comme moteurs. Utilisez ce mode si vous n'avez pas le root et qu'il est peu pratique de configurer Island ou le mode Device Owner.
