// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) ); // <--- NEEDED FOR POST with JQ AJAX
// globals
const port = 5000;
let books = [];

/// - TEMP
let tempBook = {
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    genre: "Science Fiction",
    pages: '480'
}
books.push( tempBook );
/// - END TEMP

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
}) // end server up
// get route
app.get( '/books', ( req, res )=>{
    console.log( 'in /books GET' );
    res.send( books );
}) //end /books GET
// post route
app.post( '/books', ( req, res )=>{
    console.log( 'in /books POST:', req.body );
    books.push( req.body );
    res.sendStatus( 200 );
}) // end /books POST
