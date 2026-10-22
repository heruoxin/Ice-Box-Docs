---
title: Congelar apps do sistema pré-instalados
short: Congelar apps pré-instalados
description: O Ice Box consegue congelar alguns apps do sistema pré-instalados, inclusive nos modos sem root. O que verificar antes, apps que não podem ser congelados, listas compartilhadas e como atualizar apps congelados.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Muitos telefones vêm com vários programas pré-instalados e apps de anúncios que você nunca vai usar. O Ice Box consegue congelar esses apps pré-instalados: eles não rodam em segundo plano e não aparecem na tela inicial. Sempre que precisar de um deles, descongele-o no Ice Box para trazê-lo de volta.

## Antes de congelar {#before}

- Congele só os apps que você tem certeza de que não vai precisar. Se não tiver certeza, não congele. Congelar componentes essenciais do sistema pode fazer o telefone funcionar mal.
- Alguns sistemas tratam os apps essenciais de forma especial: no MIUI e em sistemas parecidos, alguns apps essenciais podem não ser congeláveis ou ser descongelados à força pelo sistema depois de reiniciar.
- Nas versões mais recentes do EMUI, a tela inicial da Huawei não pode mais ser congelada.
- Apps em execução com permissão de administrador do dispositivo não podem ser congelados. Primeiro remova a permissão do app em "Configurações > Segurança > Apps de administrador do dispositivo" e depois congele-o.

## Importar uma lista de congelamento compartilhada {#lists}

O Ice Box pode compartilhar e importar listas de apps do sistema que podem ser congelados com segurança. Quando você abre o link de uma lista que alguém compartilhou, o Ice Box mostra os apps dela que podem ser congelados no seu telefone e os congela depois que você confirma cada um.

Você também pode copiar o texto compartilhado e tocar em "Importar da área de transferência" nas configurações do Ice Box.


## Apps pré-instalados após a configuração por QR code {#qr}

Em telefones configurados pela [configuração por QR code](/guide/qr-code/), o sistema não instala os apps pré-instalados por padrão. Quando precisar de um deles, vá até o "Laboratório" nas configurações do Ice Box, toque em "Ativar apps do sistema pré-instalados" e escolha os apps que quer instalar.

## Perguntas frequentes {#faq}

### Como atualizo um app congelado?

Se você usa o CoolApk (酷安), uma loja de apps Android chinesa, ative "Mostrar apps ocultos" na seção de laboratório das configurações do CoolApk. Com outras lojas de apps, descongele o app no Ice Box primeiro e congele-o de novo depois da atualização.

### Alguns apps do sistema não podem ser congelados ou são descongelados sozinhos depois de reiniciar

É o sistema protegendo os apps essenciais, e o Ice Box não consegue contornar isso. O MIUI e alguns outros sistemas fazem isso.
