Dans mon code, pour le filtrage j'ai effecté ces étapes :

1 : Récupération des données depuis mon API => 
    Dans mon composant GameCardList, j'utilise useEffect pour effectuer une requête vers l'api et récupérer la liste des jeux vidéo.
    J'utilise la bibliothèque Axios.
    Les jeux récupérés sont stockés dans l'état games à l'aide de la fonction setGames.

2 : Gestion des filtres =>
    Toujours dans GameCardList, j'utilise useState et useEffect pour gérer mes filtres. 
    Lorsque les filtres tels que la plateforme, le genre, la date ou le terme de recherche changent, le second useEffect est déclenché. 
    J'utilise les valeurs des filtres pour filtrer les jeux récupérés dans l'état games et stocker les jeux filtrés dans l'état filteredGames.

3 : Affichage des jeux filtrés =>
    J'utilise la liste filteredGames pour afficher les jeux filtrés dans le composant GameCardList. 
    J'ai utilisé la boucle map pour que chaque jeu dans la liste créer un composant GameCard pour lui, en passant le jeu correspondant en tant que prop.