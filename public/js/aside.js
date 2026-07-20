export function exp_aside(page){
    if(page==='home'){
        const productImg=[{
                            image:"/img/products/masterpiece-portugal7.webp",
                            alt:"masterpiece-portugal7 poster",
                            loading:"lazy",
                            fetchpriority:"high",
                            imgtitle:"Masterpiece- Portugal Soccer #7 Poster",
                            creator:"Joseph Morales"
                        },
                        {                        
                            image:"/img/products/masterpiece-norway9.webp",
                            alt:"masterpiece-norway9 poster",
                            loading:"lazy",
                            fetchpriority:"high",
                            imgtitle:"Masterpiece- Norway Soccer #9 Poster",
                            creator:"Joseph Morales"
                        },
                        {                        
                            image:"/img/products/masterpiece- independenceday.webp",
                            alt:"masterpiece-independence day poster",
                            loading:"lazy",
                            fetchpriority:"high",
                            imgtitle:"Masterpiece- Independence Day Poster",
                            creator:"Joseph Morales"
                        },
        ]
        return `
                <aside>
                <h1 class="font-size-13">Products</h1>
                <div class="productaccessories">
                    ${productImg.map(products => `
                        <div class="product_card">
                            <picture>
                                <source srcset="${products.image}" type="image/webp"/>
                                <img src="${products.image}" alt="${products.alt}" loading="${products.loading}" fetchpriority="${products.fetchpriority}"/>
                            </picture>
                            <h2>${products.imgtitle}</h2>
                            <p>${products.creator}</p>
                            <button>View Full Details</button>
                            <button class="btnred">Add on Redbubble Cart</button>
                        </div>
                    `).join('')}
                </div>
            </aside>
                `;
    }
}
