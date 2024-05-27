# cc-src指令用法
cc-src用于延迟设置src的值，防止提前访问一个错误的src

```javascript
scope.url='/images/wios/208.jpg'
```
# 用法
```html
<s-v class="ct">
    <label>
        <img cc-src="url">
        不会产生错误的资源请求
    </label>
    <label>
        <img src="{{url}}">
        在url被替换前,会产生错误的资源请求
    </label>
</s-v>
<script type="text/less">
.ct{
    padding: 22px;
    gap:22px;
    img{
        max-width:128px;
        max-height: 128px;
    }
}
</script>
```