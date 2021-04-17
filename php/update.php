<?php
	// Connexion à la base de données "ex_1" se trouvant sur le serveur localhost. Nous nous y connectons avec l'identifiant "postgres", et nous entrons le mot de passe que nous avons créé au moment de l'initialisation de la BD PostgreSQL
	$db = pg_connect("host=localhost dbname=gmq717 user=postgres password=postgres");

	//requete SQL qui permet de modifier les attribtus
	$sql = "UPDATE gmq717.chemin_forestier_test  SET  cls_chefor = '" . $_GET['cls_chefor'] .  "', nomrte = '" . $_GET['nomrte'] . "', an_classi = '" . $_GET['an_classi'] . "', no_chefor = '" . $_GET['no_chefor'] . "', gestion = '" . $_GET['gestion'] . "', source = '" . $_GET['source'] . "'WHERE id = " . $_GET['id'] . ";";
	echo $sql;

	// Exécution de la requête SQL
	$query = pg_exec($db, $sql);

	pg_close($db);
?>