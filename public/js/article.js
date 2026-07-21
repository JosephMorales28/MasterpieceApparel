export function exp_article(page){
    if(page==='home'){
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
                             <img src="/img/menwear.webp" srcset="/img/menwear.webp 350w" sizes="(max-width:360px)350px" alt="I don't fish for food i fish for vibes T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                             </picture>
                             
                             <picture>
                             <img src="/img/masterpiece-swordfish-tshirt.webp" srcset="/img/masterpiece-swordfish-tshirt.webp 350w" sizes="(max-width:360px)350px" alt="Swordfish Illustration T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> Swordfish Illustration T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                             </picture>
                             
                             <picture>                             
                             <img src="/img/masterpiece-DeepSeaMonster.webp" srcset="/img/masterpiece-DeepSeaMonster.webp 350w" sizes="(max-width:360px)350px" alt="Deep Sea Monster T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> Deep Sea Monster T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                             </picture>
                             
                             <picture>
                             <img src="/img/masterpiece-SupportMyShop.webp" srcset="/img/masterpiece-SupportMyShop.webp 350w" sizes="(max-width:360px)350px" alt="Support My Shop T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Support My Shop T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                             </picture>
                             
                             <picture>
                             <img src="/img/masterpiece-trailwalker.webp" srcset="/img/masterpiece-trailwalker.webp 350w" sizes="(max-width:360px)350px" alt="TrailwalkerT shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Support Trailwalker T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                             </picture>
                             
                             <picture>
                             <img src="/img/masterpiece-lost-in-space-no3.webp" srcset="/img/masterpiece-lost-in-space-no3.webp 350w" sizes="(max-width:360px)350px" alt="lost in space no.3 T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Support Lost in Space no.3 T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                             </picture>
                             
                             <picture>
                             <img src="/img/masterpice-quintessa.webp" srcset="/img/masterpice-quintessa.webp 350w" sizes="(max-width:360px)350px" alt="Quintessa T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Quintessa T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                             </picture>
                             
                             <picture>
                             <img src="/img/masterpiece-gildark.webp" srcset="/img/masterpiece-gildark.webp 350w" sizes="(max-width:360px)350px" alt="Gildark T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2>Gildark T shirt</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
               </div>
            </article> 
            `;
    }
    return "";
}
