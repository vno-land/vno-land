Now that our app is almost complete we can just add a few finishing touches to wrap it together.

## Adding a blog list

We would like to create a /blog route which displays a list of available blog posts. Create a new file in the `pages` folder called `blog.vue` with the following content:

```
<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <a v-bind:href="'/blog/' + post.id">{{ post.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  getStaticProps() {
    return {
      posts: [
        {
          id: "first-post",
          title: "My First Post",
        },
        {
          id: "second-post",
          title: "Data fetching",
        },
        { id: "third-post", title: "Dynamic routes" },
      ],
    };
  },
};
</script>

<style>
.posts {
  text-align: center;
}
</style>
```

Notice how our Vue methods are still able to be used in our template.

Now our blog application is complete!
