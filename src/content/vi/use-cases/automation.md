---
title: Cách tự động đóng băng và rã đông ứng dụng trên Android
short: Tự động hóa và tích hợp cho nhà phát triển
card: Tự động đóng băng khi tắt màn hình, thao tác một chạm trên màn hình chính, hoặc để ứng dụng khác đóng băng qua Ice Box bằng SDK.
description: Tự động đóng băng và rã đông trên Android với Ice Box: Tự động đóng băng, lối tắt Đóng băng tất cả và Rã đông tất cả, cùng SDK mở để tích hợp vào ứng dụng của bạn.
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## Trả lời ngắn gọn {#answer}

Người dùng thông thường có thể dùng [Tự động đóng băng](/guide/auto-freeze/) và [lối tắt trên màn hình chính](/guide/shortcuts/) của Ice Box để tự động đóng băng ứng dụng khi tắt màn hình hoặc khi quay về màn hình chính. Nhà phát triển có thể dùng [Ice Box SDK](/developers/) để đóng băng và rã đông ứng dụng ngay từ ứng dụng của mình, sau khi người dùng cấp quyền.

## Tự động hóa không cần viết mã {#no-code}

- **Tự động đóng băng**: Tự động đóng băng các ứng dụng trong Ice Box khi tắt màn hình, hoặc khi bạn nhấn hay nhấn đúp nút Home. Bạn có thể đặt độ trễ sau khi tắt màn hình và bỏ qua lúc đang sạc.
- **Lối tắt trên màn hình chính**: "Đóng băng tất cả", "Đóng băng + Khóa màn hình" và "Rã đông tất cả" đều có thể thêm ra màn hình chính, mỗi thao tác chỉ cần một chạm.
- **Lối tắt cho ứng dụng đã đóng băng**: Nhấn vào lối tắt để tự động rã đông và mở ứng dụng, không cần mở Ice Box trước.
- **划卡冻结 (vuốt để đóng băng)**: Ứng dụng bên thứ ba 划卡冻结 có thể đóng băng một ứng dụng khi bạn vuốt thẻ của nó đi trên màn hình ứng dụng gần đây (chỉ dành cho máy đã root).

## Dành cho nhà phát triển: Ice Box SDK {#sdk}

Trên điện thoại đã cài và kích hoạt Ice Box, Ice Box SDK cho phép ứng dụng bên thứ ba đóng băng và rã đông ứng dụng:

- Truy vấn chế độ hoạt động hiện tại của Ice Box và trạng thái đóng băng của một ứng dụng. Không cần quyền.
- Đóng băng và rã đông ứng dụng, kể cả hàng loạt. Cần người dùng cấp quyền.
- Cài đặt và gỡ cài đặt APK im lặng ở chế độ Device Owner.
- Mọi thao tác mà ứng dụng bên thứ ba thực hiện qua Ice Box đều được ghi lại trong trung tâm nhật ký của Ice Box, người dùng có thể xem bất cứ lúc nào.

Xem [hướng dẫn cho nhà phát triển](/developers/) để biết cách tích hợp.

## Câu hỏi thường gặp {#faq}

### Ứng dụng khác có thể đóng băng ứng dụng mà tôi không biết không?

Ứng dụng bên thứ ba cần được bạn cấp quyền thì mới đóng băng hoặc rã đông ứng dụng qua Ice Box được. Mọi thao tác đều được ghi lại trong trung tâm nhật ký của Ice Box và bạn có thể xem bất cứ lúc nào.
