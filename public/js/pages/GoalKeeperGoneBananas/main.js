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

export function shockwavestrikerclassic_main(){
   
    const shockwavestrikerclassic_mainproduct=[
        new GoalKeeperGoneBananasClassicMainProduct(
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

    const shockwavestrikerclassic_mainHTML=shockwavestrikerclassic_mainproduct.map(shockwavestrikerclassic_MainProducts=>shockwavestrikerclassic_MainProducts.getGoalKeeperGoneBananasClassicMainProduct()).join('')
    
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
        new GoalKeeperGoneBananasPremiumMainProduct(
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

    const shockwavestrikerpremium_mainHTML=shockwavestrikerpremium_mainproduct.map(shockwavestrikerpremium_MainProducts=>shockwavestrikerpremium_MainProducts.getGoalKeeperGoneBananasPremiumMainProduct()).join('')
    
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
        new GoalKeeperGoneBananasOversizedMainProduct(
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

    const shockwavestrikeroversizedHTML=shockwavestrikeroversizedmain_product.map(shockwavestrikeroversizedMP=>shockwavestrikeroversizedMP.getGoalKeeperGoneBananasOversizedMainProduct()).join('');

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
        new GoalKeeperGoneBananasSweatshirtMainProduct(
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

    const shockwavestrikersweatshirtHTML=shockwavestrikersweatshirtmain_product.map(shockwavestrikersweatshirtMP=>shockwavestrikersweatshirtMP.getGoalKeeperGoneBananasSweatMainProduct()).join('');

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