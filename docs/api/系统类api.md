# 系统类api

[[toc]]

## Client.login(password)

>登录，传密码则使用密码登录，不传则扫码登录

|参数|类型|默认|说明|
:--:|:-:|:--:|-
password?|Uint8Array \| String|`undefined`|明文或md5后的密码

## Client.logout()

>登出，先下线再关闭连接

**返回值**
`Promise<void>`

## Client.captchaLogin(captcha) <Badge text="弃用" type="warn"/>

> 。。。

|参数|类型|默认|说明|
:--:|:-:|:--:|-
captcha|string||

>文字验证码

**返回值**
`void`

## Client.terminate()

>直接关闭连接

**返回值**
`void`

## Client.isOnline()

>判断实例是否在线

**返回值**
`Boolean`

## Client.sliderLogin(ticket)

>提交滑动验证码ticket

|参数|类型|默认|说明|
:--:|:-:|:--:|-
ticket|string||滑动验证码ticket

## Client.sendSMSCode()

>发验证码给密保手机，用于发短信过设备锁

## Client.submitSMSCode(code)

>提交收到的短信验证码

|参数|类型|默认|说明|
:--:|:-:|:--:|-
code|string||短信验证码
