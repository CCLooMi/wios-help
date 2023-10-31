# $eval服务用法
$eval服务用于将表达式解析成get set函数

```javascript inject:$eval
const f = $eval('users[0].name');
scope.fv = function(){
    return f(scope);
}
scope.usersJson = function(){
    return JSON.stringify(scope.users,' ',2);
}
scope.setName = function(name){
    f(scope,name);
}
```
# Demo

```html
<s-v>
    <cc-form v>
        <form-group>
            <label>Name</label>
            <form-input>
                <input type="text" placeholder="Name" cc-model="users[0].name">
            </form-input>
        </form-group>
        <form-group>
            <label>CurrentName:{{fv()}}</label>
            <a class="btn btn-default" cc-click="setName('WiOS')">SetNameTo'WiOS'</a>
        </form-group>
        <form-group>
            <form-input>
                <pre>{{usersJson()}}</pre>
            </form-input>
        </form-group>
    </cc-form>
</s-v>
```