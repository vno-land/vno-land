## Create a vno app

To create a vno app for static site generation navigate to a folder you would like to create the app in and run the command:

```
deno run --allow-read --allow-write --allow-net --unstable https://deno.land/x/vno/install/vno.ts create
```

Then select *universal* for the application type in the interactive prompt.

## Start the development server

To start up the development server run the following command from the project's root:

```
deno run --allow-read --allow-write --allow-net --unstable https://deno.land/x/vno/install/vno.ts ssg dev
```

Your application is now running on port 3000.