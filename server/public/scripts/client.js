$( document ).ready( readyNow );

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
} // end addBook

function getBooksFromServer(){
    // AJAX call to /books
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
} // end getBooksFromServer

function readyNow(){
    $( '#addBookButton' ).on( 'click', addBook );
    getBooksFromServer();
} // end readyNow
