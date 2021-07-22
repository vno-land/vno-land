vno static site generation is a framework that allows you to create statically generated Vue applications using the power of deno. Let's get started with making a new app.

## Create a vno app

To create a vno ssg application navigate to a folder you would like to create the app in and run the command:

```
deno run --allow-read --allow-write --allow-net --unstable https://deno.land/x/vno/install/vno.ts create
```

Then select _universal_ for the application type in the interactive prompt.

## Start the development server

To start up the development server run the following command from the project's root:

```
deno run --allow-read --allow-write --allow-net --unstable https://deno.land/x/vno/install/vno.ts ssg dev
```

Your application is now running on port 3000. Access the application at http://localhost:3000.

## Edit the page

Navigate to the pages/index.vue file and change the 'Welcome To Your Vno App!' in the template to 'Hello World!' and save the file. You should see that your browser has automatically refreshed with the changes. vno has 'live reload' enabled so you can iterate app quickly!
