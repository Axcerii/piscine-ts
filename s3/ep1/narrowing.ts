function traiterValeur(valeur: string|number){
    if(typeof valeur === "string"){
        console.log(valeur.length);
    }else{
        console.log(valeur*2);
    }
}

traiterValeur("Serena");
traiterValeur(39);