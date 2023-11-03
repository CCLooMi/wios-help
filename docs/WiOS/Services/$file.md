# $file服务
$file服务用于操作文件，该服务provider有以下方法
+ regContextMenu(func(files,folder,menus))
+ regOpenActioin(func(files,folder,actions))
+ regNewFileMenu(func(files,folder,menus,wpp))

$file服务有以下方法

+ getContextMenus(files,folder,...opts)
+ getOpenAction(files,folder,...opts)
+ getNewFileMenus(files,folder,...opts)
+ makeDir(dir)
+ readDirManifest(dir)
+ listDir(dir,showHide)
+ deleteFile(file)
+ writePathFile(path,data)
+ writeFile(dir,name,data)
+ readFile(path,opts)
+ readText(path)
+ readDir(dir)
+ readStat(path)
+ readStats(...paths)
+ removeFiles(...fos)
+ saveFile(dir,...files)
+ newFolder(basePath,callback)
+ newFile(basePath,content,callback)
+ walkDir(dir,callback)
