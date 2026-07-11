export function exp_article(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Mens Wear";
       return`
            <article>
               <h1>${title}</h1>
            </article> 
            `;
    }
    return "";
}