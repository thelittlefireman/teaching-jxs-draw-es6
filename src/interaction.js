
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD {
    constructor(canvas, interactor) {
        this.canvas = canvas;
        this.interactor = interactor;

        // Définir ici les attributs de la classe

        // Associer les évènements du canvas aux fonctions ci-dessous.

    }

	// Developper les 3 fonctions gérant les événements


}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}



