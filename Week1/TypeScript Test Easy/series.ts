export class Series {
    private series: number[];

    constructor(series: string) {
        // Convert the input string into an array of digits
        this.series = Array.from(series, Number);
    }

    slices(sliceLength: number): number[][] {
        if (this.series.length === 0) {
            throw new Error('series cannot be empty');  
        } else if(sliceLength == 0 ){
           throw new Error('slice length cannot be zero');
        } else if (sliceLength < 0 ) {
            throw new Error('slice length cannot be negative');
        } else if (sliceLength > this.series.length) {
            throw new Error('slice length cannot be greater than series length');
        }
      
        const result: number[][] = [];

        for (let i = 0; i <= this.series.length - sliceLength; i++) {
            // Push slices as arrays of digits
            result.push(this.series.slice(i, i + sliceLength));
        }

        return result;
    }
}
