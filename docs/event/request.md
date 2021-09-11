# request

[[toc]]

## `request.friend.add`

> 收到好友申请事件

**回调参数**:

### FriendAddEventData

>继承于[公共请求事件数据](../api/应用类api.md#commonrequesteventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
request_type|string|`"friend"`|
sub_type|string|`"add"` \| `"single"`| 加好友请求
comment|string|| 附加信息
source|string|| 来源(如"条件查找")
age|number||年龄
sex|[Gender](../api/index.md#gender)||性别

## `request.friend.single`

> 被添加为单向好友事件

**回调参数**:
[FriendAddEventData](#friendaddeventdata)

## `request.friend`

> 好友申请系列事件

**回调参数**:
[FriendAddEventData](#friendaddeventdata)

## `request.group.add`

> 收到加群申请事件

**回调参数**:

### GroupAddEventData

>继承于[公共请求事件数据](../api/应用类api.md#commonrequesteventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
request_type|string|`"group"`|
sub_type|string|`"add"`| 加群请求
group_id|number||群号
group_name|string||群名
comment|string|| 附加信息
inviter_id?|number|| 邀请者(来自群员的邀请时)
tips|string|| 如"该帐号存在风险，请谨慎操作"

## `request.group.invite`

> 收到群邀请事件

**回调参数**:

### GroupInviteEventData

>继承于[公共请求事件数据](../api/应用类api.md#commonrequesteventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
request_type|string|`"group"`|
sub_type|string|`"invite"`| 群邀请
group_id|number||群号
group_name|string||群名
role|[GroupRole](../api/index.md#grouprole)|| 邀请者权限

## `request.group`

> 群请求系列事件

**回调参数**:
[GroupAddEventData](#groupaddeventdata) | [GroupInviteEventData](#groupinviteeventdata)
