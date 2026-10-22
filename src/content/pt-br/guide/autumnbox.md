---
title: Ativar o Ice Box com o AutumnBox
short: AutumnBox
description: O AutumnBox é uma caixa de ferramentas para Windows que simplifica tarefas ADB e pode ativar o modo Device Owner do Ice Box com um clique. Passos e cuidados.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

O AutumnBox (秋之盒) é uma caixa de ferramentas de um clique que deixa as operações ADB mais simples. Muito obrigado a [zsh2401](https://zsh2401.top/) por todo o trabalho de desenvolvimento.

O AutumnBox só roda no Windows. Se o seu computador usa macOS ou Linux, use o [ativador web](/guide/web-activator/) ou siga os [passos de configuração pela linha de comando](/guide/device-owner/#steps).

> [!NOTE]
> O site do AutumnBox está fora do ar no momento e o projeto não é mais atualizado. O código-fonte e as versões antigas estão no [GitHub](https://github.com/zsh2401/AutumnBox). Recomendamos usar o [ativador com um clique](/guide/activator/) ou o [ativador web](/guide/web-activator/), que fazem o mesmo trabalho.

## Leia isto antes {#before}

Os sistemas das marcas chinesas de telefone costumam acrescentar recursos próprios, e isso causa alguns problemas de compatibilidade com o modo Device Owner. Os mais comuns são:

- Telefones Samsung podem ser bloqueados com senha pelo sistema (até agora, cerca de 4 relatos em 200 mil). Leia antes os [avisos para Samsung](/guide/samsung-device-owner/).
- Um aviso de desinstalação aparece toda vez que você congela um app, e um pedido de permissão aparece quando você o descongela (Huawei, Smartisan).
- A barra de notificações pisca com "Administrador do dispositivo ativado, toque para desativar" (OPPO, vivo).
- O recurso integrado de apps duplicados do sistema para de funcionar (Huawei, MIUI).
- Às vezes, um app que você acabou de descongelar não consegue se conectar à internet. Feche o app e abra de novo (OnePlus e outros).
- Em telefones Sony, recomendamos configurar o Ice Box antes de atualizar para o Android 9. O Android 9 adiciona uma conta oculta difícil de remover. Se você já atualizou, use a [configuração por QR code](/guide/qr-code/). Telefones que já estavam configurados não são afetados.

Se você não aceita esses problemas, use o [Shizuku](/guide/shizuku/) ou o [modo ADB](/guide/adb/). Eles também não precisam de root, mas é preciso ativá-los de novo sempre que o telefone reinicia.

Já o modo Device Owner não exige idas repetidas ao computador. Configure uma vez e ele continua funcionando, mesmo depois de reinicializações e atualizações do sistema.

## Passos {#steps}

Depois de decidir ativar o Ice Box no modo Device Owner, siga estes passos:

1. Verifique se o Ice Box está instalado no telefone. Remova o bloqueio de tela. Em telefones Sony, retire o chip (cartão SIM). Em telefones Xiaomi, ative "Depuração USB (configurações de segurança)" e desative a "Otimização MIUI".
2. Nas configurações do sistema, remova todas as contas, como as contas Xiaomi, Huawei e Google. Você pode entrar de novo depois da ativação.
3. Baixe e abra o AutumnBox.
4. Ative a Depuração USB no telefone e conecte-o ao computador. Se não conectar, normalmente o driver não está instalado ou outra suíte de PC está em conflito. Verifique o driver e feche qualquer outro software de gerenciamento de telefone.
5. Clique na função "Ativar o Ice Box" (激活冰箱) no AutumnBox.

Normalmente, você já pode abrir o Ice Box e começar a usar. Se tiver problemas, verifique primeiro se todas as contas do sistema foram removidas. Se mesmo assim não funcionar, compare o registro de saída com as [perguntas frequentes do modo Device Owner](/guide/device-owner/#faq).
