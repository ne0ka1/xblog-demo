# X Blog

个人博客的静态网站，其思路是获取 Markdown 文件，解析后在新页面渲染。

## 网站介绍

`./index.html` 是主页，其链接到`./pages/blogs.html` （博客索引）和`./pages/timeline.html`（博客时间线），后者可以链接到具体的博文页面。
主页中有简短的个人介绍和联系方式。

## 添加博客

1. 在 `./assets/blogs` 里面放入 Markdown 文件
2. 修改 `blogs.json`

这样就在 `./pages/blogs.html` 页面创建索引了, 同时 `./pages/timeline.html` 也能生成时间线。
 `./templates/blog-template.html` 是博客模板，`./assets/css/template.css` 是博客模板的 CSS文件。

## 补充

另外，这个现在是依赖于服务器的，可以在 VSCode 安装 `Live Server` 插件，`Go Live` 就可以了。
