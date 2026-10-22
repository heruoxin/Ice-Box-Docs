---
title: Ativar o Ice Box com o Shizuku
short: Modo Shizuku
description: Instale o Shizuku e inicie-o pela Depuração por Wi-Fi, e o Ice Box funciona sem root e sem computador. Telefones com root também podem usar o Sui. Passos e observações aqui.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

O [Shizuku](https://shizuku.rikka.app/) é uma ferramenta que ajuda outros apps a obter permissões do sistema. Com o Shizuku instalado, você pode usar o recurso "Depuração por Wi-Fi" do sistema para ativar o Ice Box sem root e sem computador.

Antes de começar, saiba que:

- Iniciar o Shizuku pela Depuração por Wi-Fi exige Android 11 ou superior.
- Depois que o telefone reinicia, é preciso iniciar o Shizuku de novo. Caso contrário, o Ice Box não consegue congelar nem descongelar apps.
- Enquanto o serviço do Shizuku estiver parado, os apps congelados também não podem ser descongelados. Tudo volta a funcionar normalmente assim que o serviço do Shizuku voltar.

## Passos de ativação {#steps}

1. Instale o Shizuku no telefone pelo [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) ou pelo [CoolApk (酷安)](https://www.coolapk.com/), uma loja de apps Android chinesa.
2. Siga o [guia oficial do Shizuku](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) para iniciá-lo pela Depuração por Wi-Fi.
3. Abra o Ice Box, escolha "Shizuku Manager" em "Mudar o modo de operação" e permita o Ice Box quando o Shizuku pedir.

Pronto, o Ice Box já pode ser usado. Depois de reiniciar o telefone, inicie o Shizuku de novo antes de tudo.

## Telefones com root: use o Sui {#sui}

O Sui é a versão root do Shizuku. Ele funciona como um módulo do Magisk e inicia sozinho depois de reiniciar. O Ice Box também é compatível com o Sui. Depois de instalá-lo, escolha "Sui" em "Mudar o modo de operação", no Ice Box.

Telefones com root também podem usar diretamente o [modo root](/guide/root/).

## Perguntas frequentes {#faq}

### Aparece "Falha ao obter a permissão do Shizuku"

Verifique se o serviço do Shizuku está em execução e conceda a permissão ao Ice Box no Shizuku.

### O Shizuku não funciona com o Ice Box em telefones Xiaomi

A partir do MIUI 11, a passagem de permissões entre apps de terceiros pode falhar. Primeiro, desative a "Otimização MIUI". Depois, mantenha pressionado o ícone do Ice Box na tela inicial, abra as informações do app e ative manualmente "Outras permissões" nas configurações de permissão.
