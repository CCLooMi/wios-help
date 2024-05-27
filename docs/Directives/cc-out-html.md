# cc-out-html指令用法
cc-out-html用于一次性输出html内容且不会对输出的html文本进行转义，支持绑定到Promise对象实现异步输出html

```javascript
scope.hi = `
<p>Welcome to <strong>WiOS</strong>!</p>
`
scope.time = function(){
    return `<p>Current time:<i>${new Date().toLocaleTimeString()}</i></p>`;
}

scope.info=function(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve("Promise info"),1000);
    });
}
```
# 用法
```html
<div cc-out-html="hi"></div>
<div cc-out-html="time()"></div>
<div cc-out-html="info()"></div>
```