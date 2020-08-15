SELECT inventory.store_id, AVG(film.rental_rate)
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
GROUP BY inventory.store_id
