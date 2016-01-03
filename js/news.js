"use strict";

var getDateString = function(number) {
    var date = new Date(number);
    var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
};

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
            if (element.image === "" ) {
                image = element.author.picture;
            } else {
                image = element.image;
            }
            
            var date = getDateString(element.timePosted);
            
            $(".news-grid").append("<div class='news-item'><div class='news-header'><a href='" + element.link + "'>" + element.headline + "</a><br /><span class ='date'>" + date + "</span></div><div class='news-image'><a href='" + element.link + "'><img src='" + image + "' class='image' /></a></div><div class='news-footer'>Submitted by <a href='http://www.freecodecamp.com/" + element.author.username + "'>" + element.author.username + "</a> - <span class='likes'>Likes: " + element.rank + "</span></div></div>").masonry( 'reloadItems' );
        });
    },
    error: function(data) {
      console.log(data,"error");
    }
  });

