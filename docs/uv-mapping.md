# Mapping UV — notes techniques

Référence des coordonnées pixel de la texture 64×64 pour chaque partie du corps.
À compléter au fur et à mesure (tête, bras, jambes, cape).

## Torse (base layer)

Zone : x=16-40, y=16-32 (24×16 px)

| Face | Coordonnées | Taille |
|---|---|---|
| Dessus | x=20-28, y=16-20 | 8×4 |
| Dessous | x=28-36, y=16-20 | 8×4 |
| Droite | x=16-20, y=20-32 | 4×12 |
| Avant | x=20-28, y=20-32 | 8×12 |
| Gauche | x=28-32, y=20-32 | 4×12 |
| Arrière | x=32-40, y=20-32 | 8×12 |

Overlay (veste) : même découpe, décalée de +16 en y (y=32-48).

## Tête

Zone : x=0-32, y=0-16 (32×16 px)

| Face | Coordonnées | Taille |
|---|---|---|
| Dessus | x=8-16, y=0-8 | 8×8 |
| Dessous | x=16-24, y=0-8 | 8×8 |
| Droite | x=0-8, y=8-16 | 8×8 |
| Avant | x=8-16, y=8-16 | 8×8 |
| Gauche | x=16-24, y=8-16 | 8×8 |
| Arrière | x=24-32, y=8-16 | 8×8 |

Overlay (casque) : même découpe, décalée de +32 en y (y=32-48).

## Bras / Jambes

*à documenter (attention à la différence Steve 4px / Alex 3px de large)*

## Cape

*à documenter (64×32, une seule face dépliée)*
