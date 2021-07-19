## File path based routing

Each component in the `pages` directory gets converted into an html page and is available as a route. The route is based on the file path ex:
- `pages/about.vue` -> `/about`
- `pages/blog/first-post.vue` -> `/blog/first-post`

## Index pages

Page components that have the name `index` will generate route to the directory ex:
- `pages/index.vue` -> `/`
- `pages/blog/index.vue` -> `/blog` *you can also do `pages/blog.vue`

## Dynamic routes

Page components that have have a filename with surrounding brackets such as `[id].vue` will have dynamic routing ex:
- `pages/blogs/[id].vue` -> `/blogs/first`, `/blogs/second`, etc...