(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{551:function(e,s,t){"use strict";t.r(s);var a=t(2),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"在服务器无法获取session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在服务器无法获取session"}},[e._v("#")]),e._v(" 在服务器无法获取session")]),e._v(" "),t("ul",[t("li",[e._v("设置session属性时报错Cannot set property ‘xxx’ of undefined")])]),e._v(" "),t("h2",{attrs:{id:"在node服务器上配置了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在node服务器上配置了"}},[e._v("#")]),e._v(" 在node服务器上配置了")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210131144118208.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L211czEyMw==,size_16,color_FFFFFF,t_70",target:"_blank",rel:"noopener noreferrer"}},[e._v("图片.jpg"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"但是通过谷歌浏览器-不能正确的获取session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#但是通过谷歌浏览器-不能正确的获取session"}},[e._v("#")]),e._v(" 但是通过谷歌浏览器，不能正确的获取session")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210131144336935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L211czEyMw==,size_16,color_FFFFFF,t_70",target:"_blank",rel:"noopener noreferrer"}},[e._v("图片.jpg"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("每次的cookies都不对劲哦，然后服务器的session失效，不是同一个")]),e._v(" "),t("li",[e._v("百度后发现是谷歌浏览器的防止csrf的措施，会有默认的配置SameSite头")]),e._v(" "),t("li",[e._v("上图中的叹号会提示默认使用了Lax模式，即POST是不允许的（主要针对不信任的地址，其实用localhost跑是没问题的，这里我是测试花生壳内网穿透来着，代理域名不被谷歌信任了就这样了，但是不设置这个内容qq浏览器就可以运行）")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210131144508157.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L211czEyMw==,size_16,color_FFFFFF,t_70",target:"_blank",rel:"noopener noreferrer"}},[e._v("图片.jpg"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("chrome://flags/#site-isolation-trial-opt-out\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"然后解决就是使用上边的配置地址-去像下图一样去废弃三个默认配置-重启谷歌浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#然后解决就是使用上边的配置地址-去像下图一样去废弃三个默认配置-重启谷歌浏览器"}},[e._v("#")]),e._v(" 然后解决就是使用上边的配置地址，去像下图一样去废弃三个默认配置，重启谷歌浏览器")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210131144232683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L211czEyMw==,size_16,color_FFFFFF,t_70",target:"_blank",rel:"noopener noreferrer"}},[e._v("图片.jpg"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"尝试使用以上方法无法解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尝试使用以上方法无法解决"}},[e._v("#")]),e._v(" 尝试使用以上方法无法解决")]),e._v(" "),t("p",[e._v("TODO：问题待解决...")]),e._v(" "),t("h2",{attrs:{id:"顺序问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序问题"}},[e._v("#")]),e._v(" 顺序问题")]),e._v(" "),t("ul",[t("li",[e._v("app.use(session())应该放在app.use(router)路由之前")]),e._v(" "),t("li",[e._v("项目中使用的是jsonwebtoken，尝试使用session而已")])]),e._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[e._v("#")]),e._v(" 参考文档")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/xj932956499/article/details/124807786",target:"_blank",rel:"noopener noreferrer"}},[e._v("node服务端express-session使用以及无效问题"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);