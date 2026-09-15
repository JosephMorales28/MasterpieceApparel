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

export function shockwavestrikerpremium_main(){
   
    const shockwavestrikerpremium_mainproduct=[
        new ShockwaveStrikerPremiumMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker - Premium shirt",
            0,
            0
        )
    ];

    const shockwavestrikerpremiuminfo={
        name:"Shockwave Striker </br> (Premium Shirt)",
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

    const shockwavestrikerpremium_mainHTML=shockwavestrikerpremium_mainproduct.map(shockwavestrikerpremium_MainProducts=>shockwavestrikerpremium_MainProducts.getShockwaveStrikerPremiumMainProduct()).join('')
    
    const shockwavestrikerpremiuminfoHTML=`
        <h1>${shockwavestrikerpremiuminfo.name}</h1>
        <p>Created by : ${shockwavestrikerpremiuminfo.creator}</p>
        <strong>$ ${shockwavestrikerpremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikerpremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikerpremiuminfo.type} are ${shockwavestrikerpremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikerpremiuminfo.size.s}, ${shockwavestrikerpremiuminfo.size.m}, ${shockwavestrikerpremiuminfo.size.l}, ${shockwavestrikerpremiuminfo.size.xl}, ${shockwavestrikerpremiuminfo.size.xxl}, ${shockwavestrikerpremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikerpremium_mainHTML}
                    </div>
                    <div>
                         ${shockwavestrikerpremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikerpremium_gallery(){

    const shockwavestrikerpremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Shockwave Striker"
    }
    return `
          <div id="shockwavestrikerpremiumgallery">
              <h1>Image Product</h1>
              <div class="shockwavestrikerpremium_gallery_flex">
                 <img src="${shockwavestrikerpremiumgallery.img}" alt="${shockwavestrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumgallery.img}" alt="${shockwavestrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumgallery.img}" alt="${shockwavestrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumgallery.img}" alt="${shockwavestrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function shockwavestrikeroversized_main(){

    const shockwavestrikeroversizedmain_product=[
        new ShockwaveStrikerOversizedMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker",
            0,
            0
        )
    ];

    const shockwavestrikeroversizedinfo={
        name:"Shockwave Striker</br> (Oversized Shirt)",
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

    const shockwavestrikeroversizedHTML=shockwavestrikeroversizedmain_product.map(shockwavestrikeroversizedMP=>shockwavestrikeroversizedMP.getShockwaveStrikerOversizedMainProduct()).join('');

    const shockwavestrikeroversizedinfoHTML=`
        <h1>${shockwavestrikeroversizedinfo.name}</h1>
        <p>Created by : ${shockwavestrikeroversizedinfo.creator}</p>
        <strong>$ ${shockwavestrikeroversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikeroversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikeroversizedinfo.type} are ${shockwavestrikeroversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikeroversizedinfo.size.s}, ${shockwavestrikeroversizedinfo.size.m}, ${shockwavestrikeroversizedinfo.size.l}, ${shockwavestrikeroversizedinfo.size.xl}, ${shockwavestrikeroversizedinfo.size.xxl}, ${shockwavestrikeroversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikeroversizedHTML}
                    </div>
                    <div>
                         ${shockwavestrikeroversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikeroversized_gallery(){

    const shockwavestrikeroversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Shockwave Striker"
    }
    return `
          <div id="shockwavestrikeroversizedgallery">
              <h1>Image Product</h1>
              <div class="shockwavestrikeroversized_gallery_flex">
                 <img src="${shockwavestrikeroversizedgallery.img}" alt="${shockwavestrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikeroversizedgallery.img}" alt="${shockwavestrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikeroversizedgallery.img}" alt="${shockwavestrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikeroversizedgallery.img}" alt="${shockwavestrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function shockwavestrikersweatshirt_main(){

    const shockwavestrikersweatshirtmain_product=[
        new ShockwaveStrikerSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker",
            0,
            0
        )
    ];

    const shockwavestrikersweatshirtinfo={
        name:"Shockwave Striker </br> (Sweat Shirt)",
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

    const shockwavestrikersweatshirtHTML=shockwavestrikersweatshirtmain_product.map(shockwavestrikersweatshirtMP=>shockwavestrikersweatshirtMP.getShockwaveStrikerSweatMainProduct()).join('');

    const shockwavestrikersweatshirtinfoHTML=`
        <h1>${shockwavestrikersweatshirtinfo.name}</h1>
        <p>Created by : ${shockwavestrikersweatshirtinfo.creator}</p>
        <strong>$ ${shockwavestrikersweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikersweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikersweatshirtinfo.type} are ${shockwavestrikersweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikersweatshirtinfo.size.s}, ${shockwavestrikersweatshirtinfo.size.m}, ${shockwavestrikersweatshirtinfo.size.l}, ${shockwavestrikersweatshirtinfo.size.xl}, ${shockwavestrikersweatshirtinfo.size.xxl}, ${shockwavestrikersweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikersweatshirtHTML}
                    </div>
                    <div>
                         ${shockwavestrikersweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikersweatshirt_gallery(){

    const shockwavestrikersweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"shockwave striker"
    }
    return `
          <div id="shockwavestrikersweatshirtgallery">
              <h1>Image Product</h1>
              <div class="shockwavestrikersweatshirt_gallery_flex">
                 <img src="${shockwavestrikersweatshirtgallery.img}" alt="${shockwavestrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikersweatshirtgallery.img}" alt="${shockwavestrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikersweatshirtgallery.img}" alt="${shockwavestrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikersweatshirtgallery.img}" alt="${shockwavestrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function shockwavestrikerpremiumoversizedhoodie_main(){

    const shockwavestrikerpremiumoversizedhoodiemain_product=[
        new ShockwaveStrikerPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker",
            0,
            0
        )
    ];

    const shockwavestrikerpremiumoversizedhoodieinfo={
        name:"Shockwave Striker </br> ( Premium Oversized Hoodie )",
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

    const shockwavestrikerpremiumoversizedhoodieHTML=shockwavestrikerpremiumoversizedhoodiemain_product.map(shockwavestrikerpremiumoversizedhoodieMP=>shockwavestrikerpremiumoversizedhoodieMP.getShockwaveStrikerPremiumOversizedHoodieMainProduct()).join('');

    const shockwavestrikerpremiumoversizedhoodieinfoHTML=`
        <h1>${shockwavestrikerpremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${shockwavestrikerpremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${shockwavestrikerpremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikerpremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikerpremiumoversizedhoodieinfo.type} are ${shockwavestrikerpremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikerpremiumoversizedhoodieinfo.size.s}, ${shockwavestrikerpremiumoversizedhoodieinfo.size.m}, ${shockwavestrikerpremiumoversizedhoodieinfo.size.l}, ${shockwavestrikerpremiumoversizedhoodieinfo.size.xl}, ${shockwavestrikerpremiumoversizedhoodieinfo.size.xxl}, ${shockwavestrikerpremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikerpremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${shockwavestrikerpremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikerpremiumoversizedhoodie_gallery(){

    const shockwavestrikerpremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Shockwave Striker"
    }
    return `
          <div id="shockwavestrikerpremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="shockwavestrikerpremiumoversizedhoodie_gallery_flex">
                 <img src="${shockwavestrikerpremiumoversizedhoodiegallery.img}" alt="${shockwavestrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumoversizedhoodiegallery.img}" alt="${shockwavestrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumoversizedhoodiegallery.img}" alt="${shockwavestrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumoversizedhoodiegallery.img}" alt="${shockwavestrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function shockwavestrikerlightweighthoodie_main(){

    const shockwavestrikerlightweighthoodiemain_product=[
        new ShockwaveStrikerLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker",
            0,
            0
        )
    ];

    const shockwavestrikerlightweighthoodieinfo={
        name:"Shockwave Striker </br> (Lightweight Hoodie)",
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

    const shockwavestrikerlightweighthoodieHTML=shockwavestrikerlightweighthoodiemain_product.map(shockwavestrikerlightweighthoodieMP=>shockwavestrikerlightweighthoodieMP.getShockwaveStrikerLightweightHoodieMainProduct()).join('');

    const shockwavestrikerlightweighthoodieinfoHTML=`
        <h1>${shockwavestrikerlightweighthoodieinfo.name}</h1>
        <p>Created by : ${shockwavestrikerlightweighthoodieinfo.creator}</p>
        <strong>$ ${shockwavestrikerlightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikerlightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikerlightweighthoodieinfo.type} are ${shockwavestrikerlightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikerlightweighthoodieinfo.size.s}, ${shockwavestrikerlightweighthoodieinfo.size.m}, ${shockwavestrikerlightweighthoodieinfo.size.l}, ${shockwavestrikerlightweighthoodieinfo.size.xl}, ${shockwavestrikerlightweighthoodieinfo.size.xxl}, ${shockwavestrikerlightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikerlightweighthoodieHTML}
                    </div>
                    <div>
                         ${shockwavestrikerlightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikerlightweighthoodie_gallery(){

    const shockwavestrikerlightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Shockwave Striker"
    }
    return `
          <div id="shockwavestrikerlightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="shockwavestrikerlightweighthoodie_gallery_flex">
                 <img src="${shockwavestrikerlightweighthoodiegallery.img}" alt="${shockwavestrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerlightweighthoodiegallery.img}" alt="${shockwavestrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerlightweighthoodiegallery.img}" alt="${shockwavestrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerlightweighthoodiegallery.img}" alt="${shockwavestrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
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