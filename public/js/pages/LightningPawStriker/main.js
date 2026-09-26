class LightningPawStrikerMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class LightningPawStrikerClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class LightningPawStrikerPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class LightningPawStrikerOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class LightningPawStrikerSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class LightningPawStrikerPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class LightningPawStrikerLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class LightningPawStrikerPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightningPawStrikerPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function lightningpawstriker_main(){
    
    const lightningpawstrikermain_product=[
        new LightningPawStrikerMainProduct(
            "/img/idontfish.webp",
            "lightning Paw Striker",
            0,
            0
        )
    ];

    const lightningpawstrikerinfo={
        name:"Lightning Paw Striker</br>(Essential Shirt)",
        creator:"Joseph Morales",
        Price: 30.69,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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
    
    const lightningpawstrikerHTML=lightningpawstrikermain_product.map(lightningpawstrikerMP=>lightningpawstrikerMP.getLightningPawStrikerMainProduct()).join('');
    
    const lightningpawstrikerinfoHTML=`
        <h1>${lightningpawstrikerinfo.name}</h1>
        <p>Created by : ${lightningpawstrikerinfo.creator}</p>
        <strong>$ ${lightningpawstrikerinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikerinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikerinfo.type} are ${lightningpawstrikerinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikerinfo.size.s}, ${lightningpawstrikerinfo.size.m}, ${lightningpawstrikerinfo.size.l}, ${lightningpawstrikerinfo.size.xl}, ${lightningpawstrikerinfo.size.xxl}, ${lightningpawstrikerinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikerHTML}
                    </div>
                    <div>
                         ${lightningpawstrikerinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikermain_gallery(){

    const lightningpawstrikergallery={
        img: "/img/gallery1.webp",
        alt:"Lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikergallery">
              <h1>Image Product</h1>
              <div class="lightningpawstriker_gallery_flex">
                 <img src="${lightningpawstrikergallery.img}" alt="${lightningpawstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikergallery.img}" alt="${lightningpawstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikergallery.img}" alt="${lightningpawstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikergallery.img}" alt="${lightningpawstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function lightningpawstrikerclassic_main(){
   
    const lightningpawstrikerclassic_mainproduct=[
        new LightningPawStrikerClassicMainProduct(
            "/img/idontfish.webp",
            "Lightning Paw Striker",
            0,
            0
        )
    ];

    const lightningpawstrikerclassicinfo={
        name:"Lightning Paw Striker</br>(Classic Shirt)",
        creator:"Joseph Morales",
        Price: 32.00,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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

    const lightningpawstrikerclassic_mainHTML=lightningpawstrikerclassic_mainproduct.map(lightningpawstrikerclassic_MainProducts=>lightningpawstrikerclassic_MainProducts.getLightningPawStrikerClassicMainProduct()).join('')
    
    const lightningpawstrikerclassicinfoHTML=`
        <h1>${lightningpawstrikerclassicinfo.name}</h1>
        <p>Created by : ${lightningpawstrikerclassicinfo.creator}</p>
        <strong>$ ${lightningpawstrikerclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikerclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikerclassicinfo.type} are ${lightningpawstrikerclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikerclassicinfo.size.s}, ${lightningpawstrikerclassicinfo.size.m}, ${lightningpawstrikerclassicinfo.size.l}, ${lightningpawstrikerclassicinfo.size.xl}, ${lightningpawstrikerclassicinfo.size.xxl}, ${lightningpawstrikerclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikerclassic_mainHTML}
                    </div>
                    <div>
                         ${lightningpawstrikerclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikerclassic_gallery(){

    const lightningpawstrikerclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikerclassicgallery">
              <h1>Image Product</h1>
              <div class="lightningpawstrikerclassic_gallery_flex">
                 <img src="${lightningpawstrikerclassicgallery.img}" alt="${lightningpawstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerclassicgallery.img}" alt="${lightningpawstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerclassicgallery.img}" alt="${lightningpawstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerclassicgallery.img}" alt="${lightningpawstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function lightningpawstrikerpremium_main(){
   
    const lightningpawstrikerpremium_mainproduct=[
        new LightningPawStrikerPremiumMainProduct(
            "/img/idontfish.webp",
            "lightning Paw Striker - Premium shirt",
            0,
            0
        )
    ];

    const lightningpawstrikerpremiuminfo={
        name:"Lightning Paw Striker</br>(Premium Shirt)",
        creator:"Joseph Morales",
        Price: 46.35,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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

    const lightningpawstrikerpremium_mainHTML=lightningpawstrikerpremium_mainproduct.map(lightningpawstrikerpremium_MainProducts=>lightningpawstrikerpremium_MainProducts.getLightningPawStrikerPremiumMainProduct()).join('')
    
    const lightningpawstrikerpremiuminfoHTML=`
        <h1>${lightningpawstrikerpremiuminfo.name}</h1>
        <p>Created by : ${lightningpawstrikerpremiuminfo.creator}</p>
        <strong>$ ${lightningpawstrikerpremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikerpremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikerpremiuminfo.type} are ${lightningpawstrikerpremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikerpremiuminfo.size.s}, ${lightningpawstrikerpremiuminfo.size.m}, ${lightningpawstrikerpremiuminfo.size.l}, ${lightningpawstrikerpremiuminfo.size.xl}, ${lightningpawstrikerpremiuminfo.size.xxl}, ${lightningpawstrikerpremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikerpremium_mainHTML}
                    </div>
                    <div>
                         ${lightningpawstrikerpremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikerpremium_gallery(){

    const lightningpawstrikerpremiumgallery={
        img: "/img/gallery1.webp",
        alt:"lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikerpremiumgallery">
              <h1>Image Product</h1>
              <div class="lightningpawstrikerpremium_gallery_flex">
                 <img src="${lightningpawstrikerpremiumgallery.img}" alt="${lightningpawstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumgallery.img}" alt="${lightningpawstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumgallery.img}" alt="${lightningpawstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumgallery.img}" alt="${lightningpawstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function lightningpawstrikeroversized_main(){

    const lightningpawstrikeroversizedmain_product=[
        new LightningPawStrikerOversizedMainProduct(
            "/img/idontfish.webp",
            "Lightning Paw Striker",
            0,
            0
        )
    ];

    const lightningpawstrikeroversizedinfo={
        name:"Lightning Paw Striker</br>(Oversized Shirt)",
        creator:"Joseph Morales",
        Price: 37.00,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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

    const lightningpawstrikeroversizedHTML=lightningpawstrikeroversizedmain_product.map(lightningpawstrikeroversizedMP=>lightningpawstrikeroversizedMP.getLightningPawStrikerOversizedMainProduct()).join('');

    const lightningpawstrikeroversizedinfoHTML=`
        <h1>${lightningpawstrikeroversizedinfo.name}</h1>
        <p>Created by : ${lightningpawstrikeroversizedinfo.creator}</p>
        <strong>$ ${lightningpawstrikeroversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikeroversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikeroversizedinfo.type} are ${lightningpawstrikeroversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikeroversizedinfo.size.s}, ${lightningpawstrikeroversizedinfo.size.m}, ${lightningpawstrikeroversizedinfo.size.l}, ${lightningpawstrikeroversizedinfo.size.xl}, ${lightningpawstrikeroversizedinfo.size.xxl}, ${lightningpawstrikeroversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikeroversizedHTML}
                    </div>
                    <div>
                         ${lightningpawstrikeroversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikeroversized_gallery(){

    const lightningpawstrikeroversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikeroversizedgallery">
              <h1>Image Product</h1>
              <div class="lightningpawstrikeroversized_gallery_flex">
                 <img src="${lightningpawstrikeroversizedgallery.img}" alt="${lightningpawstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikeroversizedgallery.img}" alt="${lightningpawstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikeroversizedgallery.img}" alt="${lightningpawstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikeroversizedgallery.img}" alt="${lightningpawstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function lightningpawstrikersweatshirt_main(){

    const lightningpawstrikersweatshirtmain_product=[
        new LightningPawStrikerSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Lightning Paw Striker",
            0,
            0
        )
    ];

    const lightningpawstrikersweatshirtinfo={
        name:"Lightning Paw Striker</br>(Sweat Shirt)",
        creator:"Joseph Morales",
        Price: 48.00,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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

    const lightningpawstrikersweatshirtHTML=lightningpawstrikersweatshirtmain_product.map(lightningpawstrikersweatshirtMP=>lightningpawstrikersweatshirtMP.getLightningPawStrikerSweatMainProduct()).join('');

    const lightningpawstrikersweatshirtinfoHTML=`
        <h1>${lightningpawstrikersweatshirtinfo.name}</h1>
        <p>Created by : ${lightningpawstrikersweatshirtinfo.creator}</p>
        <strong>$ ${lightningpawstrikersweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikersweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikersweatshirtinfo.type} are ${lightningpawstrikersweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikersweatshirtinfo.size.s}, ${lightningpawstrikersweatshirtinfo.size.m}, ${lightningpawstrikersweatshirtinfo.size.l}, ${lightningpawstrikersweatshirtinfo.size.xl}, ${lightningpawstrikersweatshirtinfo.size.xxl}, ${lightningpawstrikersweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikersweatshirtHTML}
                    </div>
                    <div>
                         ${lightningpawstrikersweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikersweatshirt_gallery(){

    const lightningpawstrikersweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikersweatshirtgallery">
              <h1>Image Product</h1>
              <div class="lightningpawstrikersweatshirt_gallery_flex">
                 <img src="${lightningpawstrikersweatshirtgallery.img}" alt="${lightningpawstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikersweatshirtgallery.img}" alt="${lightningpawstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikersweatshirtgallery.img}" alt="${lightningpawstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikersweatshirtgallery.img}" alt="${lightningpawstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function lightningpawstrikerpremiumoversizedhoodie_main(){

    const lightningpawstrikerpremiumoversizedhoodiemain_product=[
        new LightningPawStrikerPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Lightning Paw Striker",
            0,
            0
        )
    ];

    const lightningpawstrikerpremiumoversizedhoodieinfo={
        name:"Lightning Paw Striker</br>( Premium Oversized Hoodie )",
        creator:"Joseph Morales",
        Price: 68.00,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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

    const lightningpawstrikerpremiumoversizedhoodieHTML=lightningpawstrikerpremiumoversizedhoodiemain_product.map(lightningpawstrikerpremiumoversizedhoodieMP=>lightningpawstrikerpremiumoversizedhoodieMP.getLightningPawStrikerPremiumOversizedHoodieMainProduct()).join('');

    const lightningpawstrikerpremiumoversizedhoodieinfoHTML=`
        <h1>${lightningpawstrikerpremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${lightningpawstrikerpremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${lightningpawstrikerpremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikerpremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikerpremiumoversizedhoodieinfo.type} are ${lightningpawstrikerpremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikerpremiumoversizedhoodieinfo.size.s}, ${lightningpawstrikerpremiumoversizedhoodieinfo.size.m}, ${lightningpawstrikerpremiumoversizedhoodieinfo.size.l}, ${lightningpawstrikerpremiumoversizedhoodieinfo.size.xl}, ${lightningpawstrikerpremiumoversizedhoodieinfo.size.xxl}, ${lightningpawstrikerpremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikerpremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${lightningpawstrikerpremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikerpremiumoversizedhoodie_gallery(){

    const lightningpawstrikerpremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikerpremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="lightningpawstrikerpremiumoversizedhoodie_gallery_flex">
                 <img src="${lightningpawstrikerpremiumoversizedhoodiegallery.img}" alt="${lightningpawstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumoversizedhoodiegallery.img}" alt="${lightningpawstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumoversizedhoodiegallery.img}" alt="${lightningpawstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumoversizedhoodiegallery.img}" alt="${lightningpawstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function lightningpawstrikerlightweighthoodie_main(){

    const lightningpawstrikerlightweighthoodiemain_product=[
        new LightningPawStrikerLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Lightning Paw Striker",
            0,
            0
        )
    ];

    const lightningpawstrikerlightweighthoodieinfo={
        name:"Lightning Paw Striker</br>(Lightweight Hoodie)",
        creator:"Joseph Morales",
        Price: 62.21,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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

    const lightningpawstrikerlightweighthoodieHTML=lightningpawstrikerlightweighthoodiemain_product.map(lightningpawstrikerlightweighthoodieMP=>lightningpawstrikerlightweighthoodieMP.getLightningPawStrikerLightweightHoodieMainProduct()).join('');

    const lightningpawstrikerlightweighthoodieinfoHTML=`
        <h1>${lightningpawstrikerlightweighthoodieinfo.name}</h1>
        <p>Created by : ${lightningpawstrikerlightweighthoodieinfo.creator}</p>
        <strong>$ ${lightningpawstrikerlightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikerlightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikerlightweighthoodieinfo.type} are ${lightningpawstrikerlightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikerlightweighthoodieinfo.size.s}, ${lightningpawstrikerlightweighthoodieinfo.size.m}, ${lightningpawstrikerlightweighthoodieinfo.size.l}, ${lightningpawstrikerlightweighthoodieinfo.size.xl}, ${lightningpawstrikerlightweighthoodieinfo.size.xxl}, ${lightningpawstrikerlightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikerlightweighthoodieHTML}
                    </div>
                    <div>
                         ${lightningpawstrikerlightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikerlightweighthoodie_gallery(){

    const lightningpawstrikerlightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikerlightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="lightningpawstrikerlightweighthoodie_gallery_flex">
                 <img src="${lightningpawstrikerlightweighthoodiegallery.img}" alt="${lightningpawstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerlightweighthoodiegallery.img}" alt="${lightningpawstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerlightweighthoodiegallery.img}" alt="${lightningpawstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerlightweighthoodiegallery.img}" alt="${lightningpawstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function lightningpawstrikerpremiumoversizedsweatshirt_main(){

    const lightningpawstrikerpremiumoversizedsweatshirtmain_product=[
        new LightningPawStrikerPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Lightning Paw Striker",
            0,
            0
        )
    ];

    const lightningpawstrikerpremiumoversizedsweatshirtinfo={
        name:"Lightning Paw Striker</br>(Premium Oversized Sweatshirt)",
        creator:"Joseph Morales",
        Price: 62.00,
        details:"Unleash the storm with Golden Blitz, a high‑energy digital artwork featuring a fearless Golden Retriever in full‑body action. Dressed in a navy‑blue and lime‑green drifit uniform patterned with blossom shapes, this electrified striker kicks the ball with lightning precision on an international soccer field. Painterly brush strokes capture every spark of motion — from the glowing eyes to the thunderous strike — making this piece perfect for athletes, dog lovers, and dreamers chasing their goals.",
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

    const lightningpawstrikerpremiumoversizedsweatshirtHTML=lightningpawstrikerpremiumoversizedsweatshirtmain_product.map(lightningpawstrikerpremiumoversizedsweatshirtMP=>lightningpawstrikerpremiumoversizedsweatshirtMP.getLightningPawStrikerPremiumOversizedSweatshirtMainProduct()).join('');

    const lightningpawstrikerpremiumoversizedsweatshirtinfoHTML=`
        <h1>${lightningpawstrikerpremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${lightningpawstrikerpremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${lightningpawstrikerpremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightningpawstrikerpremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightningpawstrikerpremiumoversizedsweatshirtinfo.type} are ${lightningpawstrikerpremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightningpawstrikerpremiumoversizedsweatshirtinfo.size.s}, ${lightningpawstrikerpremiumoversizedsweatshirtinfo.size.m}, ${lightningpawstrikerpremiumoversizedsweatshirtinfo.size.l}, ${lightningpawstrikerpremiumoversizedsweatshirtinfo.size.xl}, ${lightningpawstrikerpremiumoversizedsweatshirtinfo.size.xxl}, ${lightningpawstrikerpremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightningpawstrikerpremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${lightningpawstrikerpremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightningpawstrikerpremiumoversizedsweatshirt_gallery(){

    const lightningpawstrikerpremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Lightning Paw Striker"
    }
    return `
          <div id="lightningpawstrikerpremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="lightningpawstrikerpremiumoversizedsweatshirt_gallery_flex">
                 <img src="${lightningpawstrikerpremiumoversizedsweatshirtgallery.img}" alt="${lightningpawstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumoversizedsweatshirtgallery.img}" alt="${lightningpawstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumoversizedsweatshirtgallery.img}" alt="${lightningpawstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightningpawstrikerpremiumoversizedsweatshirtgallery.img}" alt="${lightningpawstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}