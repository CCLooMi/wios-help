# $scope服务
该服务只能在controller中注入，这个是一个运行时服务，表示当前控制器控制的元素绑定的scope对象

```javascript
app.controller('test-ctrl',['$scope',function(scope){
    scope.info="Hello world.";
}])
```
# Demo

```html
<div cc-controller="test-ctrl">
    <h1>{{info}}</h1>
</div>
```