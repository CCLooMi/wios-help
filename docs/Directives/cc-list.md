# cc-list 指令
该指令用于生成input的提示列表

```javascript
scope.ls=[
    "Hi",
    "WiOS",
    "Swan"
]
```

```html
<s-v class="ct">
    <cc-form>
        <form-group>
            <form-input>
                <input type="text" cc-list="ls">
            </form-input>
        </form-group>
    </cc-form>
</s-v>
<script type="text/less">
.ct{
    padding: 22px;
}
</script>
```