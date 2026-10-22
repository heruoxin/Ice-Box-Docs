---
title: "Chế độ Gỡ lỗi không dây: kích hoạt Ice Box không cần root hay máy tính"
short: Chế độ Gỡ lỗi không dây
description: Trên Android 11 trở lên, hãy kích hoạt Ice Box bằng tính năng Gỡ lỗi không dây của hệ thống, không cần root và không cần máy tính. Đầy đủ các bước, mẹo ghép nối và câu hỏi thường gặp.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

Chế độ Gỡ lỗi không dây không cần root cũng không cần máy tính. Ice Box dùng tính năng "Gỡ lỗi không dây" của hệ thống để có được quyền cần thiết cho việc đóng băng ứng dụng, và toàn bộ quá trình diễn ra ngay trên điện thoại.

Trước khi bắt đầu, hãy lưu ý:

- Cần Android 11 trở lên.
- Bạn cần kết nối Wi-Fi trong lúc ghép nối. Mạng Wi-Fi nào cũng được.
- Sau khi điện thoại khởi động lại, bạn cần bật lại công tắc "Gỡ lỗi không dây". Nếu không, Ice Box sẽ không đóng băng hay rã đông được ứng dụng.

Nếu điện thoại của bạn chạy phiên bản cũ hơn Android 11, hoặc bạn muốn kích hoạt bằng máy tính, hãy xem [chế độ ADB](/guide/adb/).

## Trước khi bắt đầu {#before}

Ice Box sẽ kiểm tra từng mục dưới đây trên trang thiết lập. Nhấn vào mục nào chưa đạt để đi thẳng đến phần cài đặt tương ứng:

1. **Tạm thời tắt VPN**. Bạn có thể bật lại sau khi ghép nối.
2. **Cho phép Ice Box gửi thông báo**. Bạn sẽ nhập mã ghép nối trong thông báo của Ice Box.
3. **Bật Gỡ lỗi qua USB**. Nếu chưa bật Tùy chọn cho nhà phát triển, hãy xem phần tiếp theo.
4. **Kết nối Wi-Fi**. Mạng Wi-Fi nào cũng được.
5. **Cho phép Ice Box chạy trong nền**. Trên một số điện thoại, bạn cần đặt mức sử dụng pin trong nền của Ice Box thành "Không hạn chế" trong cài đặt hệ thống.

## Cách bật Gỡ lỗi qua USB {#usb-debugging}

1. Mở "Cài đặt", tìm "Giới thiệu về điện thoại", rồi nhấn liên tục 7 lần vào "Số bản dựng" cho đến khi thấy thông báo cho biết chế độ nhà phát triển đã được bật.
2. Quay lại "Cài đặt", tìm "Tùy chọn cho nhà phát triển" trong mục "Hệ thống" hoặc "Cài đặt bổ sung", rồi bật công tắc "Gỡ lỗi qua USB".

Vị trí các mục có thể khác nhau tùy hãng và phiên bản hệ thống. Ice Box có hình minh họa từng bước cho các hãng phổ biến để bạn làm theo.

## Lấy mã ghép nối trong ba bước {#pairing}

1. Trong Tùy chọn cho nhà phát triển, tìm "Gỡ lỗi không dây", bật lên và nhấn vào để mở trang cài đặt của nó.
2. Chọn "Ghép nối thiết bị bằng mã ghép nối".
3. Giữ nguyên hộp thoại hiện mã ghép nối, vuốt bảng thông báo xuống và nhập mã ghép nối gồm 6 chữ số vào thông báo của Ice Box.

Khi ghép nối thành công, Ice Box sẽ hiện "Đã bật Gỡ lỗi không dây" và sẵn sàng để dùng. Nếu gặp khó khăn khi ghép nối, bạn có thể mở video hướng dẫn có sẵn trong Ice Box.

> [!TIP]
> Nếu không thấy "Gỡ lỗi không dây" trong Tùy chọn cho nhà phát triển, rất có thể bạn chưa bật Tùy chọn cho nhà phát triển. Hãy làm các bước ở phần trước.

## Sau khi khởi động lại điện thoại {#after-reboot}

Khi điện thoại khởi động lại, hệ thống sẽ thu hồi quyền của Ice Box. Hãy vào lại Tùy chọn cho nhà phát triển và bật công tắc "Gỡ lỗi không dây", Ice Box sẽ hoạt động trở lại. Ice Box sẽ nhắc bạn bật bằng một thông báo.

## Câu hỏi thường gặp {#faq}

### Khi ghép nối, ứng dụng báo "Hãy tắt VPN và tắt tối ưu hóa pin"

Ice Box không kết nối được với dịch vụ gỡ lỗi không dây của hệ thống. Hãy tắt VPN và mọi ứng dụng proxy, tắt tối ưu hóa pin cho Ice Box trong cài đặt hệ thống, rồi thử lại.

### Ứng dụng báo "Mã ghép nối không đúng" hoặc "Mã đã hết hạn"

Mã ghép nối chỉ có hiệu lực khi hộp thoại của nó còn đang hiện. Hãy lấy mã ghép nối mới và nhập nhanh trong lúc hộp thoại vẫn mở.

### Không thấy ô nhập mã trong thông báo

Hãy đảm bảo Ice Box được phép gửi thông báo. Một số hệ thống sẽ thu gọn thông báo. Nhấn nút mở rộng ở bên phải thông báo để thấy ô nhập mã.

### Điện thoại Xiaomi, Huawei, OPPO hoặc hãng khác báo không đủ quyền ADB

Hãy bật tùy chọn tương ứng với hãng của bạn trong Tùy chọn cho nhà phát triển. Trên điện thoại Xiaomi, bật "Gỡ lỗi USB (Cài đặt bảo mật)". Trên điện thoại Huawei, bật "Cho phép gỡ lỗi ADB ở chế độ chỉ sạc". Trên điện thoại OPPO và OnePlus, bật "Tắt giám sát quyền". Với các hãng khác, hãy bật tùy chọn tương tự nếu cần. Xem thêm [lưu ý theo hãng điện thoại](/guide/devices/).
