---
title: Tính năng của Ice Box
short: Tính năng
description: Tính năng của Ice Box: đóng băng và rã đông bằng một chạm, Tự động đóng băng, lối tắt, nhiều thẻ, chủ đề, gói biểu tượng, khóa ứng dụng, đóng băng ứng dụng hệ thống, SDK, chế độ có root và không root.
section: product
priority: 0.9
related: guide, themes, guide/auto-freeze, developers
---

Ice Box là công cụ đóng băng ứng dụng cho Android. Đưa những ứng dụng ít dùng vào Ice Box, chúng sẽ không thể chạy nền hay hiện trên màn hình chính nữa. Khi cần, chỉ cần nhấn vào ứng dụng, Ice Box sẽ rã đông rồi mở nó.

## Đóng băng và rã đông {#freeze}

- **Đóng băng**: Ứng dụng đã đóng băng không thể chạy, không thể tự khởi động trong nền và được ẩn khỏi màn hình chính và ngăn ứng dụng. Ứng dụng và dữ liệu của nó vẫn được giữ nguyên.
- **Rã đông**: Nhấn vào một ứng dụng trong Ice Box, hoặc nhấn vào lối tắt của nó trên màn hình chính, Ice Box sẽ rã đông rồi mở ứng dụng.
- **Đóng băng tất cả / Rã đông tất cả**: Vuốt hoặc nhấn nút đóng băng ở cuối màn hình Ice Box để đóng băng cùng lúc mọi ứng dụng trong danh sách. "Rã đông tất cả" khôi phục cùng lúc mọi ứng dụng. Bạn có thể đổi vị trí và hướng vuốt của nút đóng băng trong phần cài đặt.
- **Đóng băng + Khóa màn hình**: Đóng băng tất cả ứng dụng và khóa màn hình ngay lập tức chỉ với một chạm.

Tùy chế độ hoạt động, Ice Box đóng băng ứng dụng bằng một trong hai cách mà hệ thống cung cấp: "vô hiệu hóa" (disable) hoặc "ẩn" (hide).

## Tự động đóng băng {#auto-freeze}

Ice Box có thể tự động đóng băng các ứng dụng trong danh sách khi tắt màn hình, hoặc khi bạn nhấn hay nhấn đúp nút Home. Bạn có thể đặt độ trễ sau khi tắt màn hình và chọn không tự động đóng băng khi đang sạc. Xem [Tự động đóng băng](/guide/auto-freeze/).

## Lối tắt trên màn hình chính {#shortcuts}

Tạo lối tắt trên màn hình chính cho ứng dụng đã đóng băng. Nhấn vào lối tắt sẽ rã đông và mở ứng dụng, không cần mở Ice Box trước. Bạn cũng có thể bật tùy chọn tự động thêm lối tắt khi một ứng dụng được thêm vào danh sách đóng băng. Xem [Lối tắt trên màn hình chính](/guide/shortcuts/).

## Nhiều thẻ {#tabs}

Tạo nhiều thẻ để phân loại ứng dụng theo mục đích, như Hằng ngày, Mạng xã hội và Trò chơi. Bạn có thể đổi tên thẻ và chuyển ứng dụng giữa các thẻ. Bạn cũng có thể tự sắp xếp thứ tự ứng dụng trong Ice Box.

## Chủ đề và gói biểu tượng {#themes}

- Hầu như mọi thành phần trên màn hình chính của Ice Box đều có thể đổi màu, có hỗ trợ độ trong suốt.
- Trên Android 12 trở lên, Ice Box có thể dùng màu động của hệ thống. Bạn cũng có thể dùng hình nền làm nền.
- Giao diện sáng và tối có thể tự chuyển theo hệ thống.
- Hỗ trợ gói biểu tượng của bên thứ ba và cho phép chỉnh kích thước biểu tượng.
- Chủ đề có thể chia sẻ và nhập dưới dạng liên kết. Hãy xem các bảng màu người khác đã chia sẻ trong [Chủ đề được chia sẻ](/themes/).

## Khóa vân tay và khóa mã PIN {#lock}

Khi bật, Ice Box sẽ yêu cầu vân tay hoặc mã PIN trước khi mở, và cũng có thể dùng nhận diện khuôn mặt. Khi bật Khóa vân tay, nội dung của Ice Box sẽ được ẩn trên màn hình ứng dụng gần đây.

## Đóng băng ứng dụng hệ thống cài sẵn {#system-apps}

Ngoài những ứng dụng bạn tự cài, Ice Box còn có thể đóng băng một số ứng dụng hệ thống cài sẵn, kể cả ở các chế độ không root. Bạn cũng có thể nhập "danh sách ứng dụng hệ thống có thể đóng băng an toàn" do người khác chia sẻ. Xem [Đóng băng ứng dụng hệ thống cài sẵn](/guide/system-apps/).

## Gợi ý khi có ứng dụng mới {#new-app}

Sau khi bạn cài một ứng dụng mới, Ice Box có thể hiện gợi ý hỏi bạn có muốn thêm nó vào Ice Box hay không.

## Chế độ hoạt động {#modes}

Ice Box có thể lấy quyền hệ thống theo nhiều cách, nên dùng được trên cả điện thoại đã root và chưa root:

[[mode-cards]]

Chưa biết chọn chế độ nào? Trả lời ba câu hỏi trong [Trung tâm trợ giúp](/guide/) để nhận đề xuất.

## SDK mở và tích hợp {#sdk}

- **Ice Box SDK**: Khi được người dùng cho phép, các ứng dụng khác có thể đóng băng và rã đông ứng dụng thông qua Ice Box. Ở chế độ Device Owner, chúng còn có thể cài đặt và gỡ cài đặt APK im lặng. Mọi thao tác do ứng dụng bên thứ ba thực hiện đều được ghi lại trong trung tâm nhật ký của Ice Box. Xem [Dành cho nhà phát triển](/developers/).
- **Cấu hình trong ứng dụng khác**: Hỗ trợ lối vào "Thông tin ứng dụng" của Android, nên Ice Box phối hợp được với các ứng dụng như Greenify và AppOps.
- **Island**: Mọi tính năng của Ice Box cũng dùng được bên trong hồ sơ công việc của Island.

## Phiên bản và yêu cầu {#requirements}

- Điện thoại và máy tính bảng chạy Android 7.0 trở lên.
- Tải xuống miễn phí. Một số tính năng cần nâng cấp lên bản Pro. Nếu có gì khác biệt, mô tả trong ứng dụng là căn cứ.
- Thay đổi của mỗi phiên bản đều có trong [nhật ký thay đổi](/changelog/).

[[download-buttons]]
