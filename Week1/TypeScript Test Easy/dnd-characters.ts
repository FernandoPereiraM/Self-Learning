export class DnDCharacter {
    readonly strength: number
    readonly dexterity: number
    readonly constitution: number
    readonly intelligence: number
    readonly wisdom: number
    readonly charisma: number
    readonly hitpoints: number
    constructor() {
      this.strength = DnDCharacter.generateAbilityScore()
      this.dexterity = DnDCharacter.generateAbilityScore()
      this.constitution = DnDCharacter.generateAbilityScore()
      this.intelligence = DnDCharacter.generateAbilityScore()
      this.wisdom = DnDCharacter.generateAbilityScore()
      this.charisma = DnDCharacter.generateAbilityScore()
      this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
    }
    public static generateAbilityScore(): number {
      const rolls: number[] = [...Array(4)].map(_ => this.generateRandomDiceRollScore())
      return rolls.sort((a, b) => a - b).slice(0, 3).reduce((n, sum) => sum + n)
    }
    public static getModifierFor(numberValue: number): number {
      return Math.floor((numberValue - 10) / 2)
    }
    private static generateRandomDiceRollScore(): number {
      return Math.floor(Math.random() * 6) + 1
    }
  }