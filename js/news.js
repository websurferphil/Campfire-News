"use strict";

$(".news-grid").masonry();
$(document).ready(function(){
    $('.news-grid').masonry({
        itemSelector: '.news-item',
        columnWidth: 50,
        gutter: 5
    });
});

  $.ajax({
    type: "GET",
    url: "http://www.freecodecamp.com/news/hot",
    async: false,
    success: function(data) {
        var newsData = data;
        
        newsData.forEach(function(element, index, array){
            var image;
            if (element.image === "" ){
                image = element.author.picture;
            } else {
                image = element.image;
            }
            
            $(".news-grid").append("<div class='news-item'><div class='news-header'><a href='" + element.link + "'>" + element.headline + "</a></div><div class='news-image'><img src='" + image + "' class='image' /></div><div class='news-rank'>Written by " + element.author.username + " - Likes:" + element.rank + "</div></div>").masonry( 'reloadItems' );
        });
    },
    error: function(data) {
      console.log(data,"error");
    }
  });

