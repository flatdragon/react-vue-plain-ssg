# React Vue Plain SSG

Static site generator that using React to generate pages from partials and Vue to create UI.

This package has been created for layouts design purposes.

## Development (With Hot Reload)

Next command will start development server, with hot reloading, at http://localhost:3000.

```sh
npm run development
``` 

## Production

Next command will generate "dist" directory with static HTML-pages and assets.

```sh
npm run production
``` 

⚠️ Note ⚠️

If you want to add dynamic routes support, then checkout https://github.com/stereobooster/react-snap repository to find a solution. Otherwise, "production" command will fail while crawling routes.

## Serve

You can also check the results of you work by run serving static files with next command. This command will start server at http://localhost:3000.

```sh
npm run serve
``` 
