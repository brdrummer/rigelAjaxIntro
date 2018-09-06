AJAX, Rigel
===

[Video](https://vimeo.com/288595194/9c6de26e8f)

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

- change server.js GET route to send back array of books:

```
app.get( '/books', ( req, res )=>{
    console.log( 'in /books GET' );
    res.send( books );
}) //end /books GET
```

- loop through responses and display them in the u element
- add a catch to handle errors in client.js AJAX call (we shouldn't get any with our work right now):

```
    $.ajax({
        method: 'GET',
        url: '/books'
    }).then( function( response ){
        console.log( 'back from server with:', response );
        // put data on DOM
        let el = $( '#booksOut' );
        el.empty();
        for( let book of response ){
            el.append( `<li>` + book.title + ` by ` + book.author + `</li>` )
        } //end for
    }).catch( function( error ){
        alert( 'error:', error );
    }) // end AJAX
```

Adding a POST route to add books
---

- handle click event on add button

```
    $( '#addBookButton' ).on( 'click', addBook );
```

- get user input and assemble into an object to send to server in client.js

```
function addBook(){
    console.log( 'in addBook' );
    // get user input & create new object
    let objectToSend = {
        title: $( '#titleIn' ).val(), 
        author: $( '#authorIn' ).val(), 
        genre: $( '#genreIn' ).val(), 
        pages: $( '#pagesIn' ).val()
    } // end objectToSend
    console.log( 'objectToSend:', objectToSend );
} // end addBook
```

- create POST route in server.js:

```
app.post( '/books', ( req, res )=>{
    console.log( 'in /books POST:', req.body );
    books.push( req.body );
    res.sendStatus( 200 );
}) // end /books POST
```

- in terminal: ```npm install body-parser --save```
- require body-parser in server.js: ```const bodyParser = require( 'body-parser' );``` 
- also, tell the app to use urlextended (needed for POST): ```app.use( bodyParser.urlencoded( { extended: true } ) );```
- both of these should happen prior to any routes (at top of server.js)

- update addBook unction in client.js to send the object to server via AJAX POST (this should be right below the ```console.log( 'objectToSend:', objectToSend );``` line:

```
    // send object to server via AJAX POST
    $.ajax({
        method: 'POST',
        url: '/books',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from server with:', response );
        // update books display
        getBooksFromServer();
    }).catch( function( error ){
        alert( 'error:', error );
    }) // end AJAX
```

Make sure to test at every possible juncture where something can break. 