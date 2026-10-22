export default {
  meta: {
    siteName: 'Ice Box',
    brandHtml: 'Ice Box',
    titleSep: ' | ',
    homeTitle: 'Ice Box: đóng băng ứng dụng Android ít dùng, có root hay không đều được',
    homeDescription: 'Ice Box là trình đóng băng ứng dụng cho Android. Ứng dụng đã đóng băng không thể chạy trong nền và biến mất khỏi màn hình chính cho đến khi bạn rã đông chỉ với một chạm. Hoạt động với root, Device Owner, Gỡ lỗi không dây, Shizuku và nhiều chế độ khác.',
    appDescription: 'Ice Box là trình đóng băng ứng dụng cho Android. Ứng dụng đã đóng băng không thể chạy trong nền và được ẩn khỏi màn hình chính cho đến khi bạn rã đông. Hoạt động với root và với nhiều chế độ không cần root.',
    featureList: ['Đóng băng và rã đông ứng dụng chỉ với một chạm', 'Tự động đóng băng sau khi tắt màn hình', 'Lối tắt trên màn hình chính để rã đông và mở ứng dụng', 'Nhiều thẻ', 'Chủ đề và gói biểu tượng', 'Khóa vân tay và mã PIN', 'Đóng băng ứng dụng hệ thống cài sẵn', 'Chế độ hoạt động có root và không cần root', 'SDK mở'],
    ogAlt: 'Ice Box: đóng băng những ứng dụng bạn ít dùng',
  },
  nav: {
    main: 'Điều hướng chính',
    home: 'Trang chủ',
    download: 'Tải xuống',
    language: 'Chọn ngôn ngữ',
    skip: 'Chuyển đến nội dung',
    breadcrumb: 'Đường dẫn',
  },
  pages: { home: 'Trang chủ' },
  common: {
    stillStuckPre: 'Vẫn chưa giải quyết được? Hãy xem mục ',
    stillStuckPost: ', hoặc gửi email cho chúng tôi qua mục "Phản hồi" trong Ice Box.',
    viewGuide: 'Xem hướng dẫn',
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    copyLink: 'Sao chép liên kết',
    updated: 'Cập nhật {date}',
    onThisPage: 'Trên trang này',
    related: 'Bài viết liên quan',
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "Liên kết trang"
  },
  home: {
    "title": [
      "Đóng băng những ứng dụng",
      "bạn ít dùng"
    ],
    "lead": [
      "Ứng dụng đã đóng băng được cất gọn trong Ice Box.",
      "Ẩn khỏi hệ thống và không thể chạy trong nền."
    ],
    "market": "",
    "auto": {
      "title": [
        "Nhấn là mở.",
        "Khóa máy là đóng băng lại."
      ],
      "lead": [
        "Nhấn vào một ứng dụng đã đóng băng, ứng dụng mở ngay.",
        "Khi bật Tự động đóng băng, ứng dụng sẽ trở về hộp khi bạn khóa màn hình."
      ],
      "link": "Tìm hiểu Tự động đóng băng"
    },
    "modes": {
      "title": [
        "Dùng được",
        "không cần root"
      ],
      "lead": [
        "Device Owner, Gỡ lỗi không dây hoặc Shizuku. Chọn một cách."
      ],
      "link": "So sánh tất cả các chế độ",
      "items": [
        {
          "id": "deviceOwner",
          "line": "Thiết lập một lần bằng máy tính. Vẫn hoạt động sau khi khởi động lại."
        },
        {
          "id": "wireless",
          "line": "Thiết lập ngay trên điện thoại. Không cần máy tính."
        },
        {
          "id": "shizuku",
          "line": "Đang dùng Shizuku? Chỉ cần cấp quyền."
        }
      ]
    },
    "help": {
      "title": "Trợ giúp",
      "more": "Tất cả câu hỏi",
      "items": [
        {
          "q": "Làm sao thiết lập khi không có root?",
          "a": "Nếu có máy tính, hãy dùng [trình kích hoạt một chạm](/guide/activator/) để thiết lập chế độ Device Owner một lần là dùng mãi. Trên Android 11 trở lên, [Gỡ lỗi không dây](/guide/wireless-debugging/) dùng được ngay trên điện thoại."
        },
        {
          "q": "Ứng dụng đã đóng băng có còn gửi thông báo không?",
          "a": "Ứng dụng đã đóng băng không thể chạy, nên không tự nhận được thông báo đẩy. Trên một số điện thoại, dịch vụ đẩy của hệ thống vẫn có thể hiện thông báo, bạn có thể tắt trong cài đặt hệ thống."
        },
        {
          "q": "Làm sao cập nhật ứng dụng đã đóng băng?",
          "a": "Rã đông ứng dụng trong Ice Box, cập nhật, rồi đóng băng lại."
        },
        {
          "q": "Dòng chữ \"Thiết bị này do tổ chức của bạn quản lý\" có bình thường không?",
          "a": "Có, đó là cách chế độ Device Owner hoạt động. Bạn có thể đổi tên hiển thị trong mục \"Thử nghiệm\" của Ice Box."
        },
        {
          "q": "Làm sao gỡ cài đặt Ice Box?",
          "a": "Hãy rã đông tất cả trước, rồi nhấn \"Gỡ cài đặt\" trong phần cài đặt của Ice Box. Ở chế độ Device Owner, đừng gỡ cài đặt từ màn hình chính."
        },
        {
          "q": "Đổi điện thoại mới. Làm sao khôi phục giao dịch mua?",
          "a": "Nhấn \"Tôi đã mua\" trên màn hình mua. Giao dịch qua Google Play cần dùng bản cài từ Google Play; các kênh khác dùng mã đơn hàng của bạn. Xem [hướng dẫn mua](/purchase/)."
        }
      ]
    },
    "closing": {
      "title": [
        "Điện thoại của bạn,",
        "mượt như ngày đầu"
      ]
      ,"note": "Mười năm phát triển, hơn 5 triệu lượt tải trên Google Play."
    }
  },
  phone: {
    "names": {
      "map": "Bản đồ",
      "camera": "Máy ảnh",
      "music": "Nhạc",
      "video": "Video",
      "shop": "Mua sắm",
      "food": "Đồ ăn",
      "game": "Trò chơi",
      "news": "Tin tức",
      "chat": "Trò chuyện",
      "ride": "Gọi xe",
      "travel": "Du lịch",
      "fit": "Thể dục"
    },
    "tabs": [
      "Hằng ngày",
      "Công cụ",
      "Trò chơi"
    ],
    "date": "Thứ Tư, 21 tháng 10",
    "toastFrozen": "Đã đóng băng",
    "toastDefrosted": "Đã rã đông",
    "power": "Nút nguồn",
    "back": "Quay lại"
  },
  modes: {
    root: { name: 'Chế độ root', desc: 'Dành cho điện thoại đã root. Cấp quyền root cho Ice Box là xong.', note: '', extra: '' },
    deviceOwner: { name: 'Chế độ Device Owner', desc: 'Không cần root. Kích hoạt một lần bằng máy tính, vẫn hoạt động sau khi khởi động lại và cập nhật hệ thống.', note: 'Cần tạm gỡ các tài khoản trên điện thoại', extra: '' },
    wireless: { name: 'Chế độ Gỡ lỗi không dây', desc: 'Không cần root, không cần máy tính. Bật Gỡ lỗi không dây và nhập mã ghép nối vào thông báo của Ice Box.', note: '', extra: '' },
    adb: { name: 'Chế độ ADB', desc: 'Không cần root, không cần gỡ tài khoản. Chạy trình kích hoạt hoặc một lệnh ADB trên máy tính.', note: '', extra: '' },
    shizuku: { name: 'Chế độ Shizuku', desc: 'Đang dùng Shizuku hoặc Sui? Chuyển Ice Box sang chế độ Shizuku là dùng được ngay.', note: '', extra: '' },
    qr: { name: 'Thiết lập bằng mã QR', desc: 'Thiết lập chế độ Device Owner không cần máy tính. Cần khôi phục cài đặt gốc trước.', note: 'Cần khôi phục cài đặt gốc', extra: 'Cần khôi phục cài đặt gốc' },
  },
  modeTable: { mode: 'Chế độ hoạt động', root: 'Không cần root', pc: 'Không cần máy tính', reboot: 'Giữ được sau khi khởi động lại', android: 'Phiên bản Android', note: 'Ghi chú', yes: 'Có', no: 'Không' },
  finder: {
    "root": {
      "q": "Điện thoại của bạn đã root chưa?",
      "yes": "Rồi",
      "no": "Chưa"
    },
    "pc": {
      "q": "Bạn có máy tính không?",
      "yes": "Có",
      "no": "Không"
    },
    "android": {
      "q": "Phiên bản Android",
      "new": "11 trở lên",
      "old": "10 trở xuống"
    },
    "result": "Gợi ý cho bạn"
  },
  guideGroups: {
    activate: 'Hướng dẫn thiết lập',
    tips: 'Mẹo sử dụng',
    trouble: 'Khắc phục sự cố',
    purchase: 'Mua và thanh toán',
  },
  search: {
    placeholder: 'Tìm trợ giúp, ví dụ: Device Owner, lối tắt',
    empty: 'Không tìm thấy kết quả. Hãy thử từ khóa khác.',
  },
  download: {
    play: 'Dành cho điện thoại có dịch vụ Google. Giao dịch mua được thực hiện và xác minh qua Google Play',
    coolapkName: 'CoolApk',
    coolapk: 'Tìm Ice Box (冰箱) trong ứng dụng CoolApk',
    apkName: 'Tệp APK',
    apk: 'Tải trực tiếp bản cài đặt mới nhất',
    activator: 'Tải trình kích hoạt cho Windows',
    webActivator: 'Mở trình kích hoạt trên web',
  },
  themes: {
    sakura: 'Hồng anh đào',
    clearBlue: 'Xanh trong',
    matcha: 'Xanh matcha',
    panda: 'Gấu trúc',
    dazzleRed: 'Đỏ rực rỡ',
    amoled: 'Đen AMOLED',
    clearRed: 'Đỏ trong',
    clearGreen: 'Xanh lá trong',
    softPink: 'Hồng dịu',
    import: 'Nhập vào Ice Box',
  },
  alerts: { note: 'Lưu ý', tip: 'Mẹo', important: 'Quan trọng', warning: 'Cảnh báo', caution: 'Thận trọng' },
  special: {
    theme: {
      title: 'Chủ đề Ice Box',
      lead: 'Có người đã chia sẻ với bạn một chủ đề Ice Box. Hãy mở liên kết này trên điện thoại đã cài Ice Box để xem trước và nhập chủ đề.',
      open: 'Mở trong Ice Box',
      copy: 'Sao chép liên kết',
      note: 'Chưa có Ice Box?',
      download: 'Tải Ice Box',
      gallery: 'Xem thêm chủ đề',
      invalid: 'Không đọc được liên kết chủ đề này. Hãy kiểm tra xem liên kết có đầy đủ không.',
      manual: 'Không mở được? Hãy sao chép liên kết, rồi nhấn "Nhập từ bảng nhớ tạm" trong phần cài đặt của Ice Box.',
      restore: 'Đổi ý? Trong phần cài đặt của Ice Box, mở "Chủ đề & bố cục" và khôi phục mặc định từ trình đơn.',
    },
    list: {
      title: 'Danh sách đóng băng được chia sẻ',
      lead: 'Có người đã chia sẻ một danh sách ứng dụng cài sẵn có thể đóng băng. Hãy mở liên kết này trên điện thoại đã cài Ice Box. Ice Box sẽ hiện các ứng dụng trong danh sách có thể đóng băng, và đóng băng chúng sau khi bạn xác nhận.',
      open: 'Mở trong Ice Box',
      copy: 'Sao chép liên kết',
      note: 'Chưa có Ice Box?',
      download: 'Tải Ice Box',
      manual: 'Không mở được? Hãy sao chép liên kết, rồi nhấn "Nhập từ bảng nhớ tạm" trong phần cài đặt của Ice Box.',
      invalid: 'Liên kết này không có mã danh sách. Hãy kiểm tra xem liên kết có đầy đủ không.',
    },
    notFound: {
      title: 'Không tìm thấy trang',
      lead: 'Trang này có thể đã được chuyển đi hoặc bị xóa. Bạn có thể tiếp tục tại đây:',
      home: 'Trang chủ',
      guide: 'Trung tâm trợ giúp',
      faq: 'Hỏi đáp',
      download: 'Tải Ice Box',
    },
  },
  langHint: { text: 'Trang này có bản tiếng Việt', go: 'Xem bằng tiếng Việt', close: 'Đóng' },
};
