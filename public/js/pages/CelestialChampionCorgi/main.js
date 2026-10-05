class CelestialChampionCorgiMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CelestialChampionCorgiClassicMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiClassicMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CelestialChampionCorgiPremiumMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiPremiumMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}

class CelestialChampionCorgiOversizedMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiOversizedMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CelestialChampionCorgiSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiSweatMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CelestialChampionCorgiPremiumOversizedHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiPremiumOversizedHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CelestialChampionCorgiLightweightHoodieMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiLightweightHoodieMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

class CelestialChampionCorgiPremiumOversizedSweatshirtMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getCelestialChampionCorgiPremiumOversizedSweatshirtMainProduct(){
        return`
              <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
        `
    }
}

export function celestialchampioncorgi_main(){
    
    const celestialchampioncorgimain_product=[
        new CelestialChampionCorgiMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi",
            0,
            0
        )
    ];

    const celestialchampioncorgiinfo={
        name:"Celestial Champion Corgi</br>(Essential Shirt)",
        creator:"Joseph Morales",
        Price: 30.69,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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
    
    const celestialchampioncorgiHTML=celestialchampioncorgimain_product.map(celestialchampioncorgiMP=>celestialchampioncorgiMP.getCelestialChampionCorgiMainProduct()).join('');
    
    const celestialchampioncorgiinfoHTML=`
        <h1>${celestialchampioncorgiinfo.name}</h1>
        <p>Created by : ${celestialchampioncorgiinfo.creator}</p>
        <strong>$ ${celestialchampioncorgiinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgiinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgiinfo.type} are ${celestialchampioncorgiinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgiinfo.size.s}, ${celestialchampioncorgiinfo.size.m}, ${celestialchampioncorgiinfo.size.l}, ${celestialchampioncorgiinfo.size.xl}, ${celestialchampioncorgiinfo.size.xxl}, ${celestialchampioncorgiinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgiHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgiinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgimain_gallery(){

    const celestialchampioncorgigallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgigallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgi_gallery_flex">
                 <img src="${celestialchampioncorgigallery.img}" alt="${celestialchampioncorgigallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgigallery.img}" alt="${celestialchampioncorgigallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgigallery.img}" alt="${celestialchampioncorgigallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgigallery.img}" alt="${celestialchampioncorgigallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function celestialchampioncorgiclassic_main(){
   
    const celestialchampioncorgiclassic_mainproduct=[
        new CelestialChampionCorgiClassicMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi",
            0,
            0
        )
    ];

    const celestialchampioncorgiclassicinfo={
        name:"Celestial Champion Corgi</br>(Classic Shirt)",
        creator:"Joseph Morales",
        Price: 32.00,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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

    const celestialchampioncorgiclassic_mainHTML=celestialchampioncorgiclassic_mainproduct.map(celestialchampioncorgiclassic_MainProducts=>celestialchampioncorgiclassic_MainProducts.getCelestialChampionCorgiClassicMainProduct()).join('')
    
    const celestialchampioncorgiclassicinfoHTML=`
        <h1>${celestialchampioncorgiclassicinfo.name}</h1>
        <p>Created by : ${celestialchampioncorgiclassicinfo.creator}</p>
        <strong>$ ${celestialchampioncorgiclassicinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgiclassicinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgiclassicinfo.type} are ${celestialchampioncorgiclassicinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgiclassicinfo.size.s}, ${celestialchampioncorgiclassicinfo.size.m}, ${celestialchampioncorgiclassicinfo.size.l}, ${celestialchampioncorgiclassicinfo.size.xl}, ${celestialchampioncorgiclassicinfo.size.xxl}, ${celestialchampioncorgiclassicinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgiclassic_mainHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgiclassicinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgiclassic_gallery(){

    const celestialchampioncorgiclassicgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgiclassicgallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgiclassic_gallery_flex">
                 <img src="${celestialchampioncorgiclassicgallery.img}" alt="${celestialchampioncorgiclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgiclassicgallery.img}" alt="${celestialchampioncorgiclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgiclassicgallery.img}" alt="${celestialchampioncorgiclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgiclassicgallery.img}" alt="${celestialchampioncorgiclassicgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function celestialchampioncorgipremium_main(){
   
    const celestialchampioncorgipremium_mainproduct=[
        new CelestialChampionCorgiPremiumMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi - Premium shirt",
            0,
            0
        )
    ];

    const celestialchampioncorgipremiuminfo={
        name:"Celestial Champion Corgi</br>(Premium Shirt)",
        creator:"Joseph Morales",
        Price: 46.35,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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

    const celestialchampioncorgipremium_mainHTML=celestialchampioncorgipremium_mainproduct.map(celestialchampioncorgipremium_MainProducts=>celestialchampioncorgipremium_MainProducts.getCelestialChampionCorgiPremiumMainProduct()).join('')
    
    const celestialchampioncorgipremiuminfoHTML=`
        <h1>${celestialchampioncorgipremiuminfo.name}</h1>
        <p>Created by : ${celestialchampioncorgipremiuminfo.creator}</p>
        <strong>$ ${celestialchampioncorgipremiuminfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgipremiuminfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgipremiuminfo.type} are ${celestialchampioncorgipremiuminfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgipremiuminfo.size.s}, ${celestialchampioncorgipremiuminfo.size.m}, ${celestialchampioncorgipremiuminfo.size.l}, ${celestialchampioncorgipremiuminfo.size.xl}, ${celestialchampioncorgipremiuminfo.size.xxl}, ${celestialchampioncorgipremiuminfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgipremium_mainHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgipremiuminfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $46.35</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgipremium_gallery(){

    const celestialchampioncorgipremiumgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgipremiumgallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgipremium_gallery_flex">
                 <img src="${celestialchampioncorgipremiumgallery.img}" alt="${celestialchampioncorgipremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumgallery.img}" alt="${celestialchampioncorgipremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumgallery.img}" alt="${celestialchampioncorgipremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumgallery.img}" alt="${celestialchampioncorgipremiumgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;

}

export function celestialchampioncorgioversized_main(){

    const celestialchampioncorgioversizedmain_product=[
        new CelestialChampionCorgiOversizedMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi",
            0,
            0
        )
    ];

    const celestialchampioncorgioversizedinfo={
        name:"Celestial Champion Corgi</br>(Oversized Shirt)",
        creator:"Joseph Morales",
        Price: 37.00,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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

    const celestialchampioncorgioversizedHTML=celestialchampioncorgioversizedmain_product.map(celestialchampioncorgioversizedMP=>celestialchampioncorgioversizedMP.getCelestialChampionCorgiOversizedMainProduct()).join('');

    const celestialchampioncorgioversizedinfoHTML=`
        <h1>${celestialchampioncorgioversizedinfo.name}</h1>
        <p>Created by : ${celestialchampioncorgioversizedinfo.creator}</p>
        <strong>$ ${celestialchampioncorgioversizedinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgioversizedinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgioversizedinfo.type} are ${celestialchampioncorgioversizedinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgioversizedinfo.size.s}, ${celestialchampioncorgioversizedinfo.size.m}, ${celestialchampioncorgioversizedinfo.size.l}, ${celestialchampioncorgioversizedinfo.size.xl}, ${celestialchampioncorgioversizedinfo.size.xxl}, ${celestialchampioncorgioversizedinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgioversizedHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgioversizedinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $27.75</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgioversized_gallery(){

    const celestialchampioncorgioversizedgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgioversizedgallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgioversized_gallery_flex">
                 <img src="${celestialchampioncorgioversizedgallery.img}" alt="${celestialchampioncorgioversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgioversizedgallery.img}" alt="${celestialchampioncorgioversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgioversizedgallery.img}" alt="${celestialchampioncorgioversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgioversizedgallery.img}" alt="${celestialchampioncorgioversizedgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function celestialchampioncorgisweatshirt_main(){

    const celestialchampioncorgisweatshirtmain_product=[
        new CelestialChampionCorgiSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi",
            0,
            0
        )
    ];

    const celestialchampioncorgisweatshirtinfo={
        name:"Celestial Champion Corgi</br>(Sweat Shirt)",
        creator:"Joseph Morales",
        Price: 48.00,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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

    const celestialchampioncorgisweatshirtHTML=celestialchampioncorgisweatshirtmain_product.map(celestialchampioncorgisweatshirtMP=>celestialchampioncorgisweatshirtMP.getCelestialChampionCorgiSweatMainProduct()).join('');

    const celestialchampioncorgisweatshirtinfoHTML=`
        <h1>${celestialchampioncorgisweatshirtinfo.name}</h1>
        <p>Created by : ${celestialchampioncorgisweatshirtinfo.creator}</p>
        <strong>$ ${celestialchampioncorgisweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgisweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgisweatshirtinfo.type} are ${celestialchampioncorgisweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgisweatshirtinfo.size.s}, ${celestialchampioncorgisweatshirtinfo.size.m}, ${celestialchampioncorgisweatshirtinfo.size.l}, ${celestialchampioncorgisweatshirtinfo.size.xl}, ${celestialchampioncorgisweatshirtinfo.size.xxl}, ${celestialchampioncorgisweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgisweatshirtHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgisweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $38.40</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgisweatshirt_gallery(){

    const celestialchampioncorgisweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgisweatshirtgallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgisweatshirt_gallery_flex">
                 <img src="${celestialchampioncorgisweatshirtgallery.img}" alt="${celestialchampioncorgisweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgisweatshirtgallery.img}" alt="${celestialchampioncorgisweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgisweatshirtgallery.img}" alt="${celestialchampioncorgisweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgisweatshirtgallery.img}" alt="${celestialchampioncorgisweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function celestialchampioncorgipremiumoversizedhoodie_main(){

    const celestialchampioncorgipremiumoversizedhoodiemain_product=[
        new CelestialChampionCorgiPremiumOversizedHoodieMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi",
            0,
            0
        )
    ];

    const celestialchampioncorgipremiumoversizedhoodieinfo={
        name:"Celestial Champion Corgi</br>( Premium Oversized Hoodie )",
        creator:"Joseph Morales",
        Price: 68.00,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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

    const celestialchampioncorgipremiumoversizedhoodieHTML=celestialchampioncorgipremiumoversizedhoodiemain_product.map(celestialchampioncorgipremiumoversizedhoodieMP=>celestialchampioncorgipremiumoversizedhoodieMP.getCelestialChampionCorgiPremiumOversizedHoodieMainProduct()).join('');

    const celestialchampioncorgipremiumoversizedhoodieinfoHTML=`
        <h1>${celestialchampioncorgipremiumoversizedhoodieinfo.name}</h1>
        <p>Created by : ${celestialchampioncorgipremiumoversizedhoodieinfo.creator}</p>
        <strong>$ ${celestialchampioncorgipremiumoversizedhoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgipremiumoversizedhoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgipremiumoversizedhoodieinfo.type} are ${celestialchampioncorgipremiumoversizedhoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgipremiumoversizedhoodieinfo.size.s}, ${celestialchampioncorgipremiumoversizedhoodieinfo.size.m}, ${celestialchampioncorgipremiumoversizedhoodieinfo.size.l}, ${celestialchampioncorgipremiumoversizedhoodieinfo.size.xl}, ${celestialchampioncorgipremiumoversizedhoodieinfo.size.xxl}, ${celestialchampioncorgipremiumoversizedhoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgipremiumoversizedhoodieHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgipremiumoversizedhoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $40.80</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgipremiumoversizedhoodie_gallery(){

    const celestialchampioncorgipremiumoversizedhoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgipremiumoversizedhoodiegallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgipremiumoversizedhoodie_gallery_flex">
                 <img src="${celestialchampioncorgipremiumoversizedhoodiegallery.img}" alt="${celestialchampioncorgipremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumoversizedhoodiegallery.img}" alt="${celestialchampioncorgipremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumoversizedhoodiegallery.img}" alt="${celestialchampioncorgipremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumoversizedhoodiegallery.img}" alt="${celestialchampioncorgipremiumoversizedhoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function celestialchampioncorgilightweighthoodie_main(){

    const celestialchampioncorgilightweighthoodiemain_product=[
        new CelestialChampionCorgiLightweightHoodieMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi",
            0,
            0
        )
    ];

    const celestialchampioncorgilightweighthoodieinfo={
        name:"Celestial Champion Corgi</br>(Lightweight Hoodie)",
        creator:"Joseph Morales",
        Price: 62.21,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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

    const celestialchampioncorgilightweighthoodieHTML=celestialchampioncorgilightweighthoodiemain_product.map(celestialchampioncorgilightweighthoodieMP=>celestialchampioncorgilightweighthoodieMP.getCelestialChampionCorgiLightweightHoodieMainProduct()).join('');

    const celestialchampioncorgilightweighthoodieinfoHTML=`
        <h1>${celestialchampioncorgilightweighthoodieinfo.name}</h1>
        <p>Created by : ${celestialchampioncorgilightweighthoodieinfo.creator}</p>
        <strong>$ ${celestialchampioncorgilightweighthoodieinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgilightweighthoodieinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgilightweighthoodieinfo.type} are ${celestialchampioncorgilightweighthoodieinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgilightweighthoodieinfo.size.s}, ${celestialchampioncorgilightweighthoodieinfo.size.m}, ${celestialchampioncorgilightweighthoodieinfo.size.l}, ${celestialchampioncorgilightweighthoodieinfo.size.xl}, ${celestialchampioncorgilightweighthoodieinfo.size.xxl}, ${celestialchampioncorgilightweighthoodieinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgilightweighthoodieHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgilightweighthoodieinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $49.76</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgilightweighthoodie_gallery(){

    const celestialchampioncorgilightweighthoodiegallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgilightweighthoodiegallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgilightweighthoodie_gallery_flex">
                 <img src="${celestialchampioncorgilightweighthoodiegallery.img}" alt="${celestialchampioncorgilightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgilightweighthoodiegallery.img}" alt="${celestialchampioncorgilightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgilightweighthoodiegallery.img}" alt="${celestialchampioncorgilightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgilightweighthoodiegallery.img}" alt="${celestialchampioncorgilightweighthoodiegallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}

export function celestialchampioncorgipremiumoversizedsweatshirt_main(){

    const celestialchampioncorgipremiumoversizedsweatshirtmain_product=[
        new CelestialChampionCorgiPremiumOversizedSweatshirtMainProduct(
            "/img/idontfish.webp",
            "Celestial Champion Corgi",
            0,
            0
        )
    ];

    const celestialchampioncorgipremiumoversizedsweatshirtinfo={
        name:"Celestial Champion Corgi</br>(Premium Oversized Sweatshirt)",
        creator:"Joseph Morales",
        Price: 62.00,
        details:"Unleash the chaos of magic and fur! This high‑energy design features a corgi mage floating mid‑air, flexing both paws as lightning storms crackle around him. Dressed in golden battle robes and crowned with thunder, this fearless hero channels madness and might in a clash of good versus evil",
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

    const celestialchampioncorgipremiumoversizedsweatshirtHTML=celestialchampioncorgipremiumoversizedsweatshirtmain_product.map(celestialchampioncorgipremiumoversizedsweatshirtMP=>celestialchampioncorgipremiumoversizedsweatshirtMP.getCelestialChampionCorgiPremiumOversizedSweatshirtMainProduct()).join('');

    const celestialchampioncorgipremiumoversizedsweatshirtinfoHTML=`
        <h1>${celestialchampioncorgipremiumoversizedsweatshirtinfo.name}</h1>
        <p>Created by : ${celestialchampioncorgipremiumoversizedsweatshirtinfo.creator}</p>
        <strong>$ ${celestialchampioncorgipremiumoversizedsweatshirtinfo.Price.toFixed(2)}</strong>
        <h4>Details</h4>
        <p>${celestialchampioncorgipremiumoversizedsweatshirtinfo.details}</p>
        <h4>Type:</h4>
        <p>${celestialchampioncorgipremiumoversizedsweatshirtinfo.type} are ${celestialchampioncorgipremiumoversizedsweatshirtinfo.fabric}</p>
        <h4>Size Available</h4>
        <p>${celestialchampioncorgipremiumoversizedsweatshirtinfo.size.s}, ${celestialchampioncorgipremiumoversizedsweatshirtinfo.size.m}, ${celestialchampioncorgipremiumoversizedsweatshirtinfo.size.l}, ${celestialchampioncorgipremiumoversizedsweatshirtinfo.size.xl}, ${celestialchampioncorgipremiumoversizedsweatshirtinfo.size.xxl}, ${celestialchampioncorgipremiumoversizedsweatshirtinfo.size.xxxl}</p>
        `;

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${celestialchampioncorgipremiumoversizedsweatshirtHTML}
                    </div>
                    <div>
                         ${celestialchampioncorgipremiumoversizedsweatshirtinfoHTML}

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $37.20</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}

export function celestialchampioncorgipremiumoversizedsweatshirt_gallery(){

    const celestialchampioncorgipremiumoversizedsweatshirtgallery={
        img: "/img/gallery1.webp",
        alt:"Celestial Champion Corgi"
    }
    return `
          <div id="celestialchampioncorgipremiumoversizedsweatshirtgallery">
              <h1>Image Product</h1>
              <div class="celestialchampioncorgipremiumoversizedsweatshirt_gallery_flex">
                 <img src="${celestialchampioncorgipremiumoversizedsweatshirtgallery.img}" alt="${celestialchampioncorgipremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumoversizedsweatshirtgallery.img}" alt="${celestialchampioncorgipremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumoversizedsweatshirtgallery.img}" alt="${celestialchampioncorgipremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 <img src="${celestialchampioncorgipremiumoversizedsweatshirtgallery.img}" alt="${celestialchampioncorgipremiumoversizedsweatshirtgallery.alt}" loading="lazy" fetchpriority="high" decoding="async"/>
                 </div>
          </div>
    `;
}