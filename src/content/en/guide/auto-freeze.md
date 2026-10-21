---
title: Auto Freeze: freeze apps automatically when the screen turns off
short: Auto Freeze
description: With Auto Freeze on, Ice Box freezes the apps in your list on screen off or when you tap or double tap Home. Triggers, delay, charging exception and fixes.
section: guide
group: tips
order: 1
faq: true
related: guide/shortcuts, guide/devices, use-cases/stop-background-apps
---

When you open an app, Ice Box defrosts it first, and the app needs to be frozen again after you're done. With "Auto Freeze" on, Ice Box takes care of that step for you.

## When apps get frozen {#when}

In Ice Box settings, open "Auto Freeze" and use "Auto Freeze When" to choose when apps are frozen automatically:

- **Screen Off**: freeze after the screen turns off. You can set a "Screen Off Delay" to freeze some time after the screen goes off.
- **Tap Home Button**: freeze when you go back to the home screen.
- **Double Tap Home**: freeze when you press the Home button twice quickly.
- **Never**: turn off auto freeze.

Under "Except for", you can also choose "Charging" so apps aren't frozen automatically while the phone is charging.

## Running in the background {#background}

Auto Freeze needs Ice Box to run in the background. Because Android requires it, Ice Box shows a notification while it runs in the background. You can turn this notification off in system settings without affecting the feature.

If you turn off Auto Freeze and other features that need the background, Ice Box won't run in the background.

## Auto Freeze isn't working? {#faq}

### Apps aren't frozen after the screen turns off

Check whether a phone manager or cleaner app is stopping Ice Box from running in the background. In system settings, give Ice Box permissions such as "Run in background" and "Autostart", and set its battery usage to "Don't optimize" or "Unrestricted".

### Screen Off Delay doesn't take effect

On some phones, freezing a few minutes after the screen turns off may not work. This is the system limiting background tasks. Set a shorter Screen Off Delay, or freeze right after the screen turns off instead.

### Huawei phones don't freeze after the screen turns off

Due to system limits, auto freeze on "Screen Off" may not work on Huawei phones. Use auto freeze on "Tap Home Button" or "Double Tap Home" instead.
