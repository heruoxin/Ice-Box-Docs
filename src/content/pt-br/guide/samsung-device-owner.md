---
title: Riscos de configurar o Device Owner em telefones Samsung
short: Avisos para Samsung
description: Configurar o Device Owner em um Samsung pode quebrar a Pasta Segura e o Dual Messenger, ou até redefinir a senha da tela de bloqueio. Usuários Samsung, leiam isto antes de decidir.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

O Ice Box usa os recursos nativos de Device Owner (proprietário do dispositivo) do Android. A Samsung é um caso especial entre as fabricantes de Android: ela tem o próprio framework de segurança, chamado KNOX.

Depois de configurar e ativar em um Samsung uma solução sem root baseada no Device Owner nativo do Android, você pode ter estes problemas:

- Alguns recursos do KNOX, como a Pasta Segura, podem parar de funcionar.
- O recurso integrado Dual Messenger para de funcionar.
- O sistema redefine a senha da tela de bloqueio, o que obriga a restaurar a configuração de fábrica e faz você perder seus dados.

Nenhum desses problemas acontece sempre. Veja o mais grave, a redefinição da senha da tela de bloqueio: em 2018, entre cerca de 200 mil usuários Samsung do Ice Box, recebemos 6 relatos no total, e o número real de afetados pode ser maior. Desde o lançamento da One UI, parece que mais usuários passaram por esse problema, por isso não recomendamos o modo Device Owner na One UI.

Por enquanto, não sabemos a causa exata desses problemas e não há uma boa solução.

> [!CAUTION]
> Usuários Samsung, pensem bem, muito bem, antes de usar o modo Device Owner.

## Modos recomendados para usuários Samsung {#recommended}

- Com root: use o [modo root](/guide/root/).
- Sem root, Android 11 ou superior: use o [modo Depuração por Wi-Fi](/guide/wireless-debugging/) ou o [modo Shizuku](/guide/shizuku/).
- Sem root, com um computador: use o [modo ADB](/guide/adb/).

Nenhum desses modos precisa de Device Owner. Com exceção do modo root, todos precisam ser ativados de novo sempre que o telefone reinicia.
