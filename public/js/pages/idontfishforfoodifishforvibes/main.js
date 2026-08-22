class ImageMainProduct{
    constructor(image,alt,loading,priority){
        this.image=image;
        this.alt=alt;
        this.loading=loading;
        this.priority=priority;
    }

    getImageMainProduct(){
        return `
                <img src="${this.image}" alt="${this.alt}" loading="${this.loading===0 ? "eager" : "lazy"}" fetchpriority="${this.priority===0 ? "high" : "auto"}" decoding= "async"/>
               `
    }
}
export function idontfish_main(){
    
    const imagemain_product=[
        new ImageMainProduct(
            "./img/idontfish.webp",
            "i don't fish for food i fish for vibes",
            0,
            0
        )
    ];
    
    const details="Bring adventure and humor to your wardrobe with this anime‑style fluffy cat fishing scene! Featuring a beige‑brown long‑haired cat in a blue fishing coat and sunglasses, sitting on a folding chair by the pond with rod in paw. To the left is a tackle table, to the right a blue cooler bag filled with freshly caught fish, and behind the cat sits a cozy camping car — the perfect outdoor setup.";
    const idontfishHTML=imagemain_product.map(imageMP=>imageMP.getImageMainProduct()).join('');

    return `<main>
              <div id="product_main">
                 <div class="production_flex">
                    <div>
                        ${idontfishHTML}
                    </div>
                    <div>
                         <h1>I Don't Fish for Food I Fish For Vibes</h1>
                         <p>Created by: Joseph Morales</p>
                         <strong>$30.69</strong>
                         <h4>Details</h4>
                         <p>${details}</p>

                         <h4>Type:</h4>
                         <p>Unisex, T-Shirts are 100% Cotton </p>

                         <h4>Print Type:</h4>
                         <p>DTG</p>
                         <p>High Quality Image</p>

                         <h4>Size Available:</h4>
                         <p>Small, Medium, Large, Extra large, XXL, XXXL </p>

                         <h4>Price Avaiable at:</h4>
                         <button class="redbubble_btn">Redbubble Price: $26.07</button>
                         <button class="etsy_btn">Etsy Price: Not Available</button>
                    </div>
              </div>
            </main>
           `;
}