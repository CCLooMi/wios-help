# $element服务
该服务只能在controller中注入，这个是一个运行时服务，表示当前cc-controller所在的dom元素。

```javascript
app.controller('test-ctrl',['$scope','$element',function(scope,ele){
    ele.innerHTML="Hello world.";
}])
```
# Demo

```html height:220
<div cc-controller="test-ctrl"></div>
```