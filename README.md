# Translate - Demo

Cette démo est une application **100 % statique** (HTML/CSS/JS) qui simule une interface de traduction. Il n'y a **aucun backend** ni API réelle : le bouton « Traduire » ajoute simplement le nom de la langue cible au texte saisi.

## Installation

Aucune installation n'est nécessaire : le projet ne dépend d'aucun package.

## Lancer l'application

### Option 1 : ouvrir le fichier localement

Ouvrez directement `index.html` dans votre navigateur.

### Option 2 : lancer un serveur local

Si votre navigateur bloque certaines actions en local, servez le dossier avec un serveur statique :

```bash
python3 -m http.server 8000
```

Ensuite, ouvrez http://localhost:8000.

## Utilisation

- Saisissez du texte dans la zone « Texte source ».
- Choisissez vos langues dans les menus.
- Cliquez sur « Traduire » pour générer une traduction fictive.
- Le bouton « Permuter les langues » échange les langues et les contenus des zones.

## Structure du projet

- `index.html` : structure de la page.
- `styles.css` : styles visuels.
- `script.js` : logique côté client (comptage, permutation, traduction fictive).
