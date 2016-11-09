function setup(){
   var url= "http://thesaurus.altervista.org/thesaurus/v1";
   var apiKey="Tu5oaLhl2PIQbR2okZiM"
   var word="dérive"
   var language="fr_FR"
   var output="json"
   url+="?key="+apiKey;
   url+="&word="+word;
   url+="&language="+language;
   url+="&output="+output;

   loadJSON(url,drawData);
}


function draw(){

}

function drawData(data){
  println(data.response)
  var synonyms = data.response[0].list.synonyms.split("|");
  println(synonyms);
}
