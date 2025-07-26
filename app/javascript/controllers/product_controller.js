import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { url: String }

  show() {
    fetch(this.urlValue)
      .then(res => res.json())
      .then(product => {
        document.getElementById("current_product_info").innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price} ₽</strong></p>
        `;
      });
  }
}
