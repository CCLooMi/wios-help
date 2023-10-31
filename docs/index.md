# 函数绑定
---
```javascript inject:$modal
scope.name="Seemie";
scope.hi = function(name){
    $modal.alert(`Hi,${name}`,'i');
}
```
# 服务注册
---
```javascript inject:$modal
app.service('S_test',['$modal',function($m){
    this.hello=function(name){
        $m.alert(`Hello,${name}`,'i');
    }
}]);
app.directive('hi',function(){
    return {
        restrict: 'A',
        link:function(scope,ele,attrs){
            ele.innerHTML="Hi,Welcome to WiOS!";
        }
    }
})
```
# Test directive：hi
---
```html
<h1 hi></h1>
```
# 服务注入
---
```javascript inject:S_test
scope.hello=function(name){
    S_test.hello(name);
}
```
<!-- <style>
.btn{
    font-size: 20px !important;
    padding: 5px 20px !important;
}
</style> -->

```html
<s-v>
    <cc-form v>
        <form-group>
            <h1>Your name is {{name}}</h1>
        </form-group>
        <form-group>
            <label>Name</label>
            <form-input>
                <input type="text" placeholder="name" cc-model="name">
            </form-input>
        </form-group>
        <form-group>
            <btn-group>
                <a class="btn btn-default" cc-click="hi(name)">Hi</a>
                <a class="btn btn-default" cc-click="hello(name)">Hello</a>
            </btn-group>
        </form-group>
        <style>
            .btn{
                font-size: 20px !important;
                padding: 5px 20px !important;
            }
        </style>
    </cc-form>
</s-v>
<script type="text/less">
:host{
    padding: 5%;
}
</script>
```