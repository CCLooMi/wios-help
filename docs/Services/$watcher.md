# $watcher服务用法
$watcher服务用于监控对象属性值变化

```javascript inject:$watcher
scope.user = {}

const unwatch = $watcher(scope,'user.name', function(ov,nv,tg){
    tg.user.label = upperCaseFirst(nv||'');
});
disposes.push(unwatch);
```
# Demo

```html
<s-v>
    <cc-form v>
        <form-group>
            <label>Name</label>
            <form-input>
                <input type="text" placeholder="Name" cc-model="user.name">
            </form-input>
        </form-group>
        <form-group>
            <label>Label</label>
            <form-input>
                <input type="text" placeholder="Label" cc-model="user.label">
            </form-input>
        </form-group>
    </cc-form>
</s-v>
```