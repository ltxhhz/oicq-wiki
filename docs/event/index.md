# 事件

> 一级事件共有五类

+ [Event: system](./system.md) 系统类（上下线、验证码、设备锁等）
+ [Event: message](./message.md) 聊天消息类（群聊、私聊、讨论组）
+ [Event: request](./request.md) 请求类（好友申请、群申请、群邀请）
+ [Event: notice](./notice.md) 通知类（入群退群、禁言、撤回等）
+ [Event: sync](./sync.md) 同步类（用于同步同账号其他设备的操作）
  
+ [Event: internal](./internal.md) 内部隐藏事件

----

实例化client后，使用 `client.on()` 来监听一个事件，回调函数中的`this`都指向[Client](../api/index.md#client)实例  
常用的比如：

```js
/** 监听上线事件 */
client.on("system.online", ()=>console.log("logged in!"))
/** 监听全部的消息事件 */
client.on("message", (event)=>console.log(event))
/** 监听群消息事件 */
client.on("message.group", (event)=>console.log(event))
/** 监听私聊消息事件 */
client.on("message.private", (event)=>console.log(event))
/** 监听好友申请事件 */
client.on("request.friend.add", (event)=>console.log(event))
/** 监听入群申请事件 */
client.on("request.group.add", (event)=>console.log(event))
/** 监听群邀请事件 */
client.on("request.group.invite", (event)=>console.log(event))
/** 监听全部的通知事件 */
client.on("notice", (event)=>console.log(event))
/** 监听群通知事件 */
client.on("notice.group", (event)=>console.log(event))
/** 监听成员入群事件 */
client.on("notice.group.increase", (event)=>console.log(event))
```

一个事件可以绑定多个监听函数，并且为连续传递，例如：  
为 `notice` 事件绑定的监听器，对所有 `notice.*.*` 事件都有效  
为 `notice.group` 事件绑定的监听器，对所有 `notice.group.*` 事件都有效  

::: tip 提示
使用 VScode 编辑器可以获得完整的智能提示
:::

一个 `event` 的数据可能是如下形式的对象：

```js
{
  self_id: 147258369, //登录账号
  time: 1621582964, //时间戳
  post_type: "notice", //一级分类
  notice_type: "group", //二级分类
  sub_type: "ban", //三级分类
  group_id: 258147369, //群号
  operator_id: 369258147, //操作者
  user_id: 147258369, //被操作者
  duration: 600 //时长(秒)
}
// 这是一个群禁言事件
// 可以通过监听 `notice.group.ban` 或 `notice.group` 或 `notice` 捕获
```
