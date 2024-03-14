import requests

def sort_articles(article):
    if article['comments'] is not None:
        return (article['comments'], article['title'])
    else:
        return (float('inf'), article['title'])

def topArticles(limit):
    if not isinstance(limit, int) or limit <= 0:
        print("El límite debe ser un número entero positivo.")
        return []

    base_url = "https://jsonmock.hackerrank.com/api/articles?page={}"
    all_articles = []

    page_number = 1
    total_pages = float('inf')

    while page_number <= total_pages:
        response = requests.get(base_url.format(page_number))
        
        if not response.ok:
            print(f"Error al obtener la página {page_number}. Código de estado: {response.status_code}")
            return []

        data = response.json()
        articles = data.get('data', [])
        total_pages = data.get('total_pages', 0)

        for article in articles:
            title = article.get('title') or article.get('story_title')
            num_comments = article.get('num_comments')

            if title is not None:
                # Si num_comments es None, asigna un valor predeterminado de 0
                if num_comments is None:
                    num_comments = 0
                article_data = {
                    'title': title,
                    'comments': num_comments
                }
                all_articles.append(article_data)

        page_number += 1

    # Ordenar los artículos usando la función de orden personalizada sort_articles
    all_articles.sort(key=sort_articles, reverse=True)
    
    # Obtener solo los títulos de los artículos, hasta el límite especificado
    titles = [article['title'] for article in all_articles[:limit]]
    
    return titles

# Llamar a la función para obtener los títulos de los artículos ordenados por número de comentarios
titles = topArticles(20)

# Imprimir los títulos de los artículos
for title in titles:
    print(title)

