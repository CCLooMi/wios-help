# $formCheck服务
$formCheck服务用于表单验证，可注册自定义表单验证，该服务的provider方法有
+ regCheck(name,checkFunc(v,ev,ele)) 其中v和ev对应xxx="[v]:[ev]",check函数返回true表示验证通过，返回Promise表示异步验证

该服务是一个对象，默认验证有
+ file-name 输入值是否合格的文件名
+ cc-email 输入的值是否合格的邮箱
+ cc-phone 输入的值是否合格的电话号码
+ cc-max 输入的值不能大于max
+ cc-min 输入的值不能小于min
+ cc-regex 输入的值必须符合提供的正则匹配
+ cc-require 输入的值不能为空
+ cc-exp 计算表达式的值
+ cc-l-max 输入的字符最大长度不能超过max
+ cc-l-min 输入的字符最小长度不能小于min
```javascript inject:$formCheckProvider as fp
scope.name='a';
fp.regCheck('xxx',function(v,ev,ele){
    return v==='xxx';
});
```
# Demo
```html
<s-v>
    <cc-form v>
        <form-group>
            <label>Name</label>
            <form-input>
                <input type="text"
                placeholder="Name"
                cc-model="name"
                file-name=":illegal file name"
                cc-require=":file name can not be empty!"
                cc-l-max="10:file name lenght must <= 10!"
                cc-l-min="3:file name lenght must >= 3!">
            </form-input>
        </form-group>
        <form-group>
            <label>Age</label>
            <form-input>
                <input type="text"
                placeholder="Age"
                cc-model="age"
                cc-max="200:age must <= 200!"
                cc-min="1:age must >= 1!">
            </form-input>
        </form-group>
        <form-group>
            <label>Email</label>
            <form-input>
                <input type="text"
                placeholder="Email"
                cc-model="email"
                cc-email=":illegal email">
            </form-input>
        </form-group>
        <form-group>
            <label>Phone</label>
            <form-input>
                <input type="text"
                placeholder="Phone"
                cc-model="phone"
                cc-phone=":illegal phone"
                cc-exp="!phone.startsWith('132'):phone can not start with 132" cc-regex="/^\d+9090$/:phone must end with 9090">
            </form-input>
        </form-group>
        <form-group>
            <label>AAA</label>
            <form-input>
                <input type="text"
                placeholder="AAA"
                cc-model="aaa"
                xxx=":aaa value must be xxx!">
            </form-input>
        </form-group>
    </cc-form>
</s-v>
```