---
title: Como desinstalar o Ice Box e remover o Device Owner
short: Desinstalar o Ice Box
description: Descongele todos os apps antes de desinstalar o Ice Box. No modo Device Owner, desinstale pelas configurações do Ice Box, e não pela tela inicial, senão os apps congelados não poderão ser descongelados.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Só o Ice Box consegue descongelar os apps que ele congelou. Antes de desinstalar o Ice Box, confira bem se todos os apps foram descongelados.

## Passos para desinstalar {#steps}

1. Abra o Ice Box, use "Descongelar tudo" para descongelar todos os apps do Ice Box e confira se todos voltaram a aparecer na tela inicial.
2. Vá até as configurações do Ice Box e toque em "Desinstalar".
3. Depois que você confirmar, o Ice Box remove a própria autorização de Device Owner (se tiver uma) e conclui a desinstalação.

> [!WARNING]
> No modo Device Owner, **não desinstale o Ice Box direto pela tela inicial**. Na Xiaomi e em alguns outros telefones, isso faz perder a permissão de Device Owner, e os apps congelados nunca mais poderão ser descongelados.

## Observações para cada modo de operação {#modes}

- **Modo Device Owner**: é obrigatório remover a autorização de Device Owner com "Desinstalar", nas configurações do Ice Box. Caso contrário, o sistema não deixa desinstalar o app.
- **Modos root, Depuração por Wi-Fi, ADB e Shizuku**: da mesma forma, descongele tudo primeiro e depois desinstale o Ice Box.
- Se você mudou de modo de operação, volte ao modo que usou para congelar antes de descongelar. Os modos de operação não são compatíveis entre si.

## Esqueceu de descongelar antes de desinstalar? {#already-removed}

- **Modos root, Depuração por Wi-Fi, ADB e Shizuku**: reinstale o Ice Box, mude para o modo de operação que você usou para congelar, encontre os apps congelados na lista de apps e descongele-os.
- **Modo Device Owner**: desinstalar o Ice Box diretamente faz perder a permissão de Device Owner, e os apps congelados não podem mais ser descongelados. Por isso, siga os passos acima e desinstale pelas configurações do Ice Box.
