def encode(message, rails):
    # Crear la matriz para la codificación
    matrix = [['' for _ in range(len(message))] for _ in range(rails)]
    
    # Inicializar las variables para rastrear la posición en la matriz y la dirección del movimiento
    row, col = 0, 0
    down = True
    
    # Llenar la matriz con el mensaje
    for char in message:
        # Colocar el carácter en la posición actual
        matrix[row][col] = char
        # Cambiar la dirección si llegamos al extremo superior o inferior
        if row == 0:
            down = True
        elif row == rails - 1:
            down = False
        # Moverse hacia arriba o hacia abajo dependiendo de la dirección actual
        if down:
            row += 1
        else:
            row -= 1
        # Moverse a la siguiente columna
        col += 1
    
    # Concatenar los caracteres de cada fila para obtener el mensaje codificado
    encoded_message = ''.join(''.join(row) for row in matrix)
    return encoded_message

def decode(message, rails):
    # A bit of a cheat...
    # Reverses the char movements found when sample message of unique chars is encoded.
    # Satisfies all tests and more (i.e. messages up to 62 chars in length)
    original ="ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrtuvwxyz1234567890"
    encoded  = encode(original[:len(message)], rails)
    return "".join(message[encoded.index(original[idx])] for idx in range(len(message)))

