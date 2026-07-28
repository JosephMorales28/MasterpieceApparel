export function exp_article(page){
    if(page==='home'){
       const title="Unisex Wear";
       const creator="by: Joseph Morales";

       return`
            <article>
               <h1>${title}</h1>
               <div class="menwear">
                             <div class="menwear-card">
                                <picture>
                                    <img src="/img/masterpiece-idontfishforfoodifishforvibes.webp" srcset="/img/masterpiece-idontfishforfoodifishforvibes.webp 328w" sizes="(max-width:330px)328px" alt="I don't fish for food i fish for vibes T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                                    <h2> I don't fish for food I fish for vibes</h2>
                                    <p>${creator}</p>
                                    <a href="/pages/idontfishforfoodifishforvibes">View Full Details</a> <a>Add on Redbubble</a>
                                </picture>
                             </div>

                             <div class="menwear-card">
                                 <picture>
                                    <img src="/img/masterpiece-swordfish-tshirt.webp" srcset="/img/masterpiece-swordfish-tshirt.webp 350w" sizes="(max-width:360px)350px" alt="Swordfish Illustration T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                                    <h2> Swordfish Illustration T shirt</h2>
                                    <p>${creator}</p>
                                    <a>View Full Details</a> <a>Add on Redbubble</a>
                                 </picture>
                             </div>
                             
                             <div class="menwear-card">
                                 <picture>                             
                                    <img src="/img/masterpiece-DeepSeaMonster.webp" srcset="/img/masterpiece-DeepSeaMonster.webp 350w" sizes="(max-width:360px)350px" alt="Deep Sea Monster T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>    <h2> Deep Sea Monster T shirt</h2>
                                    <p>${creator}</p>
                                    <a>View Full Details</a> <a>Add on Redbubble</a>
                                 </picture>
                             </div>
                             
                             <div class="menwear-card">
                                 <picture>
                                    <img src="/img/masterpiece-SupportMyShop.webp" srcset="/img/masterpiece-SupportMyShop.webp 350w" sizes="(max-width:360px)350px" alt="Support My Shop T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                                    <h2>Support My Shop T shirt</h2>
                                    <p>${creator}</p>
                                    <a>View Full Details</a> <a>Add on Redbubble</a>
                                 </picture>
                             </div>
                             
                             <div class="menwear-card">
                                 <picture>
                                    <img src="/img/masterpiece-trailwalker.webp" srcset="/img/masterpiece-trailwalker.webp 350w" sizes="(max-width:360px)350px" alt="TrailwalkerT shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                                    <h2>Support Trailwalker T shirt</h2>
                                    <p>${creator}</p>
                                    <a>View Full Details</a> <a>Add on Redbubble</a>
                                 </picture>
                             </div>
                             
                             <div class="menwear-card">
                                 <picture>
                                    <img src="/img/masterpiece-lost-in-space-no3.webp" srcset="/img/masterpiece-lost-in-space-no3.webp 350w" sizes="(max-width:360px)350px" alt="lost in space no.3 T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                                    <h2>Support Lost in Space no.3 T shirt</h2>
                                    <p>${creator}</p>
                                    <a>View Full Details</a> <a>Add on Redbubble</a>
                                 </picture>
                             </div>
                             
                             <div class="menwear-card">
                                <picture>
                                   <img src="/img/masterpiece-quintessa.webp" srcset="/img/masterpiece-quintessa.webp 350w" sizes="(max-width:360px)350px" alt="Quintessa T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                                   <h2>Quintessa T shirt</h2>
                                   <p>${creator}</p>
                                   <a>View Full Details</a> <a>Add on Redbubble</a>
                                </picture>
                             </div>
                             
                             <div class="menwear-card">
                                 <picture>
                                    <img src="/img/masterpiece-gildark.webp" srcset="/img/masterpiece-gildark.webp 350w" sizes="(max-width:360px)350px" alt="Gildark T shirt- by Masterpiece Apparel" loading="lazy" fetchpriority="high"/>
                                    <h2>Gildark T shirt</h2>
                                    <p>${creator}</p>
                                    <a>View Full Details</a> <a>Add on Redbubble</a>
                                 </picture>
                             </div>
               </div>
            </article> 
            `;
    }
    return "";
}
