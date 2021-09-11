# api

[[toc]]

## createClient(uin, config)

创建一个[Client](#client)实例

|参数|类型|默认|说明|
:--:|:-:|:--:|-
uin|Number|  |账号
config?|[ConfBot](#confbot)||创建实例时的参数配置

**返回值** [Client](#client)实例

### 示例

```js
const { createClient } = require("oicq")
const client = createClient(147258369) //你的账号
```

### ConfBot

>实例参数配置

|属性|类型|默认|说明|
:--:|:-:|:--:|-
[log_level](#log-level的合法值)?|string|`"info"`|日志等级(往屏幕打印日志会降低性能，若消息量巨大建议修改此参数或重定向)
[platform](#platform的合法值)?|number|`1`|登录设备
kickoff?|boolean|`false`|被踢下线是否在3秒后重新登陆
ignore_self?|boolean|`true`|群聊是否屏蔽自己的发言
resend?|boolean|`true`|被风控时是否尝试用分片发送
brief?|boolean|`false`|raw_message里是否不使用CQ码字符串，而是使用简短易读的形式(如："[图片][表情]")，可以加快解析速度
data_dir?|string|`__dirname+'/data'`|数据存储文件夹，需要可写权限
reconn_interval?|number|`5`|触发system.offline.network事件后的重连间隔秒数，单位秒，不建议设置低于3秒，设置为0则不会自动重连，然后你可以监听此事件自己处理
internal_cache_life?|number|`3600`|一些内部缓存(如群员详细资料、群详细资料等)的生命周期，单位秒，即使不用相关API(使用`no_cache=true`)强制刷新数据，超过这个时间后内部也会自动刷新
auto_server?|boolean|`true`|自动选择最优服务器，`false`则会一直使用`msfwifi.3g.qq.com`进行连接
remote_ip?|string|`""`<td rowspan="2" id="remote">手动指定ip和port，不推荐使用，大多数情况下你应该使用auto_server</td>|[del]
remote_port?|number||[del]
ffmpeg_path?|string|`""`<td rowspan="2">ffmpeg配置</td>|[del]
ffprobe_path?|string|`""`|[del]

<script>
export default {
  mounted(){
    /* 合并单元格删除多余单元格 */
    let tb=document.getElementById("remote").parentElement.parentElement
    tb.innerHTML=tb.innerHTML.replaceAll('<td>[del]</td>',"")
  }
}
</script>

## Client

>机器人实例

|属性|类型|说明|
:--:|:-:|-
uin|number|登录账号
nickname|string|昵称
sex|string|性别
age|number|年龄
[online_status](#在线状态)|number|在线状态
fl|Map\<number, [FriendInfo](#friendinfo)\>|好友列表
sl|Map\<number, [StrangerInfo](#strangerinfo)\>|陌生人(有会话关系的非好友)列表
gl|Map\<number, [GroupInfo](#groupinfo)\>|群列表
gml|Map\<number, Map\<number, [MemberInfo](#memberinfo)\>\>|群员列表
blacklist|Set\<number\>|黑名单
logger|[log4js](https://www.npmjs.com/package/log4js).Logger|日志记录器
dir|string|当前账号本地存储路径
config|[ConfBot](./index.md#confbot)|配置信息(大部分参数支持热修改)
stat|[Statistics](#statistics)|数据统计信息
bkn|Promise\<number\>|

****

## 其他参数

:::tip 提示
以下全部是用到的其他参数
:::

### 在线状态

值|说明
:--:|-
`11`|我在线上
`31`|离开
`41`|隐身
`50`|忙碌
`60`|Q我吧
`70`|请勿打扰

### StrangerInfo

>陌生人资料

|属性|类型|默认|说明|
:--:|:-:|:--:|-
user_id|number||账号
nickname|string ||昵称
sex|[Gender](#gender)||性别
age|number||年龄
area?|string|||地区
signature?|string|||个性签名
description?|string|||个人说明
group_id?|number|||临时会话群号

### Gender

>性别

|值|说明
:-:|-
`"male"`|男
`female`|女
`"unknown"`|未知

### FriendInfo

>好友资料
>
>继承于[陌生人资料](#strangerinfo)

|属性|类型|默认|说明|
:--:|:-:|:--:|-
remark|string||好友备注

### GroupInfo

>群资料

|属性|类型|默认|说明|
:--:|:-:|:--:|-
group_id|number||群号
group_name|string||群名
member_count|number||群员数
max_member_count|number||最大群员数
owner_id|number||群主账号
last_join_time|number||最后入群时间
last_sent_time|number||最后发言时间
shutup_time_whole|number||全员禁言到期时间
shutup_time_me|number||我的禁言到期时间
create_time|number||创建时间
grade|number||群等级
max_admin_count|number||最大管理员数
active_member_count|number||活跃群员数
update_time|number||当前群资料的最后更新时间

### MemberBaseInfo

>群员基础资料

|属性|类型|默认|说明|
:--:|:-:|:--:|-
user_id|number||
nickname|string||
card|string||群名片
sex|[Gender](#gender)||
age|number||
area|string||
level|number||等级
role|[GroupRole](#grouprole)||权限
title|string||头衔

### GroupRole

>群权限

|值|说明
:-:|-
`"owner"`|群主
`admin`|管理
`"member"`|群员

### MemberInfo

>群员资料
>
>继承于[群员基础资料](#memberbaseinfo)

|属性|类型|默认|说明|
:--:|:-:|:--:|-
group_id|number||群号
join_time|number||入群时间
last_sent_time|number||最后发言时间
rank|string||
unfriendly<Badge text="弃用" type="warn"/>|boolean||
title_expire_time|number||头衔过期时间
card_changeable<Badge text="弃用" type="warn"/>|boolean||
shutup_time|number||禁言到期时间
update_time|number||此群员资料的最后更新时间

### Statistics

>数据统计信息

|属性|类型|默认|说明|
:--:|:-:|:--:|-
start_time|number||启动时刻
lost_times|number||断线次数
recv_pkt_cnt|number||收到包总数
sent_pkt_cnt|number||发送包总数
lost_pkt_cnt|number||丢包总数
recv_msg_cnt|number||收到消息总数
sent_msg_cnt|number||发送消息总数

### log_level的合法值

|值|说明|
:-:|-
`"info"`|默认值
`"trace"`|
`"debug"`|
`"warn"`|
`"error"`|
`"fatal"`|
`"mark"`|
`"off"`|关闭日志

### platform的合法值

|值|说明|
:-:|-
`1`|安卓手机(默认)
`2`|aPad
`3`|安卓手表
`4`|MacOs
`5`|iPad
