# cc-init 指令
该指令用于执行指定的scope中的方法，如在弹出对话框时执行一个初始化函数用于加载数据。

```javascript
scope.loadData=function(...names){
    scope.names=names;
}
```

```html
<s-v class="container" cc-init="loadData('Seemie','Ashily','Keven')">
    <ol>
        <li cc-repeat="n in names">{{n}}</li>
    </ol>
</s-v>
<script type="text/less">
.container{
    padding: 22px;
}
</script>
```