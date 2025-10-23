class Rectangle {
    largeur: number;
    hauteur: number;
    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }

    constructor(largeur: number, hauteur: number) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
}

class Cercle {
    rayon: number;
    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
    constructor(rayon: number) {
        this.rayon = rayon;
    }
}

function afficherSurface(formes: Rectangle|Cercle){
    if(formes instanceof Rectangle){
        console.log("Ceci est un rectangle de surface " + formes.calculerSurface());
    }else if(formes instanceof Cercle){
        console.log("Ceci est un cercle de surface " + Math.round(formes.calculerSurface()));
    }
    else{
        console.log("Ceci n'est ni un rectangle ni un cercle");
    }
}

const rectangle = new Rectangle(10,10);
const cercle = new Cercle(5);

afficherSurface(rectangle);
afficherSurface(cercle);