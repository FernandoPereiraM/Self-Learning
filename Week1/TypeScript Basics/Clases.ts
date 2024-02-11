//public - (default) allows access to the class member from anywhere
//private - only allows access to the class member from within the class
//protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person = new Person("Jane");
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private


