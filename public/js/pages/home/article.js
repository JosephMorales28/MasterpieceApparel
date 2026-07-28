export function homeArticle(){
    const title="Unisex Wear";

    const product=[
                          {
                            image:"/img/masterpiece-idontfishforfoodifishforvibes.webp",
                            srcset:"/img/masterpiece-idontfishforfoodifishforvibes.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"I don't fish for food i fish for vibes t-shirt by Masterpiece Apparel",
                            title:"I don't fish for food i fish for vibes",
                            creator:"By: Joseph Morales",
                            pages:"/pages/idontfishforfoodifishforvibes",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          },
                          {
                            image:"/img/masterpiece-swordfish-tshirt.webp",
                            srcset:"/img/masterpiece-swordfish-tshirt.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"Swordfish Illustration t-shirt by Masterpiece Apparel",
                            title:"Swordfish",
                            creator:"By: Joseph Morales",
                            pages:"#",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          },
                          {
                            image:"/img/masterpiece-DeepSeaMonster.webp",
                            srcset:"/img/masterpiece-DeepSeaMonster.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"Deep Sea Monster t-shirt by Masterpiece Apparel",
                            title:"Deep Sea Monster",
                            creator:"By: Joseph Morales",
                            pages:"#",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          },
                          {
                            image:"/img/masterpiece-SupportMyShop.webp",
                            srcset:"/img/masterpiece-SupportMyShop.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"Support My Shop t-shirt by Masterpiece Apparel",
                            title:"Support my Shop",
                            creator:"By: Joseph Morales",
                            pages:"#",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          },
                          {
                            image:"/img/masterpiece-trailwalker.webp",
                            srcset:"/img/masterpiece-trailwalker.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"trailwalker t-shirt by Masterpiece Apparel",
                            title:"Trailwalker",
                            creator:"By: Joseph Morales",
                            pages:"#",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          },
                          {
                            image:"/img/masterpiece-lost-in-space-no3.webp",
                            srcset:"/img/masterpiece-lost-in-space-no3.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"lost in space no3 t-shirt by Masterpiece Apparel",
                            title:"Lost in Space No 3",
                            creator:"By: Joseph Morales",
                            pages:"#",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          },
                          {
                            image:"/img/masterpiece-quintessa.webp",
                            srcset:"/img/masterpiece-quintessa.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"quintessa t-shirt by Masterpiece Apparel",
                            title:"Quintessa",
                            creator:"By: Joseph Morales",
                            pages:"#",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          },
                          {
                            image:"/img/masterpiece-gildark.webp",
                            srcset:"/img/masterpiece-gildark.webp 350w",
                            sizes:"(max-width:360px) 350px",
                            alt:"gildark by Masterpiece Apparel",
                            title:"Gildark",
                            creator:"By: Joseph Morales",
                            pages:"#",
                            redbubble:"https://www.redbubble.com/people/...",
                            target:"_blank",
                            rel:"noopener noreferrer"
                          }
                        ];
    
    return `
            <article>
               <h1>${title}</h1>
               <div class="menwear">
                             ${product.map((item,index)=>`
                             <picture>
                             <img src="${item.image}" srcset="${item.srcset}" sizes="${item.sizes}" alt="${item.alt}" loading="${index===0 ? "eager" : "lazy"}" fetchpriority="${index===0 ? "high" : "auto"}" decoding ="async"/>
                             <div class="menwear-card">
                                 <h2>${item.title}</h2>
                                 <p>${item.creator}</p>
                                 <a href="${item.pages}" class="btn">View Full Details</a><a href="${item.redbubble}" class="btn" target="${item.target}" rel="${item.rel}">Add on Redbubble Cart</a>
                             </div>
                             </picture>`).join('')}
               </div>
            </article>
           `;
}