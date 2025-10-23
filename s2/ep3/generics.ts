interface Vocaloid{
    name: string;
    donor: string;
    company: string;
    debut: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const Miku: Vocaloid = {
    name: "Hatsune Miku",
    donor: "Saki Fujita",
    company: "Crypton Future Media",
    debut: 2007
}

console.log(getProperty(Miku, "name"));
console.log(getProperty(Miku, "debut"));
//console.log(getProperty(Miku, "voice actor"));