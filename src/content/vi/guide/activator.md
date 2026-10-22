---
title: Kích hoạt Ice Box bằng trình kích hoạt một chạm (Windows)
short: Trình kích hoạt một chạm
description: Dùng trình kích hoạt một chạm trên máy tính Windows để bật chế độ Device Owner hoặc chế độ ADB cho Ice Box mà không cần gõ lệnh. Gồm link tải, các bước và câu hỏi thường gặp.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

Trình kích hoạt một chạm do [@web1n](https://github.com/web1n) phát triển. Công cụ này chạy trên máy tính Windows và bật chế độ Device Owner cho Ice Box, nên bạn không cần tự gõ lệnh ADB.

[[activator-download]]

Nếu bạn không có máy tính Windows, hoặc gặp sự cố với trình kích hoạt dạng exe, hãy dùng [trình kích hoạt trên web](/guide/web-activator/). Công cụ này làm đúng việc tương tự.

## Đọc trước khi bắt đầu {#before}

Hệ thống của các hãng điện thoại Trung Quốc thường tùy biến Android, gây ra một số vấn đề tương thích với chế độ Device Owner. Các vấn đề thường gặp:

- Điện thoại Samsung có thể bị hệ thống khóa bằng mật khẩu (số báo cáo đến nay vào khoảng 4 trên 200.000). Hãy đọc [lưu ý cho máy Samsung](/guide/samsung-device-owner/) trước.
- Mỗi lần đóng băng ứng dụng lại hiện hộp thoại gỡ cài đặt, và khi rã đông lại hiện yêu cầu cấp quyền (Huawei, Smartisan).
- Thanh thông báo liên tục hiện "Quản trị thiết bị đang bật, nhấn để tắt" (OPPO, vivo).
- Tính năng nhân bản ứng dụng có sẵn của hệ thống ngừng hoạt động (Huawei, MIUI).
- Ứng dụng vừa rã đông thỉnh thoảng không kết nối được Internet. Hãy đóng ứng dụng rồi mở lại (OnePlus, Smartisan và một số hãng khác).

Nếu không chấp nhận được những vấn đề này, hãy dùng [chế độ ADB](/guide/adb/). Chế độ này cũng không cần root, nhưng mỗi khi điện thoại khởi động lại, bạn phải kích hoạt lại bằng máy tính.

Ngược lại, chế độ Device Owner không cần cắm máy tính nhiều lần. Chỉ cần thiết lập một lần là dùng mãi, kể cả sau khi khởi động lại hay cập nhật hệ thống.

## Các bước {#steps}

Khi đã quyết định kích hoạt Ice Box ở chế độ Device Owner, hãy làm theo các bước sau:

1. Đảm bảo đã cài Ice Box trên điện thoại. Tắt khóa màn hình. Với điện thoại Sony, hãy tháo thẻ SIM. Với điện thoại Xiaomi, hãy bật "Gỡ lỗi USB (Cài đặt bảo mật)" và tắt "Tối ưu hóa MIUI".
2. Trong phần cài đặt hệ thống, đăng xuất mọi tài khoản, chẳng hạn tài khoản Xiaomi, Huawei và Google. Bạn có thể đăng nhập lại sau khi kích hoạt.
3. Tải và giải nén trình kích hoạt. Hãy giải nén trên máy tính, không giải nén vào bộ nhớ điện thoại.
4. Bật Gỡ lỗi qua USB trên điện thoại và kết nối điện thoại với máy tính bằng cáp USB.
5. Nhấn "Activate Ice Box" (激活冰箱) trong trình kích hoạt.

Khi thành công, hãy mở Ice Box và bắt đầu dùng.

Nếu gặp vấn đề khác, trước tiên hãy kiểm tra xem đã gỡ hết tài khoản hệ thống chưa. Nếu vẫn không được, hãy đối chiếu nhật ký mà trình kích hoạt in ra với [câu hỏi thường gặp về chế độ Device Owner](/guide/device-owner/#faq).

## Câu hỏi thường gặp {#faq}

### Trình kích hoạt cứ tải mãi không xong

Hãy giải nén toàn bộ tệp trong gói trình kích hoạt ra máy tính rồi mới chạy. Đừng giải nén vào bộ nhớ điện thoại, và đừng nhấp đúp vào tệp exe ngay bên trong tệp nén.

### Trình kích hoạt báo không tìm thấy thiết bị

Hãy kiểm tra xem đã bật Gỡ lỗi qua USB chưa, cáp có hỗ trợ truyền dữ liệu không, driver của điện thoại đã được cài trên máy tính chưa, và có phần mềm quản lý điện thoại hay phần mềm diệt virus nào đang chiếm kết nối không.
