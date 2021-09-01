# message

## `message.private.friend`

> 好友消息事件

**回调参数**:

### PrivateMessageEventData

>继承于[公共消息数据](../api/应用类api.md#commonmessageeventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
message_type|string|`"private"`| 私聊消息
sub_type|string|`"friend"` \| `"group"` \| `"single"` \| `"other"` \| `"self"`|
sender|[FriendInfo](../api/成员属性.md#friendinfo)||
auto_reply|boolean|| 是否自动回复

## `message.private.group`

> 群临时会话消息事件

**回调参数**:
[PrivateMessageEventData](#privatemessageeventdata)

## `message.private.single`

> 单向好友消息事件

**回调参数**:
[PrivateMessageEventData](#privatemessageeventdata)

## `message.private.other`

> 其他私聊消息事件（qq咨询什么的吧）

**回调参数**:
[PrivateMessageEventData](#privatemessageeventdata)

## `message.private.self`

> 其他在线设备私聊

**回调参数**:
[PrivateMessageEventData](#privatemessageeventdata)

## `message.private`

> 私聊消息系列事件

**回调参数**:
[PrivateMessageEventData](#privatemessageeventdata)

## `message.group.normal`

> 普通群消息事件

**回调参数**:

### GroupMessageEventData

>继承于[公共消息数据](../api/应用类api.md#commonmessageeventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
message_type|string|`"group"`| 群消息
sub_type|string|`"normal"` \| `"anonymous"`|
group_id|number||
group_name|string||
anonymous|[Anonymous](../api/应用类api.md#anonymous) \| `null`||匿名消息
sender|[MemberBaseInfo](../api/成员属性.md#memberbaseinfo)||
atme|boolean||
seqid|number||
block|boolean|| 是否已屏蔽

## `message.group.anonymous`

> 匿名群消息事件

**回调参数**:
[GroupMessageEventData](#groupinviteeventdata)

## `message.group`

> 群消息系列事件

**回调参数**:
[GroupMessageEventData](#groupinviteeventdata)

## `message.discuss`

> 讨论组消息事件

**回调参数**:

### DiscussMessageEventData

>继承于[公共消息数据](../api/应用类api.md#commonmessageeventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
message_type||`"discuss"`| 讨论组消息
discuss_id|number||讨论组id
discuss_name|string||讨论组名
atme|boolean||
sender|[sender](#sender)||发送者

#### sender

|属性|类型|值|说明|
:--:|:-:|:--:|-
user_id|number||qq
nickname|string||昵称
card|string||名片

## `message`

> 消息事件

**回调参数**:
[PrivateMessageEventData](#privatemessageeventdata) | [GroupMessageEventData](#groupmessageeventdata) | [DiscussMessageEventData](#discussmessageeventdata)
