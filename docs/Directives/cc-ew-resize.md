# cc-ew-resize指令用法
cc-ew-resize指令用于Grid布局中左右两个页面的宽度调整,同cc-ns-resize类似

```html
<s-v style="grid-template-columns: 220px 1px 1fr; grid-template-rows: 1fr;">
    <s-v class="side-bar"></s-v>
    <divider cc-ew-resize="0"></divider>
    <s-v class="content-wrap"></s-v>
</s-v>
<script type="text/less">
:host{
    min-height: 220px;
}
.side-bar{
    background-color: #8EC5FC;
    background-image: linear-gradient(180deg, #8EC5FC 0%, #E0C3FC 100%);
}
.content-wrap{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}
</script>
```
