# **应用类**api

:::tip 说明
所有应用类API具有统一的返回值：[Ret](#ret-object)

调用 `Promise` api 时无需使用`catch()`，需要判断是否成功请使用[Ret](#ret-object).[retcode](#retcode)或[Ret](#ret-object).status  
大部分API没有`data`返回值  
API调用失败时你会得到一个`error`(包含`code`和`message`)
:::

:::warning 弃用说明
**弃用**只是不推荐使用，并不会删除
:::

[[toc]]

## 获取列表和资料

### Client.getGroupInfo(group_id, no_cache)

>获取群资料(该方法一般用于刷新群资料缓存，从缓存中获取直接访问 `Client.gl.get(gid)` 即可)

|参数|类型|默认|说明|
:-:|:-:|:-:|:-:|-
group_id|number||群号
no_cache?|boolean|`false`|是否不使用缓存数据

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;[GroupInfo](./index.md#groupinfo)&gt;&gt;

### Client.getGroupMemberList(group_id, no_cache)

>获取群成员列表，缓存于`Client.gml`中

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
no_cache?|boolean|`false`|是否不使用缓存数据

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;`Map`&lt;number, [MemberInfo](./index.md#memberinfo)&gt;&gt;&gt;

### Client.getGroupMemberInfo(group_id, user_id, no_cache)

>获取群员资料，缓存于`client.gml`中

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||QQ号
no_cache?|boolean|`false`|是否不使用缓存数据

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;[MemberInfo](./index.md#memberinfo)&gt;&gt;

### Client.getStrangerInfo(user_id, no_cache)

>获取陌生人资料

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
no_cache?|boolean|`false`|是否不使用缓存数据

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;[StrangerInfo](./index.md#strangerinfo)&gt;&gt;

### Client.getFriendList() <Badge text="弃用" type="warn"/>

>获取好友列表
:::warning 注意
***已弃用***
请直接访问 [Client](./index.md#client).fl
:::

**返回值**
[Ret](#ret-object)&lt;[client](./index.md#client)["fl"]&gt;

### Client.getStrangerList() <Badge text="弃用" type="warn"/>

>获取陌生人列表
:::warning 注意
***已弃用***
请直接访问 [Client](./index.md#client).sl
:::

**返回值**
[Ret](#ret-object)&lt;[client](./index.md#client)["sl"]&gt;

### Client.getGroupList() <Badge text="弃用" type="warn"/>

>获取群列表
:::warning 注意
***已弃用***
请直接访问 [Client](./index.md#client).gl
:::

**返回值**
[Ret](#ret-object)&lt;[client](./index.md#client)["gl"]&gt;

### Client.getLoginInfo() <Badge text="弃用" type="warn"/>

>获取登录账号信息
:::warning 注意
***已弃用***
请直接访问 [Client](./index.md#client)
:::

**返回值**
[Ret](#ret-object)&lt;[StrangerInfo](./index.md#strangerinfo)&gt;

## 消息相关

### Client.sendPrivateMsg(user_id, message, auto_escape)

>发送私聊消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
user_id|number||QQ号
message|[MessageElem](#messageelem)\|Iterable&lt;[MessageElem](#messageelem)\| string&gt;\| string||消息内容
auto_escape?|boolean|`false`|unknown

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;{ message_id }&gt;&gt;

参数|类型|说明
:--:|:-:|--
message_id|string|消息id

### Client.sendGroupMsg(group_id, message, auto_escape)

>发送群消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
message|[MessageElem](#messageelem) \| Iterable&lt;[MessageElem](#messageelem)\| string&gt; \| string||消息内容
auto_escape?|boolean|`false`|unknown

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;{ message_id }&gt;&gt;

### Client.sendDiscussMsg(discuss_id, message, auto_escape)

>发送讨论组消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
discuss_id|number||讨论组号
message|[MessageElem](#messageelem) \| Iterable&lt;[MessageElem](#messageelem)\| string&gt; \| string||消息内容
auto_escape?|boolean|`false`|unknown

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.sendTempMsg(group_id, user_id, message, auto_escape)

>发送群临时会话，大多数时候可以使用私聊达到同样效果

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||QQ号
message|[MessageElem](#messageelem) \| Iterable&lt;[MessageElem](#messageelem)\| string&gt; \| string||消息内容
auto_escape?|boolean|`false`|unknown

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;{ message_id }&gt;&gt;

### Client.deleteMsg(message_id)

>撤回消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
message_id|string||消息id

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.reportReaded(message_id)

>置消息已读 (message_id及之前的消息将全部变为已读)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
message_id|string||消息id

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.getMsg(message_id)

>获取一条消息 (无法获取被撤回的消息)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
message_id|string||消息id

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;[PrivateMessageEventData](#privatemessageeventdata) | [GroupMessageEventData](#groupmessageeventdata)&gt;&gt;

### Client.getChatHistory(message_id, count)

>获取message_id往前的count条消息(包括自身)
>无法获取被撤回的消息，因此返回的数量并不一定为count
>若要获取最新的20条消息，参考 [message-id的规则和解析方法](../杂七杂八.md#message-id的规则和解析方法) 自行构造消息id，除群号外其余位补0

|参数|类型|默认|说明|
:-:|:-:|:-:|-
message_id|string||消息id
count?|number|`20`|获取消息条数，不能超过20

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;[PrivateMessageEventData](#privatemessageeventdata)[] | [GroupMessageEventData](#groupmessageeventdata)[]&gt;&gt;

### Client.getForwardMsg(resid)

>获取转发消息
>resid在xml消息中，需要自行解析xml获得
>暂不支持套娃转发解析

|参数|类型|默认|说明|
:-:|:-:|:-:|-
resid|string||转发消息id

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;`Array`&lt;{
  group_id?: number,
  user_id: number,
  nickname: string,
  time: number,
  message: [MessageElem](#messageelem)[],
  raw_message: string,
}&gt;&gt;&gt;

### Client.makeForwardMsg(fakes, dm)

>制作一个合并转发消息，得到的XmlElem可直接发送

|参数|类型|默认|说明|
:-:|:-:|:-:|-
fakes|[FakeMessage](#fakemessage)\Iterable&lt;[FakeMessage](#fakemessage)&gt;||消息
dm|boolean|`false`|以群模式上传图片，设为true则以私聊模式上传图片

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;[XmlElem](#xmlelem)&gt;&gt;&gt;

#### FakeMessage

|属性|类型|值|说明
:--:|:-:|:-:|-
user_id|number||qq
message|string\|[MessageElem](#messageelem)\|Iterable&lt;[MessageElem](#messageelem)\| string&gt;||可转发的有效元素理论上只有[文字、表情、图片]，不支持CQ码
nickname?|string||昵称
time?|number||时间戳(秒)，默认：当前时间

****

## 构建消息

:::tip 提示
oicq中所有消息由模块中的工具类`segment`和`cqcode`中的方法构建

```js
const { segment, cqcode } = require("oicq");
```

cqcode中的方法的返回值类型均为`string`，也就是cq码

**以下方法没有前缀的均为两种类都有的方法**
:::

### .text(text) <Badge text="弃用" type="warn"/>

>文本

|参数|类型|默认|说明|
:-:|:-:|:-:|-
text|string||文本

**返回值**
[TextElem](#textelem)

### .at(qq, text, dummy)

>艾特

|参数|类型|默认|说明|
:-:|:-:|:-:|-
qq|number\|`"all"`||qq
text|string|`'@'`+qq\|q名||at失败时显示的文本
dummy?|boolean|`false`|假at，只显示艾特文本

**返回值**
[AtElem](#atelem)

### .face(id, text)

>经典表情  
>可以参考这里([图片](https://koishi.js.org/QFace/)/[项目](https://github.com/koishijs/QFace))的(可能更新不及时)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
id|number||表情id
text?|string||

**返回值**
[FaceElem](#faceelem)

### .sface(id, text)

>小表情(几乎不再使用)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
id|number||表情id
text?|string||

**返回值**
[FaceElem](#faceelem)

### .bface(file)

>原创表情

|参数|类型|默认|说明|
:-:|:-:|:-:|:-:|-
file|string||文件路径

**返回值**
[BfaceElem](#bfaceelem)

### .rps(id)

>猜拳

|参数|类型|默认|说明|
:-:|:-:|:-:|:-:|-
id?|number|``|1~3

**返回值**
[MfaceElem](#mfaceelem)

### .dice(id)

>骰子

|参数|类型|默认|说明|
:-:|:-:|:-:|-
id?|number|``|1~6

**返回值**
[MfaceElem](#mfaceelem)

### .image(file, cache, timeout, headers)

>图片(后三个参数在下载网络资源时有效)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
file|[MediaFile](#mediafile)||文件
cache?|boolean|`true`|file为网络资源时是否使用缓存
timeout?|number|``|file为网络资源时请求超时时间
headers?|OutgoingHttpHeaders|``|file为网络资源时请求头

**返回值**
[ImgPttElem](#imgpttelem)

### .flash(file, cache, timeout, headers)

>闪照(后三个参数在下载网络资源时有效)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
file|[MediaFile](#mediafile)||文件
cache?|boolean|`true`|file为网络资源时是否使用缓存
timeout?|number|``|file为网络资源时请求超时时间
headers?|OutgoingHttpHeaders|``|file为网络资源时请求头

**返回值**
[ImgPttElem](#imgpttelem)

### .record(file, cache, timeout, headers)

>语音(后三个参数在下载网络资源时有效)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
file|[MediaFile](#mediafile)||文件
cache?|boolean|`true`|file为网络资源时是否使用缓存
timeout?|number|``|file为网络资源时请求超时时间
headers?|OutgoingHttpHeaders|``|file为网络资源时请求头

**返回值**
[ImgPttElem](#imgpttelem)

### .video(file)

>视频

|参数|类型|默认|说明|
:-:|:-:|:-:|-
file|string||发送仅支持本地文件路径或转发

**返回值**
[VideoElem](#videoelem)

### .location(lat, lng, address, id)

>地点分享

|参数|类型|默认|说明|
:-:|:-:|:-:|-
lat|number||纬度
lng|number||经度
address|string||地点名
id?|string|``|

**返回值**
[LocationElem](#locationelem)

### .music(type, id)

>音乐分享

|参数|类型|默认|说明|
:-:|:-:|:-:|-
type|[MusicType](#musictype)||平台名
id|string||音乐id

**返回值**
[MusicElem](#musicelem)

### .json(data)

>JSON消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
data|any|| 一个 json 字符串或一个 json 对象

**返回值**
[JsonElem](#jsonelem)

### .xml(data, type)

>xml卡牌消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
data|string||
type?|number|``|

**返回值**
[XmlElem](#xmlelem)

### .share(url, title, image, content)

>链接分享

|参数|类型|默认|说明|
:-:|:-:|:-:|-
url|string||链接
title|string||标题
image?|string|``||预览图
content?|string|``||内容

**返回值**
[ShareElem](#shareelem)

### .shake()

>窗口抖动

**返回值**
[ShakeElem](#shakeelem)

### .poke(type, id)

>戳一戳

|参数|类型|默认|说明|
:-:|:-:|:-:|-
type|number|| 0~6，分别对应哪种戳的类型
id?|number|``||

**返回值**
[PokeElem](#pokeelem)

### .reply(id)

>引用回复

|参数|类型|默认|说明|
:-:|:-:|:-:|-
id|string||message_id

**返回值**
[ReplyElem](#replyelem)

### .node(id)

>node

|参数|类型|默认|说明|
:-:|:-:|:-:|-
id|string||

**返回值**
[NodeElem](#nodeelem)

### .anonymous(ignore)

>匿名消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
ignore?|boolean|`true`|匿名失败时是否继续发送

**返回值**
[AnonymousElem](#anonymouselem)

### .mirai(data)

>只有mirai系客户端可以解析的消息

|参数|类型|默认|说明|
:-:|:-:|:-:|-
data|string||

**返回值**
[MiraiElem](#miraielem)

### segment.toCqcode(elem(s))

>将元素转换到CQ码字符串(CQ码字符串无法逆转换到元素，因为类型会丢失)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
elem(s)|[MessageElem](#messageelem)\|Iterable&lt;[MessageElem](#messageelem)&gt;||

**返回值**
`string`

## 系统消息处理

### Client.setFriendAddRequest(flag, approve, remark, block)

>处理加好友请求

|参数|类型|默认|说明|
:-:|:-:|:-:|-
flag|string||在[事件]中获得
approve?|boolean|`true`|是否同意请求
remark?|string||
block?|boolean||

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupAddRequest(flag, approve, remark, block)

>处理入群请求

|参数|类型|默认|说明|
:-:|:-:|:-:|-
flag|string||在[事件]中获得
approve?|boolean|`true`|是否同意请求
remark?|string||
block?|boolean||

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.getSystemMsg()

>获取未处理的请求

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;Array&lt;[FriendAddEventData](#friendaddeventdata) | [GroupAddEventData](#groupaddeventdata) | [GroupInviteEventData](#groupinviteeventdata)&gt;&gt;&gt;

#### FriendAddEventData

>添加好友事件数据  
>继承于[公共请求事件数据](#commonrequesteventdata)

|属性|类型|值|说明
:--:|:-:|:-:|-
request_type|string|`"friend"`|请求类型
sub_type|string|`"add"` \| `"single"`| //加好友请求
comment|string| |附加信息
source|string| |来源(如"条件查找")
age|number||年龄
sex|[Gender](./index.md#gender)||性别

#### GroupAddEventData

>群请求事件数据  
>继承于[公共请求事件数据](#commonrequesteventdata)

|属性|类型|值|说明
:--:|:-:|:-:|-
request_type|string|`"group"`|请求类型
sub_type|string|`"add"`|加群请求
group_id|number||群号
group_name|string||群名
comment|string| |附加信息
inviter_id?|number||邀请者(来自群员的邀请时)
tips|string||如"该帐号存在风险，请谨慎操作"

#### GroupInviteEventData

>邀请入群事件数据  
>继承于[公共请求事件数据](#commonrequesteventdata)

|属性|类型|值|说明
:--:|:-:|:-:|-
request_type|string|`"group"`|请求类型
sub_type|string|`"invite"`|群邀请
group_id|number||群号
group_name|string||群名
role|[GroupRole](./index.md#grouprole)| |邀请者权限

## 群操作

### Client.sendGroupNotice(group_id, content)

>发简易群公告

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
content|string||内容

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupName(group_id, group_name)

>设置群名

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
group_name|string||群名

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupAnonymous(group_id, enable)

>开启或关闭匿名功能

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
enable?|boolean|`true`|是否打开

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupWholeBan(group_id, enable)

>全员禁言

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
enable?|boolean|`true`|是否打开

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupAdmin(group_id, user_id, enable)

>设置管理员

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq
enable?|boolean|`true`|是否打开

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupSpecialTitle(group_id, user_id, special_title, duration)

>设置群头衔

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq
special_title?|string|``|头衔
duration?|boolean|``|有效期

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupCard(group_id, user_id, card)

>设置群名片

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq
card?|string|``|群昵称

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupKick(group_id, user_id, reject_add_request)

>踢人(不支持批量)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq
reject_add_request?|boolean|``|不再接收其群请求

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupBan(group_id, user_id, duration)

>禁言，时间为0则取消禁言

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq
duration?|number|`1800`|禁言时间（秒）

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupAnonymousBan(group_id, flag, duration?: number)

>禁言匿名群员

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
flag|string||在[消息事件]中
duration?|number|``|禁言时间（秒）

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupLeave(group_id, dismiss)

>退群
:::warning 注意
dismiss参数可能无效，如果你是群主无论如何群都会立即解散
:::

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
dismiss?|boolean|`false`|是否解散

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.sendGroupPoke(group_id, user_id)

>戳一戳(可以对好友使用)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGroupPortrait(group_id, file)

>设置群头像

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
file|[MediaFile](#mediafile)||媒体文件

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

## 个人相关

### Client.setOnlineStatus(status)

>设置在线状态

|参数|类型|默认|说明|
:-:|:-:|:-:|-
status|number||[在线状态](./index.md#在线状态)

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setNickname(nickname)

>设置昵称

|参数|类型|默认|说明|
:-:|:-:|:-:|-
nickname|string||昵称

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setGender(gender)

>设置性别

|参数|类型|默认|说明|
:-:|:-:|:-:|-
gender|0\|1\|2||未知\|男\|女

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setBirthday(birthday)

>设置生日

|参数|类型|默认|说明|
:-:|:-:|:-:|-
birthday|string\|number||20110202的形式(yyyyMMdd)

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setDescription(description)

>设置个人说明

|参数|类型|默认|说明|
:-:|:-:|:-:|-
description?|string|`""`|说明

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setSignature(signature?: string)

>设置个性签名

|参数|类型|默认|说明|
:-:|:-:|:-:|-
signature?|string|`""`|个性签名

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.setPortrait(file)

>设置头像

|参数|类型|默认|说明|
:-:|:-:|:-:|-
file|[MediaFile](#mediafile)||媒体文件

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.addGroup(group_id, comment)

>添加群
:::warning 注意
该接口风控
:::

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
comment?|string|`""`|附言

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.addFriend(group_id, user_id, comment)

>添加**群员**为好友

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq
comment?|string|`""`|附言

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.deleteFriend(user_id, block)

>删除好友

|参数|类型|默认|说明|
:-:|:-:|:-:|-
user_id|number||qq
block?|boolean|``|

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.inviteFriend(group_id, user_id)

>邀请好友入群(不支持陌生人和批量)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号
user_id|number||qq

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.sendLike(user_id: number, times?: number)

>点赞(不支持陌生人)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
user_id|number||qq
times?|number|`1`|次数

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

## 群文件系统

::: warning 注意
这里面的方法是会reject的，需要catch  
node15开始，unhandledRejection默认会升级为uncaughtException导致程序退出
:::

### Client.acquireGfs(group_id)

>初始化一个群文件系统

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号

**返回值**
`Gfs`

### Gfs.gid <Badge text="只读"/>

>群号

### Gfs.stat(fid)

>查看文件属性(尽量不要对目录使用此方法)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
fid|string||文件或目录

**返回值**
Promise&lt;[GfsStat](#gfsstat)&gt;

#### GfsStat

值|说明
:-:|-
[GfsDirStat](#gfsdirstat)|目录属性
[GfsFileStat](#gfsfilestat)|文件属性

### Gfs.ls(fid, start, limit)

>列出文件  
>`Gfs.dir(fid, start, limit)`别名

|参数|类型|默认|说明|
:-:|:-:|:-:|-
fid?|string|``|文件或目录
start?|number|`0`|开始的索引
limit?|number|`100`|限制,最大100

**返回值**
Promise&lt;[GfsStat](#gfsstat)[]&gt;

### Gfs.mkdir(name: string)

>创建目录  
>只能在根目录下创建目录

|参数|类型|默认|说明|
:-:|:-:|:-:|-
name?|string||目录

**返回值**
Promise&lt;[GfsDirStat](#gfsdirstat)&gt;

#### GfsDirStat

>目录属性  
>继承于[群文件基础属性](#gfsbasestat)

|属性|类型|说明
:--:|:-:|-
file_count|number|文件数
is_dir|`true`|是否为目录

### Gfs.rm(fid)

>删除文件或目录(删除目标是目录的时候会删除下面的所有文件)

|参数|类型|默认|说明|
:-:|:-:|:-:|-
fid|string||文件或目录

**返回值**
Promise&lt;void&gt;

### Gfs.rename(fid, name)

>重命名文件或目录

|参数|类型|默认|说明|
:-:|:-:|:-:|-
fid|string||文件或目录
name|string||文件名或目录名

**返回值**
Promise&lt;void&gt;

### Gfs.mv(fid, pid)

>移动文件到其他目录

|参数|类型|默认|说明|
:-:|:-:|:-:|-
fid|string||文件或目录
pid|string||父目录

**返回值**
Promise&lt;void&gt;

### Gfs.df()

>查看可用空间和文件数量

**返回值**：

```js
Promise<{
    total: number,//总容量
    used: number,//已用
    free: number,//剩余
    file_count: number,//
    max_file_count: number,//
}>;
```

### Gfs.upload(file, pid, name, process)

>上传文件,仅支持本地文件路径或Buffer  
>大文件上传时开启[debug](./index.md#log-level的合法值)可以打印上传进度

|参数|类型|默认|说明|
:-:|:-:|:-:|-
file|[MediaFile](#mediafile)||文件
pid?|string|`'/'`|父目录，默认传到根目录
name?|string|``|文件名?
[process](#processpercentage)|function|`undefined`|上传进度回调函数

**返回值**
`Promise`&lt;[GfsFileStat](#gfsfilestat)&gt;

#### process(percentage)

>上传进度回调函数

|参数|类型|说明|
:-:|:-:|-
percentage|string|百分比

****

#### GfsFileStat

>文件属性  
>继承于[群文件基础属性](#gfsbasestat)

|属性|类型|说明
:--:|:-:|-
size|number|文件大小(字节)
busid|number|
md5|string|
sha1|string|
duration|number| 有效时间
download_times|number| 下载次数

### Gfs.download(fid)

>获取文件的下载链接

|参数|类型|默认|说明|
:-:|:-:|:-:|-
fid|string||文件

**返回值**
`Promise`&lt;[FileElem](#fileelem)["data"]&gt;

## 其他

### Client.preloadImages(files) <Badge text="弃用" type="warn"/>

>预先上传图片以备发送
>通常图片在发送时一并上传
>提前上传可用于加快发送速度，实现秒发

|参数|类型|默认|说明|
:-:|:-:|:-:|-
files|Iterable&lt;[MediaFile](#mediafile)&gt;||媒体文件

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;string[]&gt;&gt;

### Client.getRoamingStamp(no_cache?: )

>获取漫游表情

|参数|类型|默认|说明|
:-:|:-:|:-:|-
no_cache?|boolean|`false`|是否不用缓存中的

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;string[]&gt;&gt;

### Client.getCookies(domain)

>获取cookie
:::tip 提示
使用方法见[web-api](../web-api.md)
:::

|参数|类型|默认|说明|
:-:|:-:|:-:|-
domain?|[Domain](#domain)|``|域名

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;`{ cookies: string }`&gt;&gt;

#### Domain

|值
-
`"tenpay.com"`
`"docs.qq.com"`
`"office.qq.com"`
`"connect.qq.com"`
`"vip.qq.com"`
`"mail.qq.com"`
`"qzone.qq.com"`
`"gamecenter.qq.com"`
`"mma.qq.com"`
`"game.qq.com"`
`"qqweb.qq.com"`
`"openmobile.qq.com"`
`"qun.qq.com"`
`"ti.qq.com"`

### Client.getCsrfToken() <Badge text="弃用" type="warn"/>

>获取CsrfToken
:::tip 提示
使用方法见[web-api](../web-api.md)
:::

:::warning 注意
***已弃用***
请直接访问 [Client](./index.md#client).cookies[[domain](#domain)]
:::

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;`{ token: number }`&gt;&gt;

### Client.cleanCache(type)

>清除 image 和 record 文件夹下的缓存文件

|参数|类型|默认|说明|
:-:|:-:|:-:|-
type?|`"image"\|"record"`|``|类型

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.getStatus() <Badge text="弃用" type="warn"/>

>获取在线状态和数据统计

:::warning 注意
***已弃用***
请直接访问 [Client](./index.md#client).stat
:::

|参数|类型|默认|说明|
:-:|:-:|:-:|-
type?|`"image"\|"record"`|``|类型

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;[Status](#status)&gt;&gt;

#### Status <Badge text="弃用" type="warn"/>

|属性|类型|默认|说明|
:--:|:-:|:--:|-
online|boolean||是否在线
status|number||在线状态
remote_ip?|number|``|服务器远程ip
remote_port?|number|``|服务器远程端口
msg_cnt_per_min|number||每分钟消息数
statistics|[Statistics](./index.md#statistics)||数据统计信息
config|[ConfBot](./index.md#confbot)||实例配置

### Client.reloadFriendList()

>重载好友列表
>完成之前无法调用任何api，也不会上报任何事件

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.reloadGroupList()

>重载群列表
>完成之前无法调用任何api，也不会上报任何事件

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.sendUni(cmd, body)<Badge text="内部"/>

>隐藏方法，可用于扩展协议  
>发送一个未加密的uni包

|参数|类型|默认|说明|
:-:|:-:|:-:|-
cmd|string||
body|Uint8Array||

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;`Buffer`&gt;&gt;

### Client.sendOidb(cmd, body)<Badge text="内部"/>

>隐藏方法，可用于扩展协议  
>发送一个未加密的oidb包

|参数|类型|默认需|说明|
:-:|:-:|:-:|-
cmd|string||
body|Uint8Array||

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;`Buffer`&gt;&gt;

### Client.em(name: string, data?: any)<Badge text="内部"/>

>隐藏方法，可用于扩展协议  
>触发一个oicq标准事件

|参数|类型|默认|说明|
:-:|:-:|:-:|-
name|string||事件名
data?|any||参数

### Client.getGroupNotice(group_id) <Badge text="弃用" type="warn"/>

>获取群公告
:::warning 注意
该方法已废弃，参考[web-api](../web-api.md)自行获取
:::

|参数|类型|默认|说明|
:-:|:-:|:-:|-
group_id|number||群号

**返回值**：
`Promise`&lt;[Ret](#ret-object)&lt;any[]&gt;&gt;

### Client.getLevelInfo(user_id) <Badge text="弃用" type="warn"/>

>获取等级信息
:::warning 注意
该方法已废弃，参考[web-api](../web-api.md)自行获取
:::

|参数|类型|默认|说明|
:-:|:-:|:-:|-
user_id?|number|``|qq

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;any&gt;&gt;

### Client.canSendImage() <Badge text="弃用" type="warn"/>

>是否能发图(没用)
:::warning 注意
该方法已废弃，参考[web-api](../web-api.md)自行获取
:::

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.canSendRecord() <Badge text="弃用" type="warn"/>

>是否能发语音(没用)
:::warning 注意
该方法已废弃，参考[web-api](../web-api.md)自行获取
:::

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

### Client.getVersionInfo() <Badge text="弃用" type="warn"/>

>获取版本信息(没用)
:::warning 注意
该方法已废弃，参考[web-api](../web-api.md)自行获取
:::

**返回值**
`Promise`&lt;[Ret](#ret-object)&gt;

## 其他参数

### Ret&lt;object&gt;

>应用类方法返回参数

|属性|说明|成功|异步|失败|
:--:|:-:|:--:|:-:|-
retcode|状态码|`0`|`1`|[retcode](#retcode)
status|状态|`"ok"`|`"async"`|`"failed"`
data|&lt;object&gt;(返回的数据)|`Object`|null|null
error|错误|null|null|[RetError](#reterror)

#### retcode

值|说明
:--:|-
0|成功
1|异步
100|参数错误
102|失败
103|超时
104|客户端未上线

#### RetError

>错误信息对象

|属性|类型|说明
:--:|:-:|-
code|number|错误码
message|string|错误信息

### MessageElem

>群权限

|值|说明
:-:|-
[TextElem](#textelem)|一般文本消息
[AtElem](#atelem)|艾特某人
[FaceElem](#faceelem)|经典表情
[BfaceElem](#bfaceelem)|原创表情
[MfaceElem](#mfaceelem)|魔法表情
[ImgPttElem](#imgpttelem)|图片，闪照，语音
[LocationElem](#locationelem)|地点分享
[MusicElem](#musicelem)|音乐分享
[ShareElem](#shareelem)|链接分享
[JsonElem](#jsonelem)|json消息
[XmlElem](#xmlelem)|xml卡牌消息
[AnonymousElem](#anonymouselem)|匿名消息
[ReplyElem](#replyelem)|回复
[NodeElem](#nodeelem)|合并转发
[ShakeElem](#shakeelem)|窗口抖动
[PokeElem](#pokeelem)|戳一戳
[FileElem](#fileelem)|文件(仅接收)
[VideoElem](#videoelem)|视频
[MiraiElem](#miraielem)|该元素仅mirai系的客户端可解析，官方客户端无法识别

:::tip 说明
所有的消息类型都是对象
内有type&lt;string&gt;属性和data&lt;object&gt;属性
:::

#### TextElem

>文本消息

* type
  
  |值|说明|
  :-:|-
  `text`|文本

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  text|string||消息文本

#### AtElem

>艾特某人

* type
  
  |值|说明|
  :-:|-
  `"at"`|艾特某人

* data

  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  qq| number\|`"all"`||艾特的对象,all为全体
  text?| string|`'@'`+qq\|q名|at失败时显示的文本
  dummy?| boolean|`false`|假at，只显示艾特文本

#### FaceElem

>经典表情

* type
  
  |值|说明|
  :-:|-
  `"face"`|
  `"sface"`|

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  id|number||表情id
  text?|string||

#### BfaceElem

>原创表情

* type
  
  |值|说明|
  :-:|-
  `"bface"`|原创表情

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  file|string||文件路径
  text|string||

#### MfaceElem

>魔法表情

* type
  
  |值|说明|
  :-:|-
  `"rps"`|猜拳
  `"dice"`|骰子

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:-:|-
  id|number||

#### ImgPttElem

>图片，闪照，语音

* type
  
  |值|说明|
  :-:|-
  `"image"`|图片
  `"flash"`|闪照
  `"record"`|语音

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  file|[MediaFile](#mediafile)||文件
  cache?|boolean|`true`|file为网络资源时是否使用缓存
  timeout?|number|``|file为网络资源时请求超时时间
  headers?|OutgoingHttpHeaders|``|file为网络资源时请求头
  url?|string|``|资源地址，仅接收时有
  type?|string|"image"\|"flash"\|"face"|类型

##### MediaFile

|类型|说明|
:-:|-
string|等同于[CQ:image]中的file参数,string支持以下写法：
|  |`'http(s)://'`
|  |`'base64://'`
|  |`'/tmp/example.jpg'`  本地绝对路径
|  |`'example.jpg'`  本地相对(于启动目录的)路径
|  |`'file:///'`  
|  |`'protobuf://'`  仅用于语音和视频的转发
Uint8Array|
ArrayBuffer|
SharedArrayBuffer|

#### LocationElem

>地点分享

* type
  
  |值|说明|
  :-:|-
  `"location"`|地点分享

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  address|string||地点名
  lat|number||纬度
  lng|number||经度
  name?|string||
  id?|string||

#### MusicElem

>音乐分享

* type
  
  |值|说明|
  :-:|-
  `"music"`|音乐分享

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  type|[MusicType](#musictype)||平台名
  id|string||音乐id

##### MusicType

|值|说明|
:-:|-
`"qq"`|QQ影音
`"163"`|网抑云音乐
`"migu"`|咪咕音乐
`"kugou"`|酷狗音乐
`"kuwo"`|酷我音乐

#### ShareElem

>链接分享

* type
  
  |值|说明|
  :-:|-
  `"share"`|链接分享

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  url|string||链接
  title|string||标题
  content?|string|``|内容
  image?|string|``|预览图

#### JsonElem

>JSON消息

* json消息
  
  |值|说明|
  :-:|-
  `"json"`|json消息

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  data|any||一个 json 字符串或一个 json 对象
  text?|string|``|

#### XmlElem

>xml卡牌消息

* type
  
  |值|说明|
  :-:|-
  `"xml"`|xml卡牌消息

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  data|string||
  type?|number|``|type为35的是合并转发
  text?|string|`""`|

#### AnonymousElem

>匿名消息

* type
  
  |值|说明|
  :-:|-
  `"anonymous"`|匿名消息

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  ignore?|boolean|`true`|匿名失败时是否继续发送

#### ReplyElem

>引用回复

* type
  
  |值|说明|
  :-:|-
  `"reply"`|回复

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  id|string||message_id

#### NodeElem

>node

* type
  
  |值|说明|
  :-:|-
  `"node"`|

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  id|string||

#### ShakeElem

>窗口抖动

* type
  
  |值|说明|
  :-:|-
  `"shake"`|窗口抖动

#### PokeElem

>戳一戳

* type
  
  |值|说明|
  :-:|-
  `"poke"`|戳一戳

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  type|number|| 0~6，分别对应哪种戳的类型
  id?|number|``|

#### FileElem

>文件(仅接受)

* type
  
  |值|说明|
  :-:|-
  `"file"`|文件(仅接受)

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  name|string||文件名
  url|string||资源链接
  size|number||大小，单位[]
  md5|string||md5
  duration|number||
  busid<Badge text="弃用" type="warn"/>|number||
  fileid<Badge text="弃用" type="warn"/>|string||
  fid|string||

#### VideoElem

>视频

* type
  
  |值|说明|
  :-:|-
  `"video"`|视频

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  file|string||发送仅支持本地文件路径或转发
  url?|string||仅接收

#### MiraiElem

>该元素仅mirai系的客户端可解析，官方客户端无法识别

* type
  
  |值|说明|
  :-:|-
  `"mirai"`|mirai消息

* data
  
  |属性|类型|默认|说明|
  :--:|:-:|:--:|-
  data|string||

### CommonRequestEventData

>公共请求事件数据  
>继承于[公共事件数据](#commoneventdata)

|属性|类型|值|说明
:--:|:-:|:-:|-
post_type|string|`"request"`|
user_id|number||qq
nickname|string||昵称
flag|string| |同意或拒绝时传入

### CommonEventData

>公共事件数据

|属性|类型|值|说明|
:--:|:-:|:--:|-
self_id|number||qq
time|number||10位时间戳
post_type|string|`"system"` \| `"request"` \| `"message"` \| `"notice"` \| `"sync"`\| string|事件类型
sub_type?|string||

### CommonMessageEventData

> 公共消息数据  
> 继承于 [公共事件数据](#commoneventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
post_type|string|`"message"`|
message|MessageElem[]| |消息链
raw_message|string| |字符串格式的消息
message_id|string||消息id
user_id|number||qq
font|string||
reply|function|[reply](#replymessage-auto_escape)|可直接使用这个函数回复消息

#### reply(message, auto_escape)

|属性|类型|值|说明|
:--:|:-:|:--:|-
message|[MessageElem](#messageelem) \| Iterable&lt;[MessageElem](#messageelem)\|string&gt; \| string||
auto_escape?|boolean||

**返回值**
`Promise`&lt;[Ret](#ret-object)&lt;{ message_id|string }&gt;&gt;

### PrivateMessageEventData

> 私聊消息数据
> 继承于[公共消息数据](#commonmessageeventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
message_type|string|`"private"`|私聊消息
sub_type|string|`"friend"` \| `"group"` \| `"single"` \| `"other"` \| `"self"`|
sender|[FriendInfo](./index.md#friendinfo)||发送者
auto_reply|boolean||是否自动回复

### GroupMessageEventData

> 群聊消息数据
> 继承于[公共消息数据](#commonmessageeventdata)

|属性|类型|值|说明|
:--:|:-:|:--:|-
message_type|string|`"group"`| 群消息
sub_type|string|`"normal"` \| `"anonymous"`|类型
group_id|number||群号
group_name|string||群名
anonymous|[Anonymous](#anonymous) \| null| |匿名消息
sender|[MemberBaseInfo](./index.md#memberbaseinfo)||发送者
atme|boolean||
seqid|number||
block|boolean||是否已屏蔽

#### Anonymous

### GfsBaseStat

>群文件基础属性

|属性|类型|说明
:--:|:-:|-
fid|string|文件(夹)id
pid|string|父文件夹id
name|string|
user_id|number|创建者
create_time|number|创建时间
