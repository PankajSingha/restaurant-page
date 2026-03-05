export default function loadMenu() {
  const content = document.getElementById("content");

  const wrapper = document.createElement("div");
  wrapper.classList.add("menu-page");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const intro = document.createElement("p");
  intro.textContent =
    "Each dish is prepared with the freshest seasonal ingredients, " +
    "sourced from local farms and artisan producers.";

  wrapper.appendChild(headline);
  wrapper.appendChild(intro);

  const sections = [
    {
      title: "Starters",
      items: [
        { name: "Truffle Burrata", price: "$16", desc: "Creamy burrata with black truffle shavings, heirloom tomatoes & basil oil" },
        { name: "Seared Scallops", price: "$19", desc: "Pan-seared diver scallops with cauliflower purée & crispy pancetta" },
        { name: "French Onion Soup", price: "$12", desc: "Classic slow-cooked onion soup gratinéed with Gruyère" },
      ],
    },
    {
      title: "Mains",
      items: [
        { name: "Filet Mignon", price: "$42", desc: "8 oz center-cut filet with red wine reduction, roasted garlic mash & haricots verts" },
        { name: "Pan-Roasted Salmon", price: "$34", desc: "Atlantic salmon with lemon beurre blanc, wild rice & grilled asparagus" },
        { name: "Wild Mushroom Risotto", price: "$28", desc: "Arborio rice with porcini, chanterelle & shiitake mushrooms finished with Parmigiano" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Crème Brûlée", price: "$11", desc: "Tahitian vanilla custard with a caramelised sugar crust" },
        { name: "Chocolate Fondant", price: "$13", desc: "Warm dark-chocolate cake with a molten centre, served with vanilla bean ice cream" },
        { name: "Tarte Tatin", price: "$12", desc: "Caramelised apple tart with crème fraîche" },
      ],
    },
  ];

  sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("menu-section");

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    section.items.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("menu-item");

      const namePrice = document.createElement("h3");
      namePrice.innerHTML = `${item.name} <span class="price">${item.price}</span>`;

      const desc = document.createElement("p");
      desc.textContent = item.desc;

      card.appendChild(namePrice);
      card.appendChild(desc);
      sectionDiv.appendChild(card);
    });

    wrapper.appendChild(sectionDiv);
  });

  content.appendChild(wrapper);
}
