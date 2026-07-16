export function exp_aside(){
    if(window.location.pathname==="/"|| window.location.pathname.endsWith("index.html")){
       const title="Products";
       return`
            <aside>
               <h1 class=font-size-13>${title}</h1>
            </aside> 
            `;
    }
    return "";
    if (window.location.pathname==="/" || window.location.pathname.endsWith("/about.html")){

    }
    return"";
    if (window.location.pathname==="/" || window.location.pathname.endsWith("/shop.html")){
    }
    return"";
    if (window.location.pathname==="/" || window.location.pathname.endsWith("/service.html")){
    }
    return"";
    if (window.location.pathname==="/" || window.location.pathname.endsWith("/blog.html")){
    }
    return"";
    if (window.location.pathname==="/" || window.location.pathname.endsWith("/contact.html")){
    }
    return"";
}