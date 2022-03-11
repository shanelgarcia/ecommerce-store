function productCard({key, title, category, price, description, image}) {

    const template = `
    <aside class="product-card">
        <div class="product-card-details">
            <img src="${image}.jpg" alt="${category}: ${title}">
            <span class="product-card-title">${title}</span>
            <span class="product-card-price">$${price}</span>
            <p class="product-card-description">${description}</p>
        </div>
        <div class="product-card-btns">
            <button id="productCardEdit" data-key="${key}">Update</button>
            <button id="productCardDelete" data-key="${key}">Remove</button>
        </div>
    </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]

    return element;
}

export {productCard}