# internal

## `internal.sso` <Badge text="实验性" type="warn"/>

> 实验性事件: 监听所有收到的包(已解密)

**回调参数**:
|属性|类型|值|说明|
:--:|:-:|:--:|-
cmd|string||
seq|number||
payload|Buffer||

## `internal.input` <Badge text="实验性" type="warn"/>

> 实验性事件: 对方正在输入

**回调参数**:
|属性|类型|值|说明|
:--:|:-:|:--:|-
user_id|number||
end|boolean||
