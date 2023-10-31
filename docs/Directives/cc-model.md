# cc-model指令用法
cc-model用于input和scope中的数据双向绑定
```javascript
scope.user = {name:"Seemie",age:18}
```

# 用法
```html
<cc-form v="">
    <form-group>
        <label>Name:{{user.name}}</label>
        <form-input>
            <input type="text" cc-model="user.name">
        </form-input>
    </form-group>
    <form-group>
        <label>Age:{{user.age}}</label>
        <form-input>
            <input type="text" cc-model="user.age">
        </form-input>
    </form-group>
</cc-form>
```