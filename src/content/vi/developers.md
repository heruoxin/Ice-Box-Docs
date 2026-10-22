---
title: Ice Box SDK dành cho nhà phát triển
short: Nhà phát triển
description: Ice Box SDK cho phép ứng dụng khác đóng băng và rã đông ứng dụng, cũng như cài đặt hoặc gỡ cài đặt APK im lặng, trên điện thoại có Ice Box. Cách tích hợp, quyền và các API chính.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

Trên thiết bị đã cài và kích hoạt Ice Box, Ice Box SDK cho phép ứng dụng bên thứ ba đóng băng và rã đông ứng dụng. Ở chế độ Device Owner, SDK còn có thể cài đặt và gỡ cài đặt APK im lặng.

Mã nguồn và tài liệu đầy đủ: [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Yêu cầu {#requirements}

- Đóng băng và rã đông: Ice Box 3.6.0 trở lên.
- Cài đặt và gỡ cài đặt im lặng: Ice Box 3.9.5 trở lên, với Ice Box đang chạy ở chế độ Device Owner.

## Quyền {#permission}

Các API thao tác, như đóng băng, rã đông và cài đặt APK, yêu cầu bạn xin người dùng cấp quyền Ice Box SDK trước. Các API truy vấn không cần quyền nào.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## Các API chính {#api}

### Truy vấn chế độ hoạt động

Ice Box có thể đóng băng ứng dụng theo một trong hai cách, `pm disable-user` hoặc `pm hide`. Không cần quyền.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Truy vấn trạng thái đóng băng của ứng dụng

Trả về bình thường, đã đóng băng bằng `pm disable`, đã đóng băng bằng `pm hide`, hoặc cả hai. Không cần quyền.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Đóng băng hoặc rã đông ứng dụng

Cần quyền. Hỗ trợ thao tác hàng loạt.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Cài đặt và gỡ cài đặt im lặng

Dùng được khi Ice Box đang chạy ở chế độ Device Owner. Bạn có thể kiểm tra trước xem hiện tại có được hỗ trợ không:

```java
IceBox.querySupportSilentInstall(context);
```

Về tham số và giá trị trả về đầy đủ của từng API, [tài liệu trên GitHub](https://github.com/heruoxin/IceBox-SDK) là căn cứ chính thức.

## Minh bạch và cấp quyền {#transparency}

Mọi thao tác đóng băng, cài đặt và gỡ cài đặt mà ứng dụng bên thứ ba thực hiện qua Ice Box đều được ghi lại trong trung tâm nhật ký của Ice Box, người dùng có thể xem bất cứ lúc nào.

## Các tích hợp khác {#integrations}

- **Cấu hình trong ứng dụng khác**: Ice Box hỗ trợ `android.intent.action.SHOW_APP_INFO` của Android, nên phối hợp được với các ứng dụng như Greenify và AppOps.
- **Island**: Ice Box có thể hoạt động nhờ quyền của Island, và cũng có thể được cài đặt và sử dụng bên trong hồ sơ công việc của Island.
