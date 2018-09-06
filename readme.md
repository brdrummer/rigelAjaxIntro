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