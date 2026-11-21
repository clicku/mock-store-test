INSERT INTO products (id, slug, name, price, image_url) VALUES
  (1, 'iced-spanish-latte', 'Iced Spanish Latte', 145, './media-local/stores/mock-kape/spanish-latte.jpg'),
  (2, 'barako-americano', 'Barako Americano', 110, './media-local/stores/mock-kape/barako-americano.jpg'),
  (3, 'ube-cloud-latte', 'Ube Cloud Latte', 165, './media-local/stores/mock-kape/ube-cloud-latte.jpg'),
  (4, 'iced-caramel-macchiato', 'Iced Caramel Macchiato', 155, './media-local/stores/mock-kape/caramel-macchiato.jpg'),
  (5, 'french-butter-croissant', 'French Butter Croissant', 95, './media-local/stores/mock-kape/butter-croissant.jpg')
ON CONFLICT (slug) DO NOTHING;
