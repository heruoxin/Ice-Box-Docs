---
title: Configurar o modo Device Owner
short: Modo Device Owner
description: Configure o modo Device Owner do Ice Box sem root: remova suas contas por um momento e execute um comando ADB em um computador. Ele continua funcionando após reinicializações e atualizações do sistema.
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

Se o seu telefone tem root, basta abrir o Ice Box e começar a usar. Não é preciso nenhuma configuração extra. Se o seu telefone não pode ter root e você quer algo que se configura uma vez e continua funcionando, escolha o modo Device Owner. A configuração exige um computador, então leia esta página inteira antes.

## O que é o Device Owner? {#what}

O Device Owner (proprietário do dispositivo) é um recurso do framework de gerenciamento empresarial do Android. Ele consegue congelar e descongelar qualquer app sem root. O Ice Box só usa as capacidades relacionadas, como congelar apps.

- Um telefone só pode ter um Device Owner de cada vez.
- Ele só pode ser definido com um comando ADB ou com um QR code. Ativar o Ice Box em "Apps de administrador do dispositivo" nas configurações do telefone não funciona e não dá essa permissão.
- Depois de definido, não é preciso configurar de novo após reiniciar ou atualizar o sistema.

## Leia isto antes {#before}

Os sistemas das marcas chinesas de telefone costumam acrescentar recursos próprios, e isso causa alguns problemas de compatibilidade com o modo Device Owner. Os mais comuns são:

- Telefones Samsung podem ser bloqueados com senha pelo sistema. Leia sem falta os [avisos para Samsung](/guide/samsung-device-owner/) antes.
- Um aviso de desinstalação aparece toda vez que você congela um app, e um pedido de permissão aparece quando você o descongela (Huawei, Smartisan).
- A barra de notificações pisca com "Administrador do dispositivo ativado, toque para desativar" (OPPO, vivo).
- O recurso integrado de apps duplicados do sistema para de funcionar (Huawei, MIUI).
- Às vezes, um app que você acabou de descongelar não consegue se conectar à internet. Feche o app e abra de novo (OnePlus, Smartisan e outros).

Se você não aceita esses problemas, considere o [modo ADB](/guide/adb/) ou o [modo Depuração por Wi-Fi](/guide/wireless-debugging/). Eles também não precisam de root, mas é preciso ativá-los de novo sempre que o telefone reinicia.

## Ativador ou linha de comando? {#tools}

Se você não conhece o ADB e a linha de comando, use uma das ferramentas de ativação. O resultado é exatamente o mesmo da linha de comando:

- [Ativador com um clique](/guide/activator/): para computadores com Windows.
- [Ativador web](/guide/web-activator/): funciona no Windows, macOS e Linux. Recomendamos o Chrome.
- [AutumnBox (秋之盒)](/guide/autumnbox/): para computadores com Windows.

Não tem computador? Experimente a [configuração por QR code](/guide/qr-code/). O resultado é exatamente o mesmo, mas exige restaurar a configuração de fábrica antes, e alguns sistemas de marcas chinesas de telefone não têm suporte a ela.

## Configurar pela linha de comando {#steps}

1. Verifique se o seu telefone tem Android 7.0 ou superior e a versão mais recente do Ice Box instalada. Confirme que você sabe usar comandos [ADB](https://developer.android.com/tools/adb) e leu esta página inteira.
2. Em telefones Sony, retire o chip (cartão SIM). Em telefones Xiaomi, ative "Depuração USB (configurações de segurança)" nas Opções do desenvolvedor e desative a "Otimização MIUI".
3. Vá em "Configurações > Contas" no telefone e remova todas as contas, incluindo as contas do sistema, como as contas Google, Xiaomi e Huawei. Você pode entrar de novo depois da configuração.
4. Se você configurou vários usuários, modo visitante ou apps duplicados, desative ou remova também. Você pode ativá-los de novo depois da configuração.
5. Execute o comando abaixo no computador (um emulador de terminal no telefone não funciona).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

Se aparecer algo como "Success", a configuração funcionou. Abra o Ice Box e comece a usar. Você também pode adicionar de volta as contas que removeu.

O ADB pode ser baixado oficialmente do Google: [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## A configuração não funcionou? {#faq}

### Aparece "'adb' não é reconhecido como um comando interno ou externo, um programa operável ou um arquivo em lotes"

Talvez você não esteja acostumado a usar a linha de comando no computador. Sugerimos ativar com o [ativador com um clique](/guide/activator/) ou o [ativador web](/guide/web-activator/).

### O ativador fica travado carregando

Extraia todos os arquivos do pacote do ativador para o computador antes de executá-lo. Não extraia para o armazenamento do telefone e não clique duas vezes no exe de dentro do arquivo compactado.

### Aparece "error: no devices/emulators found"

O telefone não está conectado ao computador. Verifique se a Depuração USB está ativada, se o driver do telefone está instalado corretamente no computador e se nenhuma suíte de PC, gerenciador de telefone ou antivírus está bloqueando a conexão.

### Aparece "Not allowed to ... already several accounts on the device"

Nem todas as contas foram removidas no passo 3. Saia de todas as contas do telefone, incluindo a conta Google e as contas integradas do sistema, como as contas Xiaomi e Huawei. Em telefones Sony, retire o chip (cartão SIM) e reinicie.

### Aparece "Not allowed to ... already several users on the device"

Os vários usuários ou apps duplicados do passo 4 não foram todos removidos. Remova ou desative todos os usuários extras, o modo visitante e os apps duplicados.

### Aparece "Trying to set the device owner, but device owner is already set."

Outro app do telefone já está definido como Device Owner, e um telefone só pode ter um Device Owner. Se esse app funciona com o Ice Box, como o Island ou o BlackHouse (小黑屋), mude o Ice Box para o modo de operação correspondente e você pode usá-lo na hora. Veja [outros modos de operação](/guide/other-modes/).

### Telefones Xiaomi mostram "Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS"

Nas Opções do desenvolvedor, nas configurações do sistema, ative manualmente "Depuração USB (configurações de segurança)". Se ainda falhar, desative a "Otimização MIUI" e tente de novo.

## Dúvidas depois de configurar com sucesso {#faq-after}

### É normal ver um aviso como "Este dispositivo é gerenciado pela sua organização" na barra de notificações?

Sim. É assim que o modo Device Owner funciona. O texto é mostrado pelo sistema e não pode ser removido, mas você pode trocar o "Nome da organização" no "Laboratório" do Ice Box por qualquer texto que quiser.

### As configurações de alguns telefones dizem que o Device Owner pode ler informações pessoais, como agenda e e-mail. O Ice Box lê essas informações?

Não. O Ice Box só usa as permissões de Device Owner relacionadas a congelar apps. Ele não usa permissões não relacionadas e nunca lê sua agenda, seus e-mails ou informações parecidas.

### Como removo a permissão do Ice Box quando não quiser mais usá-lo?

Descongele todos os apps primeiro e depois toque em "Desinstalar" nas configurações do Ice Box. Depois que você confirmar, o Ice Box remove a autorização de Device Owner e se desinstala. Veja [Desinstalar o Ice Box](/guide/uninstall/).

### Por que não consigo descongelar apps que congelei antes no modo root ou ADB?

Os modos de operação não são compatíveis entre si. Volte ao modo de operação anterior no "Laboratório" do Ice Box. Os apps precisam ser descongelados no mesmo modo em que foram congelados.
