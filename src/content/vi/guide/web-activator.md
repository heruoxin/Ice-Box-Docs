---
title: Kích hoạt Ice Box bằng trình kích hoạt trên web
short: Trình kích hoạt trên web
description: "Không cần cài đặt: kích hoạt chế độ Device Owner hoặc chế độ ADB cho Ice Box bằng trình kích hoạt trên web, chạy trong trình duyệt qua WebUSB. Dùng được trên Windows, macOS, Linux. Nên dùng Chrome."
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

Trình kích hoạt trên web do [@web1n](https://github.com/web1n) phát triển. Công cụ này làm cùng việc với trình kích hoạt dạng exe và dùng được trên mọi hệ điều hành máy tính. Chúng tôi khuyên dùng Chrome.

[Mở trình kích hoạt trên web](https://adb.http.gs/icebox.html)

Trình kích hoạt trên web có thể kích hoạt hai chế độ:

- **Chế độ Device Owner**: kích hoạt một lần là dùng mãi, nhưng có thể gây tác dụng phụ trên một số điện thoại.
- **Chế độ ADB**: không có tác dụng phụ, nhưng mỗi khi điện thoại khởi động lại hoặc cài đặt USB của hệ thống bị thay đổi, bạn cần kết nối máy tính và kích hoạt lại.

## Tác dụng phụ có thể gặp ở chế độ Device Owner {#side-effects}

Hệ thống trên điện thoại Samsung và điện thoại của các hãng Trung Quốc thường tùy biến Android, gây ra một số vấn đề tương thích với chế độ Device Owner. Các vấn đề thường gặp:

- Điện thoại Samsung có thể bị hệ thống khóa bằng mật khẩu (số báo cáo đến nay vào khoảng 4 trên 200.000). Hãy đọc [lưu ý cho máy Samsung](/guide/samsung-device-owner/) trước.
- Mỗi lần đóng băng ứng dụng lại hiện hộp thoại gỡ cài đặt, và khi rã đông lại hiện yêu cầu cấp quyền (Huawei, Smartisan).
- Thanh thông báo liên tục hiện "Quản trị thiết bị đang bật, nhấn để tắt" (OPPO, vivo).
- Tính năng nhân bản ứng dụng có sẵn của hệ thống ngừng hoạt động (Huawei, MIUI).
- Ứng dụng vừa rã đông thỉnh thoảng không kết nối được Internet. Hãy đóng ứng dụng rồi mở lại (OnePlus, Smartisan và một số hãng khác).

Nếu không chấp nhận được những vấn đề này, hãy chọn chế độ ADB. Chế độ này cũng không cần root, nhưng mỗi khi điện thoại khởi động lại, bạn phải kích hoạt lại bằng máy tính.

## Cách kích hoạt {#steps}

1. Đảm bảo đã cài Ice Box trên điện thoại. Tắt khóa màn hình. Với điện thoại Sony, hãy tháo thẻ SIM. Với điện thoại Xiaomi, hãy bật "Gỡ lỗi USB (Cài đặt bảo mật)" và tắt "Tối ưu hóa MIUI".
2. Kết nối điện thoại với máy tính bằng cáp USB, và đóng mọi phần mềm bảo mật, phần mềm quản lý điện thoại trên máy tính.
3. Trên máy tính, mở [trình kích hoạt trên web](https://adb.http.gs/icebox.html) bằng Chrome, rồi kết nối thiết bị và kích hoạt.

Trước khi kích hoạt chế độ Device Owner, bạn cũng cần đăng xuất mọi tài khoản trên điện thoại. Xem [Thiết lập chế độ Device Owner](/guide/device-owner/#steps).
