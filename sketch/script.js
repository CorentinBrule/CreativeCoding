/*$.get('http://crossorigin.me/http://korben.info/feed', function (data) { //ça marche quand on passe par crossorigin.me
    $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);
        item = document.createElement("div");
        title = document.createElement("h1");
        img = document.createElement("img");
        title.innerHTML = el.find("title").html();
        console.log(el.find("img"));
        img.src = el.find("img").src();
        item.appendChild(title);
        item.appendChild();
        document.body.appendChild(item);
    });
});*/

var FEED_URL="http://korben.info/feed";
var html;
$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
  dataType : 'json',
  success  : function (data) {
    if (data.responseData.feed && data.responseData.feed.entries) {
      html+='<div class="rssFeed">';
      $.each(data.responseData.feed.entries, function (i, e) {
        //console.log(e);
        html+='<div class="rssNew">';
        html+= e.author+": ";
        html+= "<h2>"+e.title+"</h2>";
        html+= "<p>"+e.content+"</p>";
        html+= '</div>'
      });
      html+='</div>'
      /*console.log(html);*/
      document.querySelector("body").innerHTML+=html;
    }
  }
});

var FEED_URL="https://apod.nasa.gov/apod.rss"
$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
  dataType : 'jsonp',
  success  : function (data) {
    if (data.responseData.feed && data.responseData.feed.entries) {
      re = /(<img src=.+jpg)/gi;
      imgsrc = data.responseData.feed.entries[0].content.match(re)[0]+'"/>';
      imgsrc="https://apod.nasa.gov/apod/image/1611/MW_ALL_2048x4038Vandreo.jpg"
      document.querySelector(".nasaImage").setAttribute("src",imgsrc);
    }
  }
});

var FEED_URL="http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
$.ajax({
   url      :  FEED_URL,
   dataType : 'json',
   method: "GET",
   success: function(data) {
     console.log(data);
   }
});


/*
jQuery.getFeed({
                //google new rss link
                url: 'http://korben.info/feed',
                success: function(feed) {
                    console.log("jQuery getFeed")

                    jQuery('#result').append('<h2>'
                    + '<a href="'
                    + feed.link
                    + '">'
                    + feed.title
                    + '</a>'
                    + '</h2>');

                    var html = '';

                    for(var i = 0; i < feed.items.length && i < 5; i++) {
                      var item = feed.items[i];
                      html += '<h3>'
                      + '<a href="'
                      + item.link
                      + '">'
                      + item.title
                      + '</a>'
                      + '</h3>';

                      html += '<div class="updated">'
                      + item.updated
                      + '</div>';

                      html += '<div>'
                      + item.description
                      + '</div>';
                   }

                   jQuery('#results').append(html);
               }
           });
*/
