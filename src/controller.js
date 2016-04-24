
const editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, formes, canvas) {
		this.ctx=ctx;
		this.formes=formes;
		this.currEditingMode = editingMode.line;
		this.currLineWidth = 5;
		this.currColour = '#000000';
		this.currentShape = 0;
		this.canvas=canvas;
		new DnD(canvas, this);

        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
        $("#butRect").click( ()=>{
        	console.log("rect");
        	this.currEditingMode = editingMode.rect;
        });
         $("#butLine").click( ()=>{
         	console.log("ligne");
        	this.currEditingMode = editingMode.line;
        });

        $("#spinnerWidth").change( ()=>{
        	this.currLineWidth =  $("#spinnerWidth").val();
        });
         $("#colour").change( ()=>{
        	this.currColour =  $("#colour").val();
        });
    }


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	onInteractionStart(DnD){
		if(this.currEditingMode==editingMode.line){
			console.log("initLigne");
			this.currentShape = new Ligne(DnD.departX,DnD.departY,DnD.departX,DnD.departY,this.currLineWidth,this.currColour);
		}
		else if(this.currEditingMode==editingMode.rect){
			console.log("initRect");
			this.currentShape = new Rectangle(DnD.departX,DnD.departY, 0,0,this.currLineWidth,this.currColour);
		}
		this.formes.addForme(this.currentShape);

	}
	onInteractionUpdate(DnD){
		if(this.currEditingMode==editingMode.line){
			this.currentShape.point2X = DnD.actualX;
			this.currentShape.point2Y = DnD.actualY;

		}
		else if(this.currEditingMode==editingMode.rect){
			this.currentShape.largeur = DnD.actualX - this.currentShape.hautGaucheX;
			this.currentShape.hauteur = DnD.actualY - this.currentShape.hautGaucheY;
		}
		this.formes.paint(this.ctx,this.canvas);
		
	}
	onInteractionEnd(DnD){
		if(this.currEditingMode==editingMode.line){
			this.currentShape.point2X = DnD.finX;
			this.currentShape.point2Y = DnD.finY;

		}
		else if(this.currEditingMode==editingMode.rect){
			this.currentShape.largeur = DnD.finX- this.currentShape.hautGaucheX;
			this.currentShape.hauteur = DnD.finY- this.currentShape.hautGaucheY;
		}
		this.formes.paint(this.ctx,this.canvas);
	}
}


