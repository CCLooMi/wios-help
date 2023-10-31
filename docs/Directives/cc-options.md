# cc-options指令用法

```javascript
scope.users = [
    {id:1,name:"jack"},
    {id:2,name:"smith"},
    {id:3,name:"tom"}
]
```

# 用法
```html
<cc-form v>
    <form-group>
        <label>User</label>
        <form-input>
            <select cc-options="u.id as u.name for u in users">
                <option value="all" select>All</option>
            </select>
        </form-input>
    </form-group>
</cc-form>
```