/**
 * Created by guest on 2023/10/7 08:44:22.
 */
(function (app) {
    app.controller('mainCtrl', ['$scope', '$file', '$element', '$marked', '$compile', '$modal',
        function (scope, $file, ele, $marked, $compile, $modal) {
            const ITree = getDefElement("i-tree");
            const FloatMenu = getDefElement("float-menu");
            const sideBar = ele.findOne('.side-bar');
            const contentWrap = ele.findOne('.content-wrap');
            const preview = contentWrap.findOne('.preview')
                .attachShadow({ mode: 'open' });
            const fo = app.fileObj;
            const rootFo = {
                name: `WiOS ${Atom.version.codeName}-${Atom.version.full}`,
                path: Paths.get(fo.path, 'docs'),
                type: 'dir',
                children: listChild
            };
            function listChild() {
                return new Promise((resolve, reject) => {
                    $file.listDir(this.path).then(fs => {
                        var a = [];
                        for (var i = 0, fi; i < fs.length; i++) {
                            fi = fs[i];
                            fi.title = fi.path;
                            if (fi.type == 'dir') {
                                fi.label = fi.manifest?.label || fi.name;
                                fi.children = listChild;
                            }
                            a.push(fi);
                        }
                        resolve(a);
                    }, reject);
                })
            }
            const ftree = new ITree();
            sideBar.append(ftree);
            ftree.init(rootFo);

            function toastError(e) {
                $modal.toastAlert(Atom.formatError(e), 'e');
            }
            const previewApp = Atom.app(cssId(7));
            const previewScope = {
                runCode: function (e) {
                    const tg = e.target;
                    const editorSv = tg.parentElement.previousElementSibling;
                    const lang = editorSv?.getAttribute('lang');
                    switch (lang) {
                        case 'javascript':
                            $marked.runJsCodeAtEditorSv(editorSv, previewScope, previewApp);
                            break;
                        case 'html':
                            $marked.renderHtmlAtEditorSv(editorSv, previewScope, previewApp);
                            break;
                    }
                }
            };
            function compileChildNodes(childNodes) {
                for (var i = 0; i < childNodes.length; i++) {
                    $compile(childNodes[i], previewScope, previewApp.ctx);
                }
            }
            function renderMd(mdFo) {
                $file.readText(mdFo.path)
                    .then(function (md) {
                        $marked.renderTo(md, preview);
                        compileChildNodes(preview.childNodes);
                    }, console.error);
            }
            attacheEvent(ftree)
                .on('active', function (e) {
                    const tg = e.detail.target;
                    const nodeData = tg.nodeData;
                    if (nodeData.type == 'file') {
                        renderMd(nodeData);
                    }
                })
                .getDispose(function (dsp) {
                    watchInDomTree(ele, dsp);
                });
        }]);
})(Atom.app('help'))