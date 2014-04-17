Page Demo
=========

A demo application to show off [Page](https://github.com/visionmedia/page.js) - the client-side routing library.

## To Run

I developed this app using [Browserify](http://browserify.org/) and [bff](https://github.com/airportyh/bff). Install bff via `npm install bff -g`, then run

```
bff server
```

And you should see the app at `http://localhost:3000`.

## Known Issue

bff's server only serves local html files, so it isn't able to handle any URL other than `/`. This means that although URLs like `/user/1` work in the app, everything will fail horribly if you try to refresh the page or share the link.To solve this you would need a server-side component to serve `index.html` on each of the valid URLs.