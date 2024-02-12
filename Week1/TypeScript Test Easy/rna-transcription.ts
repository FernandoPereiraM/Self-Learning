export function toRna(adn: string): string {
    let secuencia = ''
    let fix =  !adn.split('').every(caracter => 'GCTA'.includes(caracter));
    if(fix == true){
      throw new Error ("Invalid input DNA.");
    } else {
      for (let i = 0; i < adn.length; i++) {
        secuencia += adnMap[adn[i]];
    }
    return secuencia;
    }
  }
  
  export const adnMap: { [key: string]: string } = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U',
  };