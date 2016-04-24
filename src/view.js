
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Forme.prototype.paint = function(ctx){
	ctx.lineWidth=this.epaisseur;
	ctx.strokeStyle = this.couleur;
}

Formes.prototype.paint = function(ctx, canvas){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = '#F0F0F0'; // set canvas' background color
	ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
	$.each(this.formes,function (key,val){
		val.paint(ctx);
	});
}

$(".remove").live("click",function (){
	console.log("remove");
	formesList.formes.array.splice($(this).val(), 1);
	formesList.updateShapeList();
})

Formes.prototype.updateListView = function (id, forme) {
	var text = '';

	if( forme instanceof Forme){
		text= '<li>Ligne'+'<button  class="remove" value='+id+' type="button"><span class="fa fa-remove"></span></button>'+'</li>';
	}else if (forme instanceof Ligne){
		text = '<li>Rectangle'+'<button class="remove" value='+id+' type="button"><span class="fa fa-remove"></span></button>'+'</li>';
	}

	$("#shapeList").append(text);

	
}

Ligne.prototype.paint = function (ctx){
	Forme.prototype.paint.call(this,ctx);
	ctx.beginPath();
	console.log (this.point1X);
	ctx.moveTo(this.point1X,this.point1Y);
	ctx.lineTo(this.point2X,this.point2Y);
	ctx.stroke();
}

Rectangle.prototype.paint = function (ctx){
	Forme.prototype.paint.call(this,ctx);
	ctx.beginPath();
	ctx.rect(this.hautGaucheX,this.hautGaucheY,this.largeur,this.hauteur);
	ctx.stroke();
}
