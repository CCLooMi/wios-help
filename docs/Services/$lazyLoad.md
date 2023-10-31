# $lazyLoad服务用法
$lazyLoad服务用于异步加载依赖或者组件，该服务有以下方法
+ load(...deps):Promise<any>
+ loadAppComponents(app,...components):Promise<any>
+ loadComponents(...components):Promise<any>

```javascript inject:$lazyLoad
const ic = `
<div name="test-hi">
    <h1>Hi,Weclome to WiOS!</h1>
    <script>
        host.skipCompile=true;
    </script>
    <script type="text/less">
        h1{
            color:red;
        }
    </script>
</div>
<div name="test-hello">
    <h1>Hello World!</h1>
    <script>
        host.skipCompile=true;
    </script>
    <script type="text/less">
        h1{
            color:forestgreen;
        }
    </script>
</div>
`
const url = URL.createObjectURL(new Blob([ic]));
$lazyLoad.loadComponents(url);

disposes.push(function(){
    URL.revokeObjectURL(url);
});
```
# Demo

```html
<test-hi></test-hi>
<test-hello></test-hello>
```