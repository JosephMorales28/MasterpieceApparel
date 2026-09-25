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

export function goalkeepergonebananaspremiumoversizedhoodie_main(){

    const goalkeepergonebananaspremiumoversizedhoodiemain_product=[
        new GoalKeeperGoneBananasPremiumOversizedHoodieMainProduct(
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

    const goalkeepergonebananaspremiumoversizedhoodieHTML=goalkeepergonebananaspremiumoversizedhoodiemain_product.map(goalkeepergonebananaspremiumoversizedhoodieMP=>goalkeepergonebananaspremiumoversizedhoodieMP.getGoalKeeperGoneBananasPremiumOversizedHoodieMainProduct()).join('');

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
        new GoalKeeperGoneBananasLightweightHoodieMainProduct(
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

    const goalkeepergonebananaslightweighthoodieHTML=goalkeepergonebananaslightweighthoodiemain_product.map(goalkeepergonebananaslightweighthoodieMP=>goalkeepergonebananaslightweighthoodieMP.getGoalKeeperGoneBananasLightweightHoodieMainProduct()).join('');

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
        new GoalKeeperGoneBananasPremiumOversizedSweatshirtMainProduct(
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

    const goalkeepergonebananaspremiumoversizedsweatshirtHTML=goalkeepergonebananaspremiumoversizedsweatshirtmain_product.map(goalkeepergonebananaspremiumoversizedsweatshirtMP=>goalkeepergonebananaspremiumoversizedsweatshirtMP.getGoalKeeperGoneBananasPremiumOversizedSweatshirtMainProduct()).join('');

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