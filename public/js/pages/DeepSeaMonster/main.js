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

class DeepSeaMonsterClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getDeepSeaMonsterClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class DeepSeaMonsterPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getDeepSeaMonsterPremiumMainProduct(){
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
        alt:"Deep Sea Monster"
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

export function deepseamonsterclassic_main(){
    
    const deppseamonsterclassicmain_product=[
        new DeepSeaMonsterClassicMainProduct(
            "/img/idontfish.webp",
            "Deep Sea Monster ",
            0,
            0
        )
    ];

    const deepseamonsterclassicinfo={
        name:"Deep Sea Monster </br>(Classic Shirt)",
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
    
    const deepseamonsterclassicHTML=deppseamonsterclassicmain_product.map(deepseamonsterclassicMP=>deepseamonsterclassicMP.getDeepSeaMonsterClassicMainProduct()).join('');
    
    const deepseamonsterclassicinfoHTML=`
        <h1>${deepseamonsterclassicinfo.name}</h1>
        <p>Created by : ${deepseamonsterclassicinfo.creator}</p>
        <strong>$ ${deepseamonsterclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${deepseamonsterclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${deepseamonsterclassicinfo.type} are ${deepseamonsterclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${deepseamonsterclassicinfo.size.s}, ${deepseamonsterclassicinfo.size.m}, ${deepseamonsterclassicinfo.size.l}, ${deepseamonsterclassicinfo.size.xl}, ${deepseamonsterclassicinfo.size.xxl}, ${deepseamonsterclassicinfo.size.xxxl}</p>
        `;

    return `
            <main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${deepseamonsterclassicHTML}
                    </div>
                    <div>
                         ${deepseamonsterclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function deepseamonsterclassic_gallery(){

    const deepseamonsterclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Deep Sea Monster"
    }
    return `
          <div id="deepseamonsterclassicgallery">
              <h1>Image Product</h1>
              <div class="deepseamonsterclassic_gallery_flex">
                 <img src="${deepseamonsterclassicgallery.img}" alt="${deepseamonsterclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseamonsterclassicgallery.img}" alt="${deepseamonsterclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseamonsterclassicgallery.img}" alt="${deepseamonsterclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseamonsterclassicgallery.img}" alt="${deepseamonsterclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function deepseamonsterpremium_main(){
    
    const deppseamonsterpremiummain_product=[
        new DeepSeaMonsterPremiumMainProduct(
            "/img/idontfish.webp",
            "Deep Sea Monster ",
            0,
            0
        )
    ];

    const deepseamonsterpremiuminfo={
        name:"Deep Sea Monster </br>(Premium Shirt)",
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
    
    const deepseamonsterpremiumHTML=deppseamonsterpremiummain_product.map(deepseamonsterpremiumMP=>deepseamonsterpremiumMP.getDeepSeaMonsterPremiumMainProduct()).join('');
    
    const deepseamonsterpremiuminfoHTML=`
        <h1>${deepseamonsterpremiuminfo.name}</h1>
        <p>Created by : ${deepseamonsterpremiuminfo.creator}</p>
        <strong>$ ${deepseamonsterpremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${deepseamonsterpremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${deepseamonsterpremiuminfo.type} are ${deepseamonsterpremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${deepseamonsterpremiuminfo.size.s}, ${deepseamonsterpremiuminfo.size.m}, ${deepseamonsterpremiuminfo.size.l}, ${deepseamonsterpremiuminfo.size.xl}, ${deepseamonsterpremiuminfo.size.xxl}, ${deepseamonsterpremiuminfo.size.xxxl}</p>
        `;

    return `
            <main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${deepseamonsterpremiumHTML}
                    </div>
                    <div>
                         ${deepseamonsterpremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function deepseamonsterpremium_gallery(){

    const deepseamonsterpremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Deep Sea Monster"
    }
    return `
          <div id="deepseamonsterpremiumgallery">
              <h1>Image Product</h1>
              <div class="deepseamonsterclassic_gallery_flex">
                 <img src="${deepseamonsterpremiumgallery.img}" alt="${deepseamonsterpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseamonsterpremiumgallery.img}" alt="${deepseamonsterpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseamonsterpremiumgallery.img}" alt="${deepseamonsterpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${deepseamonsterpremiumgallery.img}" alt="${deepseamonsterpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}