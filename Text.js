DrawStroked(text, x, y, strokeColor = 'black', fillColor = 'white') {
  ctx.font = '80px Sans-serif';
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 8;
  ctx.lineJoin="miter";
  ctx.miterLimit=2;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = fillColor;
  ctx.fillText(text, x, y);
}
