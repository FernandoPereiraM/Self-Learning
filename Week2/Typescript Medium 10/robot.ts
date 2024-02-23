export class Robot {
    private static usedNames: Set<string> = new Set();
    private static generatedNames: Set<string> = new Set();
    private _name: string | null = null;
  
    constructor() {
      this.resetName();
    }
  
    public get name(): string {
      if (this._name === null) {
        throw new Error('Robot name has not been generated yet.');
      }
      return this._name;
    }
  
    public resetName(): void {
      this.releaseName();
      this.generateUniqueName();
    }
  
    private generateUniqueName(): void {
      let newName: string;
      do {
        newName = this.generateRandomName();
      } while (Robot.usedNames.has(newName) || Robot.generatedNames.has(newName));
      this._name = newName;
      Robot.usedNames.add(newName);
      Robot.generatedNames.add(newName);
    }
  
    private generateRandomName(): string {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const digits = '0123456789';
      const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
      const randomDigit = () => digits[Math.floor(Math.random() * digits.length)];
      return randomLetter() + randomLetter() + randomDigit() + randomDigit() + randomDigit();
    }
  
    private releaseName(): void {
      if (this._name !== null) {
        Robot.usedNames.delete(this._name);
        this._name = null;
      }
    }
  
    public static releaseNames(): void {
      Robot.usedNames.clear();
      Robot.generatedNames.clear();
    }
  }
  