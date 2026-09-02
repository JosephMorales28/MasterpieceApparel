class CelestialHareChaosMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialHareChaosMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CelestialHareChaosClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialHareChaosClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class PremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class OversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class SweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class PremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class LightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class PremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function celestialharechaos_main(){
    
    const celestialharechaosmain_product=[
        new CelestialHareChaosMainProduct(
            "/img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];

    const celestialharechaosinfo={
        name:"Celestial Hare Chaos  </br> (Essential Shirt)",
        creator:"Joseph Morales",
        Price: 30.69,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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
    
    const celestialharechaosHTML=celestialharechaosmain_product.map(celestialharechaosMP=>celestialharechaosMP.getCelestialHareChaosMainProduct()).join('');
    
    const celestialharechaosinfoHTML=`
        <h1>${celestialharechaosinfo.name}</h1>
        <p>Created by : ${celestialharechaosinfo.creator}</p>
        <strong>$ ${celestialharechaosinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaosinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaosinfo.type} are ${celestialharechaosinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaosinfo.size.s}, ${celestialharechaosinfo.size.m}, ${celestialharechaosinfo.size.l}, ${celestialharechaosinfo.size.xl}, ${celestialharechaosinfo.size.xxl}, ${celestialharechaosinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaosHTML}
                    </div>
                    <div>
                         ${celestialharechaosinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaosmain_gallery(){

    const celestialharechaosgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Hare Chaos"
    }
    return `
          <div id="celestialharechaosgallery">
              <h1>Image Product</h1>
              <div class="celestialharechaos_gallery_flex">
                 <img src="${celestialharechaosgallery.img}" alt="${celestialharechaosgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosgallery.img}" alt="${celestialharechaosgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosgallery.img}" alt="${celestialharechaosgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosgallery.img}" alt="${celestialharechaosgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;

}

export function celestialharechaosclassic_main(){
   
    const celestialharechaosclassic_mainproduct=[
        new CelestialHareChaosClassicMainProduct(
            "/img/idontfish.webp",
            "Celestial Hare Chaos -classic shirt",
            0,
            0
        )
    ];

    const celestialharechaosclassicinfo={
        name:"Celestial Hare Chaos </br> (Classic Shirt)",
        creator:"Joseph Morales",
        Price: 32.00,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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

    const celestialharechaosclassic_mainHTML=celestialharechaosclassic_mainproduct.map(celestialharechaosclassic_MainProducts=>celestialharechaosclassic_MainProducts.getCelestialHareChaosClassicMainProduct()).join('')
    
    const celestialharechaosclassicinfoHTML=`
        <h1>${celestialharechaosclassicinfo.name}</h1>
        <p>Created by : ${celestialharechaosclassicinfo.creator}</p>
        <strong>$ ${celestialharechaosclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaosclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaosclassicinfo.type} are ${celestialharechaosclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaosclassicinfo.size.s}, ${celestialharechaosclassicinfo.size.m}, ${celestialharechaosclassicinfo.size.l}, ${celestialharechaosclassicinfo.size.xl}, ${celestialharechaosclassicinfo.size.xxl}, ${celestialharechaosclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaosclassic_mainHTML}
                    </div>
                    <div>
                         ${celestialharechaosclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaosclassic_gallery(){

    const celestialharechaosclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Hare Chaos"
    }
    return `
          <div id="celestialharechaosclassicgallery">
              <h1>Image Product</h1>
              <div class="celestialharechaosclassic_gallery_flex">
                 <img src="${celestialharechaosclassicgallery.img}" alt="${celestialharechaosclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosclassicgallery.img}" alt="${celestialharechaosclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosclassicgallery.img}" alt="${celestialharechaosclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosclassicgallery.img}" alt="${celestialharechaosclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;

}

export function premium_main(){
   
    const premium_mainproduct=[
        new PremiumMainProduct(
            "/img/idontfish.webp",
            "i don't fish for food i fish for vibes - Premium shirt",
            0,
            0
        )
    ];

    const premiuminfo={
        name:"I Don't Fish for food I fish for vibes </br> (Premium Shirt)",
        creator:"Joseph Morales",
        Price: 46.35,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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

    const premium_mainHTML=premium_mainproduct.map(premium_MainProducts=>premium_MainProducts.getPremiumMainProduct()).join('')
    
    const premiuminfoHTML=`
        <h1>${premiuminfo.name}</h1>
        <p>Created by : ${premiuminfo.creator}</p>
        <strong>$ ${premiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${premiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${premiuminfo.type} are ${premiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${premiuminfo.size.s}, ${premiuminfo.size.m}, ${premiuminfo.size.l}, ${premiuminfo.size.xl}, ${premiuminfo.size.xxl}, ${premiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${premium_mainHTML}
                    </div>
                    <div>
                         ${premiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function premium_gallery(){

    const premiumgallery={
        img: "/img/gallery1.webp",
        alt:"i dont fish for food i fish for vibes"
    }
    return `
          <div id="premiumgallery">
              <h1>Image Product</h1>
              <div class="premium_gallery_flex">
                 <img src="${premiumgallery.img}" alt="${premiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumgallery.img}" alt="${premiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumgallery.img}" alt="${premiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumgallery.img}" alt="${premiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;

}

export function oversized_main(){

    const oversizedmain_product=[
        new OversizedMainProduct(
            "/img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];

    const oversizedinfo={
        name:"I Don't Fish for food I fish for vibes </br> (Oversized Shirt)",
        creator:"Joseph Morales",
        Price: 37.00,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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

    const oversizedHTML=oversizedmain_product.map(oversizedMP=>oversizedMP.getOversizedMainProduct()).join('');

    const oversizedinfoHTML=`
        <h1>${oversizedinfo.name}</h1>
        <p>Created by : ${oversizedinfo.creator}</p>
        <strong>$ ${oversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${oversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${oversizedinfo.type} are ${oversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${oversizedinfo.size.s}, ${oversizedinfo.size.m}, ${oversizedinfo.size.l}, ${oversizedinfo.size.xl}, ${oversizedinfo.size.xxl}, ${oversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${oversizedHTML}
                    </div>
                    <div>
                         ${oversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function oversized_gallery(){

    const oversizedgallery={
        img: "/img/gallery1.webp",
        alt:"i dont fish for food i fish for vibes"
    }
    return `
          <div id="oversizedgallery">
              <h1>Image Product</h1>
              <div class="oversized_gallery_flex">
                 <img src="${oversizedgallery.img}" alt="${oversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${oversizedgallery.img}" alt="${oversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${oversizedgallery.img}" alt="${oversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${oversizedgallery.img}" alt="${oversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;
}

export function sweatshirt_main(){

    const sweatshirtmain_product=[
        new SweatshirtMainProduct(
            "/img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];

    const sweatshirtinfo={
        name:"I Don't Fish for food I fish for vibes </br> (Sweat Shirt)",
        creator:"Joseph Morales",
        Price: 48.00,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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

    const sweatshirtHTML=sweatshirtmain_product.map(sweatshirtMP=>sweatshirtMP.getSweatMainProduct()).join('');

    const sweatshirtinfoHTML=`
        <h1>${sweatshirtinfo.name}</h1>
        <p>Created by : ${sweatshirtinfo.creator}</p>
        <strong>$ ${sweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${sweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${sweatshirtinfo.type} are ${sweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${sweatshirtinfo.size.s}, ${sweatshirtinfo.size.m}, ${sweatshirtinfo.size.l}, ${sweatshirtinfo.size.xl}, ${sweatshirtinfo.size.xxl}, ${sweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${sweatshirtHTML}
                    </div>
                    <div>
                         ${sweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function sweatshirt_gallery(){

    const sweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"i dont fish for food i fish for vibes"
    }
    return `
          <div id="sweatshirtgallery">
              <h1>Image Product</h1>
              <div class="sweatshirt_gallery_flex">
                 <img src="${sweatshirtgallery.img}" alt="${sweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${sweatshirtgallery.img}" alt="${sweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${sweatshirtgallery.img}" alt="${sweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${sweatshirtgallery.img}" alt="${sweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function premiumoversizedhoodie_main(){

    const premiumoversizedhoodiemain_product=[
        new PremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];

    const premiumoversizedhoodieinfo={
        name:"I Don't Fish for food I fish for vibes </br> ( Premium Oversized Hoodie )",
        creator:"Joseph Morales",
        Price: 68.00,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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

    const premiumoversizedhoodieHTML=premiumoversizedhoodiemain_product.map(premiumoversizedhoodieMP=>premiumoversizedhoodieMP.getPremiumOversizedHoodieMainProduct()).join('');

    const premiumoversizedhoodieinfoHTML=`
        <h1>${premiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${premiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${premiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${premiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${premiumoversizedhoodieinfo.type} are ${premiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${premiumoversizedhoodieinfo.size.s}, ${premiumoversizedhoodieinfo.size.m}, ${premiumoversizedhoodieinfo.size.l}, ${premiumoversizedhoodieinfo.size.xl}, ${premiumoversizedhoodieinfo.size.xxl}, ${premiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${premiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${premiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function premiumoversizedhoodie_gallery(){

    const premiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"i dont fish for food i fish for vibes"
    }
    return `
          <div id="premiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="premiumoversizedhoodie_gallery_flex">
                 <img src="${premiumoversizedhoodiegallery.img}" alt="${premiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumoversizedhoodiegallery.img}" alt="${premiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumoversizedhoodiegallery.img}" alt="${premiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumoversizedhoodiegallery.img}" alt="${premiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;
}

export function lightweighthoodie_main(){

    const lightweighthoodiemain_product=[
        new LightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];

    const lightweighthoodieinfo={
        name:"I Don't Fish for food I fish for vibes </br> (Lightweight Hoodie)",
        creator:"Joseph Morales",
        Price: 62.21,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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

    const lightweighthoodieHTML=lightweighthoodiemain_product.map(lightweighthoodieMP=>lightweighthoodieMP.getLightweightHoodieMainProduct()).join('');

    const lightweighthoodieinfoHTML=`
        <h1>${lightweighthoodieinfo.name}</h1>
        <p>Created by : ${lightweighthoodieinfo.creator}</p>
        <strong>$ ${lightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${lightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${lightweighthoodieinfo.type} are ${lightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${lightweighthoodieinfo.size.s}, ${lightweighthoodieinfo.size.m}, ${lightweighthoodieinfo.size.l}, ${lightweighthoodieinfo.size.xl}, ${lightweighthoodieinfo.size.xxl}, ${lightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${lightweighthoodieHTML}
                    </div>
                    <div>
                         ${lightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function lightweighthoodie_gallery(){

    const lightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"i dont fish for food i fish for vibes"
    }
    return `
          <div id="lightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="lightweighthoodie_gallery_flex">
                 <img src="${lightweighthoodiegallery.img}" alt="${lightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightweighthoodiegallery.img}" alt="${lightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightweighthoodiegallery.img}" alt="${lightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${lightweighthoodiegallery.img}" alt="${lightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;
}

export function premiumoversizedsweatshirt_main(){

    const premiumoversizedsweatshirtmain_product=[
        new PremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];

    const premiumoversizedsweatshirtinfo={
        name:"I Don't Fish for food I fish for vibes </br> (Premium Oversized Sweatshirt)",
        creator:"Joseph Morales",
        Price: 62.00,
        details:"Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.",
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

    const premiumoversizedsweatshirtHTML=premiumoversizedsweatshirtmain_product.map(premiumoversizedsweatshirtMP=>premiumoversizedsweatshirtMP.getPremiumOversizedSweatshirtMainProduct()).join('');

    const premiumoversizedsweatshirtinfoHTML=`
        <h1>${premiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${premiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${premiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${premiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${premiumoversizedsweatshirtinfo.type} are ${premiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${premiumoversizedsweatshirtinfo.size.s}, ${premiumoversizedsweatshirtinfo.size.m}, ${premiumoversizedsweatshirtinfo.size.l}, ${premiumoversizedsweatshirtinfo.size.xl}, ${premiumoversizedsweatshirtinfo.size.xxl}, ${premiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${premiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${premiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function premiumoversizedsweatshirt_gallery(){

    const premiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"i dont fish for food i fish for vibes"
    }
    return `
          <div id="premiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="premiumoversizedsweatshirt_gallery_flex">
                 <img src="${premiumoversizedsweatshirtgallery.img}" alt="${premiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumoversizedsweatshirtgallery.img}" alt="${premiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumoversizedsweatshirtgallery.img}" alt="${premiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${premiumoversizedsweatshirtgallery.img}" alt="${premiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}