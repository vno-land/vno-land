## getStaticProps

`getStaticProps` is a function that can be exported from your page .vue files. vno will pass the props returned from this function into your page at **build time**. 

This function can be synchronous or asynchronous. It must return the props in the shape of an object where each key corresponds to the prop name.

Here is an example of `getStaticProps`:

```
<template>
  <!-- props returned from getStaticProps are available -->
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  // getStaticProps can be synchronous or asynchronous
  async getStaticProps() {
    // return props as an object where each key matches the prop name
    return {
      title: "Hello World",
    };
  },
};
</script>

<style>
</style>
```

`getStaticProps` can also take a `context` argument which is an object with the following properties:
- `params` is an object which contains any route parameters as keys. For example, the page `[id].vue` will contain have a `params` value of `{ id: "..." }`.

Use `getStaticProps` when data for the page is available at build time. 

## getStaticPaths

`getStaticPaths` is a function that can be exported from dynamic route pages ex. pages with bracket naming such as `[id].vue`. vno will use the list of paths returned from this function to generate a page for each path.

The return value for this function must look like:

```
return [
  { params: { id: '0' } }
  { params: { id: '1' } }
]
```

Each element must be an object with a `params` key which is an object with keys associated the route parameters. The example above would correspond to a `[id].vue` page component matching `id` property on `params`. The routes generated would be */0* and */1*. Note that dynamic pages must also include a `getStaticProps` which gets the parameters inside of the `context`.

Here is an example of `getStaticPaths` for a `[id].vue` file:

```
<template>
  <!-- props returned from getStaticProps are available -->
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  // return possible paths as an array
  async getStaticPaths() {
    // each path gets a params property which is an object with the route parameters
    return [{ params: { id: '0' } }, { params: { id: '0' } }];
  },
  async getStaticProps(context) {
    // params is available on the context argument
    return {
      title: "page " + context.params.id,
    };
  },
};
</script>

<style>
</style>
```

Use `getStaticPaths` for pages with dynamic routes.