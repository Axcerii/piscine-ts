interface LengthWise{
    length: number
}

function premierElement<T extends LengthWise>(tableau: T){
    if(tableau.length > 0){
        return tableau;
    }
    else{
        return undefined;
    }
}

const nombre: number[] = [1, 2, 3];
const string: string[] = ['Serena', 'Axcel', 'Lucii'];
const empty: any[] = [];

console.log(premierElement(nombre));
console.log(premierElement(string));
