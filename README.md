# Inquirer

[Citizen Kane News Paper](https://www.youtube.com/watch?v=Ksn_s-Aa_pQ)

## Scénario

Créer d'une manière simple et ludique, un ebook quotidient de l'actualité.

* **Séléctionner**, **proposer**, **imposer** des news.
* Faire ça simplement, sur son smartphone sur le wifi ou la 3G.
* Jouer avec les spécificité de l'écran eInk.
* ~~Télécharger le epub et le transférer sur sa liseuse.~~

### Sources d'informations :
* Flux RSS:
  * Nasa, picture of the day
  * sites d'actualité
  * blogs
* API
  * Giphy

### Mise en page et effets :
* Images :
  * Collages
  * Superposition
* Textes :
  * scroll horizontal et vertical
  * animation de zoom
  * jeux gris/noir
  * grilles et colonnes horizontales et verticales
* Interactions :
  * plein ecran
  * afficher un fond noir sur l'écran pour "sauvegarder" les glitchs et forcer l'écran à ne pas se rafraîchir.
* ...

## Références :
* [BrokenKindleScreens](http://www.kingcosmonaut.de/56brokenkindlescreens/)
* [Kindle Glitcher](http://www.recyclism.com/kindleglitcher.php)
* [HTTPrint](http://www.creativeapplications.net/js/httprint-turn-your-browsing-habits-into-a-newspaper/)

## Expérimentations :

Une des premières envies a été d'utiliser une liseuse au sein du projet. Le web permet facilement des dispositifs multi device pour profiter des particularité de chaque appareil. Les liseuses aux écrans eInk offrent des effets et rendus différents des autres et ne sont pas encore beaucoup prises en compte ni sur des questions de compatibilité ou d'expérimentation de leurs particularités.
* vidéo :
 * ![Buster Keaton](/experiment/eInk/1WatchVideo.gif)
* navigations :
  * ![Liberation](/experiment/eInk/2NewsLiberation.gif)
  * ![NYTimes](/experiment/eInk/3NewsNYTimes.gif)
  * ![Giphy](/experiment/eInk/8browsingInGiphy.gif)
* processing/image :
  * ![](/experiment/eInk/9imageInvasion.gif)
* cinemagraphes :
  * ![](/experiment/eInk/10cinemagraph.gif)

### epub :

J'aime le principe de figer ce flux d'information dans un format basé sur la standardisation et l'accessibilté comme le epub.
#### L'Eve Future :
Adapation du projet ["L'Ève future – Spécimens de fontes libres"](https://greyscalepress.com/2013/books/eve-future-specimens-de-fontes-libres/) au format epub pour tester rapidement des typographies sur l'écran eInk. Réalisé à partir de la [version web](https://github.com/mxmgmbs/font-specimens) et Pandoc.
Voir : [experiment/eBook/LEveFuture/](experiment/eBook/LEveFuture/)
#### Inknut Antiqua :
La typographie de [Claus Eggers Sorensen](https://github.com/clauseggers) est adaptée aux écrans basses résolutions.
![](https://camo.githubusercontent.com/0909e05e258ea2506d08a2f2a23ed5b205bf3812/68747470733a2f2f7261776769746875622e636f6d2f636c6175736567676572732f496e6b6e75742d416e74697175612f6d61737465722f496d616765732f67616c6c6f772d73706563696d656e2e737667)
