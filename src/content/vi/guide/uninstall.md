---
title: Cách gỡ cài đặt Ice Box và gỡ quyền Device Owner
short: Gỡ cài đặt Ice Box
description: Hãy rã đông tất cả ứng dụng trước khi gỡ cài đặt Ice Box. Ở chế độ Device Owner, hãy gỡ từ phần cài đặt của Ice Box, không gỡ từ màn hình chính, nếu không sẽ không rã đông được các ứng dụng đã đóng băng.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Chỉ Ice Box mới rã đông được những ứng dụng do nó đóng băng. Trước khi gỡ cài đặt Ice Box, hãy kiểm tra kỹ để chắc chắn mọi ứng dụng đều đã được rã đông.

## Các bước gỡ cài đặt {#steps}

1. Mở Ice Box, dùng "Rã đông tất cả" để rã đông mọi ứng dụng trong Ice Box, rồi kiểm tra xem tất cả đã xuất hiện lại trên màn hình chính chưa.
2. Vào phần cài đặt của Ice Box và nhấn "Gỡ cài đặt".
3. Sau khi bạn xác nhận, Ice Box sẽ tự gỡ quyền Device Owner của mình (nếu có) và hoàn tất việc gỡ cài đặt.

> [!WARNING]
> Khi dùng chế độ Device Owner, **đừng gỡ cài đặt Ice Box trực tiếp từ màn hình chính**. Trên Xiaomi và một số điện thoại khác, làm vậy sẽ mất quyền Device Owner, và các ứng dụng đã đóng băng sẽ không bao giờ rã đông lại được.

## Lưu ý cho từng chế độ hoạt động {#modes}

- **Chế độ Device Owner**: bạn phải gỡ quyền Device Owner bằng nút "Gỡ cài đặt" trong phần cài đặt của Ice Box. Nếu không, hệ thống sẽ không cho bạn gỡ cài đặt.
- **Chế độ root, Gỡ lỗi không dây, ADB và Shizuku**: cũng vậy, hãy rã đông tất cả trước, rồi mới gỡ cài đặt Ice Box.
- Nếu bạn đã từng chuyển chế độ hoạt động, hãy chuyển về chế độ đã dùng để đóng băng rồi mới rã đông. Các chế độ hoạt động không tương thích với nhau.

## Quên rã đông trước khi gỡ cài đặt? {#already-removed}

- **Chế độ root, Gỡ lỗi không dây, ADB và Shizuku**: cài lại Ice Box, chuyển sang chế độ hoạt động đã dùng để đóng băng, rồi tìm các ứng dụng đã đóng băng trong danh sách ứng dụng và rã đông chúng.
- **Chế độ Device Owner**: gỡ Ice Box trực tiếp sẽ làm mất quyền Device Owner, và các ứng dụng đã đóng băng sẽ không thể rã đông được nữa. Vì vậy, hãy nhớ làm theo các bước ở trên và gỡ cài đặt từ phần cài đặt của Ice Box.
