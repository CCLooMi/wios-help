# catch-parent-event指令用法

catch-parent-event指令用于当前元素的父元素事件catch并做出响应

```javascript
scope.fireEvent=function(ele,eventType){
    ele.dispatchEvent(new CustomEvent(
        eventType,
        {
            bubbles:true,
            composed:true,
            detail:{target:ele}
        }
    ));
}
```
# 用法
```html
<s-v class="container">
    <h1 catch-parent-event="red:this.addClass('red'):green:this.removeClass('red')">WiOS</h1>
    <btn-group>
        <a class="btn btn-glass" paper-ripple cc-click="fireEvent($element,'red')">FireRedEvent</a>
        <a class="btn btn-glass" paper-ripple cc-click="fireEvent($element,'green')">FireGreenEvent</a>
    </btn-group>
</s-v>
<script type="text/less">
.container{
    padding: 2%;
}
.red{
    color: red;
}
h1{
    color:green;
    justify-self: center;
}
</script>
```