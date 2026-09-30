class HoundOfThunderMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class HoundOfThunderClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class HoundOfThunderPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class HoundOfThunderOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class HoundOfThunderSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class HoundOfThunderPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class HoundOfThunderLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class HoundOfThunderPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getHoundOfThunderPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function houndofthunder_main(){
    
    const houndofthundermain_product=[
        new HoundOfThunderMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder",
            0,
            0
        )
    ];

    const houndofthunderinfo={
        name:"Hound of Thunder</br>(Essential Shirt)",
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
    
    const houndofthunderHTML=houndofthundermain_product.map(houndofthunderMP=>houndofthunderMP.getHoundOfThunderMainProduct()).join('');
    
    const houndofthunderinfoHTML=`
        <h1>${houndofthunderinfo.name}</h1>
        <p>Created by : ${houndofthunderinfo.creator}</p>
        <strong>$ ${houndofthunderinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthunderinfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthunderinfo.type} are ${houndofthunderinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthunderinfo.size.s}, ${houndofthunderinfo.size.m}, ${houndofthunderinfo.size.l}, ${houndofthunderinfo.size.xl}, ${houndofthunderinfo.size.xxl}, ${houndofthunderinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthunderHTML}
                    </div>
                    <div>
                         ${houndofthunderinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthundermain_gallery(){

    const houndofthundergallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthundergallery">
              <h1>Image Product</h1>
              <div class="houndofthunder_gallery_flex">
                 <img src="${houndofthundergallery.img}" alt="${houndofthundergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthundergallery.img}" alt="${houndofthundergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthundergallery.img}" alt="${houndofthundergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthundergallery.img}" alt="${houndofthundergallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function houndofthunderclassic_main(){
   
    const houndofthunderclassic_mainproduct=[
        new HoundOfThunderClassicMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder",
            0,
            0
        )
    ];

    const houndofthunderclassicinfo={
        name:"Hound of Thunder</br>(Classic Shirt)",
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

    const houndofthunderclassic_mainHTML=houndofthunderclassic_mainproduct.map(houndofthunderclassic_MainProducts=>houndofthunderclassic_MainProducts.getHoundOfThunderClassicMainProduct()).join('')
    
    const houndofthunderclassicinfoHTML=`
        <h1>${houndofthunderclassicinfo.name}</h1>
        <p>Created by : ${houndofthunderclassicinfo.creator}</p>
        <strong>$ ${houndofthunderclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthunderclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthunderclassicinfo.type} are ${houndofthunderclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthunderclassicinfo.size.s}, ${houndofthunderclassicinfo.size.m}, ${houndofthunderclassicinfo.size.l}, ${houndofthunderclassicinfo.size.xl}, ${houndofthunderclassicinfo.size.xxl}, ${houndofthunderclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthunderclassic_mainHTML}
                    </div>
                    <div>
                         ${houndofthunderclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthunderclassic_gallery(){

    const houndofthunderclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthunderclassicgallery">
              <h1>Image Product</h1>
              <div class="houndofthunderclassic_gallery_flex">
                 <img src="${houndofthunderclassicgallery.img}" alt="${houndofthunderclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderclassicgallery.img}" alt="${houndofthunderclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderclassicgallery.img}" alt="${houndofthunderclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderclassicgallery.img}" alt="${houndofthunderclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function houndofthunderpremium_main(){
   
    const houndofthunderpremium_mainproduct=[
        new HoundOfThunderPremiumMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder - Premium shirt",
            0,
            0
        )
    ];

    const houndofthunderpremiuminfo={
        name:"Hound of Thunder</br>(Premium Shirt)",
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

    const houndofthunderpremium_mainHTML=houndofthunderpremium_mainproduct.map(houndofthunderpremium_MainProducts=>houndofthunderpremium_MainProducts.getHoundOfThunderPremiumMainProduct()).join('')
    
    const houndofthunderpremiuminfoHTML=`
        <h1>${houndofthunderpremiuminfo.name}</h1>
        <p>Created by : ${houndofthunderpremiuminfo.creator}</p>
        <strong>$ ${houndofthunderpremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthunderpremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthunderpremiuminfo.type} are ${houndofthunderpremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthunderpremiuminfo.size.s}, ${houndofthunderpremiuminfo.size.m}, ${houndofthunderpremiuminfo.size.l}, ${houndofthunderpremiuminfo.size.xl}, ${houndofthunderpremiuminfo.size.xxl}, ${houndofthunderpremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthunderpremium_mainHTML}
                    </div>
                    <div>
                         ${houndofthunderpremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthunderpremium_gallery(){

    const houndofthunderpremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthunderpremiumgallery">
              <h1>Image Product</h1>
              <div class="houndofthunderpremium_gallery_flex">
                 <img src="${houndofthunderpremiumgallery.img}" alt="${houndofthunderpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumgallery.img}" alt="${houndofthunderpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumgallery.img}" alt="${houndofthunderpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumgallery.img}" alt="${houndofthunderpremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function houndofthunderoversized_main(){

    const houndofthunderoversizedmain_product=[
        new HoundOfThunderOversizedMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder",
            0,
            0
        )
    ];

    const houndofthunderoversizedinfo={
        name:"Hound of Thunder</br>(Oversized Shirt)",
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

    const houndofthunderoversizedHTML=houndofthunderoversizedmain_product.map(houndofthunderoversizedMP=>houndofthunderoversizedMP.getHoundOfThunderOversizedMainProduct()).join('');

    const houndofthunderoversizedinfoHTML=`
        <h1>${houndofthunderoversizedinfo.name}</h1>
        <p>Created by : ${houndofthunderoversizedinfo.creator}</p>
        <strong>$ ${houndofthunderoversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthunderoversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthunderoversizedinfo.type} are ${houndofthunderoversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthunderoversizedinfo.size.s}, ${houndofthunderoversizedinfo.size.m}, ${houndofthunderoversizedinfo.size.l}, ${houndofthunderoversizedinfo.size.xl}, ${houndofthunderoversizedinfo.size.xxl}, ${houndofthunderoversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthunderoversizedHTML}
                    </div>
                    <div>
                         ${houndofthunderoversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthunderoversized_gallery(){

    const houndofthunderoversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthunderoversizedgallery">
              <h1>Image Product</h1>
              <div class="houndofthunderoversized_gallery_flex">
                 <img src="${houndofthunderoversizedgallery.img}" alt="${houndofthunderoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderoversizedgallery.img}" alt="${houndofthunderoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderoversizedgallery.img}" alt="${houndofthunderoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderoversizedgallery.img}" alt="${houndofthunderoversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function houndofthundersweatshirt_main(){

    const houndofthundersweatshirtmain_product=[
        new HoundOfThunderSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder",
            0,
            0
        )
    ];

    const houndofthundersweatshirtinfo={
        name:"Hound of Thunder</br>(Sweat Shirt)",
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

    const houndofthundersweatshirtHTML=houndofthundersweatshirtmain_product.map(houndofthundersweatshirtMP=>houndofthundersweatshirtMP.getHoundOfThunderSweatMainProduct()).join('');

    const houndofthundersweatshirtinfoHTML=`
        <h1>${houndofthundersweatshirtinfo.name}</h1>
        <p>Created by : ${houndofthundersweatshirtinfo.creator}</p>
        <strong>$ ${houndofthundersweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthundersweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthundersweatshirtinfo.type} are ${houndofthundersweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthundersweatshirtinfo.size.s}, ${houndofthundersweatshirtinfo.size.m}, ${houndofthundersweatshirtinfo.size.l}, ${houndofthundersweatshirtinfo.size.xl}, ${houndofthundersweatshirtinfo.size.xxl}, ${houndofthundersweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthundersweatshirtHTML}
                    </div>
                    <div>
                         ${houndofthundersweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthundersweatshirt_gallery(){

    const houndofthundersweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthundersweatshirtgallery">
              <h1>Image Product</h1>
              <div class="houndofthundersweatshirt_gallery_flex">
                 <img src="${houndofthundersweatshirtgallery.img}" alt="${houndofthundersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthundersweatshirtgallery.img}" alt="${houndofthundersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthundersweatshirtgallery.img}" alt="${houndofthundersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthundersweatshirtgallery.img}" alt="${houndofthundersweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function houndofthunderpremiumoversizedhoodie_main(){

    const houndofthunderpremiumoversizedhoodiemain_product=[
        new HoundOfThunderPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder",
            0,
            0
        )
    ];

    const houndofthunderpremiumoversizedhoodieinfo={
        name:"Hound of Thunder</br>( Premium Oversized Hoodie )",
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

    const houndofthunderpremiumoversizedhoodieHTML=houndofthunderpremiumoversizedhoodiemain_product.map(houndofthunderpremiumoversizedhoodieMP=>houndofthunderpremiumoversizedhoodieMP.getHoundOfThunderPremiumOversizedHoodieMainProduct()).join('');

    const houndofthunderpremiumoversizedhoodieinfoHTML=`
        <h1>${houndofthunderpremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${houndofthunderpremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${houndofthunderpremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthunderpremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthunderpremiumoversizedhoodieinfo.type} are ${houndofthunderpremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthunderpremiumoversizedhoodieinfo.size.s}, ${houndofthunderpremiumoversizedhoodieinfo.size.m}, ${houndofthunderpremiumoversizedhoodieinfo.size.l}, ${houndofthunderpremiumoversizedhoodieinfo.size.xl}, ${houndofthunderpremiumoversizedhoodieinfo.size.xxl}, ${houndofthunderpremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthunderpremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${houndofthunderpremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthunderpremiumoversizedhoodie_gallery(){

    const houndofthunderpremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthunderpremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="houndofthunderpremiumoversizedhoodie_gallery_flex">
                 <img src="${houndofthunderpremiumoversizedhoodiegallery.img}" alt="${houndofthunderpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumoversizedhoodiegallery.img}" alt="${houndofthunderpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumoversizedhoodiegallery.img}" alt="${houndofthunderpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumoversizedhoodiegallery.img}" alt="${houndofthunderpremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function houndofthunderlightweighthoodie_main(){

    const houndofthunderlightweighthoodiemain_product=[
        new HoundOfThunderLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder",
            0,
            0
        )
    ];

    const houndofthunderlightweighthoodieinfo={
        name:"Hound of Thunder</br>(Lightweight Hoodie)",
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

    const houndofthunderlightweighthoodieHTML=houndofthunderlightweighthoodiemain_product.map(houndofthunderlightweighthoodieMP=>houndofthunderlightweighthoodieMP.getHoundOfThunderLightweightHoodieMainProduct()).join('');

    const houndofthunderlightweighthoodieinfoHTML=`
        <h1>${houndofthunderlightweighthoodieinfo.name}</h1>
        <p>Created by : ${houndofthunderlightweighthoodieinfo.creator}</p>
        <strong>$ ${houndofthunderlightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthunderlightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthunderlightweighthoodieinfo.type} are ${houndofthunderlightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthunderlightweighthoodieinfo.size.s}, ${houndofthunderlightweighthoodieinfo.size.m}, ${houndofthunderlightweighthoodieinfo.size.l}, ${houndofthunderlightweighthoodieinfo.size.xl}, ${houndofthunderlightweighthoodieinfo.size.xxl}, ${houndofthunderlightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthunderlightweighthoodieHTML}
                    </div>
                    <div>
                         ${houndofthunderlightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthunderlightweighthoodie_gallery(){

    const houndofthunderlightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthunderlightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="houndofthunderlightweighthoodie_gallery_flex">
                 <img src="${houndofthunderlightweighthoodiegallery.img}" alt="${houndofthunderlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderlightweighthoodiegallery.img}" alt="${houndofthunderlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderlightweighthoodiegallery.img}" alt="${houndofthunderlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderlightweighthoodiegallery.img}" alt="${houndofthunderlightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function houndofthunderpremiumoversizedsweatshirt_main(){

    const houndofthunderpremiumoversizedsweatshirtmain_product=[
        new HoundOfThunderPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Hound of Thunder",
            0,
            0
        )
    ];

    const houndofthunderpremiumoversizedsweatshirtinfo={
        name:"Hound of Thunder</br>(Premium Oversized Sweatshirt)",
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

    const houndofthunderpremiumoversizedsweatshirtHTML=houndofthunderpremiumoversizedsweatshirtmain_product.map(houndofthunderpremiumoversizedsweatshirtMP=>houndofthunderpremiumoversizedsweatshirtMP.getHoundOfThunderPremiumOversizedSweatshirtMainProduct()).join('');

    const houndofthunderpremiumoversizedsweatshirtinfoHTML=`
        <h1>${houndofthunderpremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${houndofthunderpremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${houndofthunderpremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${houndofthunderpremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${houndofthunderpremiumoversizedsweatshirtinfo.type} are ${houndofthunderpremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${houndofthunderpremiumoversizedsweatshirtinfo.size.s}, ${houndofthunderpremiumoversizedsweatshirtinfo.size.m}, ${houndofthunderpremiumoversizedsweatshirtinfo.size.l}, ${houndofthunderpremiumoversizedsweatshirtinfo.size.xl}, ${houndofthunderpremiumoversizedsweatshirtinfo.size.xxl}, ${houndofthunderpremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${houndofthunderpremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${houndofthunderpremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function houndofthunderpremiumoversizedsweatshirt_gallery(){

    const houndofthunderpremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Hound of Thunder"
    }
    return `
          <div id="houndofthunderpremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="houndofthunderpremiumoversizedsweatshirt_gallery_flex">
                 <img src="${houndofthunderpremiumoversizedsweatshirtgallery.img}" alt="${houndofthunderpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumoversizedsweatshirtgallery.img}" alt="${houndofthunderpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumoversizedsweatshirtgallery.img}" alt="${houndofthunderpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${houndofthunderpremiumoversizedsweatshirtgallery.img}" alt="${houndofthunderpremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}