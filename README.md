# [ Zuivi ]
### L'application pour assurer le suivi des consultants Zenika (octobre 2022)

- Réalisation d’une application pour permettre la gestion des suivis des consultants Zenika.

- Vision globale des consultant et de la date de leur dernier rendez-vous, classé du plus lointain au plus récent, accompagné d'un code couleur pour voir rapidement quel consultant il est nécessaire de voir rapidement.

## // todo => image

- Les utilisateurs potentiel de cette application sont les  Directeur d’agence, commercial.e et techniques
## -- Démarage --

- installation :<br>
    ``` npm install ```

- démmarage du serveur de développement :<br>
    ```npm start```

- démarage du server json (fake api) :<br>
    ```json-server db.json```


l'application est accesible depuis le navigateur à l'adresse : http://localhost:8080

## -- Stack technique --

- ReactJS
- Redux
- Axios
- Auth0 google
- json-server (le fichier db.json à la racine contient les objets json appelés ar l'api)
- SCSS

## -- To do --

- ajout de rdv
- possibilité de prévoir un rdv avec connexion au google calendar
- remodéliser la base de données (travailler sur le fichier db.json)
- gestion de la sécurité
- tests unitaires
- définir les niveaux du tracking status (durée depuis le dernier rdv) et dynamiser la classe des éléments

- création d'un back type API + bdd