#catch-event指令用法

catch-event指令用于捕获子元素中的事件并作出响应或者执行某些操作

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
<s-v class="container" catch-event="red:this.addClass('red'):green:this.removeClass('red')">
    <h1>WiOS</h1>
    <btn-group>
        <a class="btn btn-glass" paper-ripple cc-click="fireEvent($element,'red')">FireRedEvent</a>
        <a class="btn btn-glass" paper-ripple cc-click="fireEvent($element,'green')">FireGreenEvent</a>
    </btn-group>
</s-v>
<script type="text/less">
.container{
    padding: 2%;
}
.red h1{
    color: red;
}
h1{
    color:green;
    justify-self: center;
}
```
