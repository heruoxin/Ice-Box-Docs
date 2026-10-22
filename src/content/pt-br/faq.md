---
title: Perguntas frequentes do Ice Box
short: Perguntas frequentes
description: Perguntas frequentes do Ice Box: acesso root, o aviso do Device Owner, desinstalação, notificações push, atalhos, Congelamento automático, atualização de apps congelados e troca de modo de operação.
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

Para dúvidas sobre compra e pagamento, veja o [guia de compra](/purchase/). Para dicas sobre marcas específicas de telefone, veja as [observações por marca de telefone](/guide/devices/).

## O básico {#basics}

### O que significa congelar um app? {#what-is-freeze}

Um app congelado fica desativado ou oculto pelo sistema. Ele não pode ser executado, não consegue iniciar sozinho em segundo plano e não aparece na tela inicial nem na gaveta de apps, mas o app e os dados dele continuam lá. Assim que você o descongela no Ice Box, o app volta ao normal.

### Qual a diferença entre congelar e desinstalar? {#freeze-vs-uninstall}

Desinstalar apaga o app e os dados dele. Congelar só impede o app de ser executado por um tempo: os dados dele não são afetados, e você pode continuar usando o app depois de descongelá-lo. Para apps do sistema pré-instalados que não podem ser desinstalados, congelar também é uma forma de desativá-los.

### Como coloco um app congelado de volta na tela inicial? {#add-to-home}

No Ice Box, mantenha pressionado o ícone do app e escolha "Adicionar à tela inicial". Quando você toca nesse atalho, o Ice Box primeiro descongela o app e depois o abre. Veja [Atalhos na tela inicial](/guide/shortcuts/).

### Como atualizo um app congelado? {#update-frozen}

Se você usa o CoolApk (酷安), uma loja de apps Android chinesa, ative "Mostrar apps ocultos" (显示隐藏应用) na seção de laboratório das configurações do CoolApk. Se você usa outra loja de apps, toque primeiro em "Descongelar tudo" nas configurações do Ice Box e congele os apps de novo depois da atualização.

### Não consigo descongelar apps depois de mudar de modo de operação? {#mode-switch}

Os modos de operação não são compatíveis entre si. Volte o Ice Box ao modo de operação que você usava antes: um app precisa ser descongelado no mesmo modo em que foi congelado.

## Root {#root}

### O modo root diz "Falha ao obter a permissão root" {#root-failed}

Abra o gerenciador de root (como o Magisk), apague o registro de autorização existente do Ice Box e conceda o acesso root de novo.

### Onde foi parar o Plugin do sistema? {#system-plugin}

Por exigência do Google Play, o modo Plugin do sistema foi removido na versão 3.22.0. Se o Plugin do sistema ainda estiver instalado, apague `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk` com um gerenciador de arquivos que tenha acesso root e depois reinicie para concluir a desinstalação.

## Modo Device Owner {#device-owner}

### A barra de notificações diz "Este dispositivo é gerenciado pela sua organização". Isso é normal? {#managed-notice}

Sim. É exatamente assim que o modo Device Owner do Ice Box funciona. Configurar o Device Owner é hoje a única forma permanente de congelar apps sem root. O sistema mostra esse texto e ele não pode ser removido, mas você pode trocar o "Nome da organização" por qualquer texto no "Laboratório" do Ice Box.

### As configurações do telefone dizem que o Device Owner pode ler minha agenda, meus e-mails e outras informações pessoais. O Ice Box lê essas informações? {#dpm-privacy}

Não. O Ice Box é atualizado continuamente desde 2015 e só usa os recursos de Device Owner de que precisa, como congelar apps. Ele não usa nenhum recurso não relacionado, então você pode usá-lo com tranquilidade.

### Depois de configurar o Device Owner, os apps duplicados e a Pasta Segura do sistema pararam de funcionar? {#dual-apps}

É uma limitação do próprio sistema de alguns telefones (como Samsung e Xiaomi). Quando um Device Owner é definido, o sistema desativa alguns recursos automaticamente, e o Ice Box não consegue resolver isso. Se você precisa mesmo de apps duplicados, pode considerar:

- Definir o Island como Device Owner e usar o recurso de apps duplicados que ele oferece. O Ice Box pode então funcionar pelo [modo Island](/guide/other-modes/#island).
- Usar um modo de operação que não seja o Device Owner. Nenhum dos outros modos afeta os apps duplicados.

### As permissões do app são redefinidas toda vez que descongelo um app? {#permissions-reset}

É um problema do sistema. O AppOps, da Rikka ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)), pode reaplicar automaticamente suas regras de permissão quando um app é descongelado.

### Em telefones Huawei e Xiaomi, os apps pedem permissões de novo toda vez que abrem, e ao congelar aparece que o app foi desinstalado? {#reinstall-prompt}

Em telefones Xiaomi, desative a "Otimização MIUI". Ainda não encontramos uma opção equivalente em outros telefones.

### Um app recém-descongelado às vezes não consegue se conectar à rede? {#no-network}

O sistema de alguns modelos (como OnePlus e Huawei) às vezes tem esse problema. Verifique se o seu sistema está atualizado para a versão mais recente. Congelar e descongelar o app mais uma vez normalmente resolve.

### Como desinstalo o Ice Box? {#uninstall}

Toque em "Desinstalar" nas configurações do Ice Box. Antes de desinstalar, confira bem se todos os apps foram descongelados. Usuários Xiaomi, atenção: **não desinstalem o Ice Box direto pela tela inicial. Isso faz perder a permissão de administrador, e os apps congelados nunca mais poderão ser descongelados.** Veja [Desinstalar o Ice Box](/guide/uninstall/).

## Notificações e segundo plano {#background}

### Apps congelados continuam recebendo notificações push? {#push}

Em telefones como OPPO, vivo e OnePlus, alguns apps usam o serviço de push do sistema. Depois de congelados, o sistema ainda mostra notificações em nome deles, mas o app em si não roda em segundo plano. Se não quiser essas notificações, desative as notificações desse app nas configurações do sistema.

### Quero que os apps congelados continuem recebendo notificações {#keep-push}

Você pode avaliar a instalação do [MiPushFramework](https://github.com/MiPushFramework/MiPushFramework).

### Por que o Ice Box mostra uma notificação? {#ongoing-notification}

O Android exige que todo app que roda em segundo plano mostre uma notificação. Quando você ativa recursos que precisam rodar em segundo plano, como o "Congelamento automático", o Ice Box mostra uma notificação na barra de notificações. Você pode desativar essa notificação nas configurações do sistema sem afetar nenhum recurso. Com o Congelamento automático desativado, o Ice Box não roda em segundo plano.

### Os apps não são congelados depois que a tela desliga? {#auto-freeze-fail}

Veja se algum gerenciador do telefone ou ferramenta que bloqueia apps está impedindo o Ice Box de rodar em segundo plano. Nas configurações do sistema, dê ao Ice Box permissões como "Executar em segundo plano" e "Ativar o dispositivo", e defina o uso da bateria dele como "Não otimizar". Em telefones Huawei, a opção "Ao desligar a tela" de "Congelar automaticamente" pode não funcionar por limitações do sistema, então escolha outra opção. Veja [Congelamento automático](/guide/auto-freeze/).

## Atalhos {#shortcuts}

### Não consigo adicionar atalhos na tela inicial em telefones Xiaomi, Huawei, Smartisan ou outros? {#shortcut-missing}

Na Xiaomi, Huawei e telefones parecidos, ative manualmente a permissão de adicionar atalhos na tela inicial para o Ice Box nas configurações do sistema. Os telefones Smartisan não aceitam atalhos de nenhum app.

### Os atalhos foram adicionados em um telefone Xiaomi ou Meizu, mas não funcionam? {#shortcut-broken}

Em telefones Xiaomi, permita nas configurações do sistema que o Ice Box "inicie outros apps" e "mostre janelas pop-up durante a execução em segundo plano". Ainda não encontramos uma opção equivalente no sistema dos telefones Meizu.

### Como removo o selo do Ice Box dos atalhos? {#shortcut-badge}

No Android 7.0 e superior, o sistema adiciona o selo aos atalhos, e ele não pode ser alterado nem removido.

## Outras dúvidas {#other}

### Alguns apps do sistema, como o Xiaomi Music, a loja de apps ou a tela inicial da Huawei, não podem ser congelados ou são descongelados sozinhos depois de reiniciar? {#system-unfreeze}

O MIUI e alguns outros sistemas descongelam automaticamente os apps essenciais do sistema. Nas versões mais recentes do EMUI, a tela inicial da Huawei não pode mais ser congelada. Ela pode ser congelada nas versões anteriores ao EMUI 9.0.

### Em telefones OPPO e vivo, a lista de apps mostra só alguns apps? {#app-list}

Nas configurações de permissão do sistema, permita que o Ice Box leia a lista de apps.

### Depois de descongelar um app em um telefone Smartisan, todas as permissões dele ficam liberadas por padrão? {#smartisan-permissions}

É assim que o sistema da Smartisan foi projetado. Não tem relação com o Ice Box.

### O Ice Box funciona em tablets? {#tablet}

Sim. O Ice Box tem layouts separados para tablets e para o modo paisagem.

### O Ice Box lê minha área de transferência? {#clipboard}

Só uma vez, quando você toca em "Importar da área de transferência" nas configurações, para procurar um link de tema ou de lista de congelamento.

### Ainda tem dúvidas? {#contact}

Envie um e-mail pela opção "Feedback" do app Ice Box. Se puder, informe o modelo do telefone, a versão do sistema e uma captura de tela do problema.
