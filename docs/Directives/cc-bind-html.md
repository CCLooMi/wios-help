# cc-bind-html指令用法
cc-bind-html用于数据绑定且不会对输出的html文本进行转义

```javascript
scope.hi = `
<p>Welcome to <strong>WiOS</strong>!</p>
`
scope.time = function(){
    return `<p>Current time:<i>${new Date().toLocaleTimeString()}</i></p>`;
}
```

```html
<div cc-bind-html="hi"></div>
<div cc-bind-html="time()"></div>
```