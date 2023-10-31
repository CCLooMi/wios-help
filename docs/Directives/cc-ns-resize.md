# cc-ns-resize指令用法
cc-ns-resize用于grid布局中上下两个页面的高度调整，同cc-ew-resize用法类似

```html
<s-v style="grid-template-rows: 1fr 1px 200px;">
    <s-v class="content-wrap"></s-v>
    <divider cc-ns-resize="-2"></divider>
    <s-v class="footer"></s-v>
</s-v>
<script type="text/less">
:host{
    min-height: 320px;
}
.content-wrap{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}
.footer{
    background-color: #8EC5FC;
    background-image: linear-gradient(180deg, #8EC5FC 0%, #E0C3FC 100%);
}
</script>
```