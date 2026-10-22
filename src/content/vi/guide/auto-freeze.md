---
title: "Tự động đóng băng: đóng băng ứng dụng ngay khi tắt màn hình"
short: Tự động đóng băng
description: Khi bật Tự động đóng băng, Ice Box sẽ đóng băng các ứng dụng trong danh sách khi tắt màn hình hoặc khi bạn nhấn hay nhấn đúp nút Home. Điều kiện kích hoạt, độ trễ, ngoại lệ khi sạc và cách khắc phục.
section: guide
group: tips
order: 1
faq: true
related: guide/shortcuts, guide/devices, use-cases/stop-background-apps
---

Khi bạn mở một ứng dụng, Ice Box sẽ rã đông nó trước, và ứng dụng cần được đóng băng lại sau khi bạn dùng xong. Khi bật "Tự động đóng băng", Ice Box sẽ lo bước đó giúp bạn.

## Khi nào ứng dụng được đóng băng {#when}

Trong phần cài đặt của Ice Box, mở "Tự động đóng băng" và dùng "Tự động đóng băng khi" để chọn thời điểm ứng dụng được tự động đóng băng:

- **Tắt màn hình**: đóng băng sau khi màn hình tắt. Bạn có thể đặt "Độ trễ sau khi tắt màn hình" để đóng băng sau khi tắt màn hình một khoảng thời gian.
- **Nhấn nút Home**: đóng băng khi bạn quay về màn hình chính.
- **Nhấn đúp nút Home**: đóng băng khi bạn nhấn nhanh nút Home hai lần.
- **Không bao giờ**: tắt tự động đóng băng.

Trong mục "Ngoại trừ", bạn cũng có thể chọn "Khi đang sạc" để ứng dụng không bị tự động đóng băng trong lúc điện thoại đang sạc.

## Chạy trong nền {#background}

Tự động đóng băng cần Ice Box chạy trong nền. Theo yêu cầu của Android, Ice Box sẽ hiển thị một thông báo khi chạy trong nền. Bạn có thể tắt thông báo này trong cài đặt hệ thống mà không ảnh hưởng đến tính năng.

Nếu bạn tắt Tự động đóng băng và các tính năng khác cần chạy nền, Ice Box sẽ không chạy trong nền.

## Tự động đóng băng không hoạt động? {#faq}

### Ứng dụng không bị đóng băng sau khi tắt màn hình

Hãy kiểm tra xem có ứng dụng quản lý điện thoại hay ứng dụng dọn dẹp nào đang chặn Ice Box chạy trong nền không. Trong cài đặt hệ thống, hãy cấp cho Ice Box các quyền như "Chạy trong nền" và "Tự khởi động", và đặt mức sử dụng pin của Ice Box thành "Không tối ưu hóa" hoặc "Không hạn chế".

### Độ trễ sau khi tắt màn hình không có tác dụng

Trên một số điện thoại, việc đóng băng sau khi tắt màn hình vài phút có thể không hoạt động. Đây là do hệ thống giới hạn tác vụ nền. Hãy đặt độ trễ ngắn hơn, hoặc chọn đóng băng ngay sau khi tắt màn hình.

### Điện thoại Huawei không đóng băng sau khi tắt màn hình

Do giới hạn của hệ thống, tự động đóng băng khi "Tắt màn hình" có thể không hoạt động trên điện thoại Huawei. Hãy dùng tự động đóng băng khi "Nhấn nút Home" hoặc "Nhấn đúp nút Home".
