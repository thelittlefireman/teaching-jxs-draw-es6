
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Formes {
	constructor() {
		this.formes= new Array();

	}
	addForme(forme){
		this.formes.push(forme);
		this.updateListView(this.formes.indexOf(forme),forme);
	}
	updateShapeList(){
		$.each(this.formes,function (key,val){
			updateListView(key,val);
		});
	}

}

class Forme {
	constructor(couleur, epaisseur) {
		this.couleur=couleur;
		this.epaisseur = epaisseur;
	}

};
class Rectangle extends Forme {
	constructor(hautGaucheX,hautGaucheY,largeur, hauteur, epaisseur,couleur) {
		super(couleur,epaisseur);
		this.hautGaucheY = hautGaucheY;
		this.hautGaucheX = hautGaucheX;
		this.largeur =largeur;
		this.hauteur = hauteur;
	}

};

class Ligne extends Forme {
	constructor(point1X,point1Y,point2X,point2Y, epaisseur,couleur) {
		super(couleur,epaisseur);
		this.point1X=point1X;
		this.point1Y=point1Y;
		this.point2X=point2X;
		this.point2Y=point2Y;
	}

};
