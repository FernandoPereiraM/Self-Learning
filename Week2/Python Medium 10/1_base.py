def rebase(input_base, digits, output_base):
    if input_base < 2:
        raise ValueError("input base must be >= 2")
    if output_base < 2:
        raise ValueError("output base must be >= 2")
    if any(d < 0 or d >= input_base for d in digits):
        raise ValueError("all digits must satisfy 0 <= d < input base")

    # Convert the input number to base 10
    decimal_value = 0
    for digit in digits:
        decimal_value = decimal_value * input_base + digit
        #print(str(decimal_value))

    # Handle the case when the input number is 0
    if decimal_value == 0:
        return [0]

    # Convert the number from base 10 to the output base
    output_digits = []
    while decimal_value > 0:
        remainder = decimal_value % output_base
        #print(str(decimal_value) + " % " + str(output_base) + " => " + str(remainder))
        output_digits.insert(0, remainder)
        decimal_value //= output_base
        #print(str(decimal_value))

    return output_digits

# Example usage:
print(rebase(10, [5], 2)) 
