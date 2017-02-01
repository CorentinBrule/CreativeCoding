var html = ''
var nasaImageSrc=[];

function gif(word, nb, off) {
    var API_GIPHY = "https://api.giphy.com/v1/gifs/search?q="+word+"&api_key=dc6zaTOxFJmzC&limit=" + nb + "&offset=" + off;
    $.getJSON(API_GIPHY, function(data) {
        for (var i = 0; i < data.data.length; i++) {
            id = data.data[i].id;
            url = "https://media.giphy.com/media/" + id + "/giphy.gif";
            var html = '<div class="gif" id="'+ word + off + '"><img src="' + url + '"/></div>';
            document.querySelector("body").innerHTML += html;
        }
    });
}

function getFlux(flux) {

    if (flux == "ina") {
        var FEED_URL = "http://www.inaglobal.fr/feed/7"
            //var html;
        $.ajax({
            //url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url=' + encodeURIComponent(FEED_URL),
            //url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fwww.inaglobal.fr%2Ffeed%2F7'&format=json&diagnostics=true",
            dataType: 'json',
            success: function(data) {
                //console.log(data.query.results.rss.channel.item);
                if (data.query.results.rss && data.query.results.rss.channel) {
                    var html = '<div id="feedIna" class="rssFeed">';
                    html += '<h1>Ina Global</h1>'
                    $.each(data.query.results.rss.channel.item, function(i, e) {
                        if (e.description.length > 2000) {
                            html += '<div id="containerIna" class="scrollContainer">'
                            html += '<div id="newIna' + i + '" class="rssNew rssNew' + i + ' newIna newInaLong ">';
                        } else {
                            html += '<div id="newIna' + i + '" class="rssNew rssNew' + i + ' newIna">';
                        }
                        //html+= e.author+": ";
                        html += "<h2>" + e.title.replace(/'/g, "’") + "</h2>";
                        var content = e.description.replace(/<img.*>|<p>|<\/p>/g, "")
                        html += "<p class='content'>" + content + "</p>";
                        html += '</div>'
                        if (e.description.length > 2000) {
                            html += '</div>'
                        }
                    });
                    html += '</div>'

                    document.querySelector("body").innerHTML += html;
                }
            }
        });
    }

    if (flux == "pixel") {
        var FEED_URL = "http://www.lemonde.fr/pixels/rss_full.xml"
            //var html;
        $.ajax({
            //url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fwww.lemonde.fr%2Fpixels%2Frss_full.xml'&format=json&diagnostics=true",
            dataType: 'json',
            success: function(data) {
                if (data.query.results.rss && data.query.results.rss.channel) {
                    var html = '<div id="feedPixel" class="rssFeed scrollContainer">';
                    html += '<h1>Le Monde Pixel</h1>';
                    html += '<div id="newsPixel">';
                    $.each(data.query.results.rss.channel.item, function(i, e) {
                        //console.log(e);
                        html += '<div id="newPixel' + i + '" class="rssNew rssNew' + i + ' newPixel">';
                        //html+= e.author+": ";
                        html += "<h2>" + e.title.replace(/'/g, "’") + "</h2>";
                        html += "<p class='content'>" + e.description + "</p>";
                        html += '</div>'
                    });
                    html += '</div>'
                    html += '</div>'

                    document.querySelector("body").innerHTML += html;
                }
            }
        });
    }


    if (flux == "lemonde") {
        var FEED_URL = "http://www.lemonde.fr/m-actu/rss_full.xml"
            //var html;
        $.ajax({
            //url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fwww.lemonde.fr%2Fm-actu%2Frss_full.xml'&format=json&diagnostics=true",
            dataType: 'json',
            success: function(data) {
              if (data.query.results.rss && data.query.results.rss.channel) {
                    var html = '<div id="feedMonde" class="rssFeed">';
                    html += '<h1>Le Monde</h1>';
                    html += '<div id="containerMonde">'
                    $.each(data.query.results.rss.channel.item, function(i, e) {
                        //console.log(e);
                        html += '<div id="newMonde' + i + '" class="rssNew rssNew' + i + ' newMonde">';
                        //html+= e.author+": ";
                        html += "<h2>" + e.title.replace(/'/g, "’") + "</h2>";
                        html += "<p>" + e.description + "</p>";
                        html += '</div>'
                    });
                    html += '</div>'
                    html += '</div>';
                    document.querySelector("body").innerHTML += html;
                }
            }
        });
    }
    //cat(1, 0);
    if (flux == "korben") {
        var FEED_URL = "http://korben.info/feed";
        //var html;
        $.ajax({
            //url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fkorben.info%2Ffeed'&format=json&diagnostics=true",
            dataType: 'json',
            success: function(data) {
              if (data.query.results.rss && data.query.results.rss.channel) {
                    var html = '<div id="feedKorben" class="rssFeed">';
                    html += '<h1>Korben</h1>'
                    $.each(data.query.results.rss.channel.item, function(i, e) {
                        //console.log(e);
                        html += '<div  id="newKorben' + i + '" class="rssNew rssNew' + i + ' newKorben">';
                        //html += e.author + ": ";
                        html += '<h2>' + e.title.replace(/'/g, "’") + '</h2>';
                        var content = e.description.replace(/<p>|<\/p>|Cet article merveilleux et .* parents\.|style.*"|<p><\/p>/g, "");
                        html += "<p class='content'>" + content + "</p>";
                        html += '</div>'
                    });
                    html += '</div>'
                        /*console.log(html);*/
                    document.querySelector("body").innerHTML += html;
                    //check +=1;
                }
            }
        });
    }
    //  cat(1, 1);

    if (flux == "cnrs") {
        var FEED_URL = "https://lejournal.cnrs.fr/rss"
            //var html;
        $.ajax({
            //url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
            url:"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Flejournal.cnrs.fr%2Frss'&format=json&diagnostics=true",
            dataType: 'json',
            success: function(data) {
                if (data.query.results.rss && data.query.results.rss.channel) {
                    var html = '<div id="feedCnrs" class="rssFeed">';
                    html += '<h1>Le Journal du CNRS</h1>'
                    $.each(data.query.results.rss.channel.item, function(i, e) {
                        //console.log(e);
                        html += '<div  id="newCnrs' + i + '" class="rssNew rssNew' + i + ' newCnrs">';
                        //html+= e.author+": ";
                        html += "<h2>" + e.title.replace(/'/g, "’") + "</h2>";
                        var content = e.description.replace(/<p>|<\/p>/g, "")
                            //console.log(e.content);
                        html += "<p class='content'>" + content + "</p>";
                        html += '</div>'
                    });
                    html += '</div>'
                        //check +=1;
                        /*console.log(html);*/
                    document.querySelector("body").innerHTML += html;
                }
            }
        });
    }
    if (flux == "nasa") {
        var FEED_URL = "https://apod.nasa.gov/apod.rss"
        $.ajax({
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
            dataType: 'jsonp',
            success: function(data) {
                if (data.responseData.feed && data.responseData.feed.entries) {
                    re = /<img src="(.+jpg)/gi;
                    str = data.responseData.feed.entries[0].content;
                    imgsrc = re.exec(str)[1];
                    nasaImageSrc.append(imgsrc);
                    //imgsrc="https://apod.nasa.gov/apod/image/1611/MW_ALL_2048x4038Vandreo.jpg"
                    document.querySelector(".nasaImage").setAttribute("src", imgsrc);
                    //check +=1;
                }
            }
        });
    }
}


var black=false;

function hgClicked(){
  console.log("clicked");
  winDiv = document.querySelector("#winDiv");
  //console.log(winDiv);
  if (black==false){
    winDiv.style.display="block";
    winDiv.style.backgroundImage='';
    black=true;
  }
  else{
    winDiv.style.display="none";
    black=false;
  }
}


function hdClicked(){
  console.log("clickedHautDroit");
  winDiv = document.querySelector("#winDiv");
  //console.log(winDiv);
  if (black==false){
    winDiv.style.display="block";

    //console.log(nasaImageSrc);
    winDiv.style.backgroundImage='url("https://apod.nasa.gov/apod/image/1612/Sharpless_Abdul_1824.jpg")';
    black=true;
  }
  else{
    winDiv.style.display="none";
    black=false;
  }
}

fullScreen=false;
function bdClicked(){
  console.log("clickedBasDroit");
  elem = document.querySelector("html")
  //console.log(winDiv);
  if (fullScreen==false){
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }
  //fullScreen=true;
}

function bgClicked(){
  console.log("clickedBasGauche");
  body = document.querySelector("body");
  body.className="zoom";
  setTimeout(function () {
    body.className="";
  }, 3000);
}


/*
var ExternalURL = "apod.nasa.gov/apod/astropix.html"; // This address must not contain any leading “http://”
(function loadContent() {
    var QueryURL = "http://anyorigin.com/get?url=" + ExternalURL + "&callback=?";
    $.get(QueryURL,function(data){
      console.log(data);
    });
})();
*/
