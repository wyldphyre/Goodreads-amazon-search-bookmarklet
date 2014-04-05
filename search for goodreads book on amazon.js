/*
  Author: Craig Reynolds
  Description: Use the title of a book on goodreads.com as a search query on amazon
*/

javascript:(function(){
    // todo: alert if not on a goodreads book pag
    var bookTitle = document.getElementById("bookTitle").firstChild.data;
    // todo: located and include the author
    window.open("http://www.amazon.com.au/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" + bookTitle.trim().replace(/\s/g, "+"));
})()