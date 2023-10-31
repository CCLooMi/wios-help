# cc-out-html指令用法
cc-out-html指令用于一次输出(不会绑定数据),且不会对html文本转义,和cc-bind-html不同之处除了不会绑定数据外,还有就是因为只有一次输出机会所以该指令支持异步输出

```javascript
scope.hi = `
<p>Welcome to <strong>WiOS</strong>!</p>
`
scope.time = function(){
    return `<p>Current time:<i>${new Date().toLocaleTimeString()}</i></p>`;
}

scope.asyncOut = new Promise(function(resolve,reject){
    setTimeout(()=>resolve(scope.hi),2000);
})
```

```html
<div cc-out-html="hi"></div>
<div cc-out-html="time()"></div>
<div cc-out-html="asyncOut"></div>
```