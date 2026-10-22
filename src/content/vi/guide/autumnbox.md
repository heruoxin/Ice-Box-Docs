---
title: Kích hoạt Ice Box bằng AutumnBox
short: AutumnBox
description: AutumnBox là bộ công cụ trên Windows giúp đơn giản hóa thao tác ADB và có thể bật chế độ Device Owner cho Ice Box chỉ với một chạm. Các bước và những điều cần lưu ý.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox (秋之盒) là bộ công cụ một chạm giúp thao tác ADB đơn giản hơn. Xin chân thành cảm ơn [zsh2401](https://zsh2401.top/) đã dày công phát triển công cụ này.

AutumnBox chỉ chạy trên Windows. Nếu máy tính của bạn chạy macOS hoặc Linux, hãy dùng [trình kích hoạt trên web](/guide/web-activator/) hoặc làm theo [các bước thiết lập bằng dòng lệnh](/guide/device-owner/#steps).

> [!NOTE]
> Trang web của AutumnBox hiện không truy cập được và dự án không còn được cập nhật. Mã nguồn và các phiên bản cũ có trên [GitHub](https://github.com/zsh2401/AutumnBox). Chúng tôi khuyên bạn dùng [trình kích hoạt một chạm](/guide/activator/) hoặc [trình kích hoạt trên web](/guide/web-activator/), hai công cụ này làm cùng việc.

## Đọc trước khi bắt đầu {#before}

Hệ thống của các hãng điện thoại Trung Quốc thường thêm nhiều tính năng tùy biến riêng, gây ra một số vấn đề tương thích với chế độ Device Owner. Các vấn đề thường gặp:

- Điện thoại Samsung có thể bị hệ thống khóa bằng mật khẩu (số báo cáo đến nay vào khoảng 4 trên 200.000). Hãy đọc [lưu ý cho máy Samsung](/guide/samsung-device-owner/) trước.
- Mỗi lần đóng băng ứng dụng lại hiện hộp thoại gỡ cài đặt, và khi rã đông lại hiện yêu cầu cấp quyền (Huawei, Smartisan).
- Thanh thông báo liên tục hiện "Quản trị thiết bị đang bật, nhấn để tắt" (OPPO, vivo).
- Tính năng nhân bản ứng dụng có sẵn của hệ thống ngừng hoạt động (Huawei, MIUI).
- Ứng dụng vừa rã đông thỉnh thoảng không kết nối được Internet. Hãy đóng ứng dụng rồi mở lại (OnePlus và một số hãng khác).
- Với điện thoại Sony, chúng tôi khuyên bạn thiết lập Ice Box trước khi nâng cấp lên Android 9. Android 9 thêm một tài khoản ẩn rất khó gỡ. Nếu đã nâng cấp, hãy dùng [thiết lập bằng mã QR](/guide/qr-code/). Những máy đã thiết lập từ trước không bị ảnh hưởng.

Nếu không chấp nhận được những vấn đề này, hãy dùng [Shizuku](/guide/shizuku/) hoặc [chế độ ADB](/guide/adb/). Hai cách này cũng không cần root, nhưng bạn phải kích hoạt lại mỗi khi điện thoại khởi động lại.

Ngược lại, chế độ Device Owner không cần cắm máy tính nhiều lần. Chỉ cần thiết lập một lần là dùng mãi, kể cả sau khi khởi động lại hay cập nhật hệ thống.

## Các bước {#steps}

Khi đã quyết định kích hoạt Ice Box ở chế độ Device Owner, hãy làm theo các bước sau:

1. Đảm bảo đã cài Ice Box trên điện thoại. Tắt khóa màn hình. Với điện thoại Sony, hãy tháo thẻ SIM. Với điện thoại Xiaomi, hãy bật "Gỡ lỗi USB (Cài đặt bảo mật)" và tắt "Tối ưu hóa MIUI".
2. Trong phần cài đặt hệ thống, gỡ mọi tài khoản, chẳng hạn tài khoản Xiaomi, Huawei và Google. Bạn có thể đăng nhập lại sau khi kích hoạt.
3. Tải và mở AutumnBox.
4. Bật Gỡ lỗi qua USB trên điện thoại và kết nối với máy tính. Nếu không kết nối được, thường là do chưa cài driver, hoặc bị xung đột với một phần mềm quản lý điện thoại khác. Hãy kiểm tra driver và đóng mọi phần mềm quản lý điện thoại khác.
5. Nhấn chức năng "Activate Ice Box" (激活冰箱) trong AutumnBox.

Thông thường, giờ bạn đã có thể mở Ice Box và bắt đầu dùng. Nếu gặp vấn đề, trước tiên hãy kiểm tra xem đã gỡ hết tài khoản hệ thống chưa. Nếu vẫn không được, hãy đối chiếu nhật ký in ra với [câu hỏi thường gặp về chế độ Device Owner](/guide/device-owner/#faq).
