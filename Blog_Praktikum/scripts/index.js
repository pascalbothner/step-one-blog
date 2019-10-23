const blogPostContainer = document.getElementById("blog-posts-container");
const imageSlider = document.getElementById("image-slider");

if (imageSlider && images) {
  imageSlider.style.backgroundImage = `url(assets/${images[0]})`;

  let maxCount = images.length;
  let currentDisplayedImageIndex = 0;

  setInterval(() => {
    if (currentDisplayedImageIndex <= maxCount - 1) {
      imageSlider.style.backgroundImage = `url(assets/${images[currentDisplayedImageIndex]})`;
      currentDisplayedImageIndex++;
    } else {
      currentDisplayedImageIndex = 0;
      imageSlider.style.backgroundImage = `url(assets/${images[currentDisplayedImageIndex]})`;
    }
  }, 5000);
}

if (blogPostContainer && blogPostCards) {
  blogPostCards.forEach(blogPostCard => {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("card", "card-large", "blog-post-card");

    const title = document.createElement("h3");
    title.className = "card-title";
    title.innerHTML = blogPostCard.title;

    const cardSubtitle = document.createElement("small");
    cardSubtitle.className = "card-subtitle";
    cardSubtitle.innerHTML = blogPostCard.createdAt;

    const text = document.createElement("p");
    text.className = "card-text";
    text.innerHTML = blogPostCard.description;

    const link = document.createElement("a");
    link.className = "cta";
    link.href = blogPostCard.link;
    link.innerHTML = " Zum Blog Post";

    const arrow = document.createElement("span");
    arrow.className = "arrow-right";
    arrow.innerHTML = "&#10095;";

    link.insertAdjacentElement("afterbegin", arrow);

    // Alle unterelemente des containerDiv's hinzufügen
    containerDiv.insertAdjacentElement("afterbegin", link);
    containerDiv.insertAdjacentElement("afterbegin", text);
    containerDiv.insertAdjacentElement("afterbegin", cardSubtitle);
    containerDiv.insertAdjacentElement("afterbegin", title);

    // Das neu erstellte containerDiv mit den unterelementen dem blogPostContainer hinzufügen
    blogPostContainer.insertAdjacentElement("beforebegin", containerDiv);
  });
}
