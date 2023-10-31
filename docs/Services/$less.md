# $less服务用法
$less服务用于编译less样式代码
```javascript inject:$less,$modal
scope.lessCode = ``;

scope.render = function(lessCode){
    $less.renderToStyleElement(lessCode)
    .then(function(style){
        scope.result=style.innerHTML;
    },function(e){
        $modal.toastAlert(Atom.formatError(e),'e');
    });
}

scope.renderBlob = function(lessCode){
    $less.renderToBlob(lessCode)
    .then(function(blob){
        scope.result = blob&&URL.createObjectURL(blob);
    },function(e){
        $modal.toastAlert(Atom.formatError(e),'e');
    });
}
```

# Demo

```html
<s-v>
    <cc-form v>
        <form-group class="editor">
            <label>LessCode</label>
            <form-input>
                <textarea editor="less" placeholder="lessCode" cc-model="lessCode"></textarea>    
            </form-input>
        </form-group>
        <form-group>
            <btn-group>
                <a class="btn btn-d" cc-click="render(lessCode)">Render</a>
                <a class="btn btn-d" cc-click="renderBlob(lessCode)">Render as blob</a>
            </btn-group>
        </form-group>
        <form-group>
            <label>Result</label>
            <pre>{{result}}</pre>
        </form-group>
        <style>
        .editor{
            min-height: 320px;
        }
        </style>
    </cc-form>
</s-v>
```