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
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

export function goalkeepergonebananasclassic_main(){
   
    const goalkeepergonebananasclassic_mainproduct=[
        new LightningPawStrikerClassicMainProduct(
            "/img/idontfish.webp",
            "GoalKeeper Gone Bananas Monkey Soccer Madness",
            0,
            0
        )
    ];

    const goalkeepergonebananasclassicinfo={
        name:"Goal Keeper</br>Gone Bananas</br> Monkey Soccer Madness</br> (Classic Shirt)",
        creator:"Joseph Morales",
        Price: 32.00,
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

    const goalkeepergonebananasclassic_mainHTML=goalkeepergonebananasclassic_mainproduct.map(goalkeepergonebananasclassic_MainProducts=>goalkeepergonebananasclassic_MainProducts.getLightningPawStrikerClassicMainProduct()).join('')
    
    const goalkeepergonebananasclassicinfoHTML=`
        <h1>${goalkeepergonebananasclassicinfo.name}</h1>
        <p>Created by : ${goalkeepergonebananasclassicinfo.creator}</p>
        <strong>$ ${goalkeepergonebananasclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananasclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananasclassicinfo.type} are ${goalkeepergonebananasclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananasclassicinfo.size.s}, ${goalkeepergonebananasclassicinfo.size.m}, ${goalkeepergonebananasclassicinfo.size.l}, ${goalkeepergonebananasclassicinfo.size.xl}, ${goalkeepergonebananasclassicinfo.size.xxl}, ${goalkeepergonebananasclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananasclassic_mainHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananasclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananasclassic_gallery(){

    const goalkeepergonebananasclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananasclassicgallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananasclassic_gallery_flex">
                 <img src="${goalkeepergonebananasclassicgallery.img}" alt="${goalkeepergonebananasclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasclassicgallery.img}" alt="${goalkeepergonebananasclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasclassicgallery.img}" alt="${goalkeepergonebananasclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasclassicgallery.img}" alt="${goalkeepergonebananasclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function goalkeepergonebananaspremium_main(){
   
    const goalkeepergonebananaspremium_mainproduct=[
        new LightningPawStrikerPremiumMainProduct(
            "/img/idontfish.webp",
            "Goal Keeper Gone Bananas Monkey Soccer Madness - Premium shirt",
            0,
            0
        )
    ];

    const goalkeepergonebananaspremiuminfo={
        name:"GoalKeeper Gone Bananas</br>Monkey Soccer Madness</br> (Premium Shirt)",
        creator:"Joseph Morales",
        Price: 46.35,
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

    const goalkeepergonebananaspremium_mainHTML=goalkeepergonebananaspremium_mainproduct.map(goalkeepergonebananaspremium_MainProducts=>goalkeepergonebananaspremium_MainProducts.getLightningPawStrikerPremiumMainProduct()).join('')
    
    const goalkeepergonebananaspremiuminfoHTML=`
        <h1>${goalkeepergonebananaspremiuminfo.name}</h1>
        <p>Created by : ${goalkeepergonebananaspremiuminfo.creator}</p>
        <strong>$ ${goalkeepergonebananaspremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananaspremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananaspremiuminfo.type} are ${goalkeepergonebananaspremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananaspremiuminfo.size.s}, ${goalkeepergonebananaspremiuminfo.size.m}, ${goalkeepergonebananaspremiuminfo.size.l}, ${goalkeepergonebananaspremiuminfo.size.xl}, ${goalkeepergonebananaspremiuminfo.size.xxl}, ${goalkeepergonebananaspremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananaspremium_mainHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananaspremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananaspremium_gallery(){

    const goalkeepergonebananaspremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananaspremiumgallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananaspremium_gallery_flex">
                 <img src="${goalkeepergonebananaspremiumgallery.img}" alt="${goalkeepergonebananaspremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumgallery.img}" alt="${goalkeepergonebananaspremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumgallery.img}" alt="${goalkeepergonebananaspremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumgallery.img}" alt="${goalkeepergonebananaspremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function goalkeepergonebananasoversized_main(){

    const goalkeepergonebananasoversizedmain_product=[
        new LightningPawStrikerOversizedMainProduct(
            "/img/idontfish.webp",
            "GoalKeeper Gone Bananas Monkey Soccer Madness",
            0,
            0
        )
    ];

    const goalkeepergonebananasoversizedinfo={
        name:"Goal Keeper Gone Bananas</br>Monkey Soccer Madness</br> (Oversized Shirt)",
        creator:"Joseph Morales",
        Price: 37.00,
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

    const goalkeepergonebananasoversizedHTML=goalkeepergonebananasoversizedmain_product.map(goalkeepergonebananasoversizedMP=>goalkeepergonebananasoversizedMP.getLightningPawStrikerOversizedMainProduct()).join('');

    const goalkeepergonebananasoversizedinfoHTML=`
        <h1>${goalkeepergonebananasoversizedinfo.name}</h1>
        <p>Created by : ${goalkeepergonebananasoversizedinfo.creator}</p>
        <strong>$ ${goalkeepergonebananasoversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananasoversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananasoversizedinfo.type} are ${goalkeepergonebananasoversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananasoversizedinfo.size.s}, ${goalkeepergonebananasoversizedinfo.size.m}, ${goalkeepergonebananasoversizedinfo.size.l}, ${goalkeepergonebananasoversizedinfo.size.xl}, ${goalkeepergonebananasoversizedinfo.size.xxl}, ${goalkeepergonebananasoversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananasoversizedHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananasoversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananasoversized_gallery(){

    const goalkeepergonebananasoversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananasoversizedgallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananasoversized_gallery_flex">
                 <img src="${goalkeepergonebananasoversizedgallery.img}" alt="${goalkeepergonebananasoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasoversizedgallery.img}" alt="${goalkeepergonebananasoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasoversizedgallery.img}" alt="${goalkeepergonebananasoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasoversizedgallery.img}" alt="${goalkeepergonebananasoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function goalkeepergonebananassweatshirt_main(){

    const goalkeepergonebananassweatshirtmain_product=[
        new LightningPawStrikerSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Goal Keeper Gone Bananas Monkey Soccer Madness",
            0,
            0
        )
    ];

    const goalkeepergonebananassweatshirtinfo={
        name:"Goal Keeper Gone Bananas</br>Monkey Soccer Madness</br> (Sweat Shirt)",
        creator:"Joseph Morales",
        Price: 48.00,
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

    const goalkeepergonebananassweatshirtHTML=goalkeepergonebananassweatshirtmain_product.map(goalkeepergonebananassweatshirtMP=>goalkeepergonebananassweatshirtMP.getLightningPawStrikerSweatMainProduct()).join('');

    const goalkeepergonebananassweatshirtinfoHTML=`
        <h1>${goalkeepergonebananassweatshirtinfo.name}</h1>
        <p>Created by : ${goalkeepergonebananassweatshirtinfo.creator}</p>
        <strong>$ ${goalkeepergonebananassweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananassweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananassweatshirtinfo.type} are ${goalkeepergonebananassweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananassweatshirtinfo.size.s}, ${goalkeepergonebananassweatshirtinfo.size.m}, ${goalkeepergonebananassweatshirtinfo.size.l}, ${goalkeepergonebananassweatshirtinfo.size.xl}, ${goalkeepergonebananassweatshirtinfo.size.xxl}, ${goalkeepergonebananassweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananassweatshirtHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananassweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananassweatshirt_gallery(){

    const goalkeepergonebananassweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananassweatshirtgallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananassweatshirt_gallery_flex">
                 <img src="${goalkeepergonebananassweatshirtgallery.img}" alt="${goalkeepergonebananassweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananassweatshirtgallery.img}" alt="${goalkeepergonebananassweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananassweatshirtgallery.img}" alt="${goalkeepergonebananassweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananassweatshirtgallery.img}" alt="${goalkeepergonebananassweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function goalkeepergonebananaspremiumoversizedhoodie_main(){

    const goalkeepergonebananaspremiumoversizedhoodiemain_product=[
        new LightningPawStrikerPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Goal Keeper Gone Bananas Monkey Soccer Madness",
            0,
            0
        )
    ];

    const goalkeepergonebananaspremiumoversizedhoodieinfo={
        name:"Goal Keeper Gone Bananas</br>Monkey Soccer Madness</br>( Premium Oversized Hoodie )",
        creator:"Joseph Morales",
        Price: 68.00,
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

    const goalkeepergonebananaspremiumoversizedhoodieHTML=goalkeepergonebananaspremiumoversizedhoodiemain_product.map(goalkeepergonebananaspremiumoversizedhoodieMP=>goalkeepergonebananaspremiumoversizedhoodieMP.getLightningPawStrikerPremiumOversizedHoodieMainProduct()).join('');

    const goalkeepergonebananaspremiumoversizedhoodieinfoHTML=`
        <h1>${goalkeepergonebananaspremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${goalkeepergonebananaspremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${goalkeepergonebananaspremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananaspremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananaspremiumoversizedhoodieinfo.type} are ${goalkeepergonebananaspremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananaspremiumoversizedhoodieinfo.size.s}, ${goalkeepergonebananaspremiumoversizedhoodieinfo.size.m}, ${goalkeepergonebananaspremiumoversizedhoodieinfo.size.l}, ${goalkeepergonebananaspremiumoversizedhoodieinfo.size.xl}, ${goalkeepergonebananaspremiumoversizedhoodieinfo.size.xxl}, ${goalkeepergonebananaspremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananaspremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananaspremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananaspremiumoversizedhoodie_gallery(){

    const goalkeepergonebananaspremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananaspremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananaspremiumoversizedhoodie_gallery_flex">
                 <img src="${goalkeepergonebananaspremiumoversizedhoodiegallery.img}" alt="${goalkeepergonebananaspremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumoversizedhoodiegallery.img}" alt="${goalkeepergonebananaspremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumoversizedhoodiegallery.img}" alt="${goalkeepergonebananaspremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumoversizedhoodiegallery.img}" alt="${goalkeepergonebananaspremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function goalkeepergonebananaslightweighthoodie_main(){

    const goalkeepergonebananaslightweighthoodiemain_product=[
        new LightningPawStrikerLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Goal Keeper Gone Bananas Monkey Soccer Madness",
            0,
            0
        )
    ];

    const goalkeepergonebananaslightweighthoodieinfo={
        name:"Goal Keeper Gone Bananas</br>Monkey Soccer Madness</br> (Lightweight Hoodie)",
        creator:"Joseph Morales",
        Price: 62.21,
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

    const goalkeepergonebananaslightweighthoodieHTML=goalkeepergonebananaslightweighthoodiemain_product.map(goalkeepergonebananaslightweighthoodieMP=>goalkeepergonebananaslightweighthoodieMP.getLightningPawStrikerLightweightHoodieMainProduct()).join('');

    const goalkeepergonebananaslightweighthoodieinfoHTML=`
        <h1>${goalkeepergonebananaslightweighthoodieinfo.name}</h1>
        <p>Created by : ${goalkeepergonebananaslightweighthoodieinfo.creator}</p>
        <strong>$ ${goalkeepergonebananaslightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananaslightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananaslightweighthoodieinfo.type} are ${goalkeepergonebananaslightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananaslightweighthoodieinfo.size.s}, ${goalkeepergonebananaslightweighthoodieinfo.size.m}, ${goalkeepergonebananaslightweighthoodieinfo.size.l}, ${goalkeepergonebananaslightweighthoodieinfo.size.xl}, ${goalkeepergonebananaslightweighthoodieinfo.size.xxl}, ${goalkeepergonebananaslightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananaslightweighthoodieHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananaslightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananaslightweighthoodie_gallery(){

    const goalkeepergonebananaslightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananaslightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananaslightweighthoodie_gallery_flex">
                 <img src="${goalkeepergonebananaslightweighthoodiegallery.img}" alt="${goalkeepergonebananaslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaslightweighthoodiegallery.img}" alt="${goalkeepergonebananaslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaslightweighthoodiegallery.img}" alt="${goalkeepergonebananaslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaslightweighthoodiegallery.img}" alt="${goalkeepergonebananaslightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function goalkeepergonebananaspremiumoversizedsweatshirt_main(){

    const goalkeepergonebananaspremiumoversizedsweatshirtmain_product=[
        new LightningPawStrikerPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Goal Keeper Gone Bananas Monkey Soccer Madness",
            0,
            0
        )
    ];

    const goalkeepergonebananaspremiumoversizedsweatshirtinfo={
        name:"Goal Keeper Gone Bananas</br>Monkey Soccer Madness</br>(Premium Oversized Sweatshirt)",
        creator:"Joseph Morales",
        Price: 62.00,
        details:"This wild, full‑body monkey goalkeeper leaps mid‑air in a painterly explosion of color and motion! Dressed in a vibrant orange‑to‑violet gradient drifit uniform patterned with crosshair shapes, he flexes a powerful catch under the blazing lights of an international soccer tournament. His crazy grin and fearless energy capture the thrill of the game — perfect for fans who live for the chaos of competition. Ideal for: soccer lovers, athletes, and anyone who plays with passion. Style: painterly brush strokes, dynamic motion, transparent background for crisp printing. Available on: T‑shirts, hoodies, stickers, and more — bring the madness to your gear!",
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

    const goalkeepergonebananaspremiumoversizedsweatshirtHTML=goalkeepergonebananaspremiumoversizedsweatshirtmain_product.map(goalkeepergonebananaspremiumoversizedsweatshirtMP=>goalkeepergonebananaspremiumoversizedsweatshirtMP.getLightningPawStrikerPremiumOversizedSweatshirtMainProduct()).join('');

    const goalkeepergonebananaspremiumoversizedsweatshirtinfoHTML=`
        <h1>${goalkeepergonebananaspremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananaspremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananaspremiumoversizedsweatshirtinfo.type} are ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananaspremiumoversizedsweatshirtinfo.size.s}, ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.size.m}, ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.size.l}, ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.size.xl}, ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.size.xxl}, ${goalkeepergonebananaspremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananaspremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananaspremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananaspremiumoversizedsweatshirt_gallery(){

    const goalkeepergonebananaspremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananaspremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananaspremiumoversizedsweatshirt_gallery_flex">
                 <img src="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.img}" alt="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.img}" alt="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.img}" alt="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.img}" alt="${goalkeepergonebananaspremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}