export class Rational {
    private numerator: number;
    private denominator: number;
  
    constructor(numerator: number, denominator: number) {
      if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
      }
  
      // Ensure denominator is positive and reduce to lowest terms
      const gcd = this.greatestCommonDivisor(Math.abs(numerator), Math.abs(denominator));
      this.numerator = numerator / gcd;
      this.denominator = denominator / gcd;
  
      // Ensure the denominator is positive
      if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
      }
    }
  
    private greatestCommonDivisor(a: number, b: number): number {
      if (b === 0) {
        return a;
      }
      return this.greatestCommonDivisor(b, a % b);
    }
  
    add(other: Rational): Rational {
      const num = this.numerator * other.denominator + other.numerator * this.denominator;
      const denom = this.denominator * other.denominator;
      return new Rational(num, denom);
    }
  
    sub(other: Rational): Rational {
      const num = this.numerator * other.denominator - other.numerator * this.denominator;
      const denom = this.denominator * other.denominator;
      return new Rational(num, denom);
    }
  
    mul(other: Rational): Rational {
      const num = this.numerator * other.numerator;
      const denom = this.denominator * other.denominator;
      return new Rational(num, denom);
    }
  
    div(other: Rational): Rational {
      if (other.numerator === 0) {
        throw new Error("Cannot divide by zero.");
      }
      const num = this.numerator * other.denominator;
      const denom = this.denominator * other.numerator;
      return new Rational(num, denom);
    }
  
    abs(): Rational {
      return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
    }
  
  exprational(exp: number): Rational {
      if (exp === 0) {
          return new Rational(1, 1);
      } else if (exp < 0) {
          // Invert the rational number and raise it to the positive exponent
          return new Rational(this.denominator ** Math.abs(exp), this.numerator ** Math.abs(exp));
      } else {
          // Raise the rational number to the positive exponent
          return new Rational(this.numerator ** exp, this.denominator ** exp);
      }
  }
  
    expreal(base: number): number {
      return base ** (this.numerator / this.denominator);
    }
  
    reduce(): Rational {
      return new Rational(this.numerator, this.denominator);
    }
  }
  