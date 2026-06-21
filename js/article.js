export function exp_article(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Milestones";
       const milestone=[
                        {
                            fb_followers:1,
                            rb_followers:24,
                            fb_views:1129,
                            rb_favorites:9
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
               <h1 class= font-size-13>${title}</h1>
               ${article_view}
            </article> 
            `;
    }
    return "";
}