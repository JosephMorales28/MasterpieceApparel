class ImageMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getImageMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}
export function deepsea_main(){
    
    const imagemain_product=[
        new ImageMainProduct(
            "./img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];

    const productinfo={
        name:"Deep Sea Monster </br>(Essential Shirt)",
        creator:"Joseph Morales",
        Price: 30.69,
        details:"Dive into the abyss with this Deep Sea Monster artwork a colossal Kraken rising from storm‑tossed waves. Its glowing eyes, razor‑sharp teeth, and curling tentacles crush a doomed ship beneath a fiery moon. The arced, cracked lettering “DEEP SEA” and “MONSTER” frame the creature in a bold, mythic composition perfect for dark‑fantasy fans, ocean explorers, and streetwear collectors.",
        type:"Unisex, T-Shirts",
        fabric: "100% cotton",
        printtype:{
            dtf:"DTF",
            quality:"High Quality Image" 
        },
        size:{
            s:"Small",
            m:"Medium",
            l:"Large",
            xl:"Extra Large",
            xxl:"XXL",
            xxxl:"XXXL"
        }
    };
    
    const deepseaHTML=imagemain_product.map(imageMP=>imageMP.getImageMainProduct()).join('');
    
    const productinfoHTML=`
        <h1>${productinfo.name}</h1>
        <p>Created by : ${productinfo.creator}</p>
        <strong>$ ${productinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${productinfo.details}</p>
        <h4>Type:</h4>
        <p>${productinfo.type} are ${productinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${productinfo.size.s}, ${productinfo.size.m}, ${productinfo.size.l}, ${productinfo.size.xl}, ${productinfo.size.xxl}, ${productinfo.size.xxxl}</p>
        `;

    return `
            <main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${deepseaHTML}
                    </div>
                    <div>
                         ${productinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function deepsea_gallery(){

    const deepseagallery={
        img: "/img/gallery1.webp",
        alt:"i dont fish for food i fish for vibes"
    }
    return `
          <div id="deepseagallery">
              <h1>Image Product</h1>
              <div class="deepsea_gallery_flex">
                 <img src="${deepseagallery.img}" alt="${deepseagallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseagallery.img}" alt="${deepseagallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseagallery.img}" alt="${deepseagallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseagallery.img}" alt="${deepseagallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}