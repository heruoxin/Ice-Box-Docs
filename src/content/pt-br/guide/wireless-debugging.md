---
title: Modo Depuração por Wi-Fi: ative o Ice Box sem root e sem computador
short: Modo Depuração por Wi-Fi
description: No Android 11 e superior, ative o Ice Box com o recurso Depuração por Wi-Fi do sistema, sem root e sem computador. Passos completos, dicas de pareamento e perguntas frequentes.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

O modo Depuração por Wi-Fi não precisa de root nem de computador. O Ice Box usa o recurso "Depuração por Wi-Fi" do sistema para obter a permissão de que precisa para congelar apps, e tudo é feito no próprio telefone.

Antes de começar, saiba que:

- É preciso ter Android 11 ou superior.
- Você precisa de uma conexão Wi-Fi durante o pareamento. Qualquer rede Wi-Fi serve.
- Depois que o telefone reinicia, é preciso ativar de novo a chave "Depuração por Wi-Fi". Caso contrário, o Ice Box não consegue congelar nem descongelar apps.

Se o seu telefone tem uma versão anterior ao Android 11, ou se você prefere ativar com um computador, veja o [modo ADB](/guide/adb/).

## Antes de começar {#before}

O Ice Box verifica cada um dos itens abaixo na página de configuração. Toque em qualquer item que ainda não esteja pronto para ir direto à configuração certa:

1. **Desligue a VPN por enquanto**. Você pode ligá-la de novo depois do pareamento.
2. **Permita as notificações do Ice Box**. O código de pareamento é digitado na notificação do Ice Box.
3. **Ative a Depuração USB**. Se você ainda não ativou as Opções do desenvolvedor, veja a próxima seção.
4. **Conecte-se ao Wi-Fi**. Qualquer rede Wi-Fi serve.
5. **Permita que o Ice Box rode em segundo plano**. Em alguns telefones, é preciso definir o uso em segundo plano do Ice Box como "Sem restrições" nas configurações do sistema.

## Como ativar a Depuração USB {#usb-debugging}

1. Abra "Configurações", encontre "Sobre o telefone" e toque 7 vezes seguidas em "Número da versão" até aparecer uma mensagem como "Você agora é um desenvolvedor" ou "Modo de desenvolvedor ativado".
2. Volte a "Configurações", encontre "Opções do desenvolvedor" em "Sistema" ou em "Configurações adicionais" e ative a chave "Depuração USB".

A posição dos menus varia conforme a marca e a versão do sistema. O Ice Box inclui ilustrações passo a passo para as marcas mais comuns, que você pode seguir.

## Obtenha o código de pareamento em três passos {#pairing}

1. Nas Opções do desenvolvedor, encontre "Depuração por Wi-Fi", ative e toque nela para abrir a página de configurações.
2. Escolha "Parear o dispositivo com um código de pareamento".
3. Deixe a janela com o código de pareamento aberta, deslize a barra de notificações para baixo e digite o código de pareamento de seis dígitos na notificação do Ice Box.

Quando o pareamento der certo, o Ice Box mostra "Depuração por Wi-Fi ativada" e já pode ser usado. O Ice Box também tem um vídeo tutorial que você pode abrir se tiver dificuldade para parear.

> [!TIP]
> Se você não encontra "Depuração por Wi-Fi" nas Opções do desenvolvedor, provavelmente as Opções do desenvolvedor ainda não estão ativadas. Conclua primeiro os passos da seção anterior.

## Depois de reiniciar o telefone {#after-reboot}

Quando o telefone reinicia, o sistema retira a permissão do Ice Box. Volte às Opções do desenvolvedor e ative a chave "Depuração por Wi-Fi", e o Ice Box volta a funcionar. O Ice Box avisa com uma notificação para você ativá-la.

## Perguntas frequentes {#faq}

### Aparece "Desative a VPN e a otimização de bateria" ao parear

O Ice Box não consegue se conectar ao serviço de depuração por Wi-Fi do sistema. Desligue a VPN e qualquer app de proxy, desative a otimização de bateria do Ice Box nas configurações do sistema e tente de novo.

### Aparece "Código de pareamento incorreto" ou "Código expirado"

O código de pareamento só funciona enquanto a janela dele está aberta. Gere um novo código de pareamento e digite-o rápido, com a janela ainda aberta.

### Não vejo o campo para digitar na notificação

Verifique se as notificações do Ice Box estão permitidas. Alguns sistemas recolhem a notificação. Toque no botão de expandir, do lado direito da notificação, para ver o campo.

### Xiaomi, Huawei, OPPO ou outros telefones dizem que a permissão ADB é insuficiente

Ative nas Opções do desenvolvedor a opção correspondente à sua marca. Em telefones Xiaomi, ative "Depuração USB (configurações de segurança)". Em telefones Huawei, ative "Permitir depuração ADB no modo somente carregamento". Em telefones OPPO e OnePlus, ative "Desativar monitoramento de permissões". Em outras marcas, ative opções parecidas conforme necessário. Para saber mais, veja as [observações por marca de telefone](/guide/devices/).
