---
title: Congelamento automático: congele apps quando a tela desligar
short: Congelamento automático
description: Com o Congelamento automático ativado, o Ice Box congela os apps da sua lista quando a tela desliga ou quando você toca uma ou duas vezes em Início. Gatilhos, atraso, exceção ao carregar e soluções.
section: guide
group: tips
order: 1
faq: true
related: guide/shortcuts, guide/devices, use-cases/stop-background-apps
---

Quando você abre um app, o Ice Box primeiro o descongela, e o app precisa ser congelado de novo quando você termina. Com o "Congelamento automático" ativado, o Ice Box cuida dessa etapa por você.

## Quando os apps são congelados {#when}

Nas configurações do Ice Box, abra "Congelamento automático" e use "Congelar automaticamente" para escolher quando os apps são congelados:

- **Ao desligar a tela**: congela depois que a tela desliga. Você pode definir um "Atraso após desligar a tela" para congelar algum tempo depois que a tela apaga.
- **Ao tocar em Início**: congela quando você volta à tela inicial.
- **Ao tocar duas vezes em Início**: congela quando você aperta o botão Início duas vezes rapidamente.
- **Nunca**: desativa o congelamento automático.

Em "Exceções", você também pode escolher "Durante o carregamento" para que os apps não sejam congelados automaticamente enquanto o telefone carrega.

## Execução em segundo plano {#background}

O Congelamento automático precisa que o Ice Box rode em segundo plano. Como o Android exige isso, o Ice Box mostra uma notificação enquanto está em segundo plano. Você pode desativar essa notificação nas configurações do sistema sem afetar o recurso.

Se você desativar o Congelamento automático e os outros recursos que precisam do segundo plano, o Ice Box não vai rodar em segundo plano.

## O Congelamento automático não funciona? {#faq}

### Os apps não são congelados depois que a tela desliga

Veja se algum app gerenciador do telefone ou de limpeza está impedindo o Ice Box de rodar em segundo plano. Nas configurações do sistema, dê ao Ice Box permissões como "Executar em segundo plano" e "Início automático", e defina o uso da bateria dele como "Não otimizar" ou "Sem restrições".

### O Atraso após desligar a tela não tem efeito

Em alguns telefones, congelar alguns minutos depois que a tela desliga pode não funcionar. É o sistema limitando as tarefas em segundo plano. Defina um atraso menor ou congele logo depois que a tela desligar.

### Telefones Huawei não congelam depois que a tela desliga

Por limitações do sistema, o congelamento automático "Ao desligar a tela" pode não funcionar em telefones Huawei. Use o congelamento automático "Ao tocar em Início" ou "Ao tocar duas vezes em Início".
