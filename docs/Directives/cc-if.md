# cc-if指令使用方法
cc-if指令用于根据条件判断是否移除元素

```javascript
clearInterval(scope.it);
scope.show=false;
scope.it=setInterval(function(){
    scope.show=!scope.show;
    console.log(scope.show);
},200);
```

用法

```html
<div>
    <h1 cc-if="show">Blinking H1</h1>
</div>
<script type="text/less">
:host{
    min-height:100px;
}
</script>
```
ClearInterval

```javascript
clearInterval(scope.it);
```