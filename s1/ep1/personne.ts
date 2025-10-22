interface Personne {
    nom: string;
    age: number;
}

function afficherPersonne(personne: Personne) {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}


const Alice:Personne = {
    nom:"Alice",
    age:25
}

afficherPersonne(Alice);