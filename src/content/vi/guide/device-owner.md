---
title: Thiết lập chế độ Device Owner
short: Chế độ Device Owner
description: Thiết lập chế độ Device Owner của Ice Box mà không cần root, chỉ cần tạm gỡ các tài khoản và chạy một lệnh ADB trên máy tính. Vẫn hoạt động sau khi khởi động lại và cập nhật hệ thống.
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

Nếu điện thoại đã root, bạn chỉ cần mở Ice Box và bắt đầu dùng, không cần thiết lập thêm. Nếu điện thoại không thể root và bạn muốn thiết lập một lần rồi dùng mãi, hãy chọn chế độ Device Owner. Việc thiết lập cần máy tính, vì vậy hãy đọc hết trang này trước.

## Device Owner là gì? {#what}

Device Owner (chủ sở hữu thiết bị) là một tính năng thuộc bộ khung quản lý doanh nghiệp của Android. Nó có thể đóng băng và rã đông bất kỳ ứng dụng nào mà không cần root. Ice Box chỉ dùng những khả năng liên quan, chẳng hạn như đóng băng ứng dụng.

- Mỗi điện thoại chỉ có thể có một Device Owner tại một thời điểm.
- Chỉ có thể đặt Device Owner bằng lệnh ADB hoặc mã QR. Bật Ice Box trong mục "Ứng dụng quản trị thiết bị" ở phần cài đặt điện thoại sẽ không có tác dụng và không cấp được quyền này.
- Sau khi đặt xong, bạn không cần thiết lập lại sau khi khởi động lại hay cập nhật hệ thống.

## Đọc trước khi bắt đầu {#before}

Hệ thống của các hãng điện thoại Trung Quốc thường thêm nhiều tính năng tùy biến riêng, gây ra một số vấn đề tương thích với chế độ Device Owner. Các vấn đề thường gặp:

- Điện thoại Samsung có thể bị hệ thống khóa bằng mật khẩu. Hãy nhớ đọc [lưu ý cho máy Samsung](/guide/samsung-device-owner/) trước.
- Mỗi lần đóng băng ứng dụng lại hiện hộp thoại gỡ cài đặt, và khi rã đông lại hiện yêu cầu cấp quyền (Huawei, Smartisan).
- Thanh thông báo liên tục hiện "Quản trị thiết bị đang bật, nhấn để tắt" (OPPO, vivo).
- Tính năng nhân bản ứng dụng có sẵn của hệ thống ngừng hoạt động (Huawei, MIUI).
- Ứng dụng vừa rã đông thỉnh thoảng không kết nối được Internet. Hãy đóng ứng dụng rồi mở lại (OnePlus, Smartisan và một số hãng khác).

Nếu không chấp nhận được những vấn đề này, hãy cân nhắc [chế độ ADB](/guide/adb/) hoặc [chế độ Gỡ lỗi không dây](/guide/wireless-debugging/). Hai chế độ này cũng không cần root, nhưng bạn phải kích hoạt lại mỗi khi điện thoại khởi động lại.

## Dùng trình kích hoạt hay dòng lệnh? {#tools}

Nếu bạn không quen với ADB và dòng lệnh, hãy dùng một trong các công cụ kích hoạt. Kết quả hoàn toàn giống như khi dùng dòng lệnh:

- [Trình kích hoạt một chạm](/guide/activator/): dành cho máy tính Windows.
- [Trình kích hoạt trên web](/guide/web-activator/): dùng được trên Windows, macOS và Linux. Nên dùng Chrome.
- [AutumnBox (秋之盒)](/guide/autumnbox/): dành cho máy tính Windows.

Không có máy tính? Hãy thử [thiết lập bằng mã QR](/guide/qr-code/). Kết quả hoàn toàn giống nhau, nhưng cần khôi phục cài đặt gốc trước, và một số hệ thống của các hãng điện thoại Trung Quốc không hỗ trợ cách này.

## Thiết lập bằng dòng lệnh {#steps}

1. Đảm bảo điện thoại chạy Android 7.0 trở lên và đã cài phiên bản Ice Box mới nhất. Đảm bảo bạn biết cách dùng lệnh [ADB](https://developer.android.com/tools/adb) và đã đọc hết trang này.
2. Với điện thoại Sony, hãy tháo thẻ SIM. Với điện thoại Xiaomi, hãy bật "Gỡ lỗi USB (Cài đặt bảo mật)" trong Tùy chọn cho nhà phát triển và tắt "Tối ưu hóa MIUI".
3. Vào "Cài đặt > Tài khoản" trên điện thoại và gỡ mọi tài khoản, kể cả tài khoản hệ thống như tài khoản Google, Xiaomi và Huawei. Bạn có thể đăng nhập lại sau khi thiết lập xong.
4. Nếu bạn đã thiết lập nhiều người dùng, chế độ khách hoặc nhân bản ứng dụng, hãy tắt hoặc gỡ chúng. Bạn có thể bật lại sau khi thiết lập xong.
5. Chạy lệnh bên dưới trên máy tính (trình giả lập terminal trên điện thoại sẽ không dùng được).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

Nếu thấy dòng chữ kiểu như "Success", bạn đã thiết lập thành công. Hãy mở Ice Box và bắt đầu dùng. Bạn cũng có thể thêm lại các tài khoản đã gỡ.

ADB có bản tải chính thức từ Google: [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## Thiết lập không thành công? {#faq}

### Báo lỗi "'adb' is not recognized as an internal or external command, operable program or batch file"

Có thể bạn chưa quen dùng dòng lệnh trên máy tính. Chúng tôi khuyên bạn kích hoạt bằng [trình kích hoạt một chạm](/guide/activator/) hoặc [trình kích hoạt trên web](/guide/web-activator/).

### Trình kích hoạt cứ tải mãi không xong

Hãy giải nén toàn bộ tệp trong gói trình kích hoạt ra máy tính rồi mới chạy. Đừng giải nén vào bộ nhớ điện thoại, và đừng nhấp đúp vào tệp exe ngay bên trong tệp nén.

### Báo lỗi "error: no devices/emulators found"

Điện thoại chưa kết nối với máy tính. Hãy kiểm tra xem đã bật Gỡ lỗi qua USB chưa, driver của điện thoại đã được cài đúng trên máy tính chưa, và có phần mềm quản lý điện thoại hay phần mềm diệt virus nào đang chặn kết nối không.

### Báo lỗi "Not allowed to ... already several accounts on the device"

Chưa gỡ hết tài khoản ở bước 3. Hãy đăng xuất mọi tài khoản trên điện thoại, kể cả tài khoản Google và các tài khoản hệ thống có sẵn như tài khoản Xiaomi, Huawei. Với điện thoại Sony, hãy tháo thẻ SIM rồi khởi động lại.

### Báo lỗi "Not allowed to ... already several users on the device"

Chưa gỡ hết nhiều người dùng hoặc nhân bản ứng dụng ở bước 4. Hãy gỡ hoặc tắt mọi người dùng phụ, chế độ khách và nhân bản ứng dụng.

### Báo lỗi "Trying to set the device owner, but device owner is already set."

Một ứng dụng khác trên điện thoại đã được đặt làm Device Owner, mà mỗi điện thoại chỉ có thể có một Device Owner. Nếu ứng dụng đó tương thích với Ice Box, như Island hoặc BlackHouse (小黑屋), hãy chuyển Ice Box sang chế độ hoạt động tương ứng là dùng được ngay. Xem [các chế độ hoạt động khác](/guide/other-modes/).

### Điện thoại Xiaomi báo "Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS"

Trong Tùy chọn cho nhà phát triển ở phần cài đặt hệ thống, hãy tự bật "Gỡ lỗi USB (Cài đặt bảo mật)". Nếu vẫn thất bại, hãy tắt "Tối ưu hóa MIUI" rồi thử lại.

## Câu hỏi sau khi thiết lập thành công {#faq-after}

### Thanh thông báo hiện dòng chữ kiểu như "Thiết bị này do tổ chức của bạn quản lý", có bình thường không?

Có. Đây là cách chế độ Device Owner hoạt động. Dòng chữ này do hệ thống hiển thị và không thể xóa, nhưng bạn có thể đổi "Tên tổ chức" trong mục "Thử nghiệm" của Ice Box thành bất kỳ nội dung nào bạn thích.

### Phần cài đặt của một số điện thoại nói Device Owner có thể đọc thông tin cá nhân như lịch và email. Ice Box có đọc không?

Không. Ice Box chỉ dùng các quyền Device Owner liên quan đến việc đóng băng ứng dụng. Ice Box không dùng các quyền không liên quan và không bao giờ đọc lịch, email hay thông tin tương tự của bạn.

### Làm sao gỡ quyền của Ice Box khi không muốn dùng nữa?

Hãy rã đông tất cả ứng dụng trước, rồi nhấn "Gỡ cài đặt" trong phần cài đặt của Ice Box. Sau khi bạn xác nhận, Ice Box sẽ gỡ quyền Device Owner và tự gỡ cài đặt. Xem [Gỡ cài đặt Ice Box](/guide/uninstall/).

### Tại sao tôi không rã đông được những ứng dụng đã đóng băng trước đó ở chế độ root hoặc ADB?

Các chế độ hoạt động không tương thích với nhau. Hãy chuyển về chế độ hoạt động trước đây trong mục "Thử nghiệm" của Ice Box. Ứng dụng phải được rã đông ở đúng chế độ đã đóng băng nó.
