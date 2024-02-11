let x: unknown = 'hello';
console.log((x as string).length);

let y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length

let z: unknown = 'hello';
console.log((<string>z).length);