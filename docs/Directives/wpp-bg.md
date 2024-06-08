# wpp-bg指令用法
wpp-bg用于延迟设置background-image的值，防止提前访问一个错误的bg，该bg值是基于wpp文件夹根目录

# 用法
```html
<s-v class="ct" wpp-bg="asset/icon.png">
</s-v>
<script type="text/less">
.ct{
    background-position: center;
    background-size: cover;
    min-height: 256px;
}
</script>
```