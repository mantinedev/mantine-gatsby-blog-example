const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rezanovaaleksandra/code/mantine-gatsby-blog-example/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/rezanovaaleksandra/code/mantine-gatsby-blog-example/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/rezanovaaleksandra/code/mantine-gatsby-blog-example/src/pages/index.tsx"))),
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/rezanovaaleksandra/code/mantine-gatsby-blog-example/src/templates/blog-post.tsx")))
}

