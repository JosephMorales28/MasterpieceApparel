class CorgiWizardStormpawMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CorgiWizardStormpawClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CorgiWizardStormpawPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CorgiWizardStormpawOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CorgiWizardStormpawSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CorgiWizardStormpawPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CorgiWizardStormpawLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CorgiWizardStormpawPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCorgiWizardStormpawPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function corgiwizardstormpaw_main(){
    
    const corgiwizardstormpawmain_product=[
        new CorgiWizardStormpawMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant",
            0,
            0
        )
    ];

    const corgiwizardstormpawinfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>(Essential Shirt)",
        creator:"Joseph Morales",
        Price: 30.69,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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
    
    const corgiwizardstormpawHTML=corgiwizardstormpawmain_product.map(corgiwizardstormpawMP=>corgiwizardstormpawMP.getCorgiWizardStormpawMainProduct()).join('');
    
    const corgiwizardstormpawinfoHTML=`
        <h1>${corgiwizardstormpawinfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawinfo.creator}</p>
        <strong>$ ${corgiwizardstormpawinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawinfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawinfo.type} are ${corgiwizardstormpawinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawinfo.size.s}, ${corgiwizardstormpawinfo.size.m}, ${corgiwizardstormpawinfo.size.l}, ${corgiwizardstormpawinfo.size.xl}, ${corgiwizardstormpawinfo.size.xxl}, ${corgiwizardstormpawinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawmain_gallery(){

    const corgiwizardstormpawgallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawgallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpaw_gallery_flex">
                 <img src="${corgiwizardstormpawgallery.img}" alt="${corgiwizardstormpawgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawgallery.img}" alt="${corgiwizardstormpawgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawgallery.img}" alt="${corgiwizardstormpawgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawgallery.img}" alt="${corgiwizardstormpawgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function corgiwizardstormpawclassic_main(){
   
    const corgiwizardstormpawclassic_mainproduct=[
        new CorgiWizardStormpawClassicMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant",
            0,
            0
        )
    ];

    const corgiwizardstormpawclassicinfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>(Classic Shirt)",
        creator:"Joseph Morales",
        Price: 32.00,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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

    const corgiwizardstormpawclassic_mainHTML=corgiwizardstormpawclassic_mainproduct.map(corgiwizardstormpawclassic_MainProducts=>corgiwizardstormpawclassic_MainProducts.getCorgiWizardStormpawClassicMainProduct()).join('')
    
    const corgiwizardstormpawclassicinfoHTML=`
        <h1>${corgiwizardstormpawclassicinfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawclassicinfo.creator}</p>
        <strong>$ ${corgiwizardstormpawclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawclassicinfo.type} are ${corgiwizardstormpawclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawclassicinfo.size.s}, ${corgiwizardstormpawclassicinfo.size.m}, ${corgiwizardstormpawclassicinfo.size.l}, ${corgiwizardstormpawclassicinfo.size.xl}, ${corgiwizardstormpawclassicinfo.size.xxl}, ${corgiwizardstormpawclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawclassic_mainHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawclassic_gallery(){

    const corgiwizardstormpawclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawclassicgallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpawclassic_gallery_flex">
                 <img src="${corgiwizardstormpawclassicgallery.img}" alt="${corgiwizardstormpawclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawclassicgallery.img}" alt="${corgiwizardstormpawclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawclassicgallery.img}" alt="${corgiwizardstormpawclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawclassicgallery.img}" alt="${corgiwizardstormpawclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function corgiwizardstormpawpremium_main(){
   
    const corgiwizardstormpawpremium_mainproduct=[
        new CorgiWizardStormpawPremiumMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant - Premium shirt",
            0,
            0
        )
    ];

    const corgiwizardstormpawpremiuminfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>(Premium Shirt)",
        creator:"Joseph Morales",
        Price: 46.35,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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

    const corgiwizardstormpawpremium_mainHTML=corgiwizardstormpawpremium_mainproduct.map(corgiwizardstormpawpremium_MainProducts=>corgiwizardstormpawpremium_MainProducts.getCorgiWizardStormpawPremiumMainProduct()).join('')
    
    const corgiwizardstormpawpremiuminfoHTML=`
        <h1>${corgiwizardstormpawpremiuminfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawpremiuminfo.creator}</p>
        <strong>$ ${corgiwizardstormpawpremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawpremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawpremiuminfo.type} are ${corgiwizardstormpawpremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawpremiuminfo.size.s}, ${corgiwizardstormpawpremiuminfo.size.m}, ${corgiwizardstormpawpremiuminfo.size.l}, ${corgiwizardstormpawpremiuminfo.size.xl}, ${corgiwizardstormpawpremiuminfo.size.xxl}, ${corgiwizardstormpawpremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawpremium_mainHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawpremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawpremium_gallery(){

    const corgiwizardstormpawpremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawpremiumgallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpawpremium_gallery_flex">
                 <img src="${corgiwizardstormpawpremiumgallery.img}" alt="${corgiwizardstormpawpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumgallery.img}" alt="${corgiwizardstormpawpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumgallery.img}" alt="${corgiwizardstormpawpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumgallery.img}" alt="${corgiwizardstormpawpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function corgiwizardstormpawoversized_main(){

    const corgiwizardstormpawoversizedmain_product=[
        new CorgiWizardStormpawOversizedMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant",
            0,
            0
        )
    ];

    const corgiwizardstormpawoversizedinfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>(Oversized Shirt)",
        creator:"Joseph Morales",
        Price: 37.00,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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

    const corgiwizardstormpawoversizedHTML=corgiwizardstormpawoversizedmain_product.map(corgiwizardstormpawoversizedMP=>corgiwizardstormpawoversizedMP.getCorgiWizardStormpawOversizedMainProduct()).join('');

    const corgiwizardstormpawoversizedinfoHTML=`
        <h1>${corgiwizardstormpawoversizedinfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawoversizedinfo.creator}</p>
        <strong>$ ${corgiwizardstormpawoversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawoversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawoversizedinfo.type} are ${corgiwizardstormpawoversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawoversizedinfo.size.s}, ${corgiwizardstormpawoversizedinfo.size.m}, ${corgiwizardstormpawoversizedinfo.size.l}, ${corgiwizardstormpawoversizedinfo.size.xl}, ${corgiwizardstormpawoversizedinfo.size.xxl}, ${corgiwizardstormpawoversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawoversizedHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawoversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawoversized_gallery(){

    const corgiwizardstormpawoversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawoversizedgallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpawoversized_gallery_flex">
                 <img src="${corgiwizardstormpawoversizedgallery.img}" alt="${corgiwizardstormpawoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawoversizedgallery.img}" alt="${corgiwizardstormpawoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawoversizedgallery.img}" alt="${corgiwizardstormpawoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawoversizedgallery.img}" alt="${corgiwizardstormpawoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function corgiwizardstormpawsweatshirt_main(){

    const corgiwizardstormpawsweatshirtmain_product=[
        new CorgiWizardStormpawSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant",
            0,
            0
        )
    ];

    const corgiwizardstormpawsweatshirtinfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>(Sweat Shirt)",
        creator:"Joseph Morales",
        Price: 48.00,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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

    const corgiwizardstormpawsweatshirtHTML=corgiwizardstormpawsweatshirtmain_product.map(corgiwizardstormpawsweatshirtMP=>corgiwizardstormpawsweatshirtMP.getCorgiWizardStormpawSweatMainProduct()).join('');

    const corgiwizardstormpawsweatshirtinfoHTML=`
        <h1>${corgiwizardstormpawsweatshirtinfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawsweatshirtinfo.creator}</p>
        <strong>$ ${corgiwizardstormpawsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawsweatshirtinfo.type} are ${corgiwizardstormpawsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawsweatshirtinfo.size.s}, ${corgiwizardstormpawsweatshirtinfo.size.m}, ${corgiwizardstormpawsweatshirtinfo.size.l}, ${corgiwizardstormpawsweatshirtinfo.size.xl}, ${corgiwizardstormpawsweatshirtinfo.size.xxl}, ${corgiwizardstormpawsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawsweatshirtHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawsweatshirt_gallery(){

    const corgiwizardstormpawsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpawsweatshirt_gallery_flex">
                 <img src="${corgiwizardstormpawsweatshirtgallery.img}" alt="${corgiwizardstormpawsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawsweatshirtgallery.img}" alt="${corgiwizardstormpawsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawsweatshirtgallery.img}" alt="${corgiwizardstormpawsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawsweatshirtgallery.img}" alt="${corgiwizardstormpawsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function corgiwizardstormpawpremiumoversizedhoodie_main(){

    const corgiwizardstormpawpremiumoversizedhoodiemain_product=[
        new CorgiWizardStormpawPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant",
            0,
            0
        )
    ];

    const corgiwizardstormpawpremiumoversizedhoodieinfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>( Premium Oversized Hoodie )",
        creator:"Joseph Morales",
        Price: 68.00,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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

    const corgiwizardstormpawpremiumoversizedhoodieHTML=corgiwizardstormpawpremiumoversizedhoodiemain_product.map(corgiwizardstormpawpremiumoversizedhoodieMP=>corgiwizardstormpawpremiumoversizedhoodieMP.getCorgiWizardStormpawPremiumOversizedHoodieMainProduct()).join('');

    const corgiwizardstormpawpremiumoversizedhoodieinfoHTML=`
        <h1>${corgiwizardstormpawpremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawpremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${corgiwizardstormpawpremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawpremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawpremiumoversizedhoodieinfo.type} are ${corgiwizardstormpawpremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawpremiumoversizedhoodieinfo.size.s}, ${corgiwizardstormpawpremiumoversizedhoodieinfo.size.m}, ${corgiwizardstormpawpremiumoversizedhoodieinfo.size.l}, ${corgiwizardstormpawpremiumoversizedhoodieinfo.size.xl}, ${corgiwizardstormpawpremiumoversizedhoodieinfo.size.xxl}, ${corgiwizardstormpawpremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawpremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawpremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawpremiumoversizedhoodie_gallery(){

    const corgiwizardstormpawpremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawpremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpawpremiumoversizedhoodie_gallery_flex">
                 <img src="${corgiwizardstormpawpremiumoversizedhoodiegallery.img}" alt="${corgiwizardstormpawpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumoversizedhoodiegallery.img}" alt="${corgiwizardstormpawpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumoversizedhoodiegallery.img}" alt="${corgiwizardstormpawpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumoversizedhoodiegallery.img}" alt="${corgiwizardstormpawpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function corgiwizardstormpawlightweighthoodie_main(){

    const corgiwizardstormpawlightweighthoodiemain_product=[
        new CorgiWizardStormpawLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant",
            0,
            0
        )
    ];

    const corgiwizardstormpawlightweighthoodieinfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>(Lightweight Hoodie)",
        creator:"Joseph Morales",
        Price: 62.21,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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

    const corgiwizardstormpawlightweighthoodieHTML=corgiwizardstormpawlightweighthoodiemain_product.map(corgiwizardstormpawlightweighthoodieMP=>corgiwizardstormpawlightweighthoodieMP.getCorgiWizardStormpawLightweightHoodieMainProduct()).join('');

    const corgiwizardstormpawlightweighthoodieinfoHTML=`
        <h1>${corgiwizardstormpawlightweighthoodieinfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawlightweighthoodieinfo.creator}</p>
        <strong>$ ${corgiwizardstormpawlightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawlightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawlightweighthoodieinfo.type} are ${corgiwizardstormpawlightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawlightweighthoodieinfo.size.s}, ${corgiwizardstormpawlightweighthoodieinfo.size.m}, ${corgiwizardstormpawlightweighthoodieinfo.size.l}, ${corgiwizardstormpawlightweighthoodieinfo.size.xl}, ${corgiwizardstormpawlightweighthoodieinfo.size.xxl}, ${corgiwizardstormpawlightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawlightweighthoodieHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawlightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawlightweighthoodie_gallery(){

    const corgiwizardstormpawlightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawlightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpawlightweighthoodie_gallery_flex">
                 <img src="${corgiwizardstormpawlightweighthoodiegallery.img}" alt="${corgiwizardstormpawlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawlightweighthoodiegallery.img}" alt="${corgiwizardstormpawlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawlightweighthoodiegallery.img}" alt="${corgiwizardstormpawlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawlightweighthoodiegallery.img}" alt="${corgiwizardstormpawlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function corgiwizardstormpawpremiumoversizedsweatshirt_main(){

    const corgiwizardstormpawpremiumoversizedsweatshirtmain_product=[
        new CorgiWizardStormpawPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Corgi Wizard Stormpaw Ascendant",
            0,
            0
        )
    ];

    const corgiwizardstormpawpremiumoversizedsweatshirtinfo={
        name:"Corgi Wizard Stormpaw Ascendant</br>(Premium Oversized Sweatshirt)",
        creator:"Joseph Morales",
        Price: 62.00,
        details:"Unleash pure tournament energy with this electrifying Jaguar Striker design — a wild fusion of power, speed, and painterly artistry. This full‑body jaguar athlete charges the field in a navy‑blue to lime‑green drifit gradient uniform, marked with a bold crosshair pattern that screams precision and dominance. Caught mid‑strike, the jaguar flexes a devastating power kick, sending the ball forward wrapped in crackling lightning. His glowing eyes, crazed grin, and charged stance capture the raw intensity of a player ready to conquer the world stage. Set on an international soccer arena, the ground erupts with energy as lightning tears through the turf — a perfect symbol of unstoppable momentum. Rendered in expressive painterly brushstrokes and delivered in crisp, high‑quality resolution, this artwork is made for athletes, fans, and anyone who loves fierce, dynamic character designs.",
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

    const corgiwizardstormpawpremiumoversizedsweatshirtHTML=corgiwizardstormpawpremiumoversizedsweatshirtmain_product.map(corgiwizardstormpawpremiumoversizedsweatshirtMP=>corgiwizardstormpawpremiumoversizedsweatshirtMP.getCorgiWizardStormpawPremiumOversizedSweatshirtMainProduct()).join('');

    const corgiwizardstormpawpremiumoversizedsweatshirtinfoHTML=`
        <h1>${corgiwizardstormpawpremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${corgiwizardstormpawpremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${corgiwizardstormpawpremiumoversizedsweatshirtinfo.type} are ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${corgiwizardstormpawpremiumoversizedsweatshirtinfo.size.s}, ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.size.m}, ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.size.l}, ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.size.xl}, ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.size.xxl}, ${corgiwizardstormpawpremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${corgiwizardstormpawpremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${corgiwizardstormpawpremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function corgiwizardstormpawpremiumoversizedsweatshirt_gallery(){

    const corgiwizardstormpawpremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Corgi Wizard Stormpaw Ascendant"
    }
    return `
          <div id="corgiwizardstormpawpremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="corgiwizardstormpawpremiumoversizedsweatshirt_gallery_flex">
                 <img src="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.img}" alt="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.img}" alt="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.img}" alt="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.img}" alt="${corgiwizardstormpawpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}