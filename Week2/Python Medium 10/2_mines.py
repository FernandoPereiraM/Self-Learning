def annotate(minefield):
    # Check if the minefield is empty
    if not minefield:
        return []

    # Check if all rows have the same length
    row_length = len(minefield[0])
    if any(len(row) != row_length for row in minefield):
        raise ValueError("The board is invalid with current input.")

    # Check if all characters are valid
    valid_characters = {' ', '*'}
    if any(char not in valid_characters for row in minefield for char in row):
        raise ValueError("The board is invalid with current input.")

    rows = len(minefield)
    cols = row_length

    def is_valid_cell(row, col):
        return 0 <= row < rows and 0 <= col < cols

    def count_adjacent_mines(row, col):
        count = 0
        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                if dr == 0 and dc == 0:
                    continue
                new_row, new_col = row + dr, col + dc
                if is_valid_cell(new_row, new_col) and minefield[new_row][new_col] == '*':
                    count += 1
        return count

    annotated_field = []
    for i in range(rows):
        annotated_row = ""
        for j in range(cols):
            if minefield[i][j] == ' ':
                mines_count = count_adjacent_mines(i, j)
                annotated_row += str(mines_count) if mines_count > 0 else ' '
            else:
                annotated_row += minefield[i][j]
        annotated_field.append(annotated_row)

    return annotated_field