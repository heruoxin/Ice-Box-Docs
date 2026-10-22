---
title: Cách ngăn ứng dụng Android chạy trong nền
short: Ngăn ứng dụng chạy nền
card: Đưa những ứng dụng ít dùng vào Ice Box, chúng sẽ không thể tự khởi động, chạy nền hay tiêu hao pin và dữ liệu.
description: Ngăn ứng dụng Android chạy nền: đóng băng các ứng dụng tự khởi động bằng Ice Box và rã đông bằng một chạm khi cần. Dùng được cả khi không root.
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## Trả lời ngắn gọn {#answer}

Hãy đóng băng chúng. Ứng dụng đã đóng băng không thể chạy, nên không thể tự khởi động hay chạy liên tục trong nền, và không dùng pin hay dữ liệu ở đó. Ice Box có thể đóng băng các ứng dụng này bằng một chạm. Khi cần dùng, hãy nhấn vào ứng dụng để rã đông và mở nó, dùng xong Ice Box sẽ tự động đóng băng lại. Ice Box hoạt động trên cả điện thoại đã root và chưa root.

## Vì sao ứng dụng chạy trong nền? {#why}

Nhiều ứng dụng tự khởi động khi điện thoại bật máy, kết nối mạng, bắt đầu sạc hoặc nhận thông báo đẩy, kể cả khi bạn đã lâu không mở chúng. "Buộc dừng" của Android chỉ dừng ứng dụng một lần. Sau đó, ứng dụng vẫn có thể tự khởi động lại.

Đóng băng thì khác: một khi ứng dụng đã bị đóng băng, hệ thống sẽ không khởi động lại nó cho đến khi bạn rã đông trong Ice Box.

## Ngăn ứng dụng chạy nền bằng Ice Box {#steps}

1. [Tải Ice Box](/download/) và kích hoạt theo đề xuất trong [Trung tâm trợ giúp](/guide/).
2. Trong danh sách ứng dụng của Ice Box, đánh dấu những ứng dụng bạn ít dùng nhưng không muốn gỡ cài đặt.
3. Nhấn hoặc vuốt nút đóng băng ở cuối màn hình Ice Box để đóng băng các ứng dụng này.
4. Khi cần dùng, hãy nhấn vào ứng dụng trong Ice Box hoặc lối tắt của nó trên màn hình chính. Ice Box sẽ rã đông trước rồi mở ứng dụng.
5. Bật [Tự động đóng băng](/guide/auto-freeze/), Ice Box sẽ tự động đóng băng lại chúng khi tắt màn hình.

## Những điều cần lưu ý {#notes}

- Ứng dụng đã đóng băng không thể tự nhận thông báo đẩy của mình. Trên các điện thoại như OPPO, vivo và OnePlus, một số ứng dụng dùng dịch vụ đẩy của hệ thống nên vẫn có thể hiện thông báo, nhưng bản thân ứng dụng không chạy.
- Những ứng dụng cần hoạt động liên tục trong nền, như ứng dụng trò chuyện phải nhận tin nhắn ngay lập tức, đồng hồ báo thức và ứng dụng dẫn đường, không nên đóng băng.
- Tự động đóng băng cần Ice Box chạy trong nền. Xem [Tự động đóng băng](/guide/auto-freeze/) để thiết lập quyền chạy nền cho Ice Box.

## Câu hỏi thường gặp {#faq}

### Đóng băng khác gì so với "Buộc dừng"?

"Buộc dừng" chỉ dừng ứng dụng đang chạy ở thời điểm đó, sau này các sự kiện khác vẫn có thể đánh thức nó. Ứng dụng đã đóng băng thì hoàn toàn không thể chạy cho đến khi được rã đông.

### Có dùng được khi không root không?

Có. Ice Box hỗ trợ các chế độ hoạt động không cần root như Device Owner, Gỡ lỗi không dây, ADB và Shizuku. Trả lời ba câu hỏi trong [Trung tâm trợ giúp](/guide/#modes) để tìm chế độ phù hợp với bạn.

### Đóng băng có xóa dữ liệu ứng dụng không?

Không. Đóng băng chỉ tạm thời không cho ứng dụng chạy. Mọi dữ liệu của ứng dụng đều được giữ nguyên, sau khi rã đông bạn vẫn dùng tiếp bình thường.
