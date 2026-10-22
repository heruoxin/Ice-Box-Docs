export default {
  meta: {
    siteName: 'Ice Box',
    brandHtml: 'Ice Box',
    titleSep: ' | ',
    homeTitle: 'Ice Box: congele os apps Android que você quase não usa, com ou sem root',
    homeDescription: 'O Ice Box é um congelador de apps para Android. Apps congelados não podem rodar em segundo plano e somem da tela inicial até você descongelá-los com um toque. Funciona com root, Device Owner, Depuração por Wi-Fi, Shizuku e mais.',
    appDescription: 'O Ice Box é um congelador de apps para Android. Apps congelados não podem rodar em segundo plano e ficam ocultos na tela inicial até você descongelá-los. Funciona com root e com vários modos sem root.',
    featureList: ['Congele e descongele apps com um toque', 'Congelamento automático ao desligar a tela', 'Atalhos na tela inicial que descongelam e abrem apps', 'Várias abas', 'Temas e pacotes de ícones', 'Bloqueio por impressão digital e por PIN', 'Congele apps do sistema pré-instalados', 'Modos de operação com e sem root', 'SDK aberto'],
    ogAlt: 'Ice Box: guarde no gelo os apps que você quase não usa',
  },
  nav: {
    main: 'Navegação principal',
    home: 'Início',
    download: 'Baixar',
    language: 'Escolher idioma',
    skip: 'Pular para o conteúdo',
    breadcrumb: 'Trilha de navegação',
  },
  pages: { home: 'Início' },
  common: {
    stillStuckPre: 'Ainda com problemas? Veja as ',
    stillStuckPost: ' ou envie um e-mail pela opção Feedback do Ice Box.',
    viewGuide: 'Ver o guia',
    copy: 'Copiar',
    copied: 'Copiado',
    copyLink: 'Copiar link',
    updated: 'Atualizado em {date}',
    onThisPage: 'Nesta página',
    related: 'Artigos relacionados',
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "Links do site"
  },
  home: {
    "title": [
      "Congele os apps",
      "que você quase não usa"
    ],
    "lead": [
      "Os apps congelados ficam guardados no Ice Box.",
      "Ocultos do sistema e sem poder rodar em segundo plano."
    ],
    "market": "",
    "auto": {
      "title": [
        "Toque para abrir.",
        "Bloqueie para congelar de novo."
      ],
      "lead": [
        "Toque em um app congelado e ele abre na hora.",
        "Com o Congelamento automático ativado, ele volta para a caixa quando você bloqueia a tela."
      ],
      "link": "Sobre o Congelamento automático"
    },
    "modes": {
      "title": [
        "Funciona",
        "sem root"
      ],
      "lead": [
        "Device Owner, Depuração por Wi-Fi ou Shizuku. Escolha um."
      ],
      "link": "Comparar todos os modos",
      "items": [
        {
          "id": "deviceOwner",
          "line": "Configure uma vez com um computador. Continua funcionando após reiniciar."
        },
        {
          "id": "wireless",
          "line": "Configure no próprio telefone. Sem precisar de computador."
        },
        {
          "id": "shizuku",
          "line": "Já usa o Shizuku? É só conceder o acesso."
        }
      ]
    },
    "help": {
      "title": "Ajuda",
      "more": "Todas as perguntas",
      "items": [
        {
          "q": "Como configuro sem root?",
          "a": "Com um computador, use o [ativador com um clique](/guide/activator/) para configurar o modo Device Owner uma vez, e ele continua funcionando. No Android 11 e superior, a [Depuração por Wi-Fi](/guide/wireless-debugging/) funciona direto no telefone."
        },
        {
          "q": "Os apps congelados continuam enviando notificações?",
          "a": "Um app congelado não pode ser executado, então não recebe as próprias notificações push. Em alguns telefones, o serviço de push do sistema ainda pode mostrar notificações, que você pode desativar nas configurações do sistema."
        },
        {
          "q": "Como atualizo um app congelado?",
          "a": "Descongele-o no Ice Box, atualize e depois congele de novo."
        },
        {
          "q": "O aviso \"Este dispositivo é gerenciado\" é normal?",
          "a": "Sim, é assim que o modo Device Owner funciona. Você pode mudar o nome que aparece no Ice Box, em \"Laboratório\"."
        },
        {
          "q": "Como desinstalo o Ice Box?",
          "a": "Descongele tudo primeiro e depois toque em \"Desinstalar\" nas configurações do Ice Box. No modo Device Owner, não desinstale pela tela inicial."
        },
        {
          "q": "Telefone novo. Como recupero minha compra?",
          "a": "Toque em \"Já comprei\" na tela de compra. Compras pelo Google Play precisam da versão do Play; os outros canais usam o número do pedido. Veja o [guia de compra](/purchase/)."
        }
      ]
    },
    "closing": {
      "title": [
        "Seu telefone,",
        "como no primeiro dia"
      ]
      ,"note": "Dez anos de desenvolvimento e mais de 5 milhões de downloads no Google Play."
    }
  },
  phone: {
    "names": {
      "map": "Mapas",
      "camera": "Câmera",
      "music": "Música",
      "video": "Vídeo",
      "shop": "Compras",
      "food": "Comida",
      "game": "Jogos",
      "news": "Notícias",
      "chat": "Chat",
      "ride": "Táxi",
      "travel": "Viagens",
      "fit": "Fitness"
    },
    "tabs": [
      "Dia a dia",
      "Ferramentas",
      "Jogos"
    ],
    "date": "quarta-feira, 21 de outubro",
    "toastFrozen": "Congelado",
    "toastDefrosted": "Descongelado",
    "power": "Botão liga/desliga",
    "back": "Voltar"
  },
  modes: {
    root: { name: 'Modo root', desc: 'Para telefones com root. Conceda o acesso root ao Ice Box e pronto.', note: '', extra: '' },
    deviceOwner: { name: 'Modo Device Owner', desc: 'Sem root. Ative uma vez com um computador, e ele continua funcionando após reinicializações e atualizações do sistema.', note: 'É preciso remover temporariamente as contas do telefone', extra: '' },
    wireless: { name: 'Modo Depuração por Wi-Fi', desc: 'Sem root e sem computador. Ative a Depuração por Wi-Fi e digite o código de pareamento na notificação do Ice Box.', note: '', extra: '' },
    adb: { name: 'Modo ADB', desc: 'Sem root e sem precisar remover contas. Execute o ativador ou um comando ADB em um computador.', note: '', extra: '' },
    shizuku: { name: 'Modo Shizuku', desc: 'Já usa o Shizuku ou o Sui? Mude o Ice Box para o modo Shizuku e pronto.', note: '', extra: '' },
    qr: { name: 'Configuração por QR code', desc: 'Configure o modo Device Owner sem computador. Exige restaurar a configuração de fábrica antes.', note: 'Exige restaurar a configuração de fábrica', extra: 'Exige restaurar a configuração de fábrica' },
  },
  modeTable: { mode: 'Modo de operação', root: 'Sem root', pc: 'Sem computador', reboot: 'Continua após reiniciar', android: 'Versão do Android', note: 'Observações', yes: 'Sim', no: 'Não' },
  finder: {
    "root": {
      "q": "Seu telefone tem root?",
      "yes": "Sim",
      "no": "Não"
    },
    "pc": {
      "q": "Tem um computador?",
      "yes": "Sim",
      "no": "Não"
    },
    "android": {
      "q": "Versão do Android",
      "new": "11 ou superior",
      "old": "10 ou anterior"
    },
    "result": "Recomendamos"
  },
  guideGroups: {
    activate: 'Guias de configuração',
    tips: 'Dicas',
    trouble: 'Solução de problemas',
    purchase: 'Compra e pagamento',
  },
  search: {
    placeholder: 'Pesquise na ajuda, por exemplo: Device Owner, atalhos',
    empty: 'Nada encontrado. Tente outra palavra.',
  },
  download: {
    play: 'Para telefones com os serviços do Google. As compras são feitas e verificadas pelo Google Play',
    coolapkName: 'CoolApk',
    coolapk: 'Pesquise Ice Box (冰箱) no app do CoolApk',
    apkName: 'Arquivo APK',
    apk: 'Baixe o instalador mais recente diretamente',
    activator: 'Baixar o ativador para Windows',
    webActivator: 'Abrir o ativador web',
  },
  themes: {
    sakura: 'Rosa Sakura',
    clearBlue: 'Azul Claro',
    matcha: 'Verde Matcha',
    panda: 'Panda',
    dazzleRed: 'Vermelho Vibrante',
    amoled: 'Preto AMOLED',
    clearRed: 'Vermelho Claro',
    clearGreen: 'Verde Claro',
    softPink: 'Rosa Suave',
    import: 'Importar para o Ice Box',
  },
  alerts: { note: 'Observação', tip: 'Dica', important: 'Importante', warning: 'Atenção', caution: 'Cuidado' },
  special: {
    theme: {
      title: 'Tema do Ice Box',
      lead: 'Alguém compartilhou um tema do Ice Box com você. Abra este link em um telefone com o Ice Box instalado para ver a prévia e importar.',
      open: 'Abrir no Ice Box',
      copy: 'Copiar link',
      note: 'Ainda não tem o Ice Box?',
      download: 'Baixar o Ice Box',
      gallery: 'Ver mais temas',
      invalid: 'Não foi possível ler este link de tema. Verifique se o link está completo.',
      manual: 'Não abriu? Copie o link e toque em "Importar da área de transferência" nas configurações do Ice Box.',
      restore: 'Mudou de ideia? Nas configurações do Ice Box, abra Tema e layout e restaure o padrão pelo menu.',
    },
    list: {
      title: 'Lista de congelamento compartilhada',
      lead: 'Alguém compartilhou uma lista de apps pré-instalados que podem ser congelados. Abra este link em um telefone com o Ice Box instalado. O Ice Box mostra os apps da lista que podem ser congelados e os congela depois que você confirma.',
      open: 'Abrir no Ice Box',
      copy: 'Copiar link',
      note: 'Ainda não tem o Ice Box?',
      download: 'Baixar o Ice Box',
      manual: 'Não abriu? Copie o link e toque em "Importar da área de transferência" nas configurações do Ice Box.',
      invalid: 'Este link não tem o ID da lista. Verifique se o link está completo.',
    },
    notFound: {
      title: 'Página não encontrada',
      lead: 'Esta página pode ter sido movida ou removida. Você pode continuar por aqui:',
      home: 'Início',
      guide: 'Central de ajuda',
      faq: 'Perguntas frequentes',
      download: 'Baixar o Ice Box',
    },
  },
  langHint: { text: 'Esta página está disponível em português', go: 'Ver em português', close: 'Fechar' },
};
