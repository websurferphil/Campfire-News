/* global $ */
"use strict";

$(".news-grid").masonry();
$(document).ready(function(){
    $('.news-grid').masonry({
        itemSelector: '.news-item',
        columnWidth: 50,
        gutter: 20
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
            
            $(".news-grid").append("<div class='news-item'><div class='news-header'><a href='" + element.link + "'>" + element.headline + "</a></div><div class='news-image'><img src='" + image + "' class='image' /></div><div class='news-rank'>Submitted by <a href='http://www.freecodecamp.com/" + element.author.username + "'>" + element.author.username + "</a> - <span class='likes'>Likes:" + element.rank + "</span></div></div>").masonry( 'reloadItems' );
        });
    },
    error: function(data) {
      console.log(data,"error");
    }
  });

