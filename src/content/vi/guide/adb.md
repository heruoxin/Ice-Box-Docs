---
title: "Chế độ ADB: kích hoạt Ice Box bằng máy tính"
short: Chế độ ADB
description: Không thiết lập được Device Owner, hoặc muốn giữ lại tài khoản? Hãy kích hoạt Ice Box qua ADB trên máy tính (chế độ ADB đơn giản). Không cần root, nhưng phải kích hoạt lại sau mỗi lần khởi động lại.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

Nếu bạn không thiết lập được [chế độ Device Owner](/guide/device-owner/), hoặc không muốn gỡ các tài khoản trên điện thoại, bạn có thể dùng chế độ ADB (còn gọi là chế độ ADB đơn giản). Điểm khác so với chế độ Device Owner:

- **Ưu điểm**: không cần các bước phức tạp như gỡ tài khoản. Kích hoạt xong là dùng được ngay.
- **Nhược điểm**: mỗi lần điện thoại khởi động lại, bạn cần kích hoạt lại. Nếu không, sẽ không đóng băng hay rã đông được ứng dụng.

Trong Ice Box, chế độ ADB hiển thị là chế độ hoạt động "Gỡ lỗi không dây". Trên Android 11 trở lên, bạn cũng có thể kích hoạt ngay trên điện thoại mà không cần máy tính. Xem [chế độ Gỡ lỗi không dây](/guide/wireless-debugging/).

## Các bước kích hoạt {#steps}

1. Đảm bảo đã cài phiên bản Ice Box mới nhất.
2. Bật Gỡ lỗi qua USB trên điện thoại và luôn để bật. Đặt chế độ kết nối USB thành "Chỉ sạc". Với điện thoại Xiaomi, bạn còn cần bật "Gỡ lỗi USB (Cài đặt bảo mật)".
3. Kết nối điện thoại với máy tính, mở trình kích hoạt và chọn chế độ ADB để kích hoạt.

[[activator-download]]

Nếu bạn đã quen với lệnh ADB, có thể bỏ qua trình kích hoạt và chạy lệnh này trên máy tính:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## Câu hỏi thường gặp {#faq}

### Trình kích hoạt cứ tải mãi không xong

Hãy giải nén toàn bộ tệp trong gói trình kích hoạt ra máy tính rồi mới chạy. Đừng giải nén vào bộ nhớ điện thoại, và đừng nhấp đúp vào tệp exe ngay bên trong tệp nén.

### Ice Box ngừng hoạt động ngay sau khi rút cáp

Hãy luôn bật Gỡ lỗi qua USB, và giữ nguyên chế độ kết nối USB ở "Chỉ sạc", không thay đổi. Với điện thoại Xiaomi, cũng cần bật "Gỡ lỗi USB (Cài đặt bảo mật)". Thay đổi bất kỳ công tắc nào trong số này sẽ khiến hệ thống tự động thu hồi quyền của Ice Box.

### Không đóng băng hay rã đông được sau khi khởi động lại điện thoại

Đây là điều bình thường ở chế độ ADB. Sau khi khởi động lại, hãy kết nối máy tính và kích hoạt lại, hoặc trên Android 11 trở lên, kích hoạt lại bằng [Gỡ lỗi không dây](/guide/wireless-debugging/).
