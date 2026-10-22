---
title: Câu hỏi thường gặp về Ice Box
short: Hỏi đáp
description: "Câu hỏi thường gặp về Ice Box: quyền root, thông báo của Device Owner, gỡ cài đặt, thông báo đẩy, lối tắt, Tự động đóng băng, cập nhật ứng dụng đã đóng băng và chuyển chế độ hoạt động."
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

Với các câu hỏi về mua hàng và thanh toán, hãy xem [hướng dẫn mua](/purchase/). Với mẹo cho từng hãng điện thoại cụ thể, hãy xem [lưu ý cho từng hãng điện thoại](/guide/devices/).

## Cơ bản {#basics}

### Đóng băng ứng dụng nghĩa là gì? {#what-is-freeze}

Ứng dụng bị đóng băng sẽ bị hệ thống vô hiệu hóa hoặc ẩn đi. Ứng dụng không thể chạy, không thể tự khởi động trong nền, và không xuất hiện trên màn hình chính hay trong ngăn ứng dụng, nhưng bản thân ứng dụng và dữ liệu của nó vẫn còn nguyên. Khi bạn rã đông trong Ice Box, ứng dụng sẽ trở lại bình thường.

### Đóng băng khác gỡ cài đặt ở điểm nào? {#freeze-vs-uninstall}

Gỡ cài đặt sẽ xóa ứng dụng và dữ liệu của nó. Đóng băng chỉ tạm thời ngăn ứng dụng chạy: dữ liệu không bị ảnh hưởng, và bạn có thể tiếp tục dùng sau khi rã đông. Với các ứng dụng hệ thống cài sẵn không gỡ được, đóng băng cũng là một cách để vô hiệu hóa chúng.

### Làm sao đưa ứng dụng đã đóng băng trở lại màn hình chính? {#add-to-home}

Trong Ice Box, nhấn giữ biểu tượng ứng dụng và chọn "Thêm vào màn hình chính". Khi bạn nhấn vào lối tắt này, Ice Box sẽ rã đông ứng dụng trước rồi mở nó. Xem [Lối tắt trên màn hình chính](/guide/shortcuts/).

### Làm sao cập nhật ứng dụng đã đóng băng? {#update-frozen}

Nếu bạn dùng CoolApk (酷安), một kho ứng dụng Android của Trung Quốc, hãy bật "Hiển thị ứng dụng ẩn" (显示隐藏应用) trong phần thử nghiệm ở cài đặt của CoolApk. Nếu dùng kho ứng dụng khác, trước tiên hãy nhấn "Rã đông tất cả" trong phần cài đặt của Ice Box, rồi đóng băng lại các ứng dụng sau khi cập nhật.

### Không rã đông được ứng dụng sau khi chuyển chế độ hoạt động? {#mode-switch}

Các chế độ hoạt động không tương thích với nhau. Hãy chuyển Ice Box về chế độ hoạt động bạn đã dùng trước đó: ứng dụng phải được rã đông ở đúng chế độ đã đóng băng nó.

## Root {#root}

### Chế độ root báo "Không lấy được quyền root" {#root-failed}

Mở trình quản lý root (ví dụ Magisk), xóa bản ghi cấp quyền hiện có của Ice Box, rồi cấp lại quyền root.

### Plugin hệ thống đâu rồi? {#system-plugin}

Theo yêu cầu của Google Play, chế độ Plugin hệ thống đã bị gỡ bỏ từ phiên bản 3.22.0. Nếu Plugin hệ thống vẫn còn được cài, hãy dùng một trình quản lý tệp có quyền root để xóa `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk`, rồi khởi động lại để hoàn tất việc gỡ.

## Chế độ Device Owner {#device-owner}

### Bảng thông báo hiện "Thiết bị này do tổ chức của bạn quản lý". Có bình thường không? {#managed-notice}

Có. Đây chính là cách chế độ Device Owner của Ice Box hoạt động. Thiết lập Device Owner hiện là cách duy nhất để đóng băng ứng dụng lâu dài mà không cần root. Dòng chữ này do hệ thống hiển thị và không thể xóa, nhưng bạn có thể đổi "Tên tổ chức" thành bất kỳ nội dung nào bạn thích trong mục "Thử nghiệm" của Ice Box.

### Phần cài đặt điện thoại nói Device Owner có thể đọc lịch, email và thông tin cá nhân khác. Ice Box có đọc không? {#dpm-privacy}

Không. Ice Box được cập nhật liên tục từ năm 2015 và chỉ dùng những tính năng Device Owner cần thiết, như đóng băng ứng dụng. Ice Box không dùng bất kỳ tính năng nào không liên quan, nên bạn có thể yên tâm sử dụng.

### Sau khi thiết lập Device Owner, tính năng nhân bản ứng dụng và Thư mục bảo mật của hệ thống ngừng hoạt động? {#dual-apps}

Đây là giới hạn của chính một số hệ thống điện thoại (như Samsung và Xiaomi). Khi đã đặt Device Owner, hệ thống sẽ tự động tắt một số tính năng, và Ice Box không thể khắc phục điều đó. Nếu thật sự cần nhân bản ứng dụng, bạn có thể cân nhắc:

- Đặt Island làm Device Owner và dùng tính năng nhân bản ứng dụng mà Island cung cấp. Khi đó Ice Box có thể hoạt động qua [chế độ Island](/guide/other-modes/#island).
- Dùng một chế độ hoạt động khác ngoài Device Owner. Không chế độ nào khác ảnh hưởng đến nhân bản ứng dụng.

### Quyền của ứng dụng bị đặt lại mỗi lần rã đông? {#permissions-reset}

Đây là vấn đề của hệ thống. Ứng dụng AppOps của Rikka ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)) có thể tự động áp dụng lại các quy tắc quyền của bạn khi ứng dụng được rã đông.

### Trên điện thoại Huawei và Xiaomi, ứng dụng hỏi lại quyền mỗi lần mở, và khi đóng băng thì báo ứng dụng đã bị gỡ cài đặt? {#reinstall-prompt}

Trên điện thoại Xiaomi, hãy tắt "Tối ưu hóa MIUI". Trên các điện thoại khác, chúng tôi chưa tìm thấy công tắc tương ứng.

### Ứng dụng vừa rã đông đôi khi không kết nối được mạng? {#no-network}

Hệ thống trên một số mẫu máy (như OnePlus và Huawei) thỉnh thoảng gặp vấn đề này. Hãy đảm bảo hệ thống đã được cập nhật lên phiên bản mới nhất. Đóng băng rồi rã đông ứng dụng thêm một lần thường sẽ khắc phục được.

### Làm sao gỡ cài đặt Ice Box? {#uninstall}

Nhấn "Gỡ cài đặt" trong phần cài đặt của Ice Box. Trước khi gỡ, hãy kiểm tra kỹ để chắc chắn mọi ứng dụng đều đã được rã đông. Người dùng Xiaomi xin lưu ý: **đừng gỡ cài đặt Ice Box trực tiếp từ màn hình chính. Làm vậy sẽ mất quyền quản trị, và các ứng dụng đã đóng băng sẽ không bao giờ rã đông lại được.** Xem [Gỡ cài đặt Ice Box](/guide/uninstall/).

## Thông báo và chạy nền {#background}

### Ứng dụng đã đóng băng vẫn nhận thông báo đẩy? {#push}

Trên các điện thoại như OPPO, vivo và OnePlus, một số ứng dụng dùng dịch vụ đẩy thông báo của hệ thống. Sau khi chúng bị đóng băng, hệ thống vẫn hiển thị thông báo thay cho chúng, nhưng bản thân ứng dụng không chạy trong nền. Nếu không muốn nhận các thông báo này, hãy tắt thông báo của ứng dụng đó trong cài đặt hệ thống.

### Tôi muốn ứng dụng đã đóng băng vẫn nhận được thông báo {#keep-push}

Bạn có thể tìm hiểu cách cài [MiPushFramework](https://github.com/MiPushFramework/MiPushFramework).

### Tại sao Ice Box hiển thị một thông báo? {#ongoing-notification}

Android yêu cầu mọi ứng dụng chạy trong nền phải hiển thị thông báo. Khi bạn bật các tính năng cần chạy nền, như "Tự động đóng băng", Ice Box sẽ hiển thị một thông báo trên bảng thông báo. Bạn có thể tắt thông báo này trong cài đặt hệ thống mà không ảnh hưởng đến bất kỳ tính năng nào. Khi tắt Tự động đóng băng, Ice Box hoàn toàn không chạy trong nền.

### Ứng dụng không bị đóng băng sau khi tắt màn hình? {#auto-freeze-fail}

Hãy kiểm tra xem có ứng dụng quản lý điện thoại hay công cụ chặn ứng dụng nào đang ngăn Ice Box chạy trong nền không. Trong cài đặt hệ thống, hãy cấp cho Ice Box các quyền như "Chạy trong nền" và "Đánh thức thiết bị", và đặt mức sử dụng pin của Ice Box thành "Không tối ưu hóa". Trên điện thoại Huawei, tùy chọn "Tắt màn hình" trong "Tự động đóng băng khi" có thể không hoạt động do giới hạn của hệ thống, vì vậy hãy chọn tùy chọn khác. Xem [Tự động đóng băng](/guide/auto-freeze/).

## Lối tắt {#shortcuts}

### Không thêm được lối tắt lên màn hình chính trên Xiaomi, Huawei, Smartisan hoặc điện thoại khác? {#shortcut-missing}

Trên Xiaomi, Huawei và các điện thoại tương tự, hãy tự bật quyền tạo lối tắt trên màn hình chính cho Ice Box trong cài đặt hệ thống. Điện thoại Smartisan không hỗ trợ lối tắt của bất kỳ ứng dụng nào.

### Đã thêm lối tắt trên điện thoại Xiaomi hoặc Meizu nhưng không hoạt động? {#shortcut-broken}

Trên điện thoại Xiaomi, hãy cho phép Ice Box "khởi động ứng dụng khác" và "hiển thị cửa sổ bật lên khi chạy trong nền" trong cài đặt hệ thống. Trên điện thoại Meizu, chúng tôi chưa tìm thấy công tắc hệ thống tương ứng.

### Làm sao bỏ huy hiệu Ice Box trên lối tắt? {#shortcut-badge}

Trên Android 7.0 trở lên, huy hiệu trên lối tắt do hệ thống thêm vào và không thể thay đổi hay xóa.

## Câu hỏi khác {#other}

### Một số ứng dụng hệ thống, như Xiaomi Music, kho ứng dụng hoặc Huawei Home, không đóng băng được, hoặc lặng lẽ bị rã đông sau khi khởi động lại? {#system-unfreeze}

MIUI và một số hệ thống khác tự động rã đông các ứng dụng hệ thống quan trọng. Trên các phiên bản EMUI mới, Huawei Home không còn đóng băng được. Ở các phiên bản trước EMUI 9.0 thì vẫn đóng băng được.

### Trên điện thoại OPPO và vivo, danh sách ứng dụng chỉ hiện vài ứng dụng? {#app-list}

Trong phần cài đặt quyền của hệ thống, hãy cho phép Ice Box đọc danh sách ứng dụng.

### Sau khi rã đông ứng dụng trên điện thoại Smartisan, mọi quyền của nó đều được cho phép theo mặc định? {#smartisan-permissions}

Đây là thiết kế của hệ thống Smartisan và không liên quan đến Ice Box.

### Ice Box có hỗ trợ máy tính bảng không? {#tablet}

Có. Ice Box có bố cục riêng cho máy tính bảng và chế độ ngang.

### Ice Box có đọc bảng nhớ tạm của tôi không? {#clipboard}

Chỉ đọc một lần, khi bạn nhấn "Nhập từ bảng nhớ tạm" trong phần Cài đặt, để tìm liên kết chủ đề hoặc danh sách đóng băng.

### Vẫn còn thắc mắc? {#contact}

Hãy gửi email cho chúng tôi bằng tùy chọn "Phản hồi" trong ứng dụng Ice Box. Nếu có thể, hãy ghi kèm mẫu điện thoại, phiên bản hệ thống và ảnh chụp màn hình sự cố.
