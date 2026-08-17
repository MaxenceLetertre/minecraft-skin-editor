// Zone dans la texture : x=0-32, y=0-16 (32×16 px)
// Overlay (casque) : même découpe, décalée de +32 en y (y=32-48)

export const head = {
  top:    { x: 8,  y: 0, w: 8, h: 8 },
  bottom: { x: 16, y: 0, w: 8, h: 8 },
  right:  { x: 0,  y: 8, w: 8, h: 8 },
  front:  { x: 8,  y: 8, w: 8, h: 8 },
  left:   { x: 16, y: 8, w: 8, h: 8 },
  back:   { x: 24, y: 8, w: 8, h: 8 },
};
