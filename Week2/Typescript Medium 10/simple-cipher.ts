export class SimpleCipher {
    private key: string;
  
    constructor(key?: string) {
      if (key && !/^[a-z]+$/.test(key)) {
        throw new Error("Key must contain only lowercase letters.");
      }
      this.key = key || this.generateRandomKey();
    }
  
    private generateRandomKey(): string {
      let key = "";
      const characters = "abcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < 100; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
      }
      return key;
    }
  
    encode(plainText: string): string {
      let cipherText = "";
      for (let i = 0; i < plainText.length; i++) {
        const charCode = plainText.charCodeAt(i) - 97;
        const keyIndex = i % this.key.length;
        const shift = this.key.charCodeAt(keyIndex) - 97;
        const encodedCharCode = ((charCode + shift) % 26) + 97;
        cipherText += String.fromCharCode(encodedCharCode);
      }
      return cipherText;
    }
  
    decode(cipherText: string): string {
      let plainText = "";
      for (let i = 0; i < cipherText.length; i++) {
        const charCode = cipherText.charCodeAt(i) - 97;
        const keyIndex = i % this.key.length;
        const shift = this.key.charCodeAt(keyIndex) - 97;
        const decodedCharCode = ((charCode - shift + 26) % 26) + 97;
        plainText += String.fromCharCode(decodedCharCode);
      }
      return plainText;
    }
  }
  