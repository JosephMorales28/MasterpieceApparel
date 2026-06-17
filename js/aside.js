export function exp_aside(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Products";
       return`
            <aside>
               <h1>${title}</h1>
            </aside> 
            `;
    }
    return "";
}