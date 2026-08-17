# Minecraft Skin Editor

Éditeur de skins/capes Minecraft en ligne : dessin pixel par pixel en 2D avec preview 3D en temps réel.

## Stack

- React + Vite
- Canvas API (natif) pour l'éditeur pixel
- Three.js + @react-three/fiber pour la preview 3D

## Structure du projet

```
src/
├── components/
│   ├── editor/       → canvas 2D, outils de dessin (pinceau, gomme, pipette)
│   └── viewer3d/      → scène Three.js, modèle du personnage
├── utils/
│   └── uvMapping.js  → table de correspondance texture ↔ faces 3D
├── hooks/             → logique réutilisable (ex: useCanvasState, useTexture)
├── App.jsx
└── main.jsx
docs/                  → notes techniques (mapping UV, décisions d'archi)
public/                → assets statiques
```

## Roadmap

- [ ] 1. Définir le scope V1 (skin seul ou skin+cape, Steve/Alex, import, undo)
- [ ] 2. Poser la structure du projet (fait ✅)
- [ ] 3. Coder la table de mapping UV
- [ ] 4. Construire l'éditeur canvas 2D
- [ ] 5. Construire le modèle 3D
- [ ] 6. Synchroniser canvas et 3D en live
- [ ] 7. Fonctionnalités annexes (import, export, couleurs, animation)
- [ ] 8. Finitions et déploiement

Voir [NOTES.md](./NOTES.md) pour le journal d'avancement détaillé et les décisions prises.

## Lancer le projet

```bash
npm install
npm run dev
```
