# F9 安全整改相关对比说明

## 资源文件安全加载

**问题详细信息** 加载html片段、js、css资源等均可能存在数据泄漏或注入攻击的可能

**问题修复建议**: 使用框架提供的统一的方法，来加载相关资源

- 加载js： `Util.loadJs` 或页面上的 `SrcBoot.output`
- 加载css：`Util.loadCss` 或页面上的 `SrcBoot.output`
- 加载html、（css）、js： `Util. loadPageModule()`

**整改说明** ： 引入资源应采用以上提付的方式之一，这些方法内部会对资源进行一定的过滤检查。

:::tip
目前这些方法中暂无任何过滤处理，根据最初的规划，后期可能加入资源白名单等限制。
:::

整改对比，之前可能存在如下形式：

- css、js 直接以 `link` 或 `script` 标签在页面引入

```html {7,10}
<!-- 整改前 -->
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>

<!-- 整改后 -->
<script>
    SrcBoot.output(['./style.css']);
</script>
<script>
    SrcBoot.output(['./script.js']);
</script>
```

- 以 js、jQuery 创建 `link` 或 `script` 的字符串插入页面进行自动解析的

```js {22,23}
// 整改前
// 字符串形式创建相关资源标签
var linkStr = '<link rel="stylesheet" href="./style.css">';
var scriptStr = '<script src="./script.js"></script>';
var scriptStr2 = '<script>"一些脚本代码xxx"</script>';

// js 方式加入页面 
var head = document.head || document.getElementsByTagName('head')[0];
head.insertAdjacentHTML('beforeend', linkStr);
head.insertAdjacentHTML('beforeend', scriptStr);
head.insertAdjacentHTML('beforeend', scriptStr2);
// 注： 将 html 字符串解析为dom元素的方式还有其他方式如： DOMParser 、此处无法全部穷举。
// or jQuery 方式
// 除去 appendTo 还有其他类似方法支持将字符串解析并插入页面的
// 如: before after append prepend appendTo prependTo
$(linkStr).appendTo('head');
$(scriptStr).appendTo('head');
$(scriptStr2).appendTo('head');

// ============================
// 整改后
Util.loadCss('./style.css');
Util.loadJs('./script.js');

// 注： 虽然插入解析的方式多种多样
// 但是仍是有迹可循的，如这种情形下必定存在 字符串形式的 link 和 script
```

- 以 js、jQuery 创建 link 或 script 的 dom 对象并插入页面的

```js {20,21}
// 整改前
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './style.css';

var script = document.createElement('script');
script.src = './script.css';

var head = document.head || document.getElementsByTagName('head')[0];
head.appendChild(link);
head.appendChild(script);

// jQuery 创建并插入
$('<link>').attr({ rel: 'stylesheet', href: './style.css' }).appendTo('head');
$('<script>').attr({ src: './script.js' }).appendTo('head');


// ============================
// 整改后
Util.loadCss('./style.css');
Util.loadJs('./script.js');

// 注： 排查核心 
// 1. document.createElement 创建 link 或 script
// 2. jQuery("标签名称")
```

- 某个 script 标签内直接 `document.write()` 或 `document.writeln()`

```html {13,16}
<!-- 整改前 -->
<script>
    document.write('<link rel="stylesheet" href="./style.css" />');
    // document.writeln('<link rel="stylesheet" href="./style.css" />');
</script>
<script>
    document.write('<script src="./script.js"><\/script>');
    // document.writeln('<script src="./script.js"><\/script>');
</script>

<!-- 整改后 -->
<script>
    SrcBoot.output(['./style.css']);
</script>
<script>
    SrcBoot.output(['./script.js']);
</script>
```

## 获取安全 html

针对远程获取到的 html 片段，需要插入页面使用，但又无法确认其是否安全时，可使用 `Util.getSafeHtml` 方法对 html 字符串进行过滤。

:::tip
`Util.getSafeHtml` 方法的作用是对html字符串中潜在的风险进行过滤处理。

目前已经实现：

- `script` 标签替换

待添加：

- style 样式中 url 发恶意请求
- 资源型标签 src 发恶意请求
- html 行内事件注入，如 img 上 src 写不存在的地址 + onerror回调触发注入

**不应过分依赖此方法： 首先注入可能的情况难以穷尽，其次字符串过滤的形式难以处理所有情况，而形成语法树成本太高。**
:::

```js
// 整改前
// 此处假设这个 someEvilHtmlString 是从远程某处获取的，无法确定其是否被串改，是否具有恶意注入代码;
var someEvilHtmlString = '<p>这是一些html片段</p><script>alert("你被注入了，哈哈！");</script>';
$('#some-element').html(someEvilHtmlString); // 直接将不可信html片段插入页面将导致注入攻击

// 整改后
var clearHtml = Util.getSafeHtml(someEvilHtmlString);
// "<p>这是一些html片段</p><noscript>alert("你被注入了，哈哈！");</noscript>"
$('#some-element').html(clearHtml); // 其中的 script 被处理掉了，一定程度上能防范注入攻击
```

## 数据全转义

前后端分离的标准模式应为后端提供数据、前端生成相应的html片段在页面进行展示。此时绝大多数情况下，后端返回的应该都是纯数据，不应该包含html片段。

如果不需要使用 html 片段，也不确信数据中是否存在html片段，可使用 `Util.htmlEscape` 对数据进行过滤，过滤结果中html将被编码，即使插入页面，也不会形成注入攻击。

示例：

```js
var someEvilString = '<p>这是一些html片段</p><script>alert("你被注入了，哈哈！");</script>';

var clearString = Util.htmlEscape(someEvilString);
// "&lt;p&gt;这是一些html片段&lt;/p&gt;&lt;script&gt;alert("你被注入了，哈哈！");&lt;/script&gt;"
```

此方法更多的作用是作为一个工具方法，供开发者在合适时机使用而已。

总结来说，开发人员应有安全意识，防止注入的核心就是避免直接插入html，非必要的情况下，不要使用html相关方法

- Mustache 模板中，占位符应通常应为 双花括号 而不是 三个花括号 ，三个花括号仅应在这段内容要当成HTML被解析时使用
- 更新页面局部数据时，如果不需要html，应使用：`innerText` 或 `$.fn.text` 而不是`innerHTML` 或 `$.fn.html`

<Vssue title="F9 安全整改相关对比说明" />