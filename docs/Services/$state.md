# $state服务
该服务只能在controller中注入,是运行时服务,表示当前wpp的state对象。

```javascript
app.controller('test-ctrl',['$scope','$state',function(scope,$state){
    scope.info=JSON.stringify({
        cfg:$state.cfg,
        args:$state.args
    },' ',2);
}])
```
# Demo

```html
<div cc-controller="test-ctrl">
    <pre>{{info}}</pre>
</div>
<script type="text/less">
:host{
    padding: 5%;
}
</script>
```