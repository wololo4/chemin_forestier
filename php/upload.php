<?php
	// Connexion à la base de données "ex_1" se trouvant sur le serveur localhost. Nous nous y connectons avec l'identifiant "postgres", et nous entrons le mot de passe que nous avons créé au moment de l'initialisation de la BD PostgreSQL
	$db = pg_connect("host=localhost dbname=gmq717 user=postgres password=postgres");
	
	//requete sql qui importe les entitées
	$sql = 'SELECT id, cls_chefor, nomrte, an_classi, no_chefor, gestion, source, ST_AsGeoJSON(geom, 6) as geom FROM gmq717.chemin_forestier_test';

	// Exécution de la requête SQL
	$query = pg_exec($db, $sql);
	// Création d'une liste vide
	$features = [];
	// Démarrage d'une boucle pour passer à travers tous les résultats de la requête
	for ($i = 0; $i < pg_numrows($query); $i++) {
		$row = pg_fetch_assoc($query,$i);
		$geometry = $row['geom'] = json_decode($row['geom']);
		// Nous reconstituons notre 'feature' sur le modèle GeoJSON
		$feature = ['type' => 'Feature', 'geometry' => $geometry, 'properties' => $row];
		array_push($features, $feature);
	};
	// Nous imbriquons nos entités dans une collection d'entités GeoJSON
	$featureCollection = ["type" => "FeatureCollection", "features" => $features];
	echo stripslashes(json_encode($featureCollection, JSON_UNESCAPED_UNICODE));
	pg_close($db);
?>