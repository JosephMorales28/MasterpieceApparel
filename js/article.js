export function exp_article(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Mens Wear";
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
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>
                  
                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
                                 <p>${creator}</p>
                                 <button>View Full Details</button> <button class="btnred">Add on Redbubble Cart</button>
                             </div>
                        </picture>

                        <picture>
                             <img src="/img/menwear.webp" alt="classic tshirt" loading="lazy" fetchpriority="high"/>
                             <div class="menwear-card">
                                 <h2> I don't fish for food I fish for vibes</h2>
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