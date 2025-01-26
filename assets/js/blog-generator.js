
/**
* Generate, open and render a blog page in a new tab
* @param {String} fileName provide the file name of the blog (Markdown file)
*/
function generateBlogPage(fileName) {
    window.open(`../templates/blog-template.html?name=${fileName}`, "_blank");
}