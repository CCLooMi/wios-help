# cc-repeat指令用法
```javascript
scope.fluits = [
    {name:"apple"},
    {name:"orange"},
    {name:"pear"}
]
```
# 用法
```html
<ol>
    <li cc-repeat="f in fluits">{{f.name}}</li>
</ol>
```