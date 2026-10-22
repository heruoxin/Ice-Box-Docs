---
title: Đóng băng ứng dụng hệ thống cài sẵn
short: Đóng băng ứng dụng cài sẵn
description: Ice Box có thể đóng băng một số ứng dụng hệ thống cài sẵn, kể cả ở các chế độ không cần root. Những điều cần kiểm tra trước, ứng dụng không thể đóng băng, danh sách chia sẻ và cách cập nhật ứng dụng đã đóng băng.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Nhiều điện thoại có sẵn rất nhiều phần mềm cài sẵn và ứng dụng quảng cáo mà bạn sẽ không bao giờ dùng. Ice Box có thể đóng băng các ứng dụng cài sẵn này: chúng sẽ không chạy trong nền và không xuất hiện trên màn hình chính. Khi cần, chỉ cần rã đông trong Ice Box là dùng lại được.

## Trước khi đóng băng {#before}

- Chỉ đóng băng những ứng dụng bạn chắc chắn không cần. Nếu không chắc, đừng đóng băng. Đóng băng các thành phần hệ thống quan trọng có thể khiến điện thoại hoạt động bất thường.
- Một số hệ thống xử lý các ứng dụng quan trọng theo cách riêng: trên MIUI và các hệ thống tương tự, một số ứng dụng quan trọng có thể không đóng băng được, hoặc bị hệ thống buộc rã đông sau khi khởi động lại.
- Trên các phiên bản EMUI mới, ứng dụng màn hình chính của Huawei không còn đóng băng được.
- Ứng dụng đang chạy với quyền quản trị thiết bị thì không thể đóng băng. Hãy gỡ quyền của ứng dụng đó trong "Cài đặt > Bảo mật > Ứng dụng quản trị thiết bị" trước, rồi mới đóng băng.

## Nhập danh sách đóng băng được chia sẻ {#lists}

Ice Box có thể chia sẻ và nhập danh sách các ứng dụng hệ thống có thể đóng băng an toàn. Khi bạn mở một liên kết danh sách do người khác chia sẻ, Ice Box sẽ liệt kê các ứng dụng trong đó có thể đóng băng trên điện thoại của bạn, và đóng băng chúng sau khi bạn xác nhận từng ứng dụng.

Bạn cũng có thể sao chép văn bản được chia sẻ rồi nhấn "Nhập từ bảng nhớ tạm" trong phần cài đặt của Ice Box.


## Ứng dụng cài sẵn sau khi thiết lập bằng mã QR {#qr}

Trên điện thoại được thiết lập bằng [mã QR](/guide/qr-code/), theo mặc định hệ thống sẽ không cài các ứng dụng cài sẵn. Khi cần một trong số đó, hãy vào "Thử nghiệm" trong phần cài đặt của Ice Box, nhấn "Kích hoạt ứng dụng hệ thống cài sẵn" và chọn các ứng dụng cần cài.

## Câu hỏi thường gặp {#faq}

### Làm sao cập nhật ứng dụng đã đóng băng?

Nếu bạn dùng CoolApk (酷安), một kho ứng dụng Android của Trung Quốc, hãy bật "Hiển thị ứng dụng ẩn" trong phần thử nghiệm ở cài đặt của CoolApk. Với các kho ứng dụng khác, hãy rã đông ứng dụng trong Ice Box trước, rồi đóng băng lại sau khi cập nhật.

### Một số ứng dụng hệ thống không đóng băng được, hoặc lặng lẽ bị rã đông sau khi khởi động lại

Đây là cơ chế bảo vệ ứng dụng quan trọng của hệ thống, Ice Box không thể vượt qua. MIUI và một số hệ thống khác có cơ chế này.
