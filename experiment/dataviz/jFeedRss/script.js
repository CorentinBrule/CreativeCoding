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



jQuery.getFeed({
                //google new rss link
                url: 'http://crossorigin.me/http://korben.info/feed',
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
