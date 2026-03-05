export default function loadContact() {
  const content = document.getElementById("content");

  const wrapper = document.createElement("div");
  wrapper.classList.add("contact-page");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const intro = document.createElement("p");
  intro.textContent =
    "We'd love to hear from you. Whether you have a question about our menu, " +
    "want to book a private event, or simply wish to share your experience — " +
    "don't hesitate to reach out.";

  wrapper.appendChild(headline);
  wrapper.appendChild(intro);

  // Address
  const addressSection = document.createElement("div");
  addressSection.classList.add("contact-section");

  const addressTitle = document.createElement("h2");
  addressTitle.textContent = "Visit Us";

  const address = document.createElement("p");
  address.innerHTML =
    "42 Rue de la Lumière<br>Paris, 75008<br>France";

  addressSection.appendChild(addressTitle);
  addressSection.appendChild(address);
  wrapper.appendChild(addressSection);

  // Hours
  const hoursSection = document.createElement("div");
  hoursSection.classList.add("contact-section");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Opening Hours";

  const hours = document.createElement("ul");
  const schedule = [
    "Monday – Friday: 11:30 AM – 10:00 PM",
    "Saturday: 10:00 AM – 11:00 PM",
    "Sunday: 10:00 AM – 9:00 PM",
  ];
  schedule.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    hours.appendChild(li);
  });

  hoursSection.appendChild(hoursTitle);
  hoursSection.appendChild(hours);
  wrapper.appendChild(hoursSection);

  // Phone & Email
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-section");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Get in Touch";

  const phone = document.createElement("p");
  phone.innerHTML = "📞 +33 1 23 45 67 89";

  const email = document.createElement("p");
  email.innerHTML = '✉️ <a href="mailto:hello@lamaisondoree.fr">hello@lamaisondoree.fr</a>';

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(email);
  wrapper.appendChild(contactInfo);

  content.appendChild(wrapper);
}
