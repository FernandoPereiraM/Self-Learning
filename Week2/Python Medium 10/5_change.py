def find_fewest_coins(coins, target):
    if target < 0:
        raise ValueError("Change cannot be negative")

    if target < min(coins):
        raise ValueError("Change value is smaller than the smallest coin value")

    coins.sort(reverse=True)  # Sort coins in descending order

    result = []
    remaining = target

    for coin in coins:
        while remaining >= coin:
            result.append(coin)
            remaining -= coin

    if remaining != 0:
        raise ValueError("Cannot make target with given coins")

    return result

# Example usage:
try:
    print(find_fewest_coins([1, 5, 10, 25, 100], 15))  # Output: [10, 5]
    print(find_fewest_coins([1, 5, 10, 25, 100], 40))  # Output: [25, 10, 5]
except ValueError as e:
    print(e)
