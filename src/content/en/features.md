---
title: Ice Box features
short: Features
description: Ice Box features: one-tap freeze and defrost, Auto Freeze, shortcuts, tabs, themes, icon packs, app lock, freezing system apps, an SDK, root and non-root modes.
section: product
priority: 0.9
related: guide, themes, guide/auto-freeze, developers
---

Ice Box is an app freezer for Android. Put the apps you rarely use into Ice Box, and they can no longer run in the background or show up on your home screen. When you need one, tap it, and Ice Box defrosts it and then opens it.

## Freeze and defrost {#freeze}

- **Freeze**: A frozen app cannot run, cannot start itself in the background, and is hidden from the home screen and the app drawer. The app and its data are kept.
- **Defrost**: Tap an app in Ice Box, or tap its home screen shortcut, and Ice Box defrosts it and then opens it.
- **Freeze All / Defrost All**: Swipe or tap the freeze button at the bottom of Ice Box to freeze every app in the list at once. "Defrost All" restores every app at once. You can change the freeze button's position and swipe direction in settings.
- **Freeze + Lock Screen**: Freeze all apps and lock the screen right away, in one tap.

Depending on the work mode, Ice Box freezes apps with one of two methods the system provides: "disable" or "hide".

## Auto Freeze {#auto-freeze}

Ice Box can freeze the apps in your list automatically when the screen turns off, or when you tap or double tap the Home button. You can set a delay after the screen turns off, and you can choose not to freeze automatically while charging. See [Auto Freeze](/guide/auto-freeze/).

## Home screen shortcuts {#shortcuts}

Create home screen shortcuts for frozen apps. Tapping one defrosts the app and opens it, with no need to open Ice Box first. You can also turn on the option to add a shortcut automatically when an app is added to the freeze list. See [Home screen shortcuts](/guide/shortcuts/).

## Multiple tabs {#tabs}

Create several tabs to sort apps by purpose, such as Daily, Social and Games. Tabs can be renamed, and apps can be moved between tabs. You can also sort the apps in Ice Box by hand.

## Themes and icon packs {#themes}

- Almost every element of the main screen can be recolored, with transparency support.
- On Android 12 and later, Ice Box can use the system's dynamic colors. You can also use your wallpaper as the background.
- Day and night themes can switch automatically with the system.
- Third-party icon packs are supported, and you can adjust the icon size.
- Themes can be shared and imported as links. Take a look at the color schemes other people have shared in [Shared themes](/themes/).

## Fingerprint and PIN lock {#lock}

When this is on, Ice Box asks for your fingerprint or PIN before it opens, and face recognition can also be used. With Fingerprint Lock on, Ice Box's content is hidden on the recent apps screen.

## Freeze pre-installed system apps {#system-apps}

Besides the apps you installed yourself, Ice Box can also freeze some pre-installed system apps, and this works in non-root modes too. You can also import a "list of system apps that are safe to freeze" shared by someone else. See [Freeze pre-installed system apps](/guide/system-apps/).

## New app prompt {#new-app}

After you install a new app, Ice Box can show a prompt asking whether to add it to Ice Box.

## Work modes {#modes}

Ice Box can get system permissions in several ways, so it works on both rooted and non-rooted phones:

[[mode-cards]]

Not sure which one to choose? Answer three questions in the [Help Center](/guide/) to get a recommendation.

## Open SDK and integrations {#sdk}

- **Ice Box SDK**: With the user's permission, other apps can freeze and defrost apps through Ice Box. In Device Owner mode, they can also install and uninstall APKs silently. Every action taken by a third-party app is recorded in Ice Box's log center. See [For developers](/developers/).
- **Configure in other Apps**: Supports Android's "App info" entry point, so Ice Box works together with apps such as Greenify and AppOps.
- **Island**: All Ice Box features also work inside Island's work profile.

## Versions and requirements {#requirements}

- Phones and tablets running Android 7.0 or later.
- Free to download. Some features require upgrading to Pro. If anything differs, the description in the app applies.
- The changes in every version are listed in the [changelog](/changelog/).

[[download-buttons]]
