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

class CelestialHareChaosPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialHareChaosPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CelestialHareChaosOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialHareChaosOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CelestialHareChaosSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialHareChaosSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CelestialHareChaosPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialHareChaosPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CelestialHareChaosLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialHareChaosLightweightHoodieMainProduct(){
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

export function celestialharechaospremium_main(){
   
    const celestialharechaospremium_mainproduct=[
        new CelestialHareChaosPremiumMainProduct(
            "/img/idontfish.webp",
            "Celestial Hare Chaos - Premium shirt",
            0,
            0
        )
    ];

    const celestialharechaospremiuminfo={
        name:"Celestial Hare Chaos </br> (Premium Shirt)",
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

    const celestialharechaospremium_mainHTML=celestialharechaospremium_mainproduct.map(celestialharechaospremium_MainProducts=>celestialharechaospremium_MainProducts.getCelestialHareChaosPremiumMainProduct()).join('')
    
    const celestialharechaospremiuminfoHTML=`
        <h1>${celestialharechaospremiuminfo.name}</h1>
        <p>Created by : ${celestialharechaospremiuminfo.creator}</p>
        <strong>$ ${celestialharechaospremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaospremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaospremiuminfo.type} are ${celestialharechaospremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaospremiuminfo.size.s}, ${celestialharechaospremiuminfo.size.m}, ${celestialharechaospremiuminfo.size.l}, ${celestialharechaospremiuminfo.size.xl}, ${celestialharechaospremiuminfo.size.xxl}, ${celestialharechaospremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaospremium_mainHTML}
                    </div>
                    <div>
                         ${celestialharechaospremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaospremium_gallery(){

    const celestialharechaospremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Hare Chaos"
    }
    return `
          <div id="celestialharechaospremiumgallery">
              <h1>Image Product</h1>
              <div class="celestialharechaospremium_gallery_flex">
                 <img src="${celestialharechaospremiumgallery.img}" alt="${celestialharechaospremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumgallery.img}" alt="${celestialharechaospremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumgallery.img}" alt="${celestialharechaospremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumgallery.img}" alt="${celestialharechaospremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;

}

export function celestialharechaosoversized_main(){

    const celestialharechaosoversizedmain_product=[
        new CelestialHareChaosOversizedMainProduct(
            "/img/idontfish.webp",
            "Celestial Hare Chaos",
            0,
            0
        )
    ];

    const celestialharechaosoversizedinfo={
        name:"Celestial Hare Chaos </br> (Oversized Shirt)",
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

    const celestialharechaosoversizedHTML=celestialharechaosoversizedmain_product.map(celestialharechaosoversizedMP=>celestialharechaosoversizedMP.getCelestialHareChaosOversizedMainProduct()).join('');

    const celestialharechaosoversizedinfoHTML=`
        <h1>${celestialharechaosoversizedinfo.name}</h1>
        <p>Created by : ${celestialharechaosoversizedinfo.creator}</p>
        <strong>$ ${celestialharechaosoversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaosoversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaosoversizedinfo.type} are ${celestialharechaosoversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaosoversizedinfo.size.s}, ${celestialharechaosoversizedinfo.size.m}, ${celestialharechaosoversizedinfo.size.l}, ${celestialharechaosoversizedinfo.size.xl}, ${celestialharechaosoversizedinfo.size.xxl}, ${celestialharechaosoversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaosoversizedHTML}
                    </div>
                    <div>
                         ${celestialharechaosoversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaosoversized_gallery(){

    const celestialharechaosoversizedgallery={
        img: "/img/gallery1.webp",
        alt:"celestial hare chaos"
    }
    return `
          <div id="celestialharechaosoversizedgallery">
              <h1>Image Product</h1>
              <div class="celestialharechaosoversized_gallery_flex">
                 <img src="${celestialharechaosoversizedgallery.img}" alt="${celestialharechaosoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosoversizedgallery.img}" alt="${celestialharechaosoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosoversizedgallery.img}" alt="${celestialharechaosoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaosoversizedgallery.img}" alt="${celestialharechaosoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
              </div>
          </div>
    `;
}

export function celestialharechaossweatshirt_main(){

    const celestialharechaossweatshirtmain_product=[
        new CelestialHareChaosSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Celestial Hare Chaos",
            0,
            0
        )
    ];

    const celestialharechaossweatshirtinfo={
        name:"Celestial Hare Chaos </br> (Sweat Shirt)",
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

    const celestialharechaossweatshirtHTML=celestialharechaossweatshirtmain_product.map(celestialharechaossweatshirtMP=>celestialharechaossweatshirtMP.getCelestialHareChaosSweatMainProduct()).join('');

    const celestialharechaossweatshirtinfoHTML=`
        <h1>${celestialharechaossweatshirtinfo.name}</h1>
        <p>Created by : ${celestialharechaossweatshirtinfo.creator}</p>
        <strong>$ ${celestialharechaossweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaossweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaossweatshirtinfo.type} are ${celestialharechaossweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaossweatshirtinfo.size.s}, ${celestialharechaossweatshirtinfo.size.m}, ${celestialharechaossweatshirtinfo.size.l}, ${celestialharechaossweatshirtinfo.size.xl}, ${celestialharechaossweatshirtinfo.size.xxl}, ${celestialharechaossweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaossweatshirtHTML}
                    </div>
                    <div>
                         ${celestialharechaossweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaossweatshirt_gallery(){

    const celestialharechaossweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"celestial hare chaos"
    }
    return `
          <div id="celestialharechaossweatshirtgallery">
              <h1>Image Product</h1>
              <div class="celestialharechaossweatshirt_gallery_flex">
                 <img src="${celestialharechaossweatshirtgallery.img}" alt="${celestialharechaossweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaossweatshirtgallery.img}" alt="${celestialharechaossweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaossweatshirtgallery.img}" alt="${celestialharechaossweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaossweatshirtgallery.img}" alt="${celestialharechaossweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function celestialharechaospremiumoversizedhoodie_main(){

    const celestialharechaospremiumoversizedhoodiemain_product=[
        new CelestialHareChaosPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Celestial Hare Chaos",
            0,
            0
        )
    ];

    const celestialharechaospremiumoversizedhoodieinfo={
        name:"Celestial Hare Chaos </br> ( Premium Oversized Hoodie )",
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

    const celestialharechaospremiumoversizedhoodieHTML=celestialharechaospremiumoversizedhoodiemain_product.map(celestialharechaospremiumoversizedhoodieMP=>celestialharechaospremiumoversizedhoodieMP.getCelestialHareChaosPremiumOversizedHoodieMainProduct()).join('');

    const celestialharechaospremiumoversizedhoodieinfoHTML=`
        <h1>${celestialharechaospremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${celestialharechaospremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${celestialharechaospremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaospremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaospremiumoversizedhoodieinfo.type} are ${celestialharechaospremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaospremiumoversizedhoodieinfo.size.s}, ${celestialharechaospremiumoversizedhoodieinfo.size.m}, ${celestialharechaospremiumoversizedhoodieinfo.size.l}, ${celestialharechaospremiumoversizedhoodieinfo.size.xl}, ${celestialharechaospremiumoversizedhoodieinfo.size.xxl}, ${celestialharechaospremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaospremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${celestialharechaospremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaospremiumoversizedhoodie_gallery(){

    const celestialharechaospremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"celestial hare chaos"
    }
    return `
          <div id="celestialharechaospremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="celestialharepremiumoversizedhoodie_gallery_flex">
                 <img src="${celestialharechaospremiumoversizedhoodiegallery.img}" alt="${celestialharechaospremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumoversizedhoodiegallery.img}" alt="${celestialharechaospremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumoversizedhoodiegallery.img}" alt="${celestialharechaospremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumoversizedhoodiegallery.img}" alt="${celestialharechaospremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function celestialharechaoslightweighthoodie_main(){

    const celestialharechaoslightweighthoodiemain_product=[
        new CelestialHareChaosLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Celestial Hare Chaos",
            0,
            0
        )
    ];

    const celestialharechaoslightweighthoodieinfo={
        name:"Celestial Hare Chaos </br> (Lightweight Hoodie)",
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

    const celestialharechaoslightweighthoodieHTML=celestialharechaoslightweighthoodiemain_product.map(celestialharechaoslightweighthoodieMP=>celestialharechaoslightweighthoodieMP.getCelestialHareChaosLightweightHoodieMainProduct()).join('');

    const celestialharechaoslightweighthoodieinfoHTML=`
        <h1>${celestialharechaoslightweighthoodieinfo.name}</h1>
        <p>Created by : ${celestialharechaoslightweighthoodieinfo.creator}</p>
        <strong>$ ${celestialharechaoslightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaoslightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaoslightweighthoodieinfo.type} are ${celestialharechaoslightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaoslightweighthoodieinfo.size.s}, ${celestialharechaoslightweighthoodieinfo.size.m}, ${celestialharechaoslightweighthoodieinfo.size.l}, ${celestialharechaoslightweighthoodieinfo.size.xl}, ${celestialharechaoslightweighthoodieinfo.size.xxl}, ${celestialharechaoslightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaoslightweighthoodieHTML}
                    </div>
                    <div>
                         ${celestialharechaoslightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaoslightweighthoodie_gallery(){

    const celestialharechaoslightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"celestial hare chaos"
    }
    return `
          <div id="celestialharechaoslightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="celestialharechaoslightweighthoodie_gallery_flex">
                 <img src="${celestialharechaoslightweighthoodiegallery.img}" alt="${celestialharechaoslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaoslightweighthoodiegallery.img}" alt="${celestialharechaoslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaoslightweighthoodiegallery.img}" alt="${celestialharechaoslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaoslightweighthoodiegallery.img}" alt="${celestialharechaoslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
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