function premierElement<T>(tableau: T[]){
    return tableau[0];
}

const nombre: number[] = [1, 2, 3];
const string: string[] = ['Serena', 'Axcel', 'Lucii'];

console.log(premierElement(nombre));
console.log(premierElement(string));
