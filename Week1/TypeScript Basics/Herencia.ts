interface Shape {                      //Interface
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(
        protected readonly rewidth: number,
        protected readonly reheight: number) { }

    public getArea(): number {             //Interface Metod return a number
        return this.rewidth * this.reheight;
    }
}

class Square extends Rectangle {           //Herency square from rectangle
    public constructor(rewidth: number) {
        super(rewidth, rewidth);
    }
    // getArea gets inherited from Rectangle
}

const mySq = new Square(20);

console.log(mySq.getArea());