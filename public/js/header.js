export function exp_header(){
    
    const pages=['index.html','about.html','shop.html','service.html','blog.html','contact.html'];
    const path=window.location.pathname;
    const isMatch=path==="/" || pages.some(page=>path.endsWith(page));

    if (isMatch){
        const nav=['about','shop','service','blog','contact'];
             return`
                   <header>
                   <nav>
                        <div id="logo">
                           <a href="index.html"><img src="/img/masterpieceapparelicon.svg" alt="masterpiece apparel logo" loading ="lazy" fetchpriority="high"/></a>
                        </div>
                        <ul>
                            ${nav.map(item =>`<li><a href="/${item}.html">${item}</a></li>`).join('')}
                            <li>&#9776;
                            <ul>
                               ${nav.map(item =>`<li>${item}</li>`).join('')}
                            </ul>
                            </li>
                        </ul>
                    </nav>
                    </header>
                `;
    }
    return "";
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