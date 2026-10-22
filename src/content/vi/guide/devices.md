---
title: Lưu ý cho từng hãng điện thoại
short: Lưu ý theo hãng điện thoại
description: "Lưu ý khi dùng Ice Box trên Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu và các hãng khác: Tùy chọn cho nhà phát triển, vấn đề với Device Owner, lối tắt và thông báo đẩy."
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Mỗi hãng điện thoại tùy biến Android ở mức độ khác nhau, nên Ice Box hoạt động hơi khác nhau giữa các hãng. Dưới đây là các vấn đề đã biết, sắp xếp theo hãng. Trước khi thiết lập, hãy tìm hãng điện thoại của bạn và xem qua.

## Xiaomi / Redmi / POCO {#xiaomi}

- Trước khi dùng chế độ ADB, Gỡ lỗi không dây hoặc Device Owner, hãy bật "Gỡ lỗi USB (Cài đặt bảo mật)" trong Tùy chọn cho nhà phát triển.
- Trước khi thiết lập Device Owner, hãy tắt "Tối ưu hóa MIUI". Khi tắt, ứng dụng sẽ không hỏi lại quyền mỗi lần bạn đóng băng chúng, và bạn sẽ không nhận được thông báo nói rằng ứng dụng đã bị gỡ cài đặt.
- Sau khi thiết lập Device Owner, tính năng Ứng dụng kép có sẵn của hệ thống có thể không hoạt động.
- Nếu không thêm được lối tắt lên màn hình chính, hãy bật quyền tạo lối tắt trên màn hình chính cho Ice Box trong cài đặt hệ thống. Nếu đã thêm lối tắt nhưng không hoạt động, hãy cho phép Ice Box "khởi động ứng dụng khác" và "hiển thị cửa sổ bật lên khi chạy trong nền".
- Từ MIUI 11, việc chuyển giao quyền giữa Ice Box và các ứng dụng như Brevent, Island và Shizuku có thể thất bại. Trước tiên, hãy tắt "Tối ưu hóa MIUI". Sau đó nhấn giữ biểu tượng Ice Box trên màn hình chính, mở Thông tin ứng dụng, rồi tự bật "Quyền khác" trong phần cài đặt quyền.
- Một số ứng dụng hệ thống quan trọng (như Mi Music và kho ứng dụng) có thể không đóng băng được, hoặc bị hệ thống tự rã đông sau khi khởi động lại. Từ phiên bản 3.30.7, Ice Box có thể đóng băng thêm nhiều thành phần hệ thống của MIUI / HyperOS.
- Khi dùng chế độ Device Owner, **đừng gỡ cài đặt Ice Box trực tiếp từ màn hình chính**. Làm vậy sẽ mất quyền Device Owner, và các ứng dụng đã đóng băng sẽ không rã đông được. Hãy làm theo các bước trong [Gỡ cài đặt Ice Box](/guide/uninstall/).

## Samsung {#samsung}

- Sau khi thiết lập Device Owner, Thư mục bảo mật và Dual Messenger có thể ngừng hoạt động, thậm chí mật khẩu màn hình khóa có thể bị đặt lại. Hãy nhớ đọc [lưu ý cho máy Samsung](/guide/samsung-device-owner/) trước.
- Với người dùng Samsung, chúng tôi khuyên dùng chế độ root, Gỡ lỗi không dây, Shizuku hoặc ADB.

## Huawei / Honor {#huawei}

- Khi dùng chế độ ADB hoặc Gỡ lỗi không dây, hãy bật "Cho phép gỡ lỗi ADB ở chế độ chỉ sạc" trong Tùy chọn cho nhà phát triển.
- Sau khi thiết lập Device Owner, mỗi lần đóng băng ứng dụng có thể hiện hộp thoại gỡ cài đặt, và khi rã đông có thể hiện yêu cầu cấp quyền. Tính năng App Twin có sẵn của hệ thống có thể không hoạt động.
- Nếu không thêm được lối tắt lên màn hình chính, hãy tự cấp quyền tạo lối tắt cho Ice Box trong cài đặt hệ thống. Nếu dùng ứng dụng màn hình chính của bên thứ ba, có thể bạn không thêm được lối tắt từ bên trong Ice Box. Hãy thử nhấn giữ vào một vùng trống trên màn hình chính để thêm.
- Do giới hạn của hệ thống, tự động đóng băng khi "Tắt màn hình" có thể không hoạt động. Hãy dùng tự động đóng băng khi "Nhấn nút Home" hoặc "Nhấn đúp nút Home".
- Trên các phiên bản EMUI mới, ứng dụng màn hình chính của Huawei không còn đóng băng được. Các phiên bản trước EMUI 9.0 vẫn đóng băng được.

## OPPO / OnePlus / realme {#oppo}

- Khi dùng chế độ ADB hoặc Gỡ lỗi không dây, hãy bật "Tắt giám sát quyền" trong Tùy chọn cho nhà phát triển.
- Sau khi thiết lập Device Owner, thanh thông báo có thể liên tục hiện "Quản trị thiết bị đang bật, nhấn để tắt".
- Nếu danh sách ứng dụng chỉ hiện vài ứng dụng, hãy cho phép Ice Box đọc danh sách ứng dụng trong phần cài đặt quyền của hệ thống.
- Một số ứng dụng dùng dịch vụ đẩy thông báo của hệ thống, nên hệ thống vẫn có thể hiện thông báo của chúng sau khi bị đóng băng, nhưng bản thân ứng dụng không chạy trong nền. Nếu không muốn nhận các thông báo này, hãy tắt thông báo của ứng dụng đó trong cài đặt hệ thống.
- Ứng dụng vừa rã đông thỉnh thoảng không kết nối được Internet. Hãy đóng ứng dụng rồi mở lại.

## vivo / iQOO {#vivo}

- Sau khi thiết lập Device Owner, thanh thông báo có thể liên tục hiện "Quản trị thiết bị đang bật, nhấn để tắt".
- Nếu danh sách ứng dụng chỉ hiện vài ứng dụng, hãy cho phép Ice Box đọc danh sách ứng dụng trong phần cài đặt quyền của hệ thống.
- Giống như trên OPPO, một số ứng dụng vẫn có thể hiện thông báo qua dịch vụ đẩy của hệ thống sau khi bị đóng băng.

## Sony {#sony}

- Hãy tháo thẻ SIM trước khi thiết lập Device Owner.
- Chúng tôi khuyên bạn thiết lập Ice Box trước khi nâng cấp lên Android 9. Android 9 thêm một tài khoản ẩn rất khó gỡ. Nếu đã nâng cấp, hãy dùng [thiết lập bằng mã QR](/guide/qr-code/). Những máy đã thiết lập từ trước không bị ảnh hưởng.

## Meizu và Smartisan {#meizu}

- Meizu: lối tắt trên màn hình chính có thể không hoạt động dù đã thêm. Chúng tôi chưa tìm thấy công tắc hệ thống nào cho việc này.
- Smartisan: không hỗ trợ lối tắt cho bất kỳ ứng dụng nào. Sau khi thiết lập Device Owner, khi đóng băng ứng dụng có thể hiện hộp thoại gỡ cài đặt, và ứng dụng sau khi rã đông được cho phép mọi quyền theo mặc định. Đây là thiết kế của hệ thống Smartisan và không liên quan đến Ice Box.

## Pixel và Android gốc {#pixel}

- Hệ thống gốc và gần gốc có độ tương thích tốt nhất với mọi chế độ hoạt động.
- Nếu không có máy tính, bạn có thể dùng [thiết lập bằng mã QR](/guide/qr-code/) để đặt Ice Box làm Device Owner khi khôi phục cài đặt gốc, hoặc dùng [chế độ Gỡ lỗi không dây](/guide/wireless-debugging/) trên Android 11 trở lên.
