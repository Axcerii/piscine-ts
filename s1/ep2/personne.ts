interface Personne {
    readonly id: number;
    nom: string;
    age: number;
    adresse?: Adresse;
}

interface Adresse{
    rue: string;
    ville: string;
}

function afficherPersonne(personne: Personne) {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

function afficherPersonneAvancee(personne: Personne){
    if(personne.adresse){
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`);
    }
    else{
        console.log(`Bonjour, je m'appelle ${personne.nom} (ID: ${personne.id}), j'ai ${personne.age} ans.`);
    }
}


const Alice:Personne = {
    id:1,
    nom:"Alice",
    age:25
}

const Serena: Personne = {
    id: 2,
    nom: "Serena",
    age: 23,
    adresse:{
        rue: "Bois d'Urive",
        ville: "Augeaime"
    }
}

afficherPersonneAvancee(Alice);
afficherPersonneAvancee(Serena);