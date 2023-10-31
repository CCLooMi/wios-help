# cc-tabs指令用法
cc-tabs指令用于标签页的切换

```html
<s-v style="grid-template-rows: 34px 200px;">
  <s-v class="tab-bar" cc-tabs>
    <a class="btn btn-glass-block" tab-target="tab-1">Tab1</a>
    <a class="btn btn-glass-block" tab-target="tab-2">Tab2</a>
    <a class="btn btn-glass-block" tab-target="tab-3">Tab3</a>
  </s-v>
  <s-v class="v-bottom">
    <s-v class="tab" id="tab-1">
        <h1>Tab1</h1>
    </s-v>
    <s-v class="tab scrollable" id="tab-2">
        <h1>Tab2</h1>
    </s-v>
    <s-v class="tab scrollable" id="tab-3">
        <h1>Tab3</h1>
    </s-v>
  </s-v>
</s-v>
<script type="text/less">
.tab-bar{
    display: grid;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 0;
    align-items: unset;
    background-color: unset;
    justify-content: left;
    border-top: 1px solid rgba(0,0,0,0.1);
    grid-template-columns: repeat(auto-fit,minmax(22px,auto));
    background-image: linear-gradient(180deg, #F5F4F5 0%, #E8E6E8 3%, #DEDCDE 50%, #D2D0D2 100%);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5), 0 0 0 0 rgba(0, 0, 0, 0.4);
    .btn{
        z-index: 1;
    }
}
</script>
```