We currently have our first blog post page; however, wouldn't it be nice if our content wasn't hard coded into template but instead could be dynamically injected.

## Data fetching

We can add data to our page by including exporting a *getStaticProps* method in our vue script. Update the `pages/blog/fist-post.vue` file to contain the following:

```
<template>
  <div class="post">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  async getStaticProps() {
    return {
      title: "My First Post",
      body: "Today I will be learning how to use vno.",
    };
  },
};
</script>

<style>
.post {
  text-align: center;
}
</style>
```

You'll see that our page looks exactly the same as before, but now we have injected the data returned from *getStaticProps* as props into the page. Try changing the title to "My First Post Ever".

## Dynamic pages

Currently our blog only contains a single post. But what if we wanted to generate pages for multiple posts.

Create a new file in `pages/blog` named `[id].vue` with the following content:

```
<template>
  <div class="post">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<script>
const posts = [
  {
    id: "second-post",
    title: "Data fetching",
    body: "vno can handle passing dynamic data into each page.",
  },
  {
    id: "third-post",
    title: "Dynamic routes",
    body: "vno can also handle dynamic routing.",
  },
];
export default {
  async getStaticPaths() {
    return posts.map((post) => ({
      params: {
        id: post.id,
      },
    }));
  },
  async getStaticProps(context) {
    return posts.find((post) => post.id === context.params.id);
  },
};
</script>

<style>
.post {
  text-align: center;
}
</style>
```

Navigate to http://localhost:3000/blog/second-post and http://localhost:3000/blog/third-post to see the newly created posts.

There are several new concepts being introduced here:
- naming a file surrounded by brackets like our `[id].vue` makes it behave as a dynamic route.
- *getStaticPaths* is a function which returns an array of possible paths for the dynamic route. Note that each element of the array must look like the object in the example. It must contain a 'params' key which must contain an 'id' key because our file is named `[id].vue`.
- *getStaticProps* takes 'context' as an argument which has the route information stored at 'context.params.id'. This can then be used to return the appropriate post for the page.

Our blog posts data is currently inside of our script in this example but your functions could just as easily make a request to a server or read from local files to get the necessary data.

Try refactoring our posts so that the data in `first-post.vue` file is moved into our `[id].vue` file and then remove the `first-post.vue` file.