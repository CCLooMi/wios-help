# cc-for指令用法
```javascript
scope.fluits = [
    {name:"apple"},
    {name:"orange"},
    {name:"pear"}
]
```
# 用法
```html
<ol cc-for="f in fluits">
    <li>{{f.name}}</li>
</ol>
```