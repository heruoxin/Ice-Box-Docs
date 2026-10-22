export default {
  meta: {
    siteName: 'Ice Box',
    brandHtml: 'Ice Box',
    titleSep: ' | ',
    homeTitle: 'Ice Box: congela las apps de Android que casi no usas, con o sin root',
    homeDescription: 'Ice Box es un congelador de apps para Android. Las apps congeladas no pueden ejecutarse en segundo plano y desaparecen de tu pantalla principal hasta que las descongelas con un toque. Funciona con root, Device Owner, Depuración inalámbrica, Shizuku y más.',
    appDescription: 'Ice Box es un congelador de apps para Android. Las apps congeladas no pueden ejecutarse en segundo plano y quedan ocultas en la pantalla principal hasta que las descongelas. Funciona con root y con varios modos sin root.',
    featureList: ['Congela y descongela apps con un toque', 'Congelación automática al apagar la pantalla', 'Accesos directos en la pantalla principal que descongelan y abren apps', 'Varias pestañas', 'Temas y paquetes de íconos', 'Bloqueo con huella y PIN', 'Congela apps del sistema preinstaladas', 'Modos de funcionamiento con y sin root', 'SDK abierto'],
    ogAlt: 'Ice Box: guarda en el congelador las apps que casi no usas',
  },
  nav: {
    main: 'Navegación principal',
    home: 'Inicio',
    download: 'Descargar',
    language: 'Elegir idioma',
    skip: 'Ir al contenido',
    breadcrumb: 'Ruta de navegación',
  },
  pages: { home: 'Inicio' },
  common: {
    stillStuckPre: '¿Sigues con problemas? Consulta las ',
    stillStuckPost: ' o escríbenos con la opción Comentarios de Ice Box.',
    viewGuide: 'Ver la guía',
    copy: 'Copiar',
    copied: 'Copiado',
    copyLink: 'Copiar enlace',
    updated: 'Actualizado: {date}',
    onThisPage: 'En esta página',
    related: 'Artículos relacionados',
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "Enlaces del sitio"
  },
  home: {
    "title": [
      "Congela las apps",
      "que casi no usas"
    ],
    "lead": [
      "Las apps congeladas quedan guardadas en Ice Box.",
      "Ocultas para el sistema y sin poder ejecutarse en segundo plano."
    ],
    "market": "",
    "auto": {
      "title": [
        "Toca para abrir.",
        "Bloquea y se congela."
      ],
      "lead": [
        "Toca una app congelada y se abre al instante.",
        "Con la Congelación automática activada, vuelve a la caja cuando bloqueas la pantalla."
      ],
      "link": "Sobre la Congelación automática"
    },
    "modes": {
      "title": [
        "Funciona",
        "sin root"
      ],
      "lead": [
        "Device Owner, Depuración inalámbrica o Shizuku. Elige uno."
      ],
      "link": "Comparar todos los modos",
      "items": [
        {
          "id": "deviceOwner",
          "line": "Se configura una vez con una computadora. Sigue funcionando al reiniciar."
        },
        {
          "id": "wireless",
          "line": "Se configura en el propio teléfono. Sin computadora."
        },
        {
          "id": "shizuku",
          "line": "¿Ya usas Shizuku? Solo dale acceso."
        }
      ]
    },
    "help": {
      "title": "Ayuda",
      "more": "Todas las preguntas",
      "items": [
        {
          "q": "¿Cómo lo configuro sin root?",
          "a": "Con una computadora, usa el [activador en un clic](/guide/activator/) para configurar el modo Device Owner una sola vez, y seguirá funcionando. En Android 11 y versiones posteriores, la [Depuración inalámbrica](/guide/wireless-debugging/) funciona directamente en el teléfono."
        },
        {
          "q": "¿Las apps congeladas siguen enviando notificaciones?",
          "a": "Una app congelada no puede ejecutarse, así que no recibe sus propios mensajes push. En algunos teléfonos, el servicio push del sistema puede seguir mostrando notificaciones, que puedes desactivar en la configuración del sistema."
        },
        {
          "q": "¿Cómo actualizo una app congelada?",
          "a": "Descongélala en Ice Box, actualízala y vuelve a congelarla."
        },
        {
          "q": "¿Es normal el aviso \"Tu organización administra este dispositivo\"?",
          "a": "Sí, así funciona el modo Device Owner. Puedes cambiar el nombre que muestra en Ice Box, en \"Laboratorio\"."
        },
        {
          "q": "¿Cómo desinstalo Ice Box?",
          "a": "Primero descongela todo y luego toca \"Desinstalar\" en la configuración de Ice Box. En el modo Device Owner, no lo desinstales desde la pantalla principal."
        },
        {
          "q": "Tengo un teléfono nuevo. ¿Cómo recupero mi compra?",
          "a": "Toca \"Ya lo compré\" en la pantalla de compra. Las compras en Google Play necesitan la versión de Play; los demás canales usan tu número de pedido. Consulta la [guía de compra](/purchase/)."
        }
      ]
    },
    "closing": {
      "title": [
        "Tu teléfono,",
        "como el primer día"
      ]
      ,"note": "Diez años de desarrollo y más de 5 millones de descargas en Google Play."
    }
  },
  phone: {
    "names": {
      "map": "Mapas",
      "camera": "Cámara",
      "music": "Música",
      "video": "Video",
      "shop": "Tienda",
      "food": "Comida",
      "game": "Juegos",
      "news": "Noticias",
      "chat": "Chat",
      "ride": "Taxi",
      "travel": "Viajes",
      "fit": "Ejercicio"
    },
    "tabs": [
      "Diario",
      "Utilidades",
      "Juegos"
    ],
    "date": "Miércoles, 21 de octubre",
    "toastFrozen": "Congelada",
    "toastDefrosted": "Descongelada",
    "power": "Botón de encendido",
    "back": "Atrás"
  },
  modes: {
    root: { name: 'Modo Root', desc: 'Para teléfonos con root. Dale acceso root a Ice Box y listo.', note: '', extra: '' },
    deviceOwner: { name: 'Modo Device Owner', desc: 'Sin root. Actívalo una vez con una computadora y sigue funcionando después de reiniciar y de actualizar el sistema.', note: 'Hay que quitar por un momento las cuentas del teléfono', extra: '' },
    wireless: { name: 'Modo Depuración inalámbrica', desc: 'Sin root ni computadora. Activa la Depuración inalámbrica e ingresa el código de vinculación en la notificación de Ice Box.', note: '', extra: '' },
    adb: { name: 'Modo ADB', desc: 'Sin root y sin quitar cuentas. Ejecuta el activador o un comando ADB en una computadora.', note: '', extra: '' },
    shizuku: { name: 'Modo Shizuku', desc: '¿Ya usas Shizuku o Sui? Cambia Ice Box al modo Shizuku y listo.', note: '', extra: '' },
    qr: { name: 'Configuración con código QR', desc: 'Configura el modo Device Owner sin computadora. Antes hay que restablecer la configuración de fábrica.', note: 'Requiere restablecer la configuración de fábrica', extra: 'Requiere restablecer la configuración de fábrica' },
  },
  modeTable: { mode: 'Modo de funcionamiento', root: 'Sin root', pc: 'Sin computadora', reboot: 'Sigue tras reiniciar', android: 'Versión de Android', note: 'Notas', yes: 'Sí', no: 'No' },
  finder: {
    "root": {
      "q": "¿Tu teléfono tiene root?",
      "yes": "Sí",
      "no": "No"
    },
    "pc": {
      "q": "¿Tienes una computadora?",
      "yes": "Sí",
      "no": "No"
    },
    "android": {
      "q": "Versión de Android",
      "new": "11 o posterior",
      "old": "10 o anterior"
    },
    "result": "Te sugerimos"
  },
  guideGroups: {
    activate: 'Guías de configuración',
    tips: 'Consejos',
    trouble: 'Solución de problemas',
    purchase: 'Compra y pago',
  },
  search: {
    placeholder: 'Busca en la ayuda, por ejemplo: Device Owner, accesos directos',
    empty: 'No se encontraron resultados. Prueba con otra palabra.',
  },
  download: {
    play: 'Para teléfonos con servicios de Google. Las compras se hacen y se verifican a través de Google Play',
    coolapkName: 'CoolApk',
    coolapk: 'Busca Ice Box (冰箱) en la app de CoolApk',
    apkName: 'Archivo APK',
    apk: 'Descarga directamente el instalador más reciente',
    activator: 'Descargar el activador para Windows',
    webActivator: 'Abrir el activador web',
  },
  themes: {
    sakura: 'Rosa Sakura',
    clearBlue: 'Azul Claro',
    matcha: 'Verde Matcha',
    panda: 'Panda',
    dazzleRed: 'Rojo Deslumbrante',
    amoled: 'Negro AMOLED',
    clearRed: 'Rojo Claro',
    clearGreen: 'Verde Claro',
    softPink: 'Rosa Suave',
    import: 'Importar a Ice Box',
  },
  alerts: { note: 'Nota', tip: 'Consejo', important: 'Importante', warning: 'Advertencia', caution: 'Precaución' },
  special: {
    theme: {
      title: 'Tema de Ice Box',
      lead: 'Alguien compartió contigo un tema de Ice Box. Abre este enlace en un teléfono con Ice Box instalado para ver una vista previa e importarlo.',
      open: 'Abrir en Ice Box',
      copy: 'Copiar enlace',
      note: '¿Todavía no tienes Ice Box?',
      download: 'Descargar Ice Box',
      gallery: 'Ver más temas',
      invalid: 'No se pudo leer este enlace de tema. Comprueba que el enlace esté completo.',
      manual: '¿No se abre? Copia el enlace y toca "Importar del portapapeles" en la configuración de Ice Box.',
      restore: '¿Cambiaste de opinión? En la configuración de Ice Box, abre Tema y diseño y restablece el tema predeterminado desde el menú.',
    },
    list: {
      title: 'Lista de congelación compartida',
      lead: 'Alguien compartió una lista de apps preinstaladas que se pueden congelar. Abre este enlace en un teléfono con Ice Box instalado. Ice Box muestra las apps de la lista que se pueden congelar y las congela cuando confirmas.',
      open: 'Abrir en Ice Box',
      copy: 'Copiar enlace',
      note: '¿Todavía no tienes Ice Box?',
      download: 'Descargar Ice Box',
      manual: '¿No se abre? Copia el enlace y toca "Importar del portapapeles" en la configuración de Ice Box.',
      invalid: 'Este enlace no tiene el ID de la lista. Comprueba que el enlace esté completo.',
    },
    notFound: {
      title: 'No se encontró la página',
      lead: 'Es posible que esta página se haya movido o eliminado. Puedes seguir aquí:',
      home: 'Inicio',
      guide: 'Centro de ayuda',
      faq: 'Preguntas frecuentes',
      download: 'Descargar Ice Box',
    },
  },
  langHint: { text: 'Esta página está disponible en español', go: 'Ver en español', close: 'Cerrar' },
};
