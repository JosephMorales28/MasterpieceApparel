export function exp_header(){
    
    const pages=['index.html','about.html','shop.html','servie.html','contact.html'];
    const path=window.location.pathname;
    const isMatch=path==="/" || pages.some(page=>path.endsWith(page));

    if (isMatch){
        const nav=['home','about','shop','service','contact'];
             return`
                   <header>
                   <nav>
                        <div id="logo">
                           <img src="/img/masterpieceapparelicon.svg" alt="masterpiece apparel logo" loading ="lazy" fetchpriority="high"/>  MASTERPIECEAPPAREL
                        </div>
                        <ul>
                            ${nav.map(item =>`<li>${item}</li>`).join('')}
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
}