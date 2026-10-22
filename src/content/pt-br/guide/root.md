---
title: Modo root
short: Modo root
description: Modo root: em um telefone com root, abra o Ice Box e conceda o acesso root. Veja como trocar o mecanismo root, resolver falhas na permissão root e mudar para outro modo de operação.
section: guide
group: activate
order: 9
faq: true
related: guide/shizuku, guide/other-modes, faq
---

Se o seu telefone tem root, basta abrir o Ice Box e permitir o acesso quando o gerenciador de root (como o Magisk) mostrar o pedido de permissão. Não é preciso configurar mais nada.

O modo root continua funcionando depois de reiniciar o telefone e não precisa de computador.

## Mecanismos root {#engines}

O Ice Box oferece vários mecanismos root, entre eles "Root (mais rápido)" e "Root clássico". Você pode trocar de mecanismo em "Escolher mecanismo root", no "Laboratório". Se o mecanismo atual não funcionar bem no seu telefone, experimente outro.

Antes de trocar de mecanismo, verifique se todos os apps foram descongelados.

## Perguntas frequentes {#faq}

### Aparece "Falha ao obter a permissão root"

Abra o gerenciador de root, apague o registro de autorização do Ice Box e conceda o acesso root ao Ice Box de novo.

### Como mudar do modo root para outro modo de operação

Você pode mudar em "Mudar o modo de operação", nas configurações do Ice Box. Descongele todos os apps antes de mudar. Os modos de operação não são compatíveis entre si, então os apps precisam ser descongelados no mesmo modo em que foram congelados.

### Onde foi parar o antigo "Plugin do sistema"?

Para cumprir as exigências do Google Play, o modo Plugin do sistema foi removido na versão 3.22.0. Em telefones com root, use diretamente o modo root.
