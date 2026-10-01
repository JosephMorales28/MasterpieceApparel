class StormfieldStrikerMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class StormfieldStrikerClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class StormfieldStrikerPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class StormfieldStrikerOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class StormfieldStrikerSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class StormfieldStrikerPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class StormfieldStrikerLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class StormfieldStrikerPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getStormfieldStrikerPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function stormfieldstriker_main(){
    
    const stormfieldstrikermain_product=[
        new StormfieldStrikerMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker",
            0,
            0
        )
    ];

    const stormfieldstrikerinfo={
        name:"Stormfield Striker</br>(Essential Shirt)",
        creator:"Joseph Morales",
        Price: 30.69,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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
    
    const stormfieldstrikerHTML=stormfieldstrikermain_product.map(stormfieldstrikerMP=>stormfieldstrikerMP.getStormfieldStrikerMainProduct()).join('');
    
    const stormfieldstrikerinfoHTML=`
        <h1>${stormfieldstrikerinfo.name}</h1>
        <p>Created by : ${stormfieldstrikerinfo.creator}</p>
        <strong>$ ${stormfieldstrikerinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikerinfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikerinfo.type} are ${stormfieldstrikerinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikerinfo.size.s}, ${stormfieldstrikerinfo.size.m}, ${stormfieldstrikerinfo.size.l}, ${stormfieldstrikerinfo.size.xl}, ${stormfieldstrikerinfo.size.xxl}, ${stormfieldstrikerinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikerHTML}
                    </div>
                    <div>
                         ${stormfieldstrikerinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikermain_gallery(){

    const stormfieldstrikergallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikergallery">
              <h1>Image Product</h1>
              <div class="stormfieldstriker_gallery_flex">
                 <img src="${stormfieldstrikergallery.img}" alt="${stormfieldstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikergallery.img}" alt="${stormfieldstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikergallery.img}" alt="${stormfieldstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikergallery.img}" alt="${stormfieldstrikergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function stormfieldstrikerclassic_main(){
   
    const stormfieldstrikerclassic_mainproduct=[
        new StormfieldStrikerClassicMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker",
            0,
            0
        )
    ];

    const stormfieldstrikerclassicinfo={
        name:"Stormfield Striker</br>(Classic Shirt)",
        creator:"Joseph Morales",
        Price: 32.00,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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

    const stormfieldstrikerclassic_mainHTML=stormfieldstrikerclassic_mainproduct.map(stormfieldstrikerclassic_MainProducts=>stormfieldstrikerclassic_MainProducts.getStormfieldStrikerClassicMainProduct()).join('')
    
    const stormfieldstrikerclassicinfoHTML=`
        <h1>${stormfieldstrikerclassicinfo.name}</h1>
        <p>Created by : ${stormfieldstrikerclassicinfo.creator}</p>
        <strong>$ ${stormfieldstrikerclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikerclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikerclassicinfo.type} are ${stormfieldstrikerclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikerclassicinfo.size.s}, ${stormfieldstrikerclassicinfo.size.m}, ${stormfieldstrikerclassicinfo.size.l}, ${stormfieldstrikerclassicinfo.size.xl}, ${stormfieldstrikerclassicinfo.size.xxl}, ${stormfieldstrikerclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikerclassic_mainHTML}
                    </div>
                    <div>
                         ${stormfieldstrikerclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikerclassic_gallery(){

    const stormfieldstrikerclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikerclassicgallery">
              <h1>Image Product</h1>
              <div class="stormfieldstrikerclassic_gallery_flex">
                 <img src="${stormfieldstrikerclassicgallery.img}" alt="${stormfieldstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerclassicgallery.img}" alt="${stormfieldstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerclassicgallery.img}" alt="${stormfieldstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerclassicgallery.img}" alt="${stormfieldstrikerclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function stormfieldstrikerpremium_main(){
   
    const stormfieldstrikerpremium_mainproduct=[
        new StormfieldStrikerPremiumMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker - Premium shirt",
            0,
            0
        )
    ];

    const stormfieldstrikerpremiuminfo={
        name:"Stormfield Striker</br>(Premium Shirt)",
        creator:"Joseph Morales",
        Price: 46.35,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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

    const stormfieldstrikerpremium_mainHTML=stormfieldstrikerpremium_mainproduct.map(stormfieldstrikerpremium_MainProducts=>stormfieldstrikerpremium_MainProducts.getStormfieldStrikerPremiumMainProduct()).join('')
    
    const stormfieldstrikerpremiuminfoHTML=`
        <h1>${stormfieldstrikerpremiuminfo.name}</h1>
        <p>Created by : ${stormfieldstrikerpremiuminfo.creator}</p>
        <strong>$ ${stormfieldstrikerpremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikerpremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikerpremiuminfo.type} are ${stormfieldstrikerpremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikerpremiuminfo.size.s}, ${stormfieldstrikerpremiuminfo.size.m}, ${stormfieldstrikerpremiuminfo.size.l}, ${stormfieldstrikerpremiuminfo.size.xl}, ${stormfieldstrikerpremiuminfo.size.xxl}, ${stormfieldstrikerpremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikerpremium_mainHTML}
                    </div>
                    <div>
                         ${stormfieldstrikerpremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikerpremium_gallery(){

    const stormfieldstrikerpremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikerpremiumgallery">
              <h1>Image Product</h1>
              <div class="stormfieldstrikerpremium_gallery_flex">
                 <img src="${stormfieldstrikerpremiumgallery.img}" alt="${stormfieldstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumgallery.img}" alt="${stormfieldstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumgallery.img}" alt="${stormfieldstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumgallery.img}" alt="${stormfieldstrikerpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function stormfieldstrikeroversized_main(){

    const stormfieldstrikeroversizedmain_product=[
        new StormfieldStrikerOversizedMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker",
            0,
            0
        )
    ];

    const stormfieldstrikeroversizedinfo={
        name:"Stormfield Striker</br>(Oversized Shirt)",
        creator:"Joseph Morales",
        Price: 37.00,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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

    const stormfieldstrikeroversizedHTML=stormfieldstrikeroversizedmain_product.map(stormfieldstrikeroversizedMP=>stormfieldstrikeroversizedMP.getStormfieldStrikerOversizedMainProduct()).join('');

    const stormfieldstrikeroversizedinfoHTML=`
        <h1>${stormfieldstrikeroversizedinfo.name}</h1>
        <p>Created by : ${stormfieldstrikeroversizedinfo.creator}</p>
        <strong>$ ${stormfieldstrikeroversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikeroversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikeroversizedinfo.type} are ${stormfieldstrikeroversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikeroversizedinfo.size.s}, ${stormfieldstrikeroversizedinfo.size.m}, ${stormfieldstrikeroversizedinfo.size.l}, ${stormfieldstrikeroversizedinfo.size.xl}, ${stormfieldstrikeroversizedinfo.size.xxl}, ${stormfieldstrikeroversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikeroversizedHTML}
                    </div>
                    <div>
                         ${stormfieldstrikeroversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikeroversized_gallery(){

    const stormfieldstrikeroversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikeroversizedgallery">
              <h1>Image Product</h1>
              <div class="stormfieldstrikeroversized_gallery_flex">
                 <img src="${stormfieldstrikeroversizedgallery.img}" alt="${stormfieldstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikeroversizedgallery.img}" alt="${stormfieldstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikeroversizedgallery.img}" alt="${stormfieldstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikeroversizedgallery.img}" alt="${stormfieldstrikeroversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function stormfieldstrikersweatshirt_main(){

    const stormfieldstrikersweatshirtmain_product=[
        new StormfieldStrikerSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker",
            0,
            0
        )
    ];

    const stormfieldstrikersweatshirtinfo={
        name:"Stormfield Striker</br>(Sweat Shirt)",
        creator:"Joseph Morales",
        Price: 48.00,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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

    const stormfieldstrikersweatshirtHTML=stormfieldstrikersweatshirtmain_product.map(stormfieldstrikersweatshirtMP=>stormfieldstrikersweatshirtMP.getStormfieldStrikerSweatMainProduct()).join('');

    const stormfieldstrikersweatshirtinfoHTML=`
        <h1>${stormfieldstrikersweatshirtinfo.name}</h1>
        <p>Created by : ${stormfieldstrikersweatshirtinfo.creator}</p>
        <strong>$ ${stormfieldstrikersweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikersweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikersweatshirtinfo.type} are ${stormfieldstrikersweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikersweatshirtinfo.size.s}, ${stormfieldstrikersweatshirtinfo.size.m}, ${stormfieldstrikersweatshirtinfo.size.l}, ${stormfieldstrikersweatshirtinfo.size.xl}, ${stormfieldstrikersweatshirtinfo.size.xxl}, ${stormfieldstrikersweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikersweatshirtHTML}
                    </div>
                    <div>
                         ${stormfieldstrikersweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikersweatshirt_gallery(){

    const stormfieldstrikersweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikersweatshirtgallery">
              <h1>Image Product</h1>
              <div class="stormfieldstrikersweatshirt_gallery_flex">
                 <img src="${stormfieldstrikersweatshirtgallery.img}" alt="${stormfieldstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikersweatshirtgallery.img}" alt="${stormfieldstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikersweatshirtgallery.img}" alt="${stormfieldstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikersweatshirtgallery.img}" alt="${stormfieldstrikersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function stormfieldstrikerpremiumoversizedhoodie_main(){

    const stormfieldstrikerpremiumoversizedhoodiemain_product=[
        new StormfieldStrikerPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker",
            0,
            0
        )
    ];

    const stormfieldstrikerpremiumoversizedhoodieinfo={
        name:"Stormfield Striker</br>( Premium Oversized Hoodie )",
        creator:"Joseph Morales",
        Price: 68.00,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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

    const stormfieldstrikerpremiumoversizedhoodieHTML=stormfieldstrikerpremiumoversizedhoodiemain_product.map(stormfieldstrikerpremiumoversizedhoodieMP=>stormfieldstrikerpremiumoversizedhoodieMP.getStormfieldStrikerPremiumOversizedHoodieMainProduct()).join('');

    const stormfieldstrikerpremiumoversizedhoodieinfoHTML=`
        <h1>${stormfieldstrikerpremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${stormfieldstrikerpremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${stormfieldstrikerpremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikerpremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikerpremiumoversizedhoodieinfo.type} are ${stormfieldstrikerpremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikerpremiumoversizedhoodieinfo.size.s}, ${stormfieldstrikerpremiumoversizedhoodieinfo.size.m}, ${stormfieldstrikerpremiumoversizedhoodieinfo.size.l}, ${stormfieldstrikerpremiumoversizedhoodieinfo.size.xl}, ${stormfieldstrikerpremiumoversizedhoodieinfo.size.xxl}, ${stormfieldstrikerpremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikerpremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${stormfieldstrikerpremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikerpremiumoversizedhoodie_gallery(){

    const stormfieldstrikerpremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikerpremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="stormfieldstrikerpremiumoversizedhoodie_gallery_flex">
                 <img src="${stormfieldstrikerpremiumoversizedhoodiegallery.img}" alt="${stormfieldstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumoversizedhoodiegallery.img}" alt="${stormfieldstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumoversizedhoodiegallery.img}" alt="${stormfieldstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumoversizedhoodiegallery.img}" alt="${stormfieldstrikerpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function stormfieldstrikerlightweighthoodie_main(){

    const stormfieldstrikerlightweighthoodiemain_product=[
        new StormfieldStrikerLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker",
            0,
            0
        )
    ];

    const stormfieldstrikerlightweighthoodieinfo={
        name:"Stormfield Striker</br>(Lightweight Hoodie)",
        creator:"Joseph Morales",
        Price: 62.21,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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

    const stormfieldstrikerlightweighthoodieHTML=stormfieldstrikerlightweighthoodiemain_product.map(stormfieldstrikerlightweighthoodieMP=>stormfieldstrikerlightweighthoodieMP.getStormfieldStrikerLightweightHoodieMainProduct()).join('');

    const stormfieldstrikerlightweighthoodieinfoHTML=`
        <h1>${stormfieldstrikerlightweighthoodieinfo.name}</h1>
        <p>Created by : ${stormfieldstrikerlightweighthoodieinfo.creator}</p>
        <strong>$ ${stormfieldstrikerlightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikerlightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikerlightweighthoodieinfo.type} are ${stormfieldstrikerlightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikerlightweighthoodieinfo.size.s}, ${stormfieldstrikerlightweighthoodieinfo.size.m}, ${stormfieldstrikerlightweighthoodieinfo.size.l}, ${stormfieldstrikerlightweighthoodieinfo.size.xl}, ${stormfieldstrikerlightweighthoodieinfo.size.xxl}, ${stormfieldstrikerlightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikerlightweighthoodieHTML}
                    </div>
                    <div>
                         ${stormfieldstrikerlightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikerlightweighthoodie_gallery(){

    const stormfieldstrikerlightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikerlightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="stormfieldstrikerlightweighthoodie_gallery_flex">
                 <img src="${stormfieldstrikerlightweighthoodiegallery.img}" alt="${stormfieldstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerlightweighthoodiegallery.img}" alt="${stormfieldstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerlightweighthoodiegallery.img}" alt="${stormfieldstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerlightweighthoodiegallery.img}" alt="${stormfieldstrikerlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function stormfieldstrikerpremiumoversizedsweatshirt_main(){

    const stormfieldstrikerpremiumoversizedsweatshirtmain_product=[
        new StormfieldStrikerPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Stormfield Striker",
            0,
            0
        )
    ];

    const stormfieldstrikerpremiumoversizedsweatshirtinfo={
        name:"Stormfield Striker</br>(Premium Oversized Sweatshirt)",
        creator:"Joseph Morales",
        Price: 62.00,
        details:"Unleash the storm on the field with this electrifying design featuring a fearless hound striker mid‑air, powering a lightning‑charged header under stadium lights. Dressed in a navy‑blue to lime‑violet gradient drifit uniform with blossom patterns, this crazy‑smiling hound radiates pure energy and confidence.",
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

    const stormfieldstrikerpremiumoversizedsweatshirtHTML=stormfieldstrikerpremiumoversizedsweatshirtmain_product.map(stormfieldstrikerpremiumoversizedsweatshirtMP=>stormfieldstrikerpremiumoversizedsweatshirtMP.getStormfieldStrikerPremiumOversizedSweatshirtMainProduct()).join('');

    const stormfieldstrikerpremiumoversizedsweatshirtinfoHTML=`
        <h1>${stormfieldstrikerpremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${stormfieldstrikerpremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${stormfieldstrikerpremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${stormfieldstrikerpremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${stormfieldstrikerpremiumoversizedsweatshirtinfo.type} are ${stormfieldstrikerpremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${stormfieldstrikerpremiumoversizedsweatshirtinfo.size.s}, ${stormfieldstrikerpremiumoversizedsweatshirtinfo.size.m}, ${stormfieldstrikerpremiumoversizedsweatshirtinfo.size.l}, ${stormfieldstrikerpremiumoversizedsweatshirtinfo.size.xl}, ${stormfieldstrikerpremiumoversizedsweatshirtinfo.size.xxl}, ${stormfieldstrikerpremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${stormfieldstrikerpremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${stormfieldstrikerpremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function stormfieldstrikerpremiumoversizedsweatshirt_gallery(){

    const stormfieldstrikerpremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Stormfield Striker"
    }
    return `
          <div id="stormfieldstrikerpremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="stormfieldstrikerpremiumoversizedsweatshirt_gallery_flex">
                 <img src="${stormfieldstrikerpremiumoversizedsweatshirtgallery.img}" alt="${stormfieldstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumoversizedsweatshirtgallery.img}" alt="${stormfieldstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumoversizedsweatshirtgallery.img}" alt="${stormfieldstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${stormfieldstrikerpremiumoversizedsweatshirtgallery.img}" alt="${stormfieldstrikerpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}