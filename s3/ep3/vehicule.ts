interface Vehicule {
    marque: string;
    annee: number;
}

function isVehicule(obj:any){
    if( typeof obj.marque === "string" && typeof obj.annee === "number"){
        return true;
    }
    else{
        return false;
    }
}

function afficherVehicule(obj:any){
    if(isVehicule(obj)){
        console.log(`Le véhicule ${obj.marque} de l'annee ${obj.annee} est valide.`);
    }
    else{
        console.log("Objet invalide pour un véhicule.");
    }
}

isVehicule({marque:"Yamaha Motors", annee:2007});
isVehicule({marque:"Yamaha Motors", annee:"2007"});