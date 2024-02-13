export const toRoman = (num: number): string => {
    // Define the Roman numeral symbols and their corresponding values
    const romanNumerals: { [key: number]: string } = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    // Initialize an empty string to store the Roman numeral representation
    let romanNumeral: string = '';

    // Iterate through the romanNumerals object in descending order
    for (const [value, symbol] of Object.entries(romanNumerals).sort((a, b) => parseInt(b[0]) - parseInt(a[0]))) {
        // Repeat the symbol as many times as possible while the value is less than or equal to num
        while (num >= parseInt(value)) {
            romanNumeral += symbol;
            num -= parseInt(value);
        }
    }

    return romanNumeral;
};
