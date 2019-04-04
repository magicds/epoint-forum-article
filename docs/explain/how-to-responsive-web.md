# 开发响应式网页

在上一篇文章中，已经为大家讲解了什么是响应式网页，以及响应式网页所具有的特点。将在这一篇中为大家介绍一下要开发响应式网页应有的流程。

## 是否需要设计开发成响应式网页

不过在此之前需要确认：**是否真的需要设计成响应式的网页？**

虽然响应式的网页设计的初衷是想让一个网页、一套代码能够在所有设备上都能良好展示。但是 "**there are no silver bullets**"，简单来看看响应式网页会存在的问题：

- 一个网页，设计师至少要提供2-3分设计稿，手机设备（、平板设备）、PC设备。
- 虽然是一个页面就能适配各种大小的屏幕，但是并不真的能让人就只写一套代码。开发人员还是需要为不同大小的屏幕写不同的代码。
- 资源加载问题，一个网页适配所有设备，它看起来强大，但也很臃肿，即使是在手机查看，它依然会加载适配平板以及PC设备的代码，只不过不会生效而已。
- 复杂度问题，移动设备种类繁多，而且还存在一个设备像素比的概念，使得要兼容全设备时的样式代码和需要的图片资源非常复杂。
- 兼容性问题，移动设备基本不会有很老旧的浏览器，css和JavaScript的使用限制相对较少，而我们公司目前在PC设备上还是要非常注意兼容性问题的。

因此，目前使用最多的方案基本都是PC和移动设备和一套：
- PC设备下的网页兼容适配各种分辨率的PC屏幕。
- 移动设备兼容全部移动设备和平板设备。

为了证明我并非虚言，事实为证：

手机输入上输入[www.taobao.com](www.taobao.com),直接跳到了[h5.taobao.com](h5.taobao.com) 。然后可能还会弹出请求打开淘宝APP。

不过一个页面适配各种大小的屏幕，还是非常有诱惑力的，不会因为它存在的问题就完全否定它，

通常所开发出的页面都是具有一定的自适应的性的（除一些大屏图表或者固定分辨率的页面），能在绝大多数PC设备上正常显示。

如果要还需要兼容平板、手机设备，则需要确认项目是否是有对应移动端的，如果存在则直接进行移动端的单独开发就行了，没必要生搬硬套做成响应式。

没有移动端，还需要兼容各种设备，则需要分析页面的情况，比如以下的情况是无法使用响应式网页开发的：

- 非信息展示页面，而是具有复杂人机交互的，此种情形下，由于交互形式不同，很难兼顾各种设备下都具有较好的体验。
    - PC下屏幕大，可展示内容多，通常可以使用点击（或hover等形式）滑出展示另一块的内容。
    - 移动设备上，再玩大块元素的展示消失，只会让用户困惑迷茫。
- 较多的表单录入页面。
    - PC设备可以同时展示较多内容，一并输入提交；而手机设备表单通常都单列展示，则一页的数目不过过多，而且会考虑误关闭或网络问题信息丢失的情况，通常都是填入几个之后下一步再完成其他的表单字段录入。
    - 控件的交互形式不同，如下拉框、日期时间选择、树形控件这类控件，在PC设备和移动设备的交互形式完全不同。
    - 基于以上情况，复杂表单页面是无法通过一个响应式网页来适配所有设备的。
- 复杂信息的展示页面，如pc页面上表格展示或者需要弹出展示等，是无法有效直接转化为能在移动设备上合理展示的。

简单总结来看：

**可使用响应式开发的情景：**

1. 简单信息展示的页面是如新闻、信息的展示。
1. 流程、通知查看
1. 简单功能页面

**不适用响应式开发的情景：**

1. 复杂交互页面
1. 大量表单页面
1. 复杂流程页面
1. 项目的后台管理功能页
1. 商品详情页面等

## 不需要响应式开发

根据上面的判断，如果不适用响应式的开发，则按照各自不同的流程进行即可，分别进行移动设备和PC设备的开发。

## 响应式开发

如果经过简单的评估，已经基本确认可使用响应式的开发，则建议联系相关人员（**项目、产品、UE、UI、前后端开发人员**）一起确认下这个效果，因为：

1. 响应式开发并不能简化任何一方人员的工作，提前确认，避免返工等浪费人力成本
    - UE 需要为不同设备下给出不同的交互
    - UI 需要提供多份设计稿
    - 前端开发需要为不同设备编写不同的代码
    - 移动端和PC端接口格式是否相同、认证机制是否相同、接口是直接复用还是需要一定的调整
2. 不同角色人员考虑问题的角度和重点不同，这个过程中可能存在偏差，而且针对某些需求，可能已有内容可直接使用或者有更好的方案
    - 项目人员可能更懂客户的需求和想要的效果
    - UE、UI 会经手基本所有的交互和视觉设计， 很多情况下可以提供比项目或客户直接提出的更好的方案
    - 开发人员更懂如何实现和落地、有时候一些小小的改动，能大幅降低开发工作量
3. 需求可能已有现成方案，无须重复开发

如果共同确认需要响应式开发，那就按正常流程进行即可。

## 简单流程示意如下：


<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="processonSvg1000" viewBox="294.0 87.0 523.0 854.0" width="523.0" height="854.0"><defs id="ProcessOnDefs1001"><marker id="ProcessOnMarker1025" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1026" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1029" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1030" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1039" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1040" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1051" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1052" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1058" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1059" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1067" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1068" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1074" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1075" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1085" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1086" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker><marker id="ProcessOnMarker1089" markerUnits="userSpaceOnUse" orient="auto" markerWidth="16.23606797749979" markerHeight="10.550836550532098" viewBox="-1.0 -1.3763819204711736 16.23606797749979 10.550836550532098" refX="-1.0" refY="3.8990363547948754"><path id="ProcessOnPath1090" d="M12.0 3.8990363547948754L0.0 7.798072709589751V0.0Z" stroke="#323232" stroke-width="2.0" fill="#323232" transform="matrix(1.0,0.0,0.0,1.0,0.0,0.0)"/></marker></defs><g id="ProcessOnG1002"><path id="ProcessOnPath1003" d="M294.0 87.0H817.0V941.0H294.0V87.0Z" fill="none"/><g id="ProcessOnG1004"><g id="ProcessOnG1005" transform="matrix(1.0,0.0,0.0,1.0,347.0,107.0)" opacity="1.0"><path id="ProcessOnPath1006" d="M16.666666666666668 0.0L83.33333333333333 0.0C105.55555555555556 0.0 105.55555555555556 50.0 83.33333333333333 50.0L16.666666666666668 50.0C-5.555555555555556 50.0 -5.555555555555556 0.0 16.666666666666668 0.0Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1007" transform="matrix(1.0,0.0,0.0,1.0,10.0,16.875)"><text id="ProcessOnText1008" fill="#323232" font-size="13" x="39.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">开始</text></g></g><g id="ProcessOnG1009" transform="matrix(1.0,0.0,0.0,1.0,347.0,871.0)" opacity="1.0"><path id="ProcessOnPath1010" d="M16.666666666666668 0.0L83.33333333333333 0.0C105.55555555555556 0.0 105.55555555555556 50.0 83.33333333333333 50.0L16.666666666666668 50.0C-5.555555555555556 50.0 -5.555555555555556 0.0 16.666666666666668 0.0Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1011" transform="matrix(1.0,0.0,0.0,1.0,10.0,16.875)"><text id="ProcessOnText1012" fill="#323232" font-size="13" x="39.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">结束</text></g></g><g id="ProcessOnG1013" transform="matrix(1.0,0.0,0.0,1.0,347.0,198.0)" opacity="1.0"><path id="ProcessOnPath1014" d="M0.0 0.0L100.0 0.0L100.0 70.0L0.0 70.0Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1015" transform="matrix(1.0,0.0,0.0,1.0,10.0,18.75)"><text id="ProcessOnText1016" fill="#323232" font-size="13" x="39.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">页面需求的</text><text id="ProcessOnText1017" fill="#323232" font-size="13" x="39.0" y="29.575" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">设计开发</text></g></g><g id="ProcessOnG1018" transform="matrix(1.0,0.0,0.0,1.0,314.0,310.0)" opacity="1.0"><path id="ProcessOnPath1019" d="M0.0 53.0L83.0 0.0L166.0 53.0L83.0 106.0L0.0 53.0Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1020" transform="matrix(1.0,0.0,0.0,1.0,10.0,36.75)"><text id="ProcessOnText1021" fill="#323232" font-size="13" x="72.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">自行评估</text><text id="ProcessOnText1022" fill="#323232" font-size="13" x="72.0" y="29.575" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">是否需要响应式</text></g></g><g id="ProcessOnG1023"><path id="ProcessOnPath1024" d="M397.0 157.0L397.0 177.5L397.0 177.5L397.0 182.7639320225002" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1025)"/></g><g id="ProcessOnG1027"><path id="ProcessOnPath1028" d="M397.0 268.0L397.0 289.0L397.0 289.0L397.0 294.7639320225002" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1029)"/></g><g id="ProcessOnG1031" transform="matrix(1.0,0.0,0.0,1.0,314.0,477.0)" opacity="1.0"><path id="ProcessOnPath1032" d="M0.0 64.5L83.0 0.0L166.0 64.5L83.0 129.0L0.0 64.5Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1033" transform="matrix(1.0,0.0,0.0,1.0,10.0,40.125)"><text id="ProcessOnText1034" fill="#323232" font-size="13" x="72.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">【项目、产品、UE、</text><text id="ProcessOnText1035" fill="#323232" font-size="13" x="72.0" y="29.575" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">UI、前后端开发人员】</text><text id="ProcessOnText1036" fill="#323232" font-size="13" x="72.0" y="45.825" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">共同确认？</text></g></g><g id="ProcessOnG1037"><path id="ProcessOnPath1038" d="M397.0 416.0L397.0 446.5L397.0 446.5L397.0 461.7639320225002" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1039)"/><g id="ProcessOnG1041" transform="matrix(1.0,0.0,0.0,1.0,397.0,430.75696601125014)"><path id="ProcessOnPath1042" d="M0 0H20.0V16.25H0Z" fill="#fff" transform="matrix(1.0,0.0,0.0,1.0,-10.0,0.0)"/><text id="ProcessOnText1043" fill="#323232" font-size="13" x="0.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">需要</text></g></g><g id="ProcessOnG1044" transform="matrix(1.0,0.0,0.0,1.0,347.0,665.0)" opacity="1.0"><path id="ProcessOnPath1045" d="M0.0 0.0L100.0 0.0L100.0 70.0L0.0 70.0Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1046" transform="matrix(1.0,0.0,0.0,1.0,10.0,18.75)"><text id="ProcessOnText1047" fill="#323232" font-size="13" x="39.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">响应式</text><text id="ProcessOnText1048" fill="#323232" font-size="13" x="39.0" y="29.575" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">设计开发</text></g></g><g id="ProcessOnG1049"><path id="ProcessOnPath1050" d="M397.0 606.0L397.0 635.5L397.0 635.5L397.0 649.7639320225002" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1051)"/><g id="ProcessOnG1053" transform="matrix(1.0,0.0,0.0,1.0,397.0,619.7569660112501)"><path id="ProcessOnPath1054" d="M0 0H70.0V16.25H0Z" fill="#fff" transform="matrix(1.0,0.0,0.0,1.0,-35.0,0.0)"/><text id="ProcessOnText1055" fill="#323232" font-size="13" x="0.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">适合响应式开发</text></g></g><g id="ProcessOnG1056"><path id="ProcessOnPath1057" d="M397.0 735.0L397.0 747.5L397.0 747.5L397.0 748.5" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1058)"/></g><g id="ProcessOnG1060" transform="matrix(1.0,0.0,0.0,1.0,660.0,491.75)" opacity="1.0"><path id="ProcessOnPath1061" d="M0.0 0.0L137.0 0.0L137.0 99.5L0.0 99.5Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1062" transform="matrix(1.0,0.0,0.0,1.0,10.0,33.5)"><text id="ProcessOnText1063" fill="#323232" font-size="13" x="57.5" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">正常开发</text><text id="ProcessOnText1064" fill="#323232" font-size="13" x="57.5" y="29.575" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">移动、pc单独设计开发</text></g></g><g id="ProcessOnG1065"><path id="ProcessOnPath1066" d="M480.0 363.0L728.5 363.0L728.5 476.5139320225002" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1067)"/><g id="ProcessOnG1069" transform="matrix(1.0,0.0,0.0,1.0,661.0069660112501,354.875)"><path id="ProcessOnPath1070" d="M0 0H30.0V16.25H0Z" fill="#fff" transform="matrix(1.0,0.0,0.0,1.0,-15.0,0.0)"/><text id="ProcessOnText1071" fill="#323232" font-size="13" x="0.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">不需要</text></g></g><g id="ProcessOnG1072"><path id="ProcessOnPath1073" d="M480.0 541.5L570.0 541.5L570.0 541.5L644.7639320225002 541.5" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1074)"/><g id="ProcessOnG1076" transform="matrix(1.0,0.0,0.0,1.0,562.3819660112501,533.375)"><path id="ProcessOnPath1077" d="M0 0H80.0V16.25H0Z" fill="#fff" transform="matrix(1.0,0.0,0.0,1.0,-40.0,0.0)"/><text id="ProcessOnText1078" fill="#323232" font-size="13" x="0.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">不适用响应式开发</text></g></g><g id="ProcessOnG1079" transform="matrix(1.0,0.0,0.0,1.0,347.0,760.0)" opacity="1.0"><path id="ProcessOnPath1080" d="M0.0 0.0L100.0 0.0L100.0 70.0L0.0 70.0Z" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="#ffffed"/><g id="ProcessOnG1081" transform="matrix(1.0,0.0,0.0,1.0,10.0,26.875)"><text id="ProcessOnText1082" fill="#323232" font-size="13" x="39.0" y="13.325" font-family="Arial" font-weight="normal" font-style="normal" text-decoration="none" family="Arial" text-anchor="middle" size="13">需求完成</text></g></g><g id="ProcessOnG1083"><path id="ProcessOnPath1084" d="M397.0 830.0L397.0 850.5L397.0 850.5L397.0 855.7639320225002" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1085)"/></g><g id="ProcessOnG1087"><path id="ProcessOnPath1088" d="M728.5 591.25L728.5 795.0L462.2360679774998 795.0" stroke="#323232" stroke-width="2.0" stroke-dasharray="none" fill="none" marker-end="url(#ProcessOnMarker1089)"/></g></g></g></svg>

<Vssue title="开发响应式网页" />