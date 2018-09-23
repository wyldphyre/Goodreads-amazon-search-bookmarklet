function(){
  var bookTitle = document.getElementById("bookTitle").firstChild.data;
  var firstAuthor = document.getElementsByClassName("authorName")[0].firstChild.innerHTML;
  var titleAndFirstAuthor = (bookTitle.trim() + " " + firstAuthor).replace(/\s/g, "+");
  
  window.open("http://www.amazon.com.au/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" + titleAndFirstAuthor);
}