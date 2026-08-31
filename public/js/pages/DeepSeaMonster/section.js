class ImageSectionProduct{
    constructor(image,alt,loading,priority,name,link){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
        this.name=name;
        this.link=link;
    }

    getImageSectionProduct(){
        return `<div>
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
                <p>${this.name}</p>
                <a href="${this.link}">Visit</a>
                </div>
               `
    }
}

export function deepsea_section(){

    const imagesection_product=[
        new ImageSectionProduct(
            "/img/gallery1.webp",
            "classicshirt",
            0,
            0,
            "Classic Shirt",
            "/DeepSeaMonster/deepseamonsterclassicshirt"
        ),
        new ImageSectionProduct(
            "/img/gallery1.webp",
            "premiumshirt",
            0,
            0,
            "Premium Shirt"
        ),
        new ImageSectionProduct(
            "/img/gallery1.webp",
            "oversizedshirt",
            0,
            0,
            "Oversized Shirt"
        ),
        new ImageSectionProduct(
            "/img/gallery1.webp",
            "sweatshirt",
            0,
            0,
            "Sweat Shirt"
        ),
        new ImageSectionProduct(
            "/img/gallery1.webp",
            "Premium Oversized Hoodie",
            0,
            0,
            "Premium Oversized Hoodie",
        ),
        new ImageSectionProduct(
            "/img/gallery1.webp",
            "Lightweight Hoodie",
            0,
            0,
            "Lightweight Hoodie"
        ),
        new ImageSectionProduct(
            "/img/gallery1.webp",
            "Premium Oversized Sweatshirt",
            0,
            0,
            "Premium Oversized Sweat Shirt"
        )
    ];

    const imagesectionHTML=imagesection_product.map(imageSP=>imageSP.getImageSectionProduct()).join('');

    return`
         <section>
            <div id="sectiongallery">
                  <h1> Available variants</h1>
                  <div class="sectiongallery_flex">
                        ${imagesectionHTML}
                  </div>
            </div>
         </section>
    `;
}
