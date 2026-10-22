---
title: Como impedir que apps Android rodem em segundo plano
short: Impedir apps em segundo plano
card: Coloque no Ice Box os apps que você quase não usa, e eles não conseguem iniciar nem rodar em segundo plano, nem gastar bateria e dados.
description: Impeça apps Android de rodar em segundo plano: congele com o Ice Box os apps que iniciam sozinhos e descongele-os com um toque quando precisar. Funciona sem root.
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## Resposta curta {#answer}

Congele esses apps. Um app congelado não pode ser executado, então não consegue iniciar sozinho nem ficar rodando em segundo plano, e não gasta bateria nem dados. O Ice Box congela esses apps com um toque. Quando precisar de um deles, toque nele para descongelar e abrir, e o Ice Box o congela de novo automaticamente quando você terminar. O Ice Box funciona em telefones com e sem root.

## Por que os apps rodam em segundo plano? {#why}

Muitos apps iniciam sozinhos quando o telefone liga, se conecta a uma rede, começa a carregar ou recebe uma notificação push, mesmo que você não os abra há muito tempo. O "Forçar parada" do Android só para o app uma vez. Depois disso, o app ainda pode iniciar sozinho de novo.

Congelar é diferente: depois que um app é congelado, o sistema não o inicia de novo até você descongelá-lo no Ice Box.

## Impedir apps em segundo plano com o Ice Box {#steps}

1. [Baixe o Ice Box](/download/) e ative-o seguindo a recomendação da [Central de ajuda](/guide/).
2. Na lista de apps do Ice Box, marque os apps que você quase não usa, mas não quer desinstalar.
3. Toque ou deslize o botão de congelar na parte de baixo do Ice Box para congelar esses apps.
4. Quando precisar de um deles, toque nele no Ice Box ou no atalho dele na tela inicial. O Ice Box primeiro o descongela e depois o abre.
5. Ative o [Congelamento automático](/guide/auto-freeze/), e o Ice Box congela esses apps de novo automaticamente quando a tela desliga.

## Pontos de atenção {#notes}

- Apps congelados não recebem as próprias notificações push. Em telefones como OPPO, vivo e OnePlus, alguns apps usam o serviço de push do sistema e ainda podem mostrar notificações, mas o app em si não roda.
- Apps que precisam continuar funcionando em segundo plano, como apps de mensagens que precisam receber mensagens na hora, despertadores e navegação, não são bons candidatos para congelar.
- O Congelamento automático precisa que o Ice Box rode em segundo plano. Veja [Congelamento automático](/guide/auto-freeze/) para configurar as permissões de segundo plano do Ice Box.

## Perguntas frequentes {#faq}

### Qual a diferença entre congelar e "Forçar parada"?

O "Forçar parada" só interrompe o app que está rodando naquele momento, e outros eventos ainda podem acordá-lo depois. Um app congelado não pode rodar de jeito nenhum até ser descongelado.

### Funciona sem root?

Sim. O Ice Box tem modos de operação sem root, como Device Owner, Depuração por Wi-Fi, ADB e Shizuku. Responda a três perguntas na [Central de ajuda](/guide/#modes) para encontrar o modo certo para você.

### Congelar apaga os dados do app?

Não. Congelar só impede o app de ser executado por um tempo. Todos os dados dele são mantidos, e você pode continuar usando o app depois de descongelá-lo.
