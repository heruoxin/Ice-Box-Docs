---
title: Como desativar o bloatware no Android sem root
short: Desativar o bloatware
card: Apps do sistema pré-instalados que não podem ser desinstalados ainda podem ser congelados, e você não precisa de root para isso.
description: Desative o bloatware sem root: congele apps pré-instalados e de anúncios com o Ice Box para que saiam da tela inicial e não possam rodar. Funciona com Device Owner e outros modos.
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## Resposta curta {#answer}

A maioria dos apps pré-instalados não pode ser desinstalada, mas pode ser congelada. Depois de congelados com o Ice Box, eles somem da tela inicial e da gaveta de apps e não conseguem rodar em segundo plano. Se precisar de um deles depois, descongele-o no Ice Box para trazê-lo de volta. Congelar apps pré-instalados não exige root: modos sem root como Device Owner, Depuração por Wi-Fi e ADB funcionam.

## Passos {#steps}

1. [Baixe o Ice Box](/download/) e ative-o seguindo a recomendação da [Central de ajuda](/guide/).
2. Na lista de apps do Ice Box, mude para os apps do sistema e marque os apps pré-instalados de que você tem certeza que não vai precisar.
3. Congele-os. A partir daí, esses apps não aparecem mais na tela inicial nem rodam em segundo plano.
4. Para trazer um de volta, descongele-o no Ice Box.

Você também pode importar uma "lista de apps do sistema que podem ser congelados com segurança" compartilhada por outra pessoa. O Ice Box mostra os apps dela que podem ser congelados no seu telefone e os congela depois que você confirma. Veja [Congelar apps do sistema pré-instalados](/guide/system-apps/).

## Pontos de atenção {#notes}

- Congele só os apps de que você tem certeza que não vai precisar. Congelar componentes essenciais do sistema pode fazer partes do telefone pararem de funcionar direito.
- No MIUI e em alguns outros sistemas, certos apps essenciais podem não ser congeláveis, ou o sistema pode descongelá-los automaticamente depois de reiniciar.
- Em telefones configurados pela [configuração por QR code](/guide/qr-code/), o sistema não instala os apps pré-instalados por padrão. Se precisar deles, você pode ativá-los no "Laboratório" do Ice Box.
- Para detalhes de cada marca, veja as [observações por marca de telefone](/guide/devices/).

## Perguntas frequentes {#faq}

### Qual a diferença entre congelar apps pré-instalados e desativá-los com comandos ADB?

O efeito é parecido, mas o Ice Box oferece uma interface gráfica em que você pode conferir, congelar e descongelar apps a qualquer momento, sem precisar decorar comandos.

### Os apps congelados podem ser restaurados?

Sim. Assim que você descongela um app no Ice Box, ele volta ao normal. Antes de desinstalar o Ice Box, descongele todos os apps.

### Os apps pré-instalados congelados voltam depois de uma atualização do sistema?

Alguns sistemas descongelam automaticamente os apps essenciais depois de reiniciar ou atualizar. Se isso acontecer, congele-os de novo no Ice Box.
