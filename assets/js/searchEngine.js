/**
 * Created by ds on 27/11/14.
 */
var searchButton = document.getElementById("searchButton");
var searchInput  = document.getElementById("searchInput");
var featuredProductCarousel  = document.getElementById("featured-product-carousel");

var findBtnHandler = function () {
    featuredProductCarousel.style.display = 'none';

}


console.log('start ' + findBtnHandler);

searchButton.addEventListener("click", findBtnHandler, false);
