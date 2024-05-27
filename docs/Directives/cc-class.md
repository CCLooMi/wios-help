# cc-class指令用法
cc-class指令用于设置元素的类


```javascript
scope.c=["red","rd"];
```
# 用法
```html
<s-v class="ct" cc-class="c">
</s-v>
<script type="text/less">
.ct{
    height: 256px;
    width: 256px;
    &.red{
        background-color: red;
    }
    &.rd{
        border-radius: 50%;
    }
}
</script>
```