---
title: Ativar o Ice Box com o ativador com um clique (Windows)
short: Ativador com um clique
description: Use o ativador com um clique em um PC com Windows para ativar o modo Device Owner ou o modo ADB do Ice Box sem digitar comandos. Inclui download, passos e perguntas frequentes.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

O ativador com um clique foi desenvolvido por [@web1n](https://github.com/web1n). Ele roda em computadores com Windows e ativa o modo Device Owner do Ice Box, para que você não precise digitar comandos ADB manualmente.

[[activator-download]]

Se você não tem um computador com Windows ou tiver problemas com o ativador exe, use o [ativador web](/guide/web-activator/). Ele faz a mesma coisa.

## Leia isto antes {#before}

Os sistemas das marcas chinesas de telefone costumam personalizar o Android, o que causa alguns problemas de compatibilidade com o modo Device Owner. Os mais comuns são:

- Telefones Samsung podem ser bloqueados com senha pelo sistema (até agora, cerca de 4 relatos em 200 mil). Leia antes os [avisos para Samsung](/guide/samsung-device-owner/).
- Um aviso de desinstalação aparece toda vez que você congela um app, e um pedido de permissão aparece quando você o descongela (Huawei, Smartisan).
- A barra de notificações pisca com "Administrador do dispositivo ativado, toque para desativar" (OPPO, vivo).
- O recurso integrado de apps duplicados do sistema para de funcionar (Huawei, MIUI).
- Às vezes, um app que você acabou de descongelar não consegue se conectar à internet. Feche o app e abra de novo (OnePlus, Smartisan e outros).

Se você não aceita esses problemas, use o [modo ADB](/guide/adb/). Ele também não precisa de root, mas é preciso ativá-lo de novo com um computador sempre que o telefone reinicia.

Já o modo Device Owner não exige idas repetidas ao computador. Configure uma vez e ele continua funcionando, mesmo depois de reinicializações e atualizações do sistema.

## Passos {#steps}

Depois de decidir ativar o Ice Box no modo Device Owner, siga estes passos:

1. Verifique se o Ice Box está instalado no telefone. Remova o bloqueio de tela. Em telefones Sony, retire o chip (cartão SIM). Em telefones Xiaomi, ative "Depuração USB (configurações de segurança)" e desative a "Otimização MIUI".
2. Nas configurações do sistema, saia de todas as contas, como as contas Xiaomi, Huawei e Google. Você pode entrar de novo depois da ativação.
3. Baixe e extraia o ativador. Extraia no computador, e não no armazenamento do telefone.
4. Ative a Depuração USB no telefone e conecte-o ao computador com um cabo USB.
5. Clique em "Ativar o Ice Box" (激活冰箱) no ativador.

Quando der certo, abra o Ice Box e comece a usar.

Se tiver outros problemas, verifique primeiro se todas as contas do sistema foram removidas. Se mesmo assim não funcionar, compare o registro do ativador com as [perguntas frequentes do modo Device Owner](/guide/device-owner/#faq).

## Perguntas frequentes {#faq}

### O ativador fica travado carregando

Extraia todos os arquivos do pacote do ativador para o computador antes de executá-lo. Não extraia para o armazenamento do telefone e não clique duas vezes no exe de dentro do arquivo compactado.

### O ativador diz que não encontra o dispositivo

Verifique se a Depuração USB está ativada, se o seu cabo aceita transferência de dados, se o driver do telefone está instalado no computador e se nenhuma suíte de PC, gerenciador de telefone ou antivírus está ocupando a conexão.
