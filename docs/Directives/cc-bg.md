# cc-bg指令用法
cc-bg指令用于设置元素的背景图片


```javascript
scope.url='/images/wios/208.jpg'
```
# 用法
```html
<s-v class="ct" cc-bg="url">
</s-v>
<script type="text/less">
.ct{
    background-position: center;
    background-size: cover;
    min-height: 256px;
}
</script>
```