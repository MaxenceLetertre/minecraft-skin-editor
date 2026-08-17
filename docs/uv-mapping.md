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

Bras droit — zone : x=40-56, y=16-32 (16×16 px)

| Face | Coordonnées | Taille |
|---|---|---|
| Dessus | x=44-48, y=16-20 | 4×4 |
| Dessous | x=48-52, y=16-20 | 4×4 |
| Droite | x=40-44, y=20-32 | 4×12 |
| Avant | x=44-48, y=20-32 | 4×12 |
| Gauche | x=48-52, y=20-32 | 4×12 |
| Arrière | x=52-56, y=20-32 | 4×12 |

Overlay (manche) : même découpe, décalée de +16 en y (y=32-48).

Bras gauche — zone : x=32-48, y=48-64 (16×16 px), même découpage que le bras droit, décalé.
Zone séparée introduite avec le format 64×64 moderne (avant, le bras gauche était une image miroir du droit).

Jambe droite — zone : x=0-16, y=16-32 (16×16 px)

| Face | Coordonnées | Taille |
|---|---|---|
| Dessus | x=4-8, y=16-20 | 4×4 |
| Dessous | x=8-12, y=16-20 | 4×4 |
| Droite | x=0-4, y=20-32 | 4×12 |
| Avant | x=4-8, y=20-32 | 4×12 |
| Gauche | x=8-12, y=20-32 | 4×12 |
| Arrière | x=12-16, y=20-32 | 4×12 |

Overlay (pantalon) : même découpe, décalée de +16 en y (y=32-48).

Jambe gauche — zone : x=16-32, y=48-64 (16×16 px), même découpage que la jambe droite, décalé.
Zone séparée introduite avec le format 64×64 moderne (avant, la jambe gauche était une image miroir de la droite).

**Note** : les jambes font 4px de large pour Steve ET Alex (contrairement aux bras qui passent à 3px de large en slim). Comme la V1 est en Steve uniquement, pas de souci pour l'instant.

## Cape

*à documenter (64×32, une seule face dépliée)*
