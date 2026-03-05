export default function loadHome() {
  const content = document.getElementById("content");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900";
  img.alt = "Elegant restaurant interior with warm lighting";

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to La Maison Dorée";

  const description = document.createElement("p");
  description.textContent =
    "Nestled in the heart of the city, La Maison Dorée offers an unforgettable " +
    "dining experience where timeless culinary traditions meet modern creativity. " +
    "Our award-winning chefs craft each dish with locally sourced ingredients and " +
    "a passion for perfection. Whether you're celebrating a special occasion or " +
    "simply savoring a weeknight escape, every visit promises warmth, elegance, " +
    "and flavors that linger long after the last bite.";

  hero.appendChild(img);
  hero.appendChild(headline);
  hero.appendChild(description);
  content.appendChild(hero);
}
