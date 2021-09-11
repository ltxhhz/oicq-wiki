# notice

[[toc]]

## `notice.friend.increase`

> 新增好友事件

**回调参数**:

### FriendIncreaseEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"friend"`|
sub_type|string|`"increase"`| 好友增加
user_id|number||qq
nickname|string||昵称

## `notice.friend.decrease`

> 好友(被)删除事件(被拉黑或自己删除都会触发)

**回调参数**:

### FriendDecreaseEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"friend"`|
sub_type|string|`"decrease"`| 好友减少
user_id|number||qq
nickname|string||昵称

## `notice.friend.recall`

> 好友消息撤回事件

**回调参数**:

### FriendRecallEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"friend"`|
sub_type|string|`"recall"`| 好友消息撤回
user_id|number|| qq
operator_id|number|| 撤回者(好友或自己)
message_id|string||

## `notice.friend.profile`

> 好友资料变更事件

**回调参数**:

### FriendProfileEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"friend"`|
sub_type|string|`"profile"`| 好友资料变更
user_id|number||qq
nickname?|string||昵称
signature?|string||

## `notice.friend.poke`

> 好友戳一戳事件

**回调参数**:

### FriendPokeEventData

>继承于[公共事件数据](../api/应用类api.md#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"friend"`|
sub_type|string|`"poke"`| 好友戳一戳
user_id|number|| 好友号
operator_id|number|| poke者
target_id|number|| 被poke者
action|string|| 动作名
suffix|string|| 后缀

## `notice.friend`

> 好友通知系列事件

**回调参数**:
[FriendIncreaseEventData](#friendincreaseeventdata) | [FriendDecreaseEventData](#frienddecreaseeventdata) | [FriendRecallEventData](#friendrecalleventdata) | [FriendProfileEventData](#friendprofileeventdata) | [FriendPokeEventData](#friendpokeeventdata)

## `notice.group.increase`

> 群员增加事件(自己入群、他人入群)

**回调参数**:

### MemberIncreaseEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"increase"`| 群增加或群员增加
group_id|number||群号
user_id|number||qq
nickname|string||昵称

## `notice.group.decrease`

> 群员减少事件(自己被踢、他人退群/被踢、解散)

**回调参数**:

### MemberDecreaseEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"decrease"`|群减少或群员减少
group_id|number||群号
operator_id|number||踢人者
user_id|number||被踢者
dismiss|boolean||是否是解散
member?|[MemberInfo](../api/index.md#memberinfo)||该群员的最后资料(有缓存时提供)
group?|[GroupInfo](../api/index.md#groupinfo)||该群的最后资料(自己被踢或群解散时提供)

## `notice.group.recall`

> 群消息撤回事件

**回调参数**:

### GroupRecallEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"recall"`|群消息撤回
group_id|number||群号
operator_id|number||撤回者
user_id|number||被撤回者
message_id|string||消息id

## `notice.group.admin`

> 管理员变更事件

**回调参数**:

### GroupAdminEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"admin"`| 管理员变更
group_id|number||群号
user_id|number||qq
set|boolean||是否被加冕了

## `notice.group.ban`

> 群禁言事件

**回调参数**:

### GroupMuteEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"ban"`|群禁言
group_id|number||群号
operator_id|number||禁言者
user_id|number||被禁言者(全员禁言为0)
nickname?|string||匿名者昵称(当user_id为80000000时提供)
duration|number||时长，单位秒

## `notice.group.transfer`

> 群转让事件

**回调参数**:

### GroupTransferEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"transfer"`|群转让
group_id|number||群号
operator_id|number||旧群主
user_id|number||新群主

## `notice.group.title` <Badge text="未实现" type="warn"/>

> 群头衔变更事件

**回调参数**:

### GroupTitleEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"title"`| 群头衔变更(暂未实现该事件)
group_id|number||群号
user_id|number||qq
nickname|string||昵称
title|string||头衔

## `notice.group.poke`

> 群头衔变更事件

**回调参数**:

### GroupPokeEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"poke"`|群戳一戳
group_id|number||群号
operator_id|number||poke者
user_id|number||被poke者
target_id|number||被poke者
action|string||动作名
suffix|string||后缀

## `notice.group.setting`

> 群设置变更事件

**回调参数**:

### GroupSettingEventData

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"notice"`|
notice_type|string|`"group"`|
sub_type|string|`"setting"`|群设置变更
group_id|number||群号
group_name?|string||群名变更
enable_guest?|boolean||允许游客
enable_anonymous?|boolean||允许匿名
enable_upload_album?|boolean||允许群员上传相册
enable_upload_file?|boolean||允许群员上传文件
enable_temp_chat?|boolean||允许发起临时会话
enable_new_group?|boolean||允许发起新群
enable_show_honor?|boolean||显示群员荣誉
enable_show_level?|boolean||显示群员等级
enable_show_title?|boolean||显示群员头衔
enable_confess?|boolean||开关坦白说
avatar?|boolean||头像变更

## `notice.group`

> 群通知系列事件

**回调参数**:
[GroupRecallEventData](#grouprecalleventdata) | [GroupSettingEventData](#groupsettingeventdata) | [GroupTitleEventData](#grouptitleeventdata) | [GroupTransferEventData](#grouptransfereventdata) | [GroupMuteEventData](#groupmuteeventdata) | [GroupAdminEventData](#groupadmineventdata) | [MemberIncreaseEventData](#memberincreaseeventdata) | [MemberDecreaseEventData](#memberdecreaseeventdata) | [GroupPokeEventData](#grouppokeeventdata)

## `notice`

> 通知事件

**回调参数**:
[好友通知回调](#noticefriend)|[群通知回调](#noticegroup)
