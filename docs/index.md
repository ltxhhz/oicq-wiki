<script>
  export default {
  mounted(){
    //访问次数统计
    let bsz = document.createElement("script")
    bsz.src ="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
    bsz.async=true
    bsz.onerror=function(){
      busuanzi_value_site_pv.innerText="(获取失败)"
    }
    busuanzi_container_site_pv.parentElement.appendChild(bsz)
  }
}
</script>

# 简介

<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>

[![npm version](https://img.shields.io/npm/v/oicq.svg?logo=npm)](https://www.npmjs.com/package/oicq)
[![dm](https://shields.io/npm/dm/oicq)](https://www.npmjs.com/package/oicq)

:::warning 注意
[![node engine](https://img.shields.io/node/v/oicq.svg)](https://nodejs.org)
支持最低node版本为 v12.16
:::

* QQ(安卓)协议基于Node.js的实现，使用CQHTTP风格的API
* 高度抽象地封装了大部分常用功能
* 若你不熟悉Node.js或不会组织代码，可通过 [template](https://github.com/takayama-lily/oicq-template) 创建一个简单的应用程序

---

[[toc]]

## 安装

```bash
> npm i oicq  # or > yarn add oicq
```

## 用法

```js
const { createClient } = require("oicq");
const account = 123456789;
const client = createClient(account);

//监听上线事件
client.on("system.online", () => console.log("Logged in!"));

//监听消息并回复
client.on("message", (event) => {
  event.reply("hello world")
  console.log(event)
});

/****************************************
 * 手机QQ扫描二维码登录(与下面的密码登录二选一)
 * 优点是不需要过滑块和设备锁
 * 缺点是万一token失效，无法自动登录，需要重新扫码
 */
client.on("system.login.qrcode", function (event) {
  process.stdin.once("data", () => {
    this.login(); //扫码后按回车登录
  });
}).login(); //这里不填写密码

//-------------------------------------------------------------------------

/****************************************
 * 密码登录
 * 缺点是需要过滑块，可能会报环境异常
 * 优点是一劳永逸
 */
client.on("system.login.slider", function (event) { //监听滑动验证码事件
  process.stdin.once("data", (input) => {
    this.sliderLogin(input); //输入ticket
  });
}).on("system.login.device", function (event) { //监听登录保护验证事件
  process.stdin.once("data", () => {
    this.login(); //验证完成后按回车登录
  });
}).login("password"); //需要填写密码或md5后的密码
```

## 常用功能

```js
client.sendGroupMsg(gid, "hello") //群聊
client.sendPrivateMsg(uid, "hello") //私聊
client.deleteMsg(id) //撤回
client.setGroupKick(gid, uid) //踢人
client.setGroupBan(gid, uid, 3600) //禁言
```

## http-api

> 可作为 [http-api](./http-api/index.md) 或调试程序使用

```bash
> npm i -g oicq
> oicq <account>
```

## 其他

* [常见问题](./杂七杂八.md) (登录、风控等相关问题)
* [awesome](./awesome.md) 社区相关应用收集
* [QQWebApi](./web-api.md) QQ Web Api 收集
  