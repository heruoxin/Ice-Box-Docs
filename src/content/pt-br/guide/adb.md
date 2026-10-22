---
title: Modo ADB: ative o Ice Box com um computador
short: Modo ADB
description: Não conseguiu configurar o Device Owner ou quer manter suas contas? Ative o Ice Box por ADB em um computador (modo ADB simples). Sem root, mas é preciso reativar após cada reinicialização.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

Se você não conseguiu configurar o [modo Device Owner](/guide/device-owner/) ou não quer remover as contas do telefone, pode usar o modo ADB (também chamado de modo ADB simples). Diferenças em relação ao modo Device Owner:

- **Vantagens**: sem passos complicados como remover contas. Pode usar logo depois de ativar.
- **Desvantagens**: é preciso ativar de novo sempre que o telefone reinicia. Caso contrário, os apps não podem ser congelados nem descongelados.

No Ice Box, o modo ADB aparece como o modo de operação "Depuração por Wi-Fi". No Android 11 e superior, você também pode ativá-lo no próprio telefone, sem computador. Veja o [modo Depuração por Wi-Fi](/guide/wireless-debugging/).

## Passos de ativação {#steps}

1. Verifique se a versão mais recente do Ice Box está instalada.
2. Ative a Depuração USB no telefone e deixe-a sempre ativada. Defina o modo de conexão USB como "Somente carregamento". Em telefones Xiaomi, também é preciso ativar "Depuração USB (configurações de segurança)".
3. Conecte o telefone ao computador, abra o ativador e escolha o modo ADB para ativar.

[[activator-download]]

Se você já está acostumado com comandos ADB, pode dispensar o ativador e executar isto no computador:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## Perguntas frequentes {#faq}

### O ativador fica travado carregando

Extraia todos os arquivos do pacote do ativador para o computador antes de executá-lo. Não extraia para o armazenamento do telefone e não clique duas vezes no exe de dentro do arquivo compactado.

### O Ice Box para de funcionar logo depois que tiro o cabo

Deixe a Depuração USB sempre ativada e mantenha o modo de conexão USB em "Somente carregamento", sem alterá-lo. Em telefones Xiaomi, "Depuração USB (configurações de segurança)" também precisa estar ativada. Mudar qualquer uma dessas chaves faz o sistema retirar automaticamente a permissão do Ice Box.

### Não consigo congelar nem descongelar depois de reiniciar o telefone

Isso é normal no modo ADB. Depois de reiniciar, conecte ao computador e ative de novo, ou, no Android 11 e superior, ative de novo pela [Depuração por Wi-Fi](/guide/wireless-debugging/).
