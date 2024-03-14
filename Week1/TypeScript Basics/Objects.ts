//Objects
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

//An ENUM is a special "class" that represents a group of constants
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// Interface
interface Rectangle2 {
    height: number,
    width: number
};

const rectangle: Rectangle2 = {
    height: 20,
    width: 10
};

interface ColoredRectangle extends Rectangle2 {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

console.log(coloredRectangle);
console.log(rectangle);


