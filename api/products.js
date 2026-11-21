export async function GET() {
  const products = [
    {
      id: 1,
      slug: "iced-spanish-latte",
      name: "Iced Spanish Latte",
      price: 145,
      image: "./media-local/stores/mock-kape/spanish-latte.jpg"
    },
    {
      id: 2,
      slug: "barako-americano",
      name: "Barako Americano",
      price: 110,
      image: "./media-local/stores/mock-kape/barako-americano.jpg"
    },
    {
      id: 3,
      slug: "ube-cloud-latte",
      name: "Ube Cloud Latte",
      price: 165,
      image: "./media-local/stores/mock-kape/ube-cloud-latte.jpg"
    },
    {
      id: 4,
      slug: "iced-caramel-macchiato",
      name: "Iced Caramel Macchiato",
      price: 155,
      image: "./media-local/stores/mock-kape/caramel-macchiato.jpg"
    },
    {
      id: 5,
      slug: "french-butter-croissant",
      name: "French Butter Croissant",
      price: 95,
      image: "./media-local/stores/mock-kape/butter-croissant.jpg"
    }
  ];

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" }
  });
}
