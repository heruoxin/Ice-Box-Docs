---
title: Rủi ro khi thiết lập Device Owner trên điện thoại Samsung
short: Lưu ý cho máy Samsung
description: Thiết lập Device Owner trên Samsung có thể làm hỏng Thư mục bảo mật và Dual Messenger, thậm chí khiến mật khẩu màn hình khóa bị đặt lại. Người dùng Samsung hãy đọc kỹ trước khi quyết định.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

Ice Box được xây dựng dựa trên các tính năng Device Owner gốc của Android. Samsung là một trường hợp đặc biệt trong số các hãng điện thoại Android: hãng tự xây dựng một nền tảng bảo mật riêng có tên KNOX.

Sau khi thiết lập và kích hoạt giải pháp không cần root dựa trên Device Owner gốc của Android trên điện thoại Samsung, bạn có thể gặp các vấn đề sau:

- Một số tính năng của KNOX, như Thư mục bảo mật (Secure Folder), có thể không hoạt động.
- Tính năng Dual Messenger có sẵn ngừng hoạt động.
- Hệ thống đặt lại mật khẩu màn hình khóa, buộc bạn phải khôi phục cài đặt gốc và mất dữ liệu.

Các vấn đề này không phải lúc nào cũng xảy ra. Lấy vấn đề nghiêm trọng nhất là mật khẩu màn hình khóa bị đặt lại làm ví dụ: năm 2018, trong khoảng 200.000 người dùng Samsung dùng Ice Box, chúng tôi nhận được tổng cộng 6 báo cáo, và số người thực sự bị ảnh hưởng có thể cao hơn. Từ khi Samsung ra mắt One UI, dường như có nhiều người gặp vấn đề này hơn, vì vậy chúng tôi không khuyên dùng chế độ Device Owner trên One UI.

Hiện tại chúng tôi chưa biết chính xác nguyên nhân của các vấn đề này và cũng chưa có giải pháp tốt.

> [!CAUTION]
> Người dùng Samsung, hãy cân nhắc thật kỹ, thật thật kỹ trước khi dùng chế độ Device Owner.

## Chế độ nên dùng cho người dùng Samsung {#recommended}

- Đã root: dùng [chế độ root](/guide/root/).
- Chưa root, Android 11 trở lên: dùng [chế độ Gỡ lỗi không dây](/guide/wireless-debugging/) hoặc [chế độ Shizuku](/guide/shizuku/).
- Chưa root, có máy tính: dùng [chế độ ADB](/guide/adb/).

Không chế độ nào trong số này cần Device Owner. Trừ chế độ root, tất cả đều cần kích hoạt lại mỗi khi điện thoại khởi động lại.
