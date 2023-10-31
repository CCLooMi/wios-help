# $compile服务用法
$compile服务是一个函数用于Atom框架处理dom树中的指令、控制器、数据绑定
函数参数node,scope,ctx,wppState

```javascript inject:$compile
scope.testHtml = `{{name}}`;
scope.testHtml2 = `Click and compile,{{name}}`;
scope.name='WiOS';
scope.cmp = function(ele){
    $compile(ele.childNodes[0]);
}
```
# Demo

```html
<h1 cc-out-html="testHtml"></h1>
<h2 cc-out-html="testHtml2" cc-click="cmp(this)" class="btn btn-default"></h2>
```