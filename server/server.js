// requires
const express = require( 'express' );
const app = express();
// uses

// globals
const port = 5000;
let books = [];
// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
}) // end server up
// get route
app.get( '/books', ( req, res )=>{
    console.log( 'in /books GET' );
    res.send( 'meow' );
}) //end /books GET