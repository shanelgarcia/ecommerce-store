function productCard(data) {
    const template = `
    <aside class="product-card">
          <figure>
            <figcaption>test</figcaption>
          </figure>
          <button>Edit</button>
          <button>Delete</button>
        </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]

    return element;
}

export {productCard}