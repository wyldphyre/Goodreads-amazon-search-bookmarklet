
let bookTitle = document.getElementById("bookTitle").firstChild.data;
let firstAuthor = document.getElementsByClassName("authorName")[0].firstChild.innerHTML;
let titleAndFirstAuthor = (bookTitle.trim() + " " + firstAuthor).replace(/\s/g, "+");
  
let searchUrl = "http://www.amazon.com.au/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" + titleAndFirstAuthor;

// Call completion to finish
let result = [searchUrl];
completion(result);