// Zone dans la texture : x=16-32, y=48-64 (16×16 px)
// Overlay (pantalon) : même découpe, décalée de +16 en y (y=32-48)
// Zone séparée introduite avec le format 64x64 moderne (avant, la jambe
// gauche était juste une image miroir de la jambe droite)

export const leftLeg = {
  top:    { x: 20, y: 48, w: 4, h: 4 },
  bottom: { x: 24, y: 48, w: 4, h: 4 },
  right:  { x: 16, y: 52, w: 4, h: 12 },
  front:  { x: 20, y: 52, w: 4, h: 12 },
  left:   { x: 24, y: 52, w: 4, h: 12 },
  back:   { x: 28, y: 52, w: 4, h: 12 },
};
