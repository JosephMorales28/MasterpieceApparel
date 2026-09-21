class GoalBunnyFrenzyMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzyMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class GoalBunnyFrenzyClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzyClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class GoalBunnyFrenzyPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzyPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class GoalBunnyFrenzyOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzyOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalBunnyFrenzySweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzySweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalBunnyFrenzyPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzyPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalBunnyFrenzyLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzyLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class GoalBunnyFrenzyPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getGoalBunnyFrenzyPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function goalbunnyfrenzy_main(){
    
    const goalbunnyfrenzymain_product=[
        new GoalBunnyFrenzyMainProduct(
            "/img/idontfish.webp",
            "Goal Bunny Frenzy Global Soccer Edition",
            0,
            0
        )
    ];

    const goalbunnyfrenzyinfo={
        name:"Goal Bunny Frenzy </br> Global Soccer Edition </br> (Essential Shirt)",
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
    
    const goalbunnyfrenzyHTML=goalbunnyfrenzymain_product.map(goalbunnyfrenzyMP=>goalbunnyfrenzyMP.getGoalBunnyFrenzyMainProduct()).join('');
    
    const goalbunnyfrenzyinfoHTML=`
        <h1>${goalbunnyfrenzyinfo.name}</h1>
        <p>Created by : ${goalbunnyfrenzyinfo.creator}</p>
        <strong>$ ${goalbunnyfrenzyinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalbunnyfrenzyinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalbunnyfrenzyinfo.type} are ${goalbunnyfrenzyinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalbunnyfrenzyinfo.size.s}, ${goalbunnyfrenzyinfo.size.m}, ${goalbunnyfrenzyinfo.size.l}, ${goalbunnyfrenzyinfo.size.xl}, ${goalbunnyfrenzyinfo.size.xxl}, ${goalbunnyfrenzyinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalbunnyfrenzyHTML}
                    </div>
                    <div>
                         ${goalbunnyfrenzyinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalbunnyfrenzymain_gallery(){

    const goalbunnyfrenzygallery={
        img: "/img/gallery1.webp",
        alt:"Goal Bunny Frenzy Global Soccer Edition"
    }
    return `
          <div id="goalbunnyfrenzygallery">
              <h1>Image Product</h1>
              <div class="goalbunnyfrenzy_gallery_flex">
                 <img src="${goalbunnyfrenzygallery.img}" alt="${goalbunnyfrenzygallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzygallery.img}" alt="${goalbunnyfrenzygallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzygallery.img}" alt="${goalbunnyfrenzygallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzygallery.img}" alt="${goalbunnyfrenzygallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function goalbunnyfrenzyclassic_main(){
   
    const goalbunnyfrenzyclassic_mainproduct=[
        new GoalBunnyFrenzyClassicMainProduct(
            "/img/idontfish.webp",
            "Goal Bunny Frenzy Global Soccer Edition - classic shirt",
            0,
            0
        )
    ];

    const goalbunnyfrenzyclassicinfo={
        name:"Goal Bunny Frenzy</br> Global Soccer Edition </br> (Classic Shirt)",
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

    const goalbunnyfrenzyclassic_mainHTML=goalbunnyfrenzyclassic_mainproduct.map(goalbunnyfrenzyclassic_MainProducts=>goalbunnyfrenzyclassic_MainProducts.getGoalBunnyFrenzyClassicMainProduct()).join('')
    
    const goalbunnyfrenzyclassicinfoHTML=`
        <h1>${goalbunnyfrenzyclassicinfo.name}</h1>
        <p>Created by : ${goalbunnyfrenzyclassicinfo.creator}</p>
        <strong>$ ${goalbunnyfrenzyclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalbunnyfrenzyclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalbunnyfrenzyclassicinfo.type} are ${goalbunnyfrenzyclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalbunnyfrenzyclassicinfo.size.s}, ${goalbunnyfrenzyclassicinfo.size.m}, ${goalbunnyfrenzyclassicinfo.size.l}, ${goalbunnyfrenzyclassicinfo.size.xl}, ${goalbunnyfrenzyclassicinfo.size.xxl}, ${goalbunnyfrenzyclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalbunnyfrenzyclassic_mainHTML}
                    </div>
                    <div>
                         ${goalbunnyfrenzyclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalbunnyfrenzyclassic_gallery(){

    const goalbunnyfrenzyclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Bunny Frenzy Global Soccer Edition"
    }
    return `
          <div id="goalbunnyfrenzyclassicgallery">
              <h1>Image Product</h1>
              <div class="goalbunnyfrenzyclassic_gallery_flex">
                 <img src="${goalbunnyfrenzyclassicgallery.img}" alt="${goalbunnyfrenzyclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzyclassicgallery.img}" alt="${goalbunnyfrenzyclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzyclassicgallery.img}" alt="${goalbunnyfrenzyclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzyclassicgallery.img}" alt="${goalbunnyfrenzyclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function goalbunnyfrenzypremium_main(){
   
    const goalbunnyfrenzypremium_mainproduct=[
        new GoalBunnyFrenzyPremiumMainProduct(
            "/img/idontfish.webp",
            "Goal Bunny Frenzy Global Soccer Edition - Premium shirt",
            0,
            0
        )
    ];

    const goalbunnyfrenzypremiuminfo={
        name:"Goal Bunny Frenzy </br> Global Soccer Edition </br> (Premium Shirt)",
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

    const goalbunnyfrenzypremium_mainHTML=goalbunnyfrenzypremium_mainproduct.map(goalbunnyfrenzypremium_MainProducts=>goalbunnyfrenzypremium_MainProducts.getGoalBunnyFrenzyPremiumMainProduct()).join('')
    
    const goalbunnyfrenzypremiuminfoHTML=`
        <h1>${goalbunnyfrenzypremiuminfo.name}</h1>
        <p>Created by : ${goalbunnyfrenzypremiuminfo.creator}</p>
        <strong>$ ${goalbunnyfrenzypremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalbunnyfrenzypremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${goalbunnyfrenzypremiuminfo.type} are ${goalbunnyfrenzypremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalbunnyfrenzypremiuminfo.size.s}, ${goalbunnyfrenzypremiuminfo.size.m}, ${goalbunnyfrenzypremiuminfo.size.l}, ${goalbunnyfrenzypremiuminfo.size.xl}, ${goalbunnyfrenzypremiuminfo.size.xxl}, ${goalbunnyfrenzypremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalbunnyfrenzypremium_mainHTML}
                    </div>
                    <div>
                         ${goalbunnyfrenzypremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalbunnyfrenzypremium_gallery(){

    const goalbunnyfrenzypremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Bunny Frenzy Global Soccer Edition"
    }
    return `
          <div id="goalbunnyfrenzypremiumgallery">
              <h1>Image Product</h1>
              <div class="goalbunnyfrenzypremium_gallery_flex">
                 <img src="${goalbunnyfrenzypremiumgallery.img}" alt="${goalbunnyfrenzypremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzypremiumgallery.img}" alt="${goalbunnyfrenzypremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzypremiumgallery.img}" alt="${goalbunnyfrenzypremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzypremiumgallery.img}" alt="${goalbunnyfrenzypremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function goalbunnyfrenzyoversized_main(){

    const goalbunnyfrenzyoversizedmain_product=[
        new GoalBunnyFrenzyOversizedMainProduct(
            "/img/idontfish.webp",
            "Goal Bunny Frenzy Global Soccer Edition",
            0,
            0
        )
    ];

    const goalbunnyfrenzyoversizedinfo={
        name:"Goal Bunny Frenzy </br>Global Soccer Edition </br> (Oversized Shirt)",
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

    const goalbunnyfrenzyoversizedHTML=goalbunnyfrenzyoversizedmain_product.map(goalbunnyfrenzyoversizedMP=>goalbunnyfrenzyoversizedMP.getGoalBunnyFrenzyOversizedMainProduct()).join('');

    const goalbunnyfrenzyoversizedinfoHTML=`
        <h1>${goalbunnyfrenzyoversizedinfo.name}</h1>
        <p>Created by : ${goalbunnyfrenzyoversizedinfo.creator}</p>
        <strong>$ ${goalbunnyfrenzyoversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalbunnyfrenzyoversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalbunnyfrenzyoversizedinfo.type} are ${goalbunnyfrenzyoversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalbunnyfrenzyoversizedinfo.size.s}, ${goalbunnyfrenzyoversizedinfo.size.m}, ${goalbunnyfrenzyoversizedinfo.size.l}, ${goalbunnyfrenzyoversizedinfo.size.xl}, ${goalbunnyfrenzyoversizedinfo.size.xxl}, ${goalbunnyfrenzyoversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalbunnyfrenzyoversizedHTML}
                    </div>
                    <div>
                         ${goalbunnyfrenzyoversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalbunnyfrenzyoversized_gallery(){

    const goalbunnyfrenzyoversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Bunny Frenzy Global Soccer Edition"
    }
    return `
          <div id="goalbunnyfrenzyoversizedgallery">
              <h1>Image Product</h1>
              <div class="goalbunnyfrenzyoversized_gallery_flex">
                 <img src="${goalbunnyfrenzyoversizedgallery.img}" alt="${goalbunnyfrenzyoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzyoversizedgallery.img}" alt="${goalbunnyfrenzyoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzyoversizedgallery.img}" alt="${goalbunnyfrenzyoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzyoversizedgallery.img}" alt="${goalbunnyfrenzyoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function goalbunnyfrenzysweatshirt_main(){

    const goalbunnyfrenzysweatshirtmain_product=[
        new GoalBunnyFrenzySweatshirtMainProduct(
            "/img/idontfish.webp",
            "Goal Bunny Frenzy Global Soccer Edition",
            0,
            0
        )
    ];

    const goalbunnyfrenzysweatshirtinfo={
        name:"Goal Bunny Frenzy </br>Global Soccer Edition </br> (Sweat Shirt)",
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

    const goalbunnyfrenzysweatshirtHTML=goalbunnyfrenzysweatshirtmain_product.map(goalbunnyfrenzysweatshirtMP=>goalbunnyfrenzysweatshirtMP.getGoalBunnyFrenzySweatMainProduct()).join('');

    const goalbunnyfrenzysweatshirtinfoHTML=`
        <h1>${goalbunnyfrenzysweatshirtinfo.name}</h1>
        <p>Created by : ${goalbunnyfrenzysweatshirtinfo.creator}</p>
        <strong>$ ${goalbunnyfrenzysweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalbunnyfrenzysweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalbunnyfrenzysweatshirtinfo.type} are ${goalbunnyfrenzysweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalbunnyfrenzysweatshirtinfo.size.s}, ${goalbunnyfrenzysweatshirtinfo.size.m}, ${goalbunnyfrenzysweatshirtinfo.size.l}, ${goalbunnyfrenzysweatshirtinfo.size.xl}, ${goalbunnyfrenzysweatshirtinfo.size.xxl}, ${goalbunnyfrenzysweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalbunnyfrenzysweatshirtHTML}
                    </div>
                    <div>
                         ${goalbunnyfrenzysweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalbunnyfrenzysweatshirt_gallery(){

    const goalbunnyfrenzysweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Goal Bunny Frenzy Global Soccer Edition"
    }
    return `
          <div id="goalbunnyfrenzysweatshirtgallery">
              <h1>Image Product</h1>
              <div class="goalbunnyfrenzysweatshirt_gallery_flex">
                 <img src="${goalbunnyfrenzysweatshirtgallery.img}" alt="${goalbunnyfrenzysweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzysweatshirtgallery.img}" alt="${goalbunnyfrenzysweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzysweatshirtgallery.img}" alt="${goalbunnyfrenzysweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzysweatshirtgallery.img}" alt="${goalbunnyfrenzysweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function goalbunnyfrenzypremiumoversizedhoodie_main(){

    const goalbunnyfrenzypremiumoversizedhoodiemain_product=[
        new GoalBunnyFrenzyPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Goal Bunny Frenzy Global Soccer Edition",
            0,
            0
        )
    ];

    const goalbunnyfrenzypremiumoversizedhoodieinfo={
        name:"Goal Bunny Frenzy</br> Global Soccer Edition </br> ( Premium Oversized Hoodie )",
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

    const goalbunnyfrenzypremiumoversizedhoodieHTML=goalbunnyfrenzypremiumoversizedhoodiemain_product.map(goalbunnyfrenzypremiumoversizedhoodieMP=>goalbunnyfrenzypremiumoversizedhoodieMP.getGoalBunnyFrenzyPremiumOversizedHoodieMainProduct()).join('');

    const goalbunnyfrenzypremiumoversizedhoodieinfoHTML=`
        <h1>${goalbunnyfrenzypremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${goalbunnyfrenzypremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${goalbunnyfrenzypremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalbunnyfrenzypremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalbunnyfrenzypremiumoversizedhoodieinfo.type} are ${goalbunnyfrenzypremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalbunnyfrenzypremiumoversizedhoodieinfo.size.s}, ${goalbunnyfrenzypremiumoversizedhoodieinfo.size.m}, ${goalbunnyfrenzypremiumoversizedhoodieinfo.size.l}, ${goalbunnyfrenzypremiumoversizedhoodieinfo.size.xl}, ${goalbunnyfrenzypremiumoversizedhoodieinfo.size.xxl}, ${goalbunnyfrenzypremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalbunnyfrenzypremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${goalbunnyfrenzypremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalbunnyfrenzypremiumoversizedhoodie_gallery(){

    const goalbunnyfrenzypremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Goal Bunny Frenzy Global Soccer Edition"
    }
    return `
          <div id="goalbunnyfrenzypremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="goalbunnyfrenzypremiumoversizedhoodie_gallery_flex">
                 <img src="${goalbunnyfrenzypremiumoversizedhoodiegallery.img}" alt="${goalbunnyfrenzypremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzypremiumoversizedhoodiegallery.img}" alt="${goalbunnyfrenzypremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzypremiumoversizedhoodiegallery.img}" alt="${goalbunnyfrenzypremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzypremiumoversizedhoodiegallery.img}" alt="${goalbunnyfrenzypremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function goalbunnyfrenzylightweighthoodie_main(){

    const goalbunnyfrenzylightweighthoodiemain_product=[
        new GoalBunnyFrenzyLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Goal Bunny Frenzy Global Soccer Edition",
            0,
            0
        )
    ];

    const goalbunnyfrenzylightweighthoodieinfo={
        name:"Goal Bunny Frenzy </br>Global Soccer Edition</br> (Lightweight Hoodie)",
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

    const goalbunnyfrenzylightweighthoodieHTML=goalbunnyfrenzylightweighthoodiemain_product.map(goalbunnyfrenzylightweighthoodieMP=>goalbunnyfrenzylightweighthoodieMP.getGoalBunnyFrenzyLightweightHoodieMainProduct()).join('');

    const goalbunnyfrenzylightweighthoodieinfoHTML=`
        <h1>${goalbunnyfrenzylightweighthoodieinfo.name}</h1>
        <p>Created by : ${goalbunnyfrenzylightweighthoodieinfo.creator}</p>
        <strong>$ ${goalbunnyfrenzylightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${goalbunnyfrenzylightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${goalbunnyfrenzylightweighthoodieinfo.type} are ${goalbunnyfrenzylightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${goalbunnyfrenzylightweighthoodieinfo.size.s}, ${goalbunnyfrenzylightweighthoodieinfo.size.m}, ${goalbunnyfrenzylightweighthoodieinfo.size.l}, ${goalbunnyfrenzylightweighthoodieinfo.size.xl}, ${goalbunnyfrenzylightweighthoodieinfo.size.xxl}, ${goalbunnyfrenzylightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${goalbunnyfrenzylightweighthoodieHTML}
                    </div>
                    <div>
                         ${goalbunnyfrenzylightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function goalbunnyfrenzylightweighthoodie_gallery(){

    const goalbunnyfrenzylightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Goal Bunny Frenzy Global Soccer Edition"
    }
    return `
          <div id="goalbunnyfrenzylightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="goalbunnyfrenzylightweighthoodie_gallery_flex">
                 <img src="${goalbunnyfrenzylightweighthoodiegallery.img}" alt="${goalbunnyfrenzylightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzylightweighthoodiegallery.img}" alt="${goalbunnyfrenzylightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzylightweighthoodiegallery.img}" alt="${goalbunnyfrenzylightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${goalbunnyfrenzylightweighthoodiegallery.img}" alt="${goalbunnyfrenzylightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function shockwavestrikerpremiumoversizedsweatshirt_main(){

    const shockwavestrikerpremiumoversizedsweatshirtmain_product=[
        new GoalBunnyFrenzyPremiumOversizedSweatshirtMainProduct(
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

    const shockwavestrikerpremiumoversizedsweatshirtHTML=shockwavestrikerpremiumoversizedsweatshirtmain_product.map(shockwavestrikerpremiumoversizedsweatshirtMP=>shockwavestrikerpremiumoversizedsweatshirtMP.getGoalBunnyFrenzyPremiumOversizedSweatshirtMainProduct()).join('');

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