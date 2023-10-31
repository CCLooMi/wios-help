# cc-condition指令用法
cc-condition指令用于根据条件判断处理
```javascript
scope.c = function(){
    return Date.now()%2;
}
```
# 用法

```html
<div>
  <h1 cc-condition="c()?this.addClass('red'):this.removeClass('red')">condition color</h1>
</div>
<script type="text/less">
.red{
    color: red;
}
</script>
```