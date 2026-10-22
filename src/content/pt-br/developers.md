---
title: SDK do Ice Box para desenvolvedores
short: Desenvolvedores
description: O SDK do Ice Box permite que outros apps congelem e descongelem apps, e instalem ou desinstalem APKs silenciosamente, em telefones com o Ice Box. Configuração, permissões e as principais APIs.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

Em dispositivos com o Ice Box instalado e ativado, o SDK do Ice Box permite que apps de terceiros congelem e descongelem apps. No modo Device Owner, ele também pode instalar e desinstalar APKs silenciosamente.

Código-fonte e documentação completa: [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Requisitos {#requirements}

- Congelar e descongelar: Ice Box 3.6.0 ou superior.
- Instalação e desinstalação silenciosas: Ice Box 3.9.5 ou superior, com o Ice Box rodando no modo Device Owner.

## Permissão {#permission}

As APIs de ação, como congelar, descongelar e instalar APKs, exigem que você peça antes ao usuário a permissão do SDK do Ice Box. As APIs de consulta não precisam de nenhuma permissão.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## Principais APIs {#api}

### Consultar o modo de operação

O Ice Box pode congelar apps de uma de duas formas, `pm disable-user` ou `pm hide`. Não precisa de permissão.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Consultar o estado de congelamento de um app

Retorna normal, congelado com `pm disable`, congelado com `pm hide` ou os dois. Não precisa de permissão.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Congelar ou descongelar apps

Exige permissão. Aceita operações em lote.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Instalação e desinstalação silenciosas

Disponível quando o Ice Box está rodando no modo Device Owner. Você pode verificar antes se o recurso está disponível no momento:

```java
IceBox.querySupportSilentInstall(context);
```

Para os parâmetros completos e os valores de retorno de cada API, vale a [documentação no GitHub](https://github.com/heruoxin/IceBox-SDK).

## Transparência e autorização {#transparency}

Cada ação de congelar, instalar e desinstalar que um app de terceiros faz pelo Ice Box fica registrada na central de registros do Ice Box, onde o usuário pode conferir a qualquer momento.

## Outras integrações {#integrations}

- **Configurar em outros apps**: o Ice Box é compatível com `android.intent.action.SHOW_APP_INFO` do Android, então funciona junto com apps como o Greenify e o AppOps.
- **Island**: o Ice Box pode funcionar com as permissões do Island e também pode ser instalado e usado dentro do perfil de trabalho do Island.
