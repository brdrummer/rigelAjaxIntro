AJAX, Rigel
===

Setting up Node/Express server
---

- npm init
- npm install express --save
- create .gitigore
- create server/server.js
- add this code to spin up server:

```
// requires
const express = require( 'express' );
const app = express();
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
}) // end server up
```

- add our first get route by adding the following code:

```
app.get( '/books', ( req, res )=>{
    console.log( 'in /books GET' );
    res.send( 'meow' );
}) //end /books GET
```

Setting up basic web page with JQ
---

- in server folder, create "public" folder
- in "public" create folders for "scripts" & "vendors"
- also in "public" create your "index.html"
- move JQ file to "public/vendors"
- create "client.js" in "public/scripts"
- add the following line to tell our app to look in "server/public" for static files:

```
app.use( express.static( 'server/public' ) );
```
- this line should be above routes
- build out your interface as needed using HTML, JS, JQ

Our first AJAX call
---

- in client.js:

```
    $.ajax({
        method: 'GET',
        url: '/books'
    }).then( function( response ){
        console.log( 'back from server with:', response );
    })
```