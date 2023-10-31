# cc-show 使用方法

cc-show用于根据条件判断是否显示隐藏元素

```javascript
scope.show = function(){
    return Date.now()%2;
}
```

# 用法

```html
<div>
    <h1 cc-show="show()">Blinking H1</h1>
</div>
<script type="text/less">
:host{
    min-height:100px;
}
</script>
```