---
title: Ativar o Ice Box com o ativador web
short: Ativador web
description: Sem instalar nada: ative o modo Device Owner ou ADB do Ice Box com o ativador web no navegador, por WebUSB. Windows, macOS e Linux. Recomendamos o Chrome.
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

O ativador web foi desenvolvido por [@web1n](https://github.com/web1n). Ele faz o mesmo trabalho que o ativador exe e funciona em qualquer sistema operacional de computador. Recomendamos usar o Chrome.

[Abrir o ativador web](https://adb.http.gs/icebox.html)

O ativador web pode ativar dois modos:

- **Modo Device Owner**: ative uma vez e ele continua funcionando, mas pode ter efeitos colaterais em alguns telefones.
- **Modo ADB**: sem efeitos colaterais, mas é preciso conectar a um computador e ativar de novo sempre que o telefone reinicia ou que as configurações de USB do sistema são alteradas.

## Possíveis efeitos colaterais do modo Device Owner {#side-effects}

Os sistemas dos telefones Samsung e das marcas chinesas costumam personalizar o Android, o que causa alguns problemas de compatibilidade com o modo Device Owner. Os mais comuns são:

- Telefones Samsung podem ser bloqueados com senha pelo sistema (até agora, cerca de 4 relatos em 200 mil). Leia antes os [avisos para Samsung](/guide/samsung-device-owner/).
- Um aviso de desinstalação aparece toda vez que você congela um app, e um pedido de permissão aparece quando você o descongela (Huawei, Smartisan).
- A barra de notificações pisca com "Administrador do dispositivo ativado, toque para desativar" (OPPO, vivo).
- O recurso integrado de apps duplicados do sistema para de funcionar (Huawei, MIUI).
- Às vezes, um app que você acabou de descongelar não consegue se conectar à internet. Feche o app e abra de novo (OnePlus, Smartisan e outros).

Se você não aceita esses problemas, escolha o modo ADB. Ele também não precisa de root, mas é preciso ativá-lo de novo com um computador sempre que o telefone reinicia.

## Como ativar {#steps}

1. Verifique se o Ice Box está instalado no telefone. Remova o bloqueio de tela. Em telefones Sony, retire o chip (cartão SIM). Em telefones Xiaomi, ative "Depuração USB (configurações de segurança)" e desative a "Otimização MIUI".
2. Conecte o telefone ao computador com um cabo USB e feche no computador qualquer software de segurança, suíte de PC ou gerenciador de telefone.
3. No computador, abra o [ativador web](https://adb.http.gs/icebox.html) no Chrome, conecte o dispositivo e ative.

Antes de ativar o modo Device Owner, também é preciso sair de todas as contas do telefone. Veja a [configuração do modo Device Owner](/guide/device-owner/#steps).
