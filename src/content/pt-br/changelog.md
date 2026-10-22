---
title: Histórico de versões do Ice Box
short: Histórico de versões
description: O que mudou em cada versão do Ice Box, da 3.4.0 até a mais recente, incluindo novos recursos, melhorias de compatibilidade e correções de bugs.
section: product
toc: false
priority: 0.5
related: download, features
---

Você encontra o número da sua versão atual e o canal em "Configurações > Sobre", no Ice Box. Para detalhes sobre cada canal de distribuição e para baixar o APK mais recente, veja a [página de download](/download/#channels).

## 3.30.11 {#v3-30-11}

- Corrigidos problemas de layout em dispositivos dobráveis
- Suporte à permissão da Xiaomi para ler a lista de apps
- A Depuração por Wi-Fi não exige mais desligar a VPN a partir do segundo pareamento

## 3.30.10 {#v3-30-10}

- Suporte a páginas de memória de 16 KB
- Mudanças para atender aos requisitos de revisão da loja de apps da Xiaomi

## 3.30.9 {#v3-30-9}

- Melhoria: depois do primeiro pareamento bem-sucedido, a "Depuração USB" não precisa mais ficar ativada
- Melhor compatibilidade do serviço em segundo plano

## 3.30.8 {#v3-30-8}

- Adicionado um vídeo tutorial às instruções para iniciar a Depuração por Wi-Fi
- Corrigida a janela de permissão "O Ice Box está pedindo para iniciar xxx" que aparecia com frequência em alguns dispositivos

## 3.30.7 {#v3-30-7}

- Agora é possível congelar mais componentes do sistema no MIUI e no HyperOS
- SDK de destino atualizado para 35

## 3.25.0 {#v3-25-0}

- Adicionadas orientações para ativar o Shizuku sem fio
- Shizuku atualizado, com suporte ao Sui
- Suporte a ícone monocromático
- Interface com cores dinâmicas a partir do Android S, com um novo efeito de fundo desfocado
- O modo claro/escuro pode seguir o sistema
- A versão para a China aceita WeChat Pay
- Corrigidos alguns layouts desalinhados
- Removido o Plugin do sistema para atender aos requisitos do Google Play

## 3.22.0 {#v3-22-0}

- Por exigência da equipe do Google Play Protect, o modo "Plugin do sistema" foi removido. Se você precisar dele, procure na internet uma versão antiga e instale-a
- Novo: o tema claro/escuro pode mudar automaticamente junto com o sistema

## 3.21.0 {#v3-21-0}

- Corrigidos alguns recursos no modo Shizuku
- SDK atualizado conforme exigência do Alipay
- Outras correções

## 3.20.0 {#v3-20-0}

- Corrigida a falha na ativação de alguns números de pedido incomuns
- Tentativa de correção (ainda em testes) para os apps duplicados integrados que não funcionavam no MIUI e em algumas outras ROMs depois de definir o Ice Box como Device Owner
- O Bloqueio por PIN agora aceita reconhecimento facial

## 3.19.0 {#v3-19-0}

- Nova opção: centralizar o botão de congelar
- O Fabric, que está sendo encerrado, foi substituído pelo Microsoft App Center
- Algumas correções

## 3.18.5 {#v3-18-5}

- Corrigidos ícones que às vezes eram redimensionados de forma errada
- Corrigidas animações desalinhadas em algumas telas

## 3.18.2 {#v3-18-2}

- Corrigidos problemas de exibição com a navegação por gestos em alguns sistemas

## 3.18.0 {#v3-18-0}

- Nova opção: adicionar um atalho automaticamente quando um app é adicionado à lista de congelamento.
- Nova opção: escolher se o botão de congelar é deslizado para a esquerda ou para a direita.

## 3.17.5 {#v3-17-5}

- Corrigida a compatibilidade com o Android Q Beta 6.
- Atualizados os servidores usados na China continental, para mais estabilidade. Usuários na China devem atualizar; usuários fora da China não são afetados.
- Outras correções de bugs e melhorias de desempenho.

## 3.17.0 {#v3-17-0}

- Novo app complementar: IceBridge.
- Mudou o layout da tela do Bloqueio por impressão digital, para que o botão do PIN fique ao alcance em dispositivos com leitor de impressão digital na tela.

## 3.16.5 {#v3-16-5}

- Suporte a um novo app complementar: 划卡冻结 (deslizar para congelar, só com root)
- Correções de bugs e melhorias de desempenho

## 3.16.0 {#v3-16-0}

- Adicionada uma página que apresenta os apps complementares

## 3.15.8 {#v3-15-8}

- Corrigidos alguns problemas que podiam gastar bateria em segundo plano
- Tutoriais e documentos de ajuda agora usam links hospedados na China, para um acesso mais rápido

## 3.15.3 {#v3-15-3}

- O modo root e o modo ADB simples agora mostram os clones de apps criados pelo recurso de apps duplicados do sistema
- Corrigido um conflito com os gestos do Android Q Beta 3

## 3.14.2 {#v3-14-2}

- Adicionado um SDK de uso geral: [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager)
- Suporte experimental a WeChat Pay e QQ Pay (transferência manual). Veja [WeChat Pay](/purchase/wechat-pay/)

## 3.14.0 {#v3-14-0}

- Novo modo "ADB simples" para dispositivos sem root em que configurar o Device Owner não é prático. Este modo precisa ser ativado de novo após cada reinicialização
- Atualizado para a API v3 do Shizuku
- Corrigida a falha ao abrir o app com toque duplo no atalho no Android Q
- Outras correções

## 3.13.0 {#v3-13-0}

- Correções básicas de compatibilidade com o Android Q
- Todos os recursos agora funcionam dentro do perfil de trabalho do Island
- Suporte ao 权限猫
- Se as opções de Congelamento automático não funcionarem direito, adicione manualmente o Ice Box à lista de exceções de bateria nas configurações do sistema. Se você não precisa do Congelamento automático, desative a opção e o Ice Box não vai rodar em segundo plano

## 3.12.2 {#v3-12-2}

- Agora os ícones podem ser ordenados
- Adicionar atalhos em lote agora está disponível no Android 8.0+ (por limitações do sistema, não há garantia de que a adição em lote funcione)

## 3.12.0 {#v3-12-0}

- Reescrito o layout de algumas páginas
- Reescrito o recurso "Sugerir adicionar ao Ice Box"
- Compatível com a adição de atalhos por apps de terceiros, como o Fluid NG
- Por limitações do sistema da Huawei, usuários Huawei com uma tela inicial de terceiros não conseguem adicionar atalhos de dentro do Ice Box. Tente manter pressionada uma área vazia da tela inicial para adicioná-los

## 3.11.1 {#v3-11-1}

- Correções de bugs
- Ajustes no layout e nos elementos da interface.

## 3.10.0 {#v3-10-0}

- Corrigido o travamento da lista de apps no Android 9 causado por um conflito com o Nevolution.
- Redesenhado o guia de ativação da primeira abertura, com um link para o ativador com um clique.

## 3.9.9 {#v3-9-9}

- Se o Ice Box foi configurado sem root com um QR code, você pode ativar os apps pré-instalados em "Configurações do Ice Box > Laboratório > Ativar apps do sistema pré-instalados". Os apps que não forem ativados continuam desinstalados.
- Outras correções de bugs.

## 3.9.8 {#v3-9-8}

- Corrigidos alguns travamentos ao editar a lista
- No modo sem root, o nome da organização mostrado na tela de bloqueio agora pode ser personalizado (o sistema exige esse texto, então ele não pode ser removido)

## 3.9.6 {#v3-9-6}

- Os botões de filtro e de menu da tela de edição da lista foram unidos
- Adicionado o modo Root (mais rápido)

## 3.9.5.1 {#v3-9-5-1}

- O status de congelamento rápido na barra de notificações agora acompanha o status do Congelamento automático
- Corrigido o problema de alguns usuários sem root não conseguirem se conectar ao servidor de compras

## 3.9.5 {#v3-9-5}

- O SDK agora permite instalar e desinstalar apps. Desenvolvedores são bem-vindos para integrá-lo: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)
- Adicionada uma central de registros ao SDK. Cada ação de congelar, instalar e desinstalar feita por apps de terceiros fica registrada
- Se o BlackHouse (小黑屋) já estiver definido como Device Owner, o Ice Box pode ser usado diretamente
- Nova opção só por diversão: efeito sonoro de espada sendo desembainhada

## 3.9.3 {#v3-9-3}

- Target atualizado para 28
- Melhorado o mecanismo Root (modo rápido) para que funcione direito no Android P
- Corrigidos apps removidos da lista que às vezes continuavam congelados

## 3.9.2 {#v3-9-2}

- API de destino atualizada para 26. O Android exige que apps rodando em segundo plano mostrem uma notificação, então, quando recursos que rodam em segundo plano, como o "Congelamento automático", estão ativados, o Ice Box precisa mostrar uma notificação na barra de notificações. Você pode encontrar e desativar essa notificação do Ice Box nas configurações do sistema sem afetar nenhum recurso

- Corrigida a falha ocasional ao abrir o modo sem root na beta anterior
- Corrigidos apps que às vezes não apareciam na lista ao abrir
- Mudança para um novo banco de dados
- Atualizada a API do Island
- Outras atualizações e correções de bugs

## 3.9.0 {#v3-9-0}

- Novo: compartilhe listas de apps do sistema que podem ser congelados com segurança:
As ROMs de alguns telefones vêm com muito bloatware e anúncios integrados, e muitos usuários os limpam congelando um por um.
Se você é bom nisso, pode compartilhar sua lista de apps integrados congelados com outras pessoas, ou guardá-la para a próxima vez que instalar outra ROM.
(A criação de listas só está aberta a alguns usuários ativos)

- Novo reconhecimento de QR code:
Ao ativar o Ice Box de novo, você não precisa mais digitar o número do pedido, que é longo. Faça uma captura de tela da página da fatura do Alipay, compartilhe-a e escolha "Leitor de código de barras (Ice Box)" para reconhecer e ativar.

- Não há mais limite para o número de abas

## 3.8.6 {#v3-8-6}

- Os atalhos agora aparecem um pouco mais vezes na tela inicial do Android P
- Adicionada no laboratório uma opção que abre o [módulo Xposed 1ceboxTurner](https://repo.xposed.info/module/gs.https.icebox.tuner) (contribuição de @web1n)
- Outras correções de bugs

## 3.8.1 {#v3-8-1}

- Adicionado o suporte a "Configurar em outros apps" (android.intent.action.SHOW_APP_INFO), que funciona com apps como o Greenify e o AppOps.
- Outras pequenas correções.

## 3.7.6 {#v3-7-6}

- Suporte ao Magisk 16.3.
- Corrigida a ação de bloquear a tela, que não funcionava nos modos Shizuku Manager e Brevent.
- Outras pequenas correções.

## 3.7.0 {#v3-7-0}

- Apps sem ícone podem ser adicionados ao Ice Box de novo.
- Corrigido o toque longo que às vezes selecionava o app errado.
- Atualizado o SDK do Brevent.
- Outras correções de bugs.

(Notas das versões beta omitidas)

## 3.6.1 {#v3-6-1}

- O painel de temas agora aceita transparência.
- Adicionado um atalho "Descongelar tudo".
- O conteúdo do Ice Box fica oculto na tela de apps recentes quando o Bloqueio por impressão digital está ativado.
- Novo SDK. Outros apps de congelamento são bem-vindos para integrá-lo: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 3.5.2 Beta {#v3-5-2}

- Adicionadas algumas opções ao laboratório:
- Se você trocou o pacote de ícones, toque em "Limpar cache de ícones"
- Se os tamanhos dos ícones estiverem diferentes, limpe o cache e depois avalie desativar "Padronizar tamanho dos ícones"
- Use "Manter em segundo plano ao tocar em Voltar" para decidir se o Ice Box fica em cache em segundo plano
- Você pode alternar entre vários mecanismos no laboratório. Antes de cada troca, verifique se todos os apps foram descongelados
- Adicionados mais filtros e opções de ordenação ao editor da lista de apps

## 3.5.1 {#v3-5-1}

- Corrigida a compatibilidade com o Android P.
- Correções de bugs e melhorias de desempenho.

## 3.4.0 {#v3-4-0}

- Adicionados o Brevent e o Shizuku Manager como mecanismos. Use este modo se você não tem root e configurar o Island ou o modo Device Owner não for prático.
