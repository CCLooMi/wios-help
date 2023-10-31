# cc-click用法
```javascript inject:$modal
scope.hi = function(name){
    $modal.alert(`Hi,${name}`,'i');
}
```

# 用法

```html
<fieldset>
<legend>
    <a class="btn btn-d" cc-click="hi('Seemie')">Say Hi</a>
</legend>
<h class="btn btn-g" cc-click="hi('Tom')">Hi,Tom</h1>
</fieldset>
<style>
    :host{
        padding:5%;
    }
</style>
```