$( document ).ready( readyNow );

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
    }) //end ajax
} // end getBooksFromServer

function readyNow(){
    getBooksFromServer();
} // end readyNow
