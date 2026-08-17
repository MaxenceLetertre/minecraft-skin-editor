// Zone dans la texture : x=32-48, y=48-64 (16×16 px)
// Overlay (manche) : même découpe, décalée de +16 en y (y=32-48)
// Zone séparée introduite avec le format 64x64 moderne (avant, le bras
// gauche était juste une image miroir du bras droit)

export const leftArm = {
  top:    { x: 36, y: 48, w: 4, h: 4 },
  bottom: { x: 40, y: 48, w: 4, h: 4 },
  right:  { x: 32, y: 52, w: 4, h: 12 },
  front:  { x: 36, y: 52, w: 4, h: 12 },
  left:   { x: 40, y: 52, w: 4, h: 12 },
  back:   { x: 44, y: 52, w: 4, h: 12 },
};
