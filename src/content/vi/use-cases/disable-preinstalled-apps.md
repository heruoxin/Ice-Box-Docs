---
title: Cách vô hiệu hóa ứng dụng cài sẵn trên Android mà không cần root
short: Vô hiệu hóa ứng dụng cài sẵn
card: Ứng dụng hệ thống cài sẵn không gỡ được vẫn có thể đóng băng, và bạn không cần root để làm việc này.
description: Vô hiệu hóa ứng dụng cài sẵn không cần root: đóng băng ứng dụng cài sẵn và ứng dụng quảng cáo bằng Ice Box để chúng rời khỏi màn hình chính và không thể chạy. Dùng được với Device Owner và nhiều chế độ khác.
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## Trả lời ngắn gọn {#answer}

Hầu hết ứng dụng cài sẵn không thể gỡ cài đặt, nhưng có thể đóng băng. Sau khi được Ice Box đóng băng, chúng biến mất khỏi màn hình chính và ngăn ứng dụng, đồng thời không thể chạy nền. Nếu sau này cần dùng, chỉ cần rã đông trong Ice Box là ứng dụng trở lại. Đóng băng ứng dụng cài sẵn không cần root: các chế độ không root như Device Owner, Gỡ lỗi không dây và ADB đều dùng được.

## Các bước {#steps}

1. [Tải Ice Box](/download/) và kích hoạt theo đề xuất trong [Trung tâm trợ giúp](/guide/).
2. Trong danh sách ứng dụng của Ice Box, chuyển sang mục ứng dụng hệ thống và đánh dấu những ứng dụng cài sẵn mà bạn chắc chắn không cần.
3. Đóng băng chúng. Từ đó trở đi, các ứng dụng này không còn xuất hiện trên màn hình chính hay chạy nền nữa.
4. Muốn lấy lại ứng dụng nào, hãy rã đông nó trong Ice Box.

Bạn cũng có thể nhập "danh sách ứng dụng hệ thống có thể đóng băng an toàn" do người khác chia sẻ. Ice Box sẽ liệt kê những ứng dụng trong danh sách có thể đóng băng trên điện thoại của bạn và đóng băng chúng sau khi bạn xác nhận. Xem [Đóng băng ứng dụng hệ thống cài sẵn](/guide/system-apps/).

## Những điều cần lưu ý {#notes}

- Chỉ đóng băng những ứng dụng bạn chắc chắn không cần. Đóng băng các thành phần quan trọng của hệ thống có thể khiến một số chức năng của điện thoại không hoạt động bình thường.
- Trên MIUI và một số hệ thống khác, một vài ứng dụng quan trọng có thể không đóng băng được, hoặc hệ thống sẽ tự rã đông chúng sau khi khởi động lại.
- Trên điện thoại được thiết lập bằng [mã QR](/guide/qr-code/), hệ thống mặc định không cài các ứng dụng cài sẵn. Nếu cần, bạn có thể kích hoạt chúng trong mục "Thử nghiệm" của Ice Box.
- Thông tin chi tiết cho từng hãng có tại [lưu ý theo từng hãng điện thoại](/guide/devices/).

## Câu hỏi thường gặp {#faq}

### Đóng băng ứng dụng cài sẵn khác gì so với vô hiệu hóa bằng lệnh ADB?

Hiệu quả tương tự nhau, nhưng Ice Box có giao diện trực quan để bạn xem, đóng băng và rã đông ứng dụng bất cứ lúc nào, không cần nhớ lệnh.

### Ứng dụng đã đóng băng có khôi phục được không?

Có. Chỉ cần rã đông ứng dụng trong Ice Box là nó hoạt động bình thường trở lại. Trước khi gỡ cài đặt Ice Box, hãy rã đông tất cả ứng dụng.

### Ứng dụng cài sẵn đã đóng băng có quay lại sau khi cập nhật hệ thống không?

Một số hệ thống tự rã đông các ứng dụng quan trọng sau khi khởi động lại hoặc cập nhật. Nếu gặp trường hợp này, hãy đóng băng lại chúng trong Ice Box.
