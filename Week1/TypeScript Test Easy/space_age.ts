export function age(planet: string, seconds: number): number {
    const segsEarth = 31557600;
    let segsPlanets = spaceMap[planet] * segsEarth;
    let res = seconds / segsPlanets;
    return Number(res.toFixed(2));
  }
  
  export const spaceMap: { [key: string]: number } = {
      'mercury': 0.2408467,
      'venus': 0.61519726,
      'earth': 1,
      'mars': 1.8808158,
      'jupiter': 11.862615,
      'saturn': 29.447498,
      'uranus': 84.016846,
      'neptune': 164.79132
  };