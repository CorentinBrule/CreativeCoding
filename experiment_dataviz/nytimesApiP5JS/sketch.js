function setup(){
   var url= "https://api.nytimes.com/svc/search/v2/articlesearch.json";
   var apiKey="f22aaa06ce07403eb736c1a244cce77b"
   var searchWord="geneva"
   var page = 0; //numéro de page de résultas, 1page = 10 resultas
   
   url+="?"+apiKey;
   url+="&q="+searchWord;
   url+="&page="+page;
   loadJSON(url,drawData);
}


function draw(){

}

function drawData(data){
  var articles = data.response.docs;
  var snipper = articles[0].snippet;
  println(snipper);
}
