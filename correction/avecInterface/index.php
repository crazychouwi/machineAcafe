<?php
/**
 * Created by PhpStorm.
 * User: gruikette
 * Date: 02/01/2018
 * Time: 12:36
 */
require_once("vendor/autoload.php");
// On définit le chemin pour chercher les templates
$loader = new Twig_Loader_Filesystem("app/view");
$twig = new Twig_Environment($loader, array(
    "cache" => false
));
// On demande l'affichage d'index.html.twig et on assigne une variable pour que le template le récupère et l'affiche
echo $twig->render("index.html.twig", array(
    "chemin_images" => "assets/images/",
    "chemin_css"=> "assets/css/",
    "chemin_js"=> "assets/js/",
    "chemin_vendor"=> "assets/vendor/",
));