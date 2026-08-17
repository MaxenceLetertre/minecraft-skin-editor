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
