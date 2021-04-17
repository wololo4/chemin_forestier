<?php
	// Connexion à la base de données "ex_1" se trouvant sur le serveur localhost. Nous nous y connectons avec l'identifiant "postgres", et nous entrons le mot de passe que nous avons créé au moment de l'initialisation de la BD PostgreSQL
	$db = pg_connect("host=localhost dbname=gmq717 user=postgres password=postgres");

	//requete sql pour inserer de nouvelles données
	$sql = "INSERT INTO gmq717.chemin_forestier_test (geom, cls_chefor, nomrte, an_classi, no_chefor, gestion, source) VALUES (ST_MULTI(ST_GeomFromGeoJSON('" . $_GET['draw'] . "')),'" . $_GET['cls_chefor'] . "','" . $_GET['nomrte'] . "','" . $_GET['an_classi'] . "','" . $_GET['no_chefor'] . "','" . $_GET['gestion'] . "','" . $_GET['source'] ."');";
	echo $sql;

	// Exécution de la requête SQL
	$query = pg_exec($db, $sql);

	pg_close($db);
?>