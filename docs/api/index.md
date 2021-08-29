# api

## createClient: `Funciton`

创建一个[Client](#client)实例

|参数|类型|默认|必需|说明|
:--:|:-:|:--:|:-:|-
uin|Number|  |√|账号
config|[ConfBot](#confbot-object)|||创建实例时的参数配置

**返回值** [Client](#client)实例

### 示例

```js
const { createClient } = require("oicq")
const client = createClient(147258369) //你的账号
```

### ConfBot

>实例参数配置

|属性|类型|默认|必需|说明|
:--:|:-:|:--:|:-:|-
[log_level](#log-level的合法值)|string|`'info'`||日志等级(往屏幕打印日志会降低性能，若消息量巨大建议修改此参数或重定向)
[platform](#platform的合法值)|number|`1`||登录设备
kickoff|boolean|`false`||被踢下线是否在3秒后重新登陆
ignore_self|boolean|`true`||群聊是否屏蔽自己的发言
ignore_black|boolean|`true`||群聊是否屏蔽黑名单人员
resend|boolean|`true`||被风控时是否尝试用分片发送
brief|boolean|`false`||raw_message里是否不使用CQ码字符串，而是使用简短易读的形式(如："[图片][表情]")，可以加快解析速度
data_dir|string|`__dirname+'/data'`||数据存储文件夹，需要可写权限
reconn_interval|number|`5`||触发system.offline.network事件后的重连间隔秒数，单位秒，不建议设置低于3秒，设置为0则不会自动重连，然后你可以监听此事件自己处理
internal_cache_life|number|`3600`||一些内部缓存(如群员详细资料、群详细资料等)的生命周期，单位秒，即使不用相关API(使用`no_cache=true`)强制刷新数据，超过这个时间后内部也会自动刷新
auto_server|boolean|`true`||自动选择最优服务器，`false`则会一直使用`msfwifi.3g.qq.com`进行连接
remote_ip|string|`''`|<td rowspan="2" id="remote">手动指定ip和port，不推荐使用，大多数情况下你应该使用auto_server</td>|[del]
remote_port|number|||[del]
ffmpeg_path|string|`''`|<td rowspan="2">ffmpeg配置</td>|[del]
ffprobe_path|string|`''`||[del]

<script>/* 合并单元格删除多余单元格 */
  setTimeout(()=>{
    var tb=document.getElementById("remote").parentElement.parentElement
  tb.innerHTML=tb.innerHTML.replaceAll('<td>[del]</td>','')
  },500)
</script>

## Client

>机器人实例

### log_level的合法值

|值|说明|
:-:|-
`'info'`|默认值
`'trace'`|
`'debug'`|
`'warn'`|
`'error'`|
`'fatal'`|
`'mark'`|
`'off'`|关闭日志

### platform的合法值

|值|说明|
:-:|-
`1`|安卓手机(默认)
`2`|aPad
`3`|安卓手表
`4`|MacOs
`5`|iPad
