export function exp_article(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Mens Wear";
       const menImg={};
       return`
            <article>
               <h1>${title}</h1>
               <div class="menwear">
                        
                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>
               </div>
            </article> 
            `;
    }
    return "";
}