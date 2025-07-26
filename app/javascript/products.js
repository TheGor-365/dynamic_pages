import $ from "jquery"

$(document).on("click", ".btn-details", function() {
  const productId = $(this).data("id");
  $.ajax({
    url: `/products/${productId}`,
    dataType: "script"
  });
});

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-fetch")) {
    const productId = e.target.dataset.id;
    fetch(`/products/${productId}.json`)
      .then(res => res.json())
      .then(product => {
        document.getElementById("current_product_info").innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price} ₽</strong></p>
        `;
      });
  }
});
