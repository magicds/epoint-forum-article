# F9 在线换肤工具

[[toc]]

## 体验入口：

**OA首页 => 门户 => 产品设计中台 => 在线工具 => 框架在线换肤**

体验地址： [https://fe.epoint.com.cn/fedemo/pages/f9skinbuilder/](https://fe.epoint.com.cn/fedemo/pages/f9skinbuilder/)

## 使用介绍

![skin-builder](./_image/skinbuilder.png)

直接调整各个色板的颜色，即可在右侧实时看到对应的效果。

生成皮肤文件基于9个色值， 不过大多数情况下，仅用配置一个主色和对应的两个辅色即可。

颜色的具体规则可参考[控件换肤配色规则](https://docs.qq.com/sheet/DSnVyZmhkTHluYUJN?opendocxfrom=admin&tab=BB08J2)

:::tip
文本框聚焦边框默认使用主色调，直接和主色调进行联动，但当主色调为红色时，请将其配置为其他颜色，以避免聚焦的红色和验证失败的红色存在冲突和歧义。
:::

## 原理介绍

能做到目前这样的效果，前期工作必不可少

## 说明

:::warning
- 目前此工具仅支持 **F9.4**
- 此工具基于对框架和miniui相关图标全部有图片改为字体图标的，无法不升级直接使用
- 此功能和工具对其他版本的支持尚未确定
:::