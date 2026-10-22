---
title: Kích hoạt Ice Box bằng Shizuku
short: Chế độ Shizuku
description: Cài Shizuku và khởi động nó bằng Gỡ lỗi không dây, Ice Box sẽ hoạt động mà không cần root hay máy tính. Điện thoại đã root cũng có thể dùng Sui. Xem các bước và lưu ý bên trong.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/) là công cụ giúp các ứng dụng khác có được quyền hệ thống. Khi đã cài Shizuku, bạn có thể dùng tính năng "Gỡ lỗi không dây" của hệ thống để kích hoạt Ice Box mà không cần root hay máy tính.

Trước khi bắt đầu, hãy lưu ý:

- Khởi động Shizuku bằng Gỡ lỗi không dây cần Android 11 trở lên.
- Sau khi điện thoại khởi động lại, bạn cần khởi động lại Shizuku. Nếu không, Ice Box sẽ không đóng băng hay rã đông được ứng dụng.
- Khi dịch vụ Shizuku ngừng chạy, các ứng dụng đã đóng băng cũng không thể rã đông. Mọi thứ sẽ hoạt động bình thường trở lại khi dịch vụ Shizuku chạy lại.

## Các bước kích hoạt {#steps}

1. Cài Shizuku trên điện thoại từ [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) hoặc [CoolApk (酷安)](https://www.coolapk.com/), một kho ứng dụng Android của Trung Quốc.
2. Làm theo [hướng dẫn chính thức của Shizuku](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) để khởi động Shizuku bằng Gỡ lỗi không dây.
3. Mở Ice Box, chọn "Shizuku Manager" trong "Chuyển chế độ hoạt động", và cho phép Ice Box khi Shizuku hỏi.

Sau đó, Ice Box đã sẵn sàng để dùng. Sau khi khởi động lại điện thoại, hãy khởi động Shizuku trước.

## Điện thoại đã root: dùng Sui {#sui}

Sui là phiên bản root của Shizuku. Sui chạy dưới dạng module Magisk và tự khởi động sau khi khởi động lại máy. Ice Box cũng hỗ trợ Sui. Sau khi cài, hãy chọn "Sui" trong "Chuyển chế độ hoạt động" của Ice Box.

Điện thoại đã root cũng có thể dùng thẳng [chế độ root](/guide/root/).

## Câu hỏi thường gặp {#faq}

### Ứng dụng báo "Không cấp được quyền Shizuku"

Hãy đảm bảo dịch vụ Shizuku đang chạy, và cấp quyền cho Ice Box trong Shizuku.

### Shizuku không hoạt động với Ice Box trên điện thoại Xiaomi

Từ MIUI 11, việc chuyển giao quyền giữa các ứng dụng bên thứ ba có thể thất bại. Trước tiên, hãy tắt "Tối ưu hóa MIUI". Sau đó nhấn giữ biểu tượng Ice Box trên màn hình chính, mở Thông tin ứng dụng, rồi tự bật "Quyền khác" trong phần cài đặt quyền.
