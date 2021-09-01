# system

## `system.login.qrcode`

> 扫码登录收到二维码事件

**回调参数**:

### QrcodeEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"system"`|
system_type|string|`"login"`|
sub_type|string|`"qrcode"`|收到二维码
image|Buffer|| 图片字节集

## `system.login.slider`

> 收到滑动验证码事件

**回调参数**:

### SliderEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"system"`|
system_type|string|`"login"`|
sub_type|string|`"slider"`| 收到滑动验证码
url|string|| 滑动地址

## `system.login.device`

> 设备锁验证事件

**回调参数**:

### DeviceEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"system"`|
system_type|string|`"login"`|
sub_type|string|`"device"`|收到设备锁验证请求
url|string| |设备锁验证地址（用于扫二维码解锁）
phone|string| |密保手机号（用于发短信解锁）

## `system.login.error`

> 登录遇到错误事件

**回调参数**:

### LoginErrorEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"system"`|
system_type|string|`"login"`|
sub_type|string|`"error"`|登录遇到错误
code|number||错误码
message|string||错误消息，"密码错误"等详细原因

## `system.login`

> 登录系列事件

**回调参数**:
[DeviceEventData](#deviceeventdata) | [LoginErrorEventData](#loginerroreventdata) | [SliderEventData](#slidereventdata) | [QrcodeEventData](#qrcodeeventdata)

## `system.online`

> 上线事件，可以开始处理消息

**回调参数**:

### OnlineEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
system_type|string|`"online"`|上线

## `system.offline.network`

> 下线事件，网络不通畅或服务器繁忙，默认自动重登 (见相关配置 [`reconn_interval`](../api/index.md#confbot))

**回调参数**:

### OfflineEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
system_type||`"offline"`| 掉线
sub_type||`"network"` \| `"kickoff"` \| `"frozen"` \| `"unknown"`|
message||string| 掉线原因

## `system.offline.kickoff`

> 下线事件，被其他客户端踢下线，默认不自动重登 (见相关配置 [`kickoff`](../api/index.md#confbot))

**回调参数**:
[OfflineEventData](#offlineeventdata)

## `system.offline.frozen`

> 下线事件，被冻结或因特殊原因下线，不自动重登

**回调参数**:
[OfflineEventData](#offlineeventdata)

## `system.offline.unknown`

> 下线事件，未知原因，自动重登(目前尚未遇到过，如果你遇到了请告诉我)

**回调参数**:
[OfflineEventData](#offlineeventdata)

## `system.offline`

> 下线系列事件

**回调参数**:
[OfflineEventData](#offlineeventdata)

## `system`

> 系统类事件

**回调参数**:
[DeviceEventData](#deviceeventdata) | [SliderEventData](#slidereventdata) | [LoginErrorEventData](#loginerroreventdata) | [QrcodeEventData](#qrcodeeventdata) | [OfflineEventData](#offlineeventdata) | [OnlineEventData](#onlineeventdata)
