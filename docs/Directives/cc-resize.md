# cc-resize指令用法
cc-resize用于grid布局中上线左右宽度高度的调整，用法和cc-ns-resize和cc-ew-resize类似

```html
<s-v style="grid-template-columns: 1fr 1px 1fr; grid-template-rows: 1fr 1px 1fr;">
    <s-v class="top-left"></s-v>
    <divider cc-ew-resize="0"></divider>
    <s-v class="top-right"></s-v>
    <divider cc-ns-resize="0"></divider>
    <divider cc-resize="0,0"></divider>
    <divider cc-ns-resize="0"></divider>
    <s-v class="bottom-left"></s-v>
    <divider cc-ew-resize="0"></divider>
    <s-v class="bottom-right"></s-v>
</s-v>
<script type="text/less">
:host{
    min-height: 420px;
}
.top-right,.bottom-left{
    background-color: #8EC5FC;
    background-image: linear-gradient(180deg, #8EC5FC 0%, #E0C3FC 100%);
}
.top-left,.bottom-right{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}
</script>
```