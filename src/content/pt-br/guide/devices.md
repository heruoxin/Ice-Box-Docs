---
title: Observações por marca de telefone
short: Observações por marca
description: Observações do Ice Box para Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu e outras: Opções do desenvolvedor, problemas com o Device Owner, atalhos e notificações push.
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Cada marca de telefone personaliza o Android em um grau diferente, então o Ice Box se comporta de um jeito um pouco diferente em cada marca. Abaixo estão os problemas conhecidos, organizados por marca. Antes de configurar, encontre a marca do seu telefone e dê uma olhada.

## Xiaomi / Redmi / POCO {#xiaomi}

- Antes de usar o modo ADB, Depuração por Wi-Fi ou Device Owner, ative "Depuração USB (configurações de segurança)" nas Opções do desenvolvedor.
- Antes de configurar o Device Owner, desative a "Otimização MIUI". Com ela desativada, os apps não pedem as permissões de novo toda vez que você os congela, e você não recebe avisos dizendo que o app foi desinstalado.
- Depois de configurar o Device Owner, o recurso integrado de apps duplos do sistema pode não funcionar.
- Se não for possível adicionar atalhos na tela inicial, ative a permissão de atalhos na tela inicial para o Ice Box nas configurações do sistema. Se os atalhos forem adicionados mas não funcionarem, permita que o Ice Box "inicie outros apps" e "mostre janelas pop-up durante a execução em segundo plano".
- A partir do MIUI 11, a passagem de permissões entre o Ice Box e apps como Brevent, Island e Shizuku pode falhar. Primeiro, desative a "Otimização MIUI". Depois, mantenha pressionado o ícone do Ice Box na tela inicial, abra as informações do app e ative manualmente "Outras permissões" nas configurações de permissão.
- Alguns apps essenciais do sistema (como o Mi Music e a loja de apps) podem não ser congeláveis ou podem ser descongelados automaticamente pelo sistema depois de reiniciar. Desde a versão 3.30.7, o Ice Box consegue congelar mais componentes do sistema MIUI / HyperOS.
- No modo Device Owner, **não desinstale o Ice Box direto pela tela inicial**. Isso faz perder a permissão de Device Owner, e os apps congelados não podem ser descongelados. Siga os passos de [Desinstalar o Ice Box](/guide/uninstall/).

## Samsung {#samsung}

- Depois de configurar o Device Owner, a Pasta Segura e o Dual Messenger podem parar de funcionar, e a senha da tela de bloqueio pode até ser redefinida. Leia sem falta os [avisos para Samsung](/guide/samsung-device-owner/) antes.
- Para usuários Samsung, recomendamos o modo root, Depuração por Wi-Fi, Shizuku ou ADB.

## Huawei / Honor {#huawei}

- Ao usar o modo ADB ou Depuração por Wi-Fi, ative "Permitir depuração ADB no modo somente carregamento" nas Opções do desenvolvedor.
- Depois de configurar o Device Owner, um aviso de desinstalação pode aparecer toda vez que você congela um app, e um pedido de permissão pode aparecer quando você o descongela. O recurso integrado App Twin do sistema pode não funcionar.
- Se não for possível adicionar atalhos na tela inicial, dê manualmente ao Ice Box a permissão de adicionar atalhos nas configurações do sistema. Com uma tela inicial de terceiros, talvez não seja possível adicionar atalhos de dentro do Ice Box. Nesse caso, tente manter pressionada uma área vazia da tela inicial para adicioná-los.
- Por limitações do sistema, o congelamento automático "Ao desligar a tela" pode não funcionar. Use o congelamento automático "Ao tocar em Início" ou "Ao tocar duas vezes em Início".
- Nas versões mais recentes do EMUI, a tela inicial da Huawei não pode mais ser congelada. Nas versões anteriores ao EMUI 9.0 ainda é possível.

## OPPO / OnePlus / realme {#oppo}

- Ao usar o modo ADB ou Depuração por Wi-Fi, ative "Desativar monitoramento de permissões" nas Opções do desenvolvedor.
- Depois de configurar o Device Owner, a barra de notificações pode piscar com "Administrador do dispositivo ativado, toque para desativar".
- Se a lista de apps mostrar só alguns apps, permita que o Ice Box leia a lista de apps nas configurações de permissão do sistema.
- Alguns apps usam o serviço de push do sistema, então o sistema ainda pode mostrar as notificações deles depois de congelados, mas os apps em si não rodam em segundo plano. Se não quiser essas notificações, desative as notificações desse app nas configurações do sistema.
- Às vezes, um app que você acabou de descongelar não consegue se conectar à internet. Feche o app e abra de novo.

## vivo / iQOO {#vivo}

- Depois de configurar o Device Owner, a barra de notificações pode piscar com "Administrador do dispositivo ativado, toque para desativar".
- Se a lista de apps mostrar só alguns apps, permita que o Ice Box leia a lista de apps nas configurações de permissão do sistema.
- Como na OPPO, alguns apps ainda podem mostrar notificações pelo push do sistema depois de congelados.

## Sony {#sony}

- Retire o chip (cartão SIM) antes de configurar o Device Owner.
- Recomendamos configurar o Ice Box antes de atualizar para o Android 9. O Android 9 adiciona uma conta oculta difícil de remover. Se você já atualizou, use a [configuração por QR code](/guide/qr-code/). Telefones que já estavam configurados não são afetados.

## Meizu e Smartisan {#meizu}

- Meizu: os atalhos na tela inicial podem não funcionar mesmo depois de adicionados. Ainda não encontramos uma opção do sistema para isso.
- Smartisan: atalhos não são aceitos para nenhum app. Depois de configurar o Device Owner, um aviso de desinstalação pode aparecer quando você congela um app, e os apps descongelados ficam com todas as permissões liberadas por padrão. É assim que o sistema da Smartisan foi projetado, e não tem relação com o Ice Box.

## Pixel e Android puro {#pixel}

- Sistemas puros ou quase puros têm a melhor compatibilidade com todos os modos de operação.
- Sem computador, você pode usar a [configuração por QR code](/guide/qr-code/) para tornar o Ice Box o Device Owner durante uma restauração de fábrica, ou usar o [modo Depuração por Wi-Fi](/guide/wireless-debugging/) no Android 11 e superior.
