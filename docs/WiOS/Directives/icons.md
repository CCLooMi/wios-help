# icons指令
icons指令用于输出系统自带icons

```javascript inject:$icons
scope.icons=[];
$icons.isvgs(function(svg,name){
    scope.icons.push({svg:svg,name:name});
});
```

# Demo
```html width:900
<div class="list">
    <i cc-repeat="i in icons" cc-bind-html="i.svg" title="{{i.name}}" class="btn"></i>
</div>

<script type="text/less">
    @box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    :host{
        background-color: white;
    }
    .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(60px, auto));
        grid-template-rows: repeat(auto-fit, 60px);
        grid-gap: 12px;
        padding: 12px;
        i {
            align-self: center;
            justify-content: center;
            box-shadow: @box-shadow;
            border-radius: 6px;
        }
        svg {
            padding: 6px;
            height: 100%;
            width: 100%;
        }
    }
</script>
```