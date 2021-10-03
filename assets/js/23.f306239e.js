(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{393:function(t,_,v){"use strict";v.r(_);var n=v(28),e=Object(n.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"qq-web-api-收集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qq-web-api-收集"}},[t._v("#")]),t._v(" QQ Web Api 收集")]),t._v(" "),v("p",[t._v("web api 是需要 cookie 或 csrf-token 才可正常访问，用于实现一些扩展功能的 api")]),t._v(" "),v("p",[t._v("如果你知道一些尚未收集到的有用api，欢迎提交pr到这个文件")]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("使用oicq客户端登录后获取cookie和csrf-token:")])]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" domain "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//支持qun.qq.com等多个domain")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cookie "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("domain"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bkn "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bkn"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cookie需要设置在http请求头部")]),t._v("\n")])])]),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Method")]),t._v(" "),v("th",[t._v("Url")]),t._v(" "),v("th",[t._v("Cookie")]),t._v(" "),v("th",[t._v("Domain")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("取QQ等级")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v('https://club.vip.qq.com/api/vip/getQQLevelInfo?requestBody={"iUin":${QQ号}}')])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[v("code",[t._v("vip.qq.com")])])]),t._v(" "),v("tr",[v("td",[t._v("取群资料")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://qinfo.clt.qq.com/cgi-bin/qun_info/get_group_info_all?gc=${群号}&bkn=${bkn}")]),v("br"),v("em",[t._v("※陌生群也可以获取")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[t._v("空")])]),t._v(" "),v("tr",[v("td",[t._v("取群设置")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://qinfo.clt.qq.com/cgi-bin/qun_info/get_group_setting_v2?gc=${群号}&bkn=${bkn}")]),v("br"),v("em",[t._v("※必须是群员")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[t._v("空")])]),t._v(" "),v("tr",[v("td",[t._v("取群操作记录")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://qinfo.clt.qq.com/cgi-bin/qun_info/get_sys_msg?gc=${群号}&bkn=${bkn}")]),v("br"),v("em",[t._v("※必须是管理员")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[t._v("空")])]),t._v(" "),v("tr",[v("td",[t._v("取QQ资料")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://cgi.find.qq.com/qqfind/buddy/search_v3?keyword=${QQ号}")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[t._v("空")])]),t._v(" "),v("tr",[v("td",[t._v("开关匿名")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://qqweb.qq.com/c/anonymoustalk/set_anony_switch?bkn=${bkn}&value=${1或0}&group_code=${群号}")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[v("code",[t._v("qqweb.qq.com")])])]),t._v(" "),v("tr",[v("td",[t._v("取群荣誉")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://qun.qq.com/interactive/qunhonor?gc=${群号}")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[v("code",[t._v("qun.qq.com")])])]),t._v(" "),v("tr",[v("td",[t._v("精华消息")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://qun.qq.com/essence/index?gc=${群号}")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[v("code",[t._v("qun.qq.com")])])]),t._v(" "),v("tr",[v("td",[t._v("取群公告")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://web.qun.qq.com/cgi-bin/announce/get_t_list?bkn=${bkn}&qid=${群号}&ft=23&s=-1&n=20")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[v("code",[t._v("qun.qq.com")])])]),t._v(" "),v("tr",[v("td",[t._v("发群公告")]),t._v(" "),v("td",[t._v("POST")]),t._v(" "),v("td",[v("code",[t._v("https://web.qun.qq.com/cgi-bin/announce/add_qun_notice?bkn=${bkn}")]),v("br"),t._v("POST数据："),v("code",[t._v('qid=${群号}&bkn=${bkn}&text=${内容}&pinned=0&type=1&settings={"is_show_edit_card":1,"tip_window_type":1,"confirm_required":1}')])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[v("code",[t._v("qun.qq.com")])])]),t._v(" "),v("tr",[v("td",[t._v("取群成员")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://qun.qq.com/cgi-bin/qun_mgr/search_group_members?gc=${群号}&st=${0}%end=${20}&sort=0&bkn=${bkn}")])]),t._v(" "),v("td",[t._v("YES")]),t._v(" "),v("td",[v("code",[t._v("qun.qq.com")])])]),t._v(" "),v("tr",[v("td",[t._v("取群头像")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://p.qlogo.cn/gh/${群号}/${群号}/${0(size)}")])]),t._v(" "),v("td",[t._v("NO")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("取群历史头像")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://p.qlogo.cn/gh/${群号}/${群号}_${1}/${0(size)}")])]),t._v(" "),v("td",[t._v("NO")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("取QQ头像")]),t._v(" "),v("td",[t._v("GET")]),t._v(" "),v("td",[v("code",[t._v("https://q1.qlogo.cn/g?b=qq&s=${0(size)}&nk=${QQ号}")])]),t._v(" "),v("td",[t._v("NO")]),t._v(" "),v("td")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);