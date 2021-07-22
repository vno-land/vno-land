At the moment our application has only one page. However, websites generally have multiple pages.

Let's get started with adding additional pages to our application.

## Pages

Pages are created from single component files in the '**pages**' directory with routing based on the relative file path. For example the '**pages/index.vue**' corresponds to the '**/**' route and a '**pages/blog/first-post.vue**' file would correspond to a '**/blog/first-post**' route.

## Create a New Page

Create a '**blog**' folder inside of the '**pages**' folder and create a '**first-post.vue**' file inside of the new '**blog**' folder with the following content:

```
<template>
  <div class="post">
    <h1>My First Post</h1>
    <p>Today I will be learning how to use vno.</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.post {
  text-align: center;
}
</style>
```

Now navigate to http://localhost:3000/blog/first-post to see the newly generated page. You'll notice that the css inside of the 'style' tags is available in the final html page.
