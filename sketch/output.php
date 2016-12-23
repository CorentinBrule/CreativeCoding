<html>
<head>
    <meta charset="utf-8"/>
    <title>Inquirer</title>
    <link href="https://fonts.googleapis.com/css?family=Inknut+Antiqua" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="interaction.css" charset="utf-8">
    <link rel="stylesheet" type="text/css" href="news.css" charset="utf-8">
    <script type="text/javascript" src="lib/jquery.js"></script>
    <script type="text/javascript" src="load.js"></script>
<head>

<body>

  <script> var val = <?php echo json_encode($_GET['flux'],JSON_HEX_TAG);?>; </script>
  <script>
  for(var i=0;i<val.length;i++){
    getFlux(val[i]);
  }

  </script>
  <div id="hgButton" onclick="hgClicked()"></div>
  <div id="bdButton" onclick="bdClicked()"></div>
  <div id="hdButton" onclick="hdClicked()"></div>
  <div id="bgButton" onclick="bgClicked()"></div>

  <div id="winDiv"></div>
  <div id="rssOutput">RSS-feed will be listed here...  </div>
</body>
</html>
