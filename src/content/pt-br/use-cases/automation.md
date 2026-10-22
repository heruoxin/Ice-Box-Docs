---
title: Como automatizar o congelamento e o descongelamento de apps no Android
short: Automação e integração para desenvolvedores
card: Congele automaticamente quando a tela desligar, use ações de um toque na tela inicial ou deixe outros apps congelarem pelo Ice Box com o SDK.
description: Automatize o congelamento e o descongelamento no Android com o Ice Box: Congelamento automático, atalhos Congelar tudo e Descongelar tudo, e um SDK aberto para integrar ao seu próprio app.
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## Resposta curta {#answer}

Usuários comuns podem contar com o [Congelamento automático](/guide/auto-freeze/) e os [atalhos na tela inicial](/guide/shortcuts/) do Ice Box para congelar apps automaticamente quando a tela desliga ou quando voltam à tela inicial. Desenvolvedores podem usar o [SDK do Ice Box](/developers/) para congelar e descongelar apps a partir do próprio app, depois que o usuário der permissão.

## Automação sem código {#no-code}

- **Congelamento automático**: congela automaticamente os apps do Ice Box quando a tela desliga, ou quando você toca uma ou duas vezes no botão Início. Você pode definir um atraso após desligar a tela e abrir uma exceção durante o carregamento.
- **Atalhos na tela inicial**: "Congelar tudo", "Congelar + bloquear tela" e "Descongelar tudo" podem ser adicionados à tela inicial, e cada um exige um só toque.
- **Atalhos para apps congelados**: toque em um para descongelar e abrir o app automaticamente, sem precisar abrir o Ice Box antes.
- **划卡冻结 (deslizar para congelar)**: o app de terceiros 划卡冻结 congela um app quando você descarta o cartão dele na tela de apps recentes (só com root).

## Para desenvolvedores: o SDK do Ice Box {#sdk}

Em telefones com o Ice Box instalado e ativado, o SDK do Ice Box permite que apps de terceiros congelem e descongelem apps:

- Consultar o modo de operação atual do Ice Box e o estado de congelamento de um app. Não precisa de permissão.
- Congelar e descongelar apps, inclusive em lote. Exige a permissão do usuário.
- Instalar e desinstalar APKs silenciosamente no modo Device Owner.
- Cada ação que um app de terceiros faz pelo Ice Box fica registrada na central de registros do Ice Box, onde o usuário pode conferir a qualquer momento.

Veja o [guia para desenvolvedores](/developers/) para saber como integrar.

## Perguntas frequentes {#faq}

### Outros apps podem congelar apps sem eu saber?

Um app de terceiros precisa da sua permissão para congelar ou descongelar apps pelo Ice Box. Cada ação fica registrada na central de registros do Ice Box, e você pode conferir a qualquer momento.
