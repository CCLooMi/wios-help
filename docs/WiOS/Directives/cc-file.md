# cc-file指令
cc-file指令用于文件上传
在使用cc-file指令的元素中支持以下配置属性
+ upload-url:用于配置上传服务器地址
+ file-select:用于指定选择文件后执行的函数
+ on-complete:用于指定上传完成后要执行的函数
+ multiple:用于设置是否可选择多文件上传
+ accept:用于设置过滤文件类型
+ capture:可以有以下取值：
> + "user"：这是默认值。它允许用户从设备的文件系统中选择文件。
> + "environment"：此值允许用户从设备的媒体捕获环境（例如相机或麦克风）中选择文件。
> + "filesystem"：此值允许用户从设备的文件系统中选择文件，类似于"user"值。但是，它可能提供不同的文件选择用户界面。
> + 请注意，capture属性主要用于移动设备，可能不被所有浏览器支持。在使用此属性之前，建议检查浏览器的兼容性。
# 代码示例
```javascript
scope.fileSelect = function(files){
    console.log(files);
}
scope.onComplete = function(){
    console.log('upload complete');
}
```
# 使用示例
```html
<s-v class="scrollable">
    <cc-form v>
        <fieldset>
            <legend>FileUploadDemo</legend>
            <form-group>
                <label>icons</label>
                <form-input type="file">
                    <ul cc-file cc-drop
                    multiple = "true"
                    file-select="fileSelect"
                    on-complete="onComplete"
                    upload-url="ws://localhost:4040/fileUp"></ul>
                </form-input>
            </form-group>
        </fieldset>
    </cc-form>
</s-v>
```