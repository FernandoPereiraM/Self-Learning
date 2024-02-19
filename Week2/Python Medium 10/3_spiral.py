def spiral_matrix(size):
    # Initialize an empty square matrix
    matrix = [[0] * size for _ in range(size)]
    
    # Define initial boundary limits
    top, bottom, left, right = 0, size - 1, 0, size - 1
    
    num = 1
    while num <= size * size:
        # Traverse from left to right at the top row
        for i in range(left, right + 1):
            matrix[top][i] = num
            num += 1
        top += 1
        
        # Traverse from top to bottom at the rightmost column
        for i in range(top, bottom + 1):
            matrix[i][right] = num
            num += 1
        right -= 1
        
        # Traverse from right to left at the bottom row
        for i in range(right, left - 1, -1):
            matrix[bottom][i] = num
            num += 1
        bottom -= 1
        
        # Traverse from bottom to top at the leftmost column
        for i in range(bottom, top - 1, -1):
            matrix[i][left] = num
            num += 1
        left += 1
    
    return matrix