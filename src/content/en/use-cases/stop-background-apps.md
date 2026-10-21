---
title: How to stop Android apps from running in the background
short: Stop background apps
card: Put the apps you rarely use in Ice Box, and they can't start or run in the background, or drain battery and data there.
description: Stop Android apps from running in the background: freeze apps that start on their own with Ice Box, and defrost them in one tap when needed. Works without root.
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## Short answer {#answer}

Freeze them. A frozen app cannot run, so it cannot start itself or stay running in the background, and it does not use battery or data there. Ice Box can freeze these apps in one tap. When you need one, tap it to defrost and open it, and Ice Box freezes it again automatically when you are done. Ice Box works on both rooted and non-rooted phones.

## Why do apps run in the background? {#why}

Many apps start automatically when the phone boots, connects to a network, starts charging or receives a push message, even if you haven't opened them in a long time. Android's "Force stop" only stops an app once. Afterwards, the app can still start itself again.

Freezing is different: once an app is frozen, the system will not start it again until you defrost it in Ice Box.

## Stop background apps with Ice Box {#steps}

1. [Download Ice Box](/download/) and activate it following the recommendation in the [Help Center](/guide/).
2. In Ice Box's app list, tick the apps you rarely use but don't want to uninstall.
3. Tap or swipe the freeze button at the bottom of Ice Box to freeze these apps.
4. When you need one, tap it in Ice Box or on its home screen shortcut. Ice Box defrosts it first and then opens it.
5. Turn on [Auto Freeze](/guide/auto-freeze/), and Ice Box freezes them again automatically when the screen turns off.

## Things to keep in mind {#notes}

- Frozen apps cannot receive their own push messages. On phones such as OPPO, vivo and OnePlus, some apps use the system push service and may still show notifications, but the app itself does not run.
- Apps that need to keep working in the background, such as chat apps that must receive messages in real time, alarm clocks and navigation, are not good candidates for freezing.
- Auto Freeze needs Ice Box to run in the background. See [Auto Freeze](/guide/auto-freeze/) to set up background permissions for Ice Box.

## Common questions {#faq}

### What is the difference between freezing and "Force stop"?

"Force stop" only stops the app as it is running right now, and other events can still wake it up again later. A frozen app cannot run at all until it is defrosted.

### Does it work without root?

Yes. Ice Box supports non-root work modes such as Device Owner, Wireless debugging, ADB and Shizuku. Answer three questions in the [Help Center](/guide/#modes) to find the right mode for you.

### Does freezing delete app data?

No. Freezing only stops the app from running for the time being. All of its data is kept, and you can keep using it after you defrost it.
