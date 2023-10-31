# paper-ripple指令
paper-ripple指令用于添加点击效果

```html
<div class="container">
    <a class="btn btn-d" paper-ripple="">Button</a>
</div>
<div class="container">
  <a class="btn btn-default" paper-ripple="this.parentNode">Button</a>
</div>
<script type="text/less">
.container{
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    color: forestgreen;
    height: 220px;
    &:not(:first-child){
        border-top: 1px solid rgba(0,0,0,0.1);
    }
    .btn{
        z-index: 1;
    }
}
</script>
```