# wpp-src指令用法
wpp-src用于延迟设置src的值，防止提前访问一个错误的src，该src值是基于wpp文件夹根目录

# 用法
```html
<s-v class="ct">
    <label>
        <img wpp-src="asset/icon.png">
        <picture>
            <source wpp-src="asset/icon.png">
            <img decoding="async" loading="lazy">
        </picture>
        不会产生错误的资源请求
    </label>
    <label>
        <img src="asset/icon.png">
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