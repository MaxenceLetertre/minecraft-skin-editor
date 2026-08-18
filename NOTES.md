# Journal de bord

Un point rapide à chaque session de travail : ce qui a été fait, ce qui bloque, ce qui reste.
Modèle à copier-coller pour chaque nouvelle entrée en haut du fichier.

---

## Modèle d'entrée

```
## AAAA-MM-JJ

**Fait**
-

**Décisions**
-

**Bloqué sur / questions**
-

**Prochaine étape**
-
```

---

## Décisions prises (à mettre à jour au fil du projet)

| Sujet | Décision | Pourquoi |
|---|---|---|
| Scope V1 | Skin uniquement, pas de cape | Aller petit à petit, éviter de se disperser |
| Modèle | Steve uniquement (pas Alex) | Simple et efficace pour démarrer |
| Import de skin existant | Non, pas en V1 | Réservé pour une version ultérieure |
| Undo/redo | Non, pas en V1 | Pas bloquant pour un premier résultat fonctionnel |
| Format skin | *à définir* | |
| Librairie 3D | *skinview3d ou Three.js brut ?* | |

---

## 2026-08-17

**Fait**
- Choix du stack (React + Vite + Three.js/@react-three/fiber)
- Mapping UV du torse compris et documenté (voir docs/uv-mapping.md)
- Structure du projet posée
- Roadmap en 8 étapes définie

**Décisions**
-

**Bloqué sur / questions**
- Scope V1 pas encore figé (skin seul ? cape aussi ? import/export ?)

**Prochaine étape**
- Définir le scope V1
- Écrire la table de mapping UV complète (tête, bras, jambes) dans src/utils/uvMapping.js

---

## 2026-08-17 (suite)

**Fait**
- Repo GitHub créé et premier push effectué (github.com/MaxenceLetertre/minecraft-skin-editor)
- Scope V1 validé (voir tableau de décisions ci-dessus)

**Décisions**
- Scope V1 : skin seul, Steve uniquement, pas d'import, pas d'undo/redo

**Bloqué sur / questions**
-

**Prochaine étape**
- Écrire la table de mapping UV complète (tête, bras, jambes) dans src/utils/uvMapping.js
- Poser les bases de l'éditeur canvas 2D

---

## 2026-08-17 (suite 2)

**Fait**
- Table de mapping UV complète : tête, torse, bras droit/gauche, jambe droite/gauche
- Structure en fichiers séparés (src/utils/uvMap/) + index.js qui rassemble tout
- Sources vérifiées : Minecraft Wiki + skin-spec sur GitHub

**Décisions**
- Coordonnées documentées dans docs/uv-mapping.md, à croiser avec un test visuel une fois le canvas + 3D en place (étape 6 de la roadmap)

**Bloqué sur / questions**
-

**Prochaine étape**
- Étape 4 : construire l'éditeur canvas 2D (afficher le template, dessiner pixel par pixel)

---

## 2026-08-18

**Fait**
- Projet Vite + React initialisé dans le dossier existant (React, JavaScript, ESLint)
- README.md écrasé par Vite pendant l'install, restauré depuis la version sauvegardée
- Serveur de dev vérifié fonctionnel (npm run dev)

**Décisions**
-

**Bloqué sur / questions**
-

**Prochaine étape**
- Créer le composant SkinCanvas qui affiche le template vide (grille agrandie basée sur UV_MAP)

---

## 2026-08-18 (suite)

**Fait**
- Template vide affiché et validé visuellement (proportions/positions cohérentes avec UV_MAP)
- Éditeur canvas interactif fonctionnel : choix de couleur, clic + glisser pour peindre
- Structure éclatée en plusieurs fichiers : hooks/usePixelData.js, utils/canvasCoords.js, components/editor/(SkinCanvas, ColorPicker, SkinEditor).jsx

**Décisions**
- Peinture restreinte aux zones valides de UV_MAP (isValidPixel dans le hook)

**Bloqué sur / questions**
-

**Prochaine étape**
- Étape 5 : construire le modèle 3D (Three.js) et afficher le personnage

---

## 2026-08-18 (suite 2)

**Fait**
- Scène 3D vide testée avec succès (cube témoin)
- Squelette de 6 boîtes construit et positionné (proportions Minecraft)
- Mapping UV réel appliqué sur les 6 boîtes (applyBoxUV.js), validé avec une texture de debug colorée par face
- Composants créés : utils/applyBoxUV.js, utils/debugTexture.js, components/viewer3d/(SkinViewer3D, CharacterModel, TexturedBox).jsx

**Décisions**
- Choix de coder le 3D à la main avec Three.js plutôt que d'utiliser skinview3d, pour bien comprendre le mapping UV
- Le principe applyBoxUV : remapper les UV par défaut (0/1) d'une BoxGeometry vers la zone exacte de la texture, en inversant l'axe Y

**Bloqué sur / questions**
-

**Prochaine étape**
- Étape 6 : synchroniser le canvas 2D et le modèle 3D en live (remplacer la texture de debug par le vrai skin dessiné)

---

## 2026-08-18 (suite 3)

**Fait**
- État des pixels remonté au parent commun SkinCreator (lifting state up)
- Texture 3D générée en live depuis les pixels peints (pixelsToTexture.js)
- Synchronisation confirmée visuellement : dessiner sur le canvas met à jour le modèle 3D instantanément

**Décisions**
- Fond transparent (donc noir sur le modèle) pour les zones non peintes, assumé pour l'instant : sera couvert une fois un skin complet dessiné/chargé

**Bloqué sur / questions**
-

**Prochaine étape**
- Étape 7 : fonctionnalités annexes (import skin existant, export PNG, gomme, couleurs, animation/rotation caméra)

---

## 2026-08-18 (suite 4)

**Fait**
- Rotation de caméra ajoutée (OrbitControls de @react-three/drei) : clic-glisser pour tourner, molette pour zoomer
- Export PNG fonctionnel (exportSkinAsPNG.js) : bouton dans SkinEditor, télécharge un fichier 64x64 avec fond transparent

**Décisions**
-

**Bloqué sur / questions**
-

**Prochaine étape**
- Ajouter la gomme
- Import d'un skin existant (mis de côté depuis le début du scope V1)

---

## 2026-08-18 (suite 5)

**Fait**
- Gomme fonctionnelle : bascule pinceau/gomme via deux boutons, erasePixel dans usePixelData.js retire le pixel de l'état
- Étape 7 terminée (import de skin existant volontairement laissé de côté, cf. scope V1)

**Décisions**
-

**Bloqué sur / questions**
-

**Prochaine étape**
- Étape 8 : finitions (UI, responsive, cas limites) et déploiement (Vercel/Netlify)

---

## 2026-08-18 (suite 6)

**Fait**
- Import de skin existant fonctionnel (importSkin.js) : lit un PNG 64x64 et remplit pixels/canvas/3D
- Undo/redo fonctionnel (historique d'états dans usePixelData.js), boutons Annuler/Rétablir
- Ces deux features étaient prévues "plus tard" dans le scope V1 initial, ajoutées finalement

**Décisions**
- Historique undo/redo : un instantané par action (pas de regroupement des pixels d'un même glissé de souris) — simple, amélioration possible plus tard si besoin

**Bloqué sur / questions**
-

**Prochaine étape**
- Étape 8 : finitions (UI, responsive, cas limites) et déploiement (Vercel/Netlify)
