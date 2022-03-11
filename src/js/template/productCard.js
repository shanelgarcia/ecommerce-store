function productCard(data) {
    const template = `
    
    `
    const element = document.createRange().createContextualFragment(template).children[0]

    return element;
}

export {productCard}