---
title: How to automate freezing and defrosting apps on Android
short: Automation and developer integration
card: Freeze automatically when the screen turns off, use one-tap home screen actions, or let other apps freeze through Ice Box with the SDK.
description: Automate freezing and defrosting on Android with Ice Box: Auto Freeze, Freeze All and Defrost All shortcuts, and an open SDK to build it into your own app.
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## Short answer {#answer}

Everyday users can rely on Ice Box's [Auto Freeze](/guide/auto-freeze/) and [home screen shortcuts](/guide/shortcuts/) to freeze apps automatically when the screen turns off or when they go back to the home screen. Developers can use the [Ice Box SDK](/developers/) to freeze and defrost apps from their own app, after the user grants permission.

## Automation without code {#no-code}

- **Auto Freeze**: Automatically freeze the apps in Ice Box when the screen turns off, or when you tap or double tap the Home button. You can set a screen-off delay and make an exception while charging.
- **Home screen shortcuts**: "Freeze All", "Freeze + Lock Screen" and "Defrost All" can all be added to the home screen, so each one takes a single tap.
- **Shortcuts for frozen apps**: Tap one to defrost and open the app automatically, without opening Ice Box first.
- **划卡冻结 (swipe to freeze)**: The third-party app 划卡冻结 can freeze an app when you swipe its card away on the recent apps screen (root only).

## For developers: the Ice Box SDK {#sdk}

On phones where Ice Box is installed and enabled, the Ice Box SDK lets third-party apps freeze and defrost apps:

- Query Ice Box's current work mode and an app's freeze state. No permission needed.
- Freeze and defrost apps, including in batches. Requires the user's permission.
- Install and uninstall APKs silently in Device Owner mode.
- Every action a third-party app takes through Ice Box is recorded in Ice Box's log center, where the user can check it at any time.

See the [developer guide](/developers/) for how to integrate it.

## Common questions {#faq}

### Can other apps freeze apps without me knowing?

A third-party app needs your permission before it can freeze or defrost apps through Ice Box. Every action is recorded in Ice Box's log center, and you can check it at any time.
