class ImageProduct{
    constructor(image,alt,loading,priority,name,link){
         this.image=image;
         this.alt=alt;
         this.loading=loading;
         this.priority=priority;
         this.name=name;
         this.link=link;
    }

    getImageProduct(){
        return`
               <div>
                   <img src="${this.image}" alt="${this.alt}" width="500" height="500" loading= "${this.loading === 0 ? "eager" : "lazy"}" fetchpriority="${this.priority === 0 ? "High" : "Auto"}" decoding="async"/>
                   <h1>${this.name}</h1>
                   <a href="${this.link}">View Details</a>
               </div>
              `
    }
}

export function shopSection(search=""){

    const image_product=[ 
        new ImageProduct(
                "./img/idontfish.avif",
                "i don't fish for food i fish for vibes",
                0,
                0,
                "i don't fish for food i fish for vibes.",
                "./idontfishforfoodifishforvibes"
        ),
        new ImageProduct(
                "./img/Deep Sea Monster.avif",
                "Deep Sea Monster",
                1,
                1,
                "Deep Sea Monster",
                "./deepseamonster"
        ),
        new ImageProduct(
                "./img/Celestial hare.avif",
                "Celestial Hare Chaos",
                1,
                1,
                "Celestial Hare Chaos",
                "./celestialharechaos"        
        ),
        new ImageProduct(
                "./img/Shockwave Striker.webp",
                "Shockwave Striker",
                1,
                1,
                "Shockwave Striker",
        ),
        new ImageProduct(
                "./img/Goal Bunny Frenzy Global Soccer Edition.webp",
                "Goal Bunny Frenzy Global Soccer Edition",
                1,
                1,
                "Goal Bunny Frenzy Global Soccer Edition",
        ),
        new ImageProduct(
                "./img/Goal Keeper Gone Bananas Monkey Soccer Madness.webp",
                "Goal Keeper Gone Bananas Monkey Soccer Madness",
                1,
                1,
                "Goal Keeper Gone Bananas Monkey Soccer Madness",
        ),
        new ImageProduct(
                "./img/Lightning Paw Striker.webp",
                "Lightning Paw Striker",
                1,
                1,
                "Lightning Paw Striker",
        ),
        new ImageProduct(
                "./img/Hound of Thunder.webp",
                "Hound of Thunder",
                1,
                1,
                "Hound of Thunder",
        ),
        new ImageProduct(
                "./img/Stormfield Striker.webp",
                "Stormfield Striker",
                1,
                1,
                "Stormfield Striker",
        )
    ]
    
    const shopHTML=image_product.filter(imgProduct=>{ const searchText=search.toLowerCase();
                  return ( 
                           imgProduct.name.toLowerCase().includes(searchText));
                  }).map(imgProduct=>imgProduct.getImageProduct()).join('');

    return`
          <section>
             <div id="shopsection">
                ${shopHTML}
            </div>
          </section>
    `;
}