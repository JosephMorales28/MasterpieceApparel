class ShockwaveStrikerMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class ShockwaveStrikerClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class ShockwaveStrikerPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class ShockwaveStrikerOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class ShockwaveStrikerSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class ShockwaveStrikerPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class ShockwaveStrikerLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class ShockwaveStrikerPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getShockwaveStrikerPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function shockwavestriker_main(){
    
    const shockwavestrikermain_product=[
        new ShockwaveStrikerMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker",
            0,
            0
        )
    ];

    const shockwavestrikerinfo={
        name:"Shockwave Striker </br> (Essential Shirt)",
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
    
    const shockwavestrikerHTML=shockwavestrikermain_product.map(shockwavestrikerMP=>shockwavestrikerMP.getShockwaveStrikerMainProduct()).join('');
    
    const shockwavestrikerinfoHTML=`
        <h1>${shockwavestrikerinfo.name}</h1>
        <p>Created by : ${shockwavestrikerinfo.creator}</p>
        <strong>$ ${shockwavestrikerinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikerinfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikerinfo.type} are ${shockwavestrikerinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikerinfo.size.s}, ${shockwavestrikerinfo.size.m}, ${shockwavestrikerinfo.size.l}, ${shockwavestrikerinfo.size.xl}, ${shockwavestrikerinfo.size.xxl}, ${shockwavestrikerinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikerHTML}
                    </div>
                    <div>
                         ${shockwavestrikerinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikermain_gallery(){

    const shockwavestrikergallery={
        img: "/img/gallery1.webp",
        alt:"Shockwave Striker"
    }
    return `
          <div id="shockwavestrikergallery">
              <h1>Image Product</h1>
              <div class="shockwavestriker_gallery_flex">
                 <img src="${shockwavestrikergallery.img}" alt="${shockwavestrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikergallery.img}" alt="${shockwavestrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikergallery.img}" alt="${shockwavestrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikergallery.img}" alt="${shockwavestrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function shockwavestrikerclassic_main(){
   
    const shockwavestrikerclassic_mainproduct=[
        new ShockwaveStrikerClassicMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker - classic shirt",
            0,
            0
        )
    ];

    const shockwavestrikerclassicinfo={
        name:"Shockwave Striker </br> (Classic Shirt)",
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

    const shockwavestrikerclassic_mainHTML=shockwavestrikerclassic_mainproduct.map(shockwavestrikerclassic_MainProducts=>shockwavestrikerclassic_MainProducts.getShockwaveStrikerClassicMainProduct()).join('')
    
    const shockwavestrikerclassicinfoHTML=`
        <h1>${shockwavestrikerclassicinfo.name}</h1>
        <p>Created by : ${shockwavestrikerclassicinfo.creator}</p>
        <strong>$ ${shockwavestrikerclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikerclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikerclassicinfo.type} are ${shockwavestrikerclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikerclassicinfo.size.s}, ${shockwavestrikerclassicinfo.size.m}, ${shockwavestrikerclassicinfo.size.l}, ${shockwavestrikerclassicinfo.size.xl}, ${shockwavestrikerclassicinfo.size.xxl}, ${shockwavestrikerclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikerclassic_mainHTML}
                    </div>
                    <div>
                         ${shockwavestrikerclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikerclassic_gallery(){

    const shockwavestrikerclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Shockwave Striker"
    }
    return `
          <div id="shockwavestrikerclassicgallery">
              <h1>Image Product</h1>
              <div class="shockwavestrikerclassic_gallery_flex">
                 <img src="${shockwavestrikerclassicgallery.img}" alt="${shockwavestrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerclassicgallery.img}" alt="${shockwavestrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerclassicgallery.img}" alt="${shockwavestrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerclassicgallery.img}" alt="${shockwavestrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function celestialharechaospremium_main(){
   
    const celestialharechaospremium_mainproduct=[
        new ShockwaveStrikerPremiumMainProduct(
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

    const celestialharechaospremium_mainHTML=celestialharechaospremium_mainproduct.map(celestialharechaospremium_MainProducts=>celestialharechaospremium_MainProducts.getShockwaveStrikerPremiumMainProduct()).join('')
    
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
        new ShockwaveStrikerOversizedMainProduct(
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

    const celestialharechaosoversizedHTML=celestialharechaosoversizedmain_product.map(celestialharechaosoversizedMP=>celestialharechaosoversizedMP.getShockwaveStrikerOversizedMainProduct()).join('');

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
        new ShockwaveStrikerSweatshirtMainProduct(
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

    const celestialharechaossweatshirtHTML=celestialharechaossweatshirtmain_product.map(celestialharechaossweatshirtMP=>celestialharechaossweatshirtMP.getShockwaveStrikerSweatMainProduct()).join('');

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
        new ShockwaveStrikerPremiumOversizedHoodieMainProduct(
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

    const celestialharechaospremiumoversizedhoodieHTML=celestialharechaospremiumoversizedhoodiemain_product.map(celestialharechaospremiumoversizedhoodieMP=>celestialharechaospremiumoversizedhoodieMP.getShockwaveStrikerPremiumOversizedHoodieMainProduct()).join('');

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
        new ShockwaveStrikerLightweightHoodieMainProduct(
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

    const celestialharechaoslightweighthoodieHTML=celestialharechaoslightweighthoodiemain_product.map(celestialharechaoslightweighthoodieMP=>celestialharechaoslightweighthoodieMP.getShockwaveStrikerLightweightHoodieMainProduct()).join('');

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

export function celestialharechaospremiumoversizedsweatshirt_main(){

    const celestialharechaospremiumoversizedsweatshirtmain_product=[
        new ShockwaveStrikerPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Celestial Hare Chaos",
            0,
            0
        )
    ];

    const celestialharechaospremiumoversizedsweatshirtinfo={
        name:"Celestial Hare Chaos </br> (Premium Oversized Sweatshirt)",
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

    const celestialharechaospremiumoversizedsweatshirtHTML=celestialharechaospremiumoversizedsweatshirtmain_product.map(celestialharechaospremiumoversizedsweatshirtMP=>celestialharechaospremiumoversizedsweatshirtMP.getShockwaveStrikerPremiumOversizedSweatshirtMainProduct()).join('');

    const celestialharechaospremiumoversizedsweatshirtinfoHTML=`
        <h1>${celestialharechaospremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${celestialharechaospremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${celestialharechaospremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialharechaospremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialharechaospremiumoversizedsweatshirtinfo.type} are ${celestialharechaospremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialharechaospremiumoversizedsweatshirtinfo.size.s}, ${celestialharechaospremiumoversizedsweatshirtinfo.size.m}, ${celestialharechaospremiumoversizedsweatshirtinfo.size.l}, ${celestialharechaospremiumoversizedsweatshirtinfo.size.xl}, ${celestialharechaospremiumoversizedsweatshirtinfo.size.xxl}, ${celestialharechaospremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialharechaospremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${celestialharechaospremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialharechaospremiumoversizedsweatshirt_gallery(){

    const celestialharechaospremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"celestial hare chaos"
    }
    return `
          <div id="celestialharechaospremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="celestialharechaospremiumoversizedsweatshirt_gallery_flex">
                 <img src="${celestialharechaospremiumoversizedsweatshirtgallery.img}" alt="${celestialharechaospremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumoversizedsweatshirtgallery.img}" alt="${celestialharechaospremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumoversizedsweatshirtgallery.img}" alt="${celestialharechaospremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialharechaospremiumoversizedsweatshirtgallery.img}" alt="${celestialharechaospremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}