
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD {
	constructor(canvas, interactor) {
		this.canvas = canvas;
		this.interactor = interactor;
		this.finY = 0;
		this.finX = 0;
		this.departY = 0;
		this.departX = 0;
		this.actualX =0;
		this.actualY =0;
		this.isClickDown=false;
        // Définir ici les attributs de la classe
        console.log(this.canvas);
        // Associer les évènements du canvas aux fonctions ci-dessous.
        this.canvas.addEventListener('mousedown', (evt) => this.mouseDown(evt), false);
        this.canvas.addEventListener('mousemove', (evt) => this.mouseMove(evt), false);
        this.canvas.addEventListener('mouseup',(evt) =>  this.mouseUp(evt), false);
    }

	// Developper les 3 fonctions gérant les événements
	mouseDown(evt){
		this.isClickDown=true;
		this.departX = getMousePosition(this.canvas,evt).x;
		this.departY = getMousePosition(this.canvas,evt).y;
		this.interactor.onInteractionStart(this);
	}
	mouseUp( evt){
		
		if(this.isClickDown){
			this.finX = getMousePosition(this.canvas,evt).x;
			this.finY = getMousePosition(this.canvas,evt).y;
			this.interactor.onInteractionEnd(this);
		}
		this.isClickDown=false;
	}
	mouseMove( evt){
		if(this.isClickDown){
			this.actualX = getMousePosition(this.canvas,evt).x;
			this.actualY = getMousePosition(this.canvas,evt).y;
			this.interactor.onInteractionUpdate(this);
		}
	}
	
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	console.log(evt.clientX+";"+evt.clientY) ;
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}



