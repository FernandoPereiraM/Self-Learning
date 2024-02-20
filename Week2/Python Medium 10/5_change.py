def find_fewest_coins(coins, target):
    if target == 0:
        return []
    elif target < 0:
        raise ValueError("target can't be negative")
        
    # Ordenar las monedas en orden ascendente
    coins.sort()
    
    # Inicializar una lista para almacenar el número mínimo de monedas requeridas para cada objetivo
    min_coins = [float('inf')] * (target + 1)
    
    # Inicializar una lista para almacenar las monedas utilizadas para alcanzar cada objetivo
    used_coins = [[] for _ in range(target + 1)]
    
    # El número mínimo de monedas para un objetivo de 0 es 0
    min_coins[0] = 0
    
    # Iterar sobre cada objetivo desde 1 hasta el objetivo deseado
    for i in range(1, target + 1):
        # Iterar sobre cada tipo de moneda
        for coin in coins:
            # Si la moneda es menor o igual al objetivo actual y el número de monedas requeridas
            # para alcanzar el objetivo actual usando esta moneda es menor que el número mínimo de monedas
            # registrado hasta ahora para este objetivo
            if coin <= i and 1 + min_coins[i - coin] < min_coins[i]:
                # Actualizar el número mínimo de monedas para este objetivo
                min_coins[i] = 1 + min_coins[i - coin]
                # Actualizar la lista de monedas utilizadas para alcanzar este objetivo
                used_coins[i] = used_coins[i - coin] + [coin]

    # Si no hay monedas utilizadas para alcanzar el objetivo, lanzar una excepción
    if not used_coins[target]:
        raise ValueError("can't make target with given coins")

    return list(reversed(used_coins[target]))
