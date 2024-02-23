export class Matrix {
    private matrix: number[][];
  
    constructor(matrixString: string) {
      this.matrix = matrixString.split('\n').map(row => row.split(' ').map(Number));
    }
  
    get rows(): number[][] {
      return this.matrix;
    }
  
    get columns(): number[][] {
      const transposedMatrix: number[][] = [];
      for (let i = 0; i < this.matrix[0].length; i++) {
        transposedMatrix.push(this.matrix.map(row => row[i]));
      }
      return transposedMatrix;
    }
  }
  