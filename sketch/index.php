<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
   <head>
       <title>Inquirer</title>
       <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
       <link rel="stylesheet" type="text/css" href="index.css" charset="utf-8">

   </head>
   <body>
<h1>What's in your flux today ?</h1>
    <form action="output.php">
      <select name="flux[]" multiple="multiple">
          <option value="korben">Korben</option>
          <option value="lemonde">Le Monde</option>
          <option value="pixel">Le Monde Pixel</option>
          <option value="nasa">NASA</option>
          <option value="cnrs">CNRS</option>
          <option value="ina">InaGlobal : numérique</option>
      </select>
      <br/>
      <input id="button" type="submit" value="Come on !"/>
    </form>
   </body>
</html>
