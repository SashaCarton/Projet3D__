Projet3D__
Description
Projet3D__ est une application web qui permet de convertir des fichiers 3D entre différents formats et de visualiser des scènes 3D interactives. Le projet exploite Three.js pour le rendu 3D et se décline en plusieurs pages web dédiées aux conversions et à la visualisation :

index.html : Conversion de fichiers .PLY en .GLTF.
fbx.html : Conversion de fichiers .FBX en .GLTF.
fbx-glb.html : Conversion de fichiers .FBX en .GLB.
ObjVersGlb.html : Conversion de fichiers .OBJ en .GLB.
scene.html : Visualisation d'une scène 3D avec sol et murs texturés.
Fonctionnalités
Conversion de fichiers 3D
Chargez et convertissez vos modèles 3D au format .PLY, .FBX ou .OBJ en formats compatibles avec le web (GLTF/GLB).

Visualisation 3D interactive
Explorez une scène 3D préconfigurée avec des textures pour le sol et les murs, et interagissez grâce aux contrôles de caméra (OrbitControls).

Interface utilisateur simple
Plusieurs pages HTML dédiées aux différentes tâches, permettant une utilisation intuitive sans nécessiter d'interface complexe.

Installation
Prérequis
Node.js (version LTS recommandée)
npm ou yarn
Cloner le dépôt
bash
Copier
Modifier
git clone https://github.com/SashaCarton/Projet3D__.git
cd Projet3D__
Installer les dépendances
bash
Copier
Modifier
npm install
Utilisation
Lancer le projet en développement
Le projet utilise Vite pour le développement. Pour lancer le serveur local :

bash
Copier
Modifier
npm run dev
Ouvrez ensuite votre navigateur à l'adresse indiquée dans la console (par exemple, http://localhost:3000).

Utilisation des outils de conversion et de visualisation
Conversion de .PLY en .GLTF
Ouvrez index.html, sélectionnez un fichier .PLY via le sélecteur de fichiers, puis cliquez sur le bouton pour convertir et télécharger le fichier au format GLTF.

Conversion de .FBX ou .OBJ
Utilisez respectivement fbx.html, fbx-glb.html et ObjVersGlb.html pour charger et convertir vos fichiers en suivant des étapes similaires.

Visualisation de la scène 3D
Ouvrez scene.html pour découvrir une scène 3D interactive avec un sol et des murs texturés. Vous pouvez y charger des modèles GLTF/GLB et observer leur rendu dans un environnement virtuel.

Structure du projet
index.html : Conversion de .PLY vers .GLTF.
fbx.html : Conversion de .FBX vers .GLTF.
fbx-glb.html : Conversion de .FBX vers .GLB.
ObjVersGlb.html : Conversion de .OBJ vers .GLB.
scene.html : Visualisation d'une scène 3D avec textures.
src/ : Code source complémentaire et modules JavaScript.
textures/ : Répertoire contenant les textures utilisées dans la scène 3D.
script.py : Script Python complémentaire (usage à définir selon vos besoins).
package.json et vite.config.js : Fichiers de configuration pour le développement avec Vite.
Dépendances
Three.js – Pour le rendu et la manipulation des modèles 3D.
Vite – Pour le développement et le bundling du projet.
D'autres dépendances peuvent être ajoutées au besoin.
Contribuer
Les contributions sont les bienvenues ! Pour contribuer :

Forkez ce dépôt.
Créez une branche pour votre fonctionnalité :
bash
Copier
Modifier
git checkout -b feature/nom-de-la-fonctionnalité
Modifiez le code et faites des commits pertinents :
bash
Copier
Modifier
git commit -m "Ajout de la fonctionnalité X"
Poussez votre branche :
bash
Copier
Modifier
git push origin feature/nom-de-la-fonctionnalité
Ouvrez une Pull Request pour proposer vos modifications.
Licence
Aucune licence spécifique n'est actuellement définie pour ce projet. Pensez à ajouter une licence si vous souhaitez partager ou distribuer ce code.

Auteurs
SashaCarton – Créateur et mainteneur du projet.
Remerciements
Un grand merci à la communauté Three.js pour leurs outils et ressources.
Merci à tous ceux qui contribuent à l'amélioration de ce projet.
