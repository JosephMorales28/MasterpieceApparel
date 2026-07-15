export function exp_article(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Unisex Wear";
       const creator="by: Joseph Morales";
       /*--const menImg=[
                     {
                        image:"/img/menwear.webp",
                        alt="classic shirt",
                        loading="lazy",
                        fetchpriority:"high"
                     },
                     {
                        image:"/img/menwear2.webp",
                        alt="classic shirt",
                        loading="lazy",
                        fetchpriority="high"
                     },
                     {
                        image:"/img/menwear3.webp",
                        alt="classic shirt",
                        loading="lazy",
                        fetchpriority="high",
                        title="I Don't fish for food I fish for vibes"
                     },
                     {
                        image:"/img/menwear4.webp",
                        alt="classic shirt",
                        loading="lazy",
                        fetchpriority="high"
                        title="I Don't fish for food I fish for vibes"
                     },
       ];--*/
       /*--const imgtag=menImg.filter(item=>item.fetchpriority==="high").map(item=>
                                    `
                                      <picture>
                                            <img src="${item.image} alt="${item.alt}" loading="${item.loading}" fetchpriority="${item.fetchpriority}">
                                            </picture>
                                            <h2>${item.title}</h2>
                                    `).join("");
       */
       return`
            <article>
               <h1>${title}</h1>
               <div class="menwear">
                        
                        <picture>
                             <img src="/img/menwear.webp" alt="I don't fish for food i fish for vibes T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/masterpiece-swordfish tshirt.webp" alt="Swordfish Illustration T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> Swordfish Illustration T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/masterpiece-DeepSeaMonster.webp" alt="Deep Sea Monster T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> Deep Sea Monster T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/masterpiece-SupportMyShop.webp" alt="Support My Shop T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Support My Shop T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/masterpiece-trailwalker.webp" alt="TrailwalkerT shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Support Trailwalker T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/masterpiece-lost in space no3.webp" alt="lost in space no.3 T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Support Lost in Space no.3 T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/masterpice-quintessa.webp" alt="Quintessa T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Quintessa T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/masterpiece-gildark.webp" alt="Gildark T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Gildark T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>
               </div>
            </article> 
            `;
    }
    return "";
}