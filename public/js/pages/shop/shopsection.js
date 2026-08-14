class ImageProduct{
    constructor(image,alt,loading,priority,name,details){
         this.image=image;
         this.alt=alt;
         this.loading=loading;
         this.priority=priority;
         this.name=name;
         this.details=details;
    }

    getImageProduct(){
        return`
               <img src="${this.image}" alt="${this.alt}" loading= "${this.loading === 0 ? "eager" : "lazy"}" fetchpriority="${this.priority === 0 ? "High" : "Auto"}" decoding="async"/>
               <p>${this.name}</p>
               <p>${this.details}</p>
              `
    }
}

export function shopSection(search=""){

    const image_product=[ 
        new ImageProduct(
                "#",
                "i don't fish for food i fish for vibes",
                0,
                0,
                "i don't fish for food i fish for vibes.",
                "Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup."
        ),
        new ImageProduct(
                "#",
                "Deep Sea Monster",
                0,
                0,
                "Deep Sea Monster",
                "Dive into the abyss with this Deep Sea Monster artwork a colossal Kraken rising from storm‑tossed waves. Its glowing eyes, razor‑sharp teeth, and curling tentacles crush a doomed ship beneath a fiery moon."
        )
    ]
    
    const shopHTML=image_product.filter(imgProduct=>{ const searchText=search.toLowerCase();
                  return ( 
                           imgProduct.name.toLowerCase().includes(searchText));
                  }).map(imgProduct=>imgProduct.getImageProduct()).join('');

    return`
          <section>
              ${shopHTML}
          </section>
    `;
}