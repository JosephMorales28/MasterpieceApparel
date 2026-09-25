class GoalKeeperGoneBananasMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class GoalKeeperGoneBananasClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class GoalKeeperGoneBananasPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class GoalKeeperGoneBananasOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalKeeperGoneBananasSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalKeeperGoneBananasPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalKeeperGoneBananasLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalKeeperGoneBananasPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalKeeperGoneBananasPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function goalkeepergonebananas_main(){
    
    const goalkeepergonebananasmain_product=[
        new GoalKeeperGoneBananasMainProduct(
            "/img/idontfish.webp",
            "Goal Keeper gone Bananas Monkey Soccer Madness",
            0,
            0
        )
    ];

    const goalkeepergonebananasinfo={
        name:"GoalKeeper Gone Bananas</br>Monkey Soccer Madness </br> (Essential Shirt)",
        creator:"Joseph Morales",
        Price: 30.69,
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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
    
    const goalkeepergonebananasHTML=goalkeepergonebananasmain_product.map(goalkeepergonebananasMP=>goalkeepergonebananasMP.getGoalKeeperGoneBananasMainProduct()).join('');
    
    const goalkeepergonebananasinfoHTML=`
        <h1>${goalkeepergonebananasinfo.name}</h1>
        <p>Created by : ${goalkeepergonebananasinfo.creator}</p>
        <strong>$ ${goalkeepergonebananasinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalkeepergonebananasinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalkeepergonebananasinfo.type} are ${goalkeepergonebananasinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalkeepergonebananasinfo.size.s}, ${goalkeepergonebananasinfo.size.m}, ${goalkeepergonebananasinfo.size.l}, ${goalkeepergonebananasinfo.size.xl}, ${goalkeepergonebananasinfo.size.xxl}, ${goalkeepergonebananasinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalkeepergonebananasHTML}
                    </div>
                    <div>
                         ${goalkeepergonebananasinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalkeepergonebananasmain_gallery(){

    const goalkeepergonebananasgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Keeper Gone Bananas Monkey Soccer Madness"
    }
    return `
          <div id="goalkeepergonebananasgallery">
              <h1>Image Product</h1>
              <div class="goalkeepergonebananas_gallery_flex">
                 <img src="${goalkeepergonebananasgallery.img}" alt="${goalkeepergonebananasgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasgallery.img}" alt="${goalkeepergonebananasgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasgallery.img}" alt="${goalkeepergonebananasgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalkeepergonebananasgallery.img}" alt="${goalkeepergonebananasgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function goalkeepergonebananasclassic_main(){
   
    const goalkeepergonebananasclassic_mainproduct=[
        new GoalKeeperGoneBananasClassicMainProduct(
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
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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

    const goalkeepergonebananasclassic_mainHTML=goalkeepergonebananasclassic_mainproduct.map(goalkeepergonebananasclassic_MainProducts=>goalkeepergonebananasclassic_MainProducts.getGoalKeeperGoneBananasClassicMainProduct()).join('')
    
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
        new GoalKeeperGoneBananasPremiumMainProduct(
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
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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

    const goalkeepergonebananaspremium_mainHTML=goalkeepergonebananaspremium_mainproduct.map(goalkeepergonebananaspremium_MainProducts=>goalkeepergonebananaspremium_MainProducts.getGoalKeeperGoneBananasPremiumMainProduct()).join('')
    
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
        new GoalKeeperGoneBananasOversizedMainProduct(
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
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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

    const goalkeepergonebananasoversizedHTML=goalkeepergonebananasoversizedmain_product.map(goalkeepergonebananasoversizedMP=>goalkeepergonebananasoversizedMP.getGoalKeeperGoneBananasOversizedMainProduct()).join('');

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
        new GoalKeeperGoneBananasSweatshirtMainProduct(
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
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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

    const goalkeepergonebananassweatshirtHTML=goalkeepergonebananassweatshirtmain_product.map(goalkeepergonebananassweatshirtMP=>goalkeepergonebananassweatshirtMP.getGoalKeeperGoneBananasSweatMainProduct()).join('');

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

export function shockwavestrikerpremiumoversizedhoodie_main(){

    const shockwavestrikerpremiumoversizedhoodiemain_product=[
        new GoalKeeperGoneBananasPremiumOversizedHoodieMainProduct(
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
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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

    const shockwavestrikerpremiumoversizedhoodieHTML=shockwavestrikerpremiumoversizedhoodiemain_product.map(shockwavestrikerpremiumoversizedhoodieMP=>shockwavestrikerpremiumoversizedhoodieMP.getGoalKeeperGoneBananasPremiumOversizedHoodieMainProduct()).join('');

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
        new GoalKeeperGoneBananasLightweightHoodieMainProduct(
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
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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

    const shockwavestrikerlightweighthoodieHTML=shockwavestrikerlightweighthoodiemain_product.map(shockwavestrikerlightweighthoodieMP=>shockwavestrikerlightweighthoodieMP.getGoalKeeperGoneBananasLightweightHoodieMainProduct()).join('');

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

export function shockwavestrikerpremiumoversizedsweatshirt_main(){

    const shockwavestrikerpremiumoversizedsweatshirtmain_product=[
        new GoalKeeperGoneBananasPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Shockwave Striker",
            0,
            0
        )
    ];

    const shockwavestrikerpremiumoversizedsweatshirtinfo={
        name:"Shockwave Striker </br> (Premium Oversized Sweatshirt)",
        creator:"Joseph Morales",
        Price: 62.00,
        details:"Thunderstrike Panther – Electric Striker Energy Unleash the storm on the field with this electrifying full‑body black panther design. Dressed in a yellow‑to‑blue gradient drifit uniform patterned with sharp triangles, the panther launches a lightning‑charged kick that crackles with raw power. Painterly brushstrokes capture every muscle, spark, and motion as dirt and grass fly beneath its strike. The wild grin and fierce eyes radiate fearless confidence — perfect for athletes, dreamers, and fans who play with heart and chaos.",
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

    const shockwavestrikerpremiumoversizedsweatshirtHTML=shockwavestrikerpremiumoversizedsweatshirtmain_product.map(shockwavestrikerpremiumoversizedsweatshirtMP=>shockwavestrikerpremiumoversizedsweatshirtMP.getGoalKeeperGoneBananasPremiumOversizedSweatshirtMainProduct()).join('');

    const shockwavestrikerpremiumoversizedsweatshirtinfoHTML=`
        <h1>${shockwavestrikerpremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${shockwavestrikerpremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${shockwavestrikerpremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${shockwavestrikerpremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${shockwavestrikerpremiumoversizedsweatshirtinfo.type} are ${shockwavestrikerpremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${shockwavestrikerpremiumoversizedsweatshirtinfo.size.s}, ${shockwavestrikerpremiumoversizedsweatshirtinfo.size.m}, ${shockwavestrikerpremiumoversizedsweatshirtinfo.size.l}, ${shockwavestrikerpremiumoversizedsweatshirtinfo.size.xl}, ${shockwavestrikerpremiumoversizedsweatshirtinfo.size.xxl}, ${shockwavestrikerpremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${shockwavestrikerpremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${shockwavestrikerpremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function shockwavestrikerpremiumoversizedsweatshirt_gallery(){

    const shockwavestrikerpremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Shockwave Striker"
    }
    return `
          <div id="shockwavestrikerpremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="shockwavestrikerpremiumoversizedsweatshirt_gallery_flex">
                 <img src="${shockwavestrikerpremiumoversizedsweatshirtgallery.img}" alt="${shockwavestrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumoversizedsweatshirtgallery.img}" alt="${shockwavestrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumoversizedsweatshirtgallery.img}" alt="${shockwavestrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${shockwavestrikerpremiumoversizedsweatshirtgallery.img}" alt="${shockwavestrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}