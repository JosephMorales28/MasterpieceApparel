export function exp_article(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Milestones";
       const milestone=[
                        {
                            fb_followers:28,
                            rb_followers:2,
                            fb_views:2120,
                            rb_favorites:10
                        }
       ];
       const article_view=milestone.map(milestones =>`
             <div class="milestone">
                 <div>
                     <p><span class= font-size-9>${milestones.fb_followers}</span></br>Fb Followers</p>
                 </div>
                 <div>
                     <p><span class= font-size-9>${milestones.fb_views}</span></br>Fb Views</p>
                 </div>
                 <div>
                     <p><span class= font-size-9>${milestones.rb_followers}</span></br>RB Followers</p>
                 </div>
                 <div>
                     <p><span class= font-size-9>${milestones.rb_favorites}</span></br>RB Favorites</p>
                 </div>
             </div>`
       ).join("");
       return`
            <article>
               <h1>${title}</h1>
               ${article_view}
            </article> 
            `;
    }
    return "";
}