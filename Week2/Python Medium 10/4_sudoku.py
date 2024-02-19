def combinations(target, size, exclude):
    result = []

    def find_combinations(current_sum, remaining_digits, current_combination, start_digit):
        if remaining_digits == 0:
            if current_sum == target:
                result.append(current_combination[:])
            return

        for digit in range(start_digit, 10):
            if digit not in exclude:
                current_combination.append(digit)
                find_combinations(current_sum + digit, remaining_digits - 1, current_combination, digit + 1)
                current_combination.pop()

    find_combinations(0, size, [], 1)
    return result

# Example usage:
print(combinations(45, 9, []))
