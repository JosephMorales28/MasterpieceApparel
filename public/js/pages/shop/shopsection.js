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
               <div>
                   <img src="${this.image}" alt="${this.alt}" width="500" height="500" loading= "${this.loading === 0 ? "eager" : "lazy"}" fetchpriority="${this.priority === 0 ? "High" : "Auto"}" decoding="async"/>
                   <h1>${this.name}</h1>
                   <p>${this.details}</p>
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
                "Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup."
        ),
        new ImageProduct(
                "./img/Deep Sea Monster.avif",
                "Deep Sea Monster",
                1,
                1,
                "Deep Sea Monster",
                "Dive into the abyss with this Deep Sea Monster artwork a colossal Kraken rising from storm‑tossed waves. Its glowing eyes, razor‑sharp teeth, and curling tentacles crush a doomed ship beneath a fiery moon."
        ),
        new ImageProduct(
                "./img/Celestial hare.avif",
                "Celestial Hare Chaos",
                1,
                1,
                "Celestial Hare Chaos",
                "Step into the arena with this electrifying rabbit mage hero! ⚡? Floating mid-air with a crazed grin, this full-body design captures the thrill of magical combat. Dressed in crosshair-patterned wizard armor and wielding a glowing staff, the rabbit radiates tournament energy — a champion ready to unleash chaos."
        ),
        new ImageProduct(
                "./img/Shockwave Striker.webp",
                "Shockwave Striker",
                1,
                1,
                "Shockwave Striker",
                "Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup."
        ),
        new ImageProduct(
                "./img/Goal Bunny Frenzy Global Soccer Edition.webp",
                "Goal Bunny Frenzy Global Soccer Edition",
                1,
                1,
                "Goal Bunny Frenzy Global Soccer Edition",
                "Step into the arena with this electrifying rabbit mage hero! ⚡? Floating mid-air with a crazed grin, this full-body design captures the thrill of magical combat. Dressed in crosshair-patterned wizard armor and wielding a glowing staff, the rabbit radiates tournament energy — a champion ready to unleash chaos."
        ),
        new ImageProduct(
                "./img/Goal Keeper Gone Bananas Monkey Soccer Madness.webp",
                "Goal Keeper Gone Bananas Monkey Soccer Madness",
                1,
                1,
                "Goal Keeper Gone Bananas Monkey Soccer Madness",
                "Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup."
        ),
        new ImageProduct(
                "./img/Lightning Paw Striker.webp",
                "Lightning Paw Striker",
                1,
                1,
                "Lightning Paw Striker",
                "Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup."
        ),
        new ImageProduct(
                "./img/Hound of Thunder.webp",
                "Hound of Thunder",
                1,
                1,
                "Hound of Thunder",
                "Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup."
        ),
        new ImageProduct(
                "./img/Stormfield Striker.webp",
                "Stormfield Striker",
                1,
                1,
                "Stormfield Striker",
                "Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup."
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