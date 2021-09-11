# sync

[[toc]]

## `sync.message`

> 同账号其他客户端发送私聊事件

**回调参数**:

### SyncMessageEventData

> 继承于[PrivateMessageEventData](../api/应用类api.md#privatemessageeventdata)  
> 但不包含`post_type`、`message_type`、`reply`属性

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"sync"`|
sync_type|string|`"message"`| 同步其他客户端发送的私聊

## `sync.profile`

> 个人资料修改事件

**回调参数**:

### SyncProfileEventData

> 继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"sync"`|
sync_type|string|`"profile"`| 同步个人资料
nickname?|string||昵称
sex?|[Gender](../api/index.md#gender)||性别
age?|number||年龄
signature?|string||个性签名
description?|string||个人说明
avatar?|boolean||头像变更

## `sync.status`

> 在线状态修改事件

**回调参数**:

### SyncStatusEventData

> 继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"sync"`|
sync_type|string|`"status"`|同步在线状态
old_status|number||旧状态
new_status|number||新状态

## `sync.black` <Badge text="弃用" type="warn"/>

> 黑名单修改事件

**回调参数**:

### SyncBlackEventData

> 继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"sync"`|
sync_type|string|`"black"`|同步黑名单
blacklist|number[]||黑名单

## `sync.readed.private`

> 私聊消息已读事件

**回调参数**:

### SyncReadedEventData

> 继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"sync"`|
sync_type|string|`"readed"`|同步已读
sub_type|string|`"private"` \| `"group"`|
user_id?|number||
timestamp?|number||私聊以时间戳分界
group_id?|number||
seqid?|number||群聊以seqid分界

## `sync.readed.group`

> 群聊消息已读事件

**回调参数**:
[SyncReadedEventData](#syncreadedeventdata)

## `sync.readed`

> 消息已读事件

**回调参数**:
[SyncReadedEventData](#syncreadedeventdata)

## `sync`

> 以上sync事件，同一账号的其他客户端做了某些操作而触发的事件

**回调参数**:
[SyncMessageEventData](#syncmessageeventdata) | [SyncProfileEventData](#syncprofileeventdata) | [SyncStatusEventData](#syncstatuseventdata) | [SyncReadedEventData](#syncreadedeventdata) | [SyncBlackEventData](#syncblackeventdata)
