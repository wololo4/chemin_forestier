<?php
	// Connexion à la base de données "ex_1" se trouvant sur le serveur localhost. Nous nous y connectons avec l'identifiant "postgres", et nous entrons le mot de passe que nous avons créé au moment de l'initialisation de la BD PostgreSQL
	$db = pg_connect("host=localhost dbname=gmq717 user=postgres password=postgres");

	//requete sql pour supprimer une entité
	$sql = "DELETE FROM gmq717.chemin_forestier_test WHERE id =" . $_GET['id'] . ";";

	// Exécution de la requête SQL
	$query = pg_exec($db, $sql);

	pg_close($db);
?>