const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width=800;
canvas.height=600;

// Code final à utiliser pour manipuler Pencil.
var formesList = new Formes();
var pencil = new Pencil(ctx, formesList, canvas);
formesList.paint(ctx, canvas);
// Code temporaire pour tester le DnD
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//rec.paint(ctx);
//var ligne = new Ligne(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////



