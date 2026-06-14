export function exp_header(){
    
    const pages=['ndex.html','about.html','shop.html','servie.html','contact.html'];
    const path=window.location.pathname;
    const isMatch=path==="/" || pages.some(page=>path.endsWith(page));

    if (isMatch){
        const nav=['home','about','shop','service','contact'];
             return`
                   <header>
                   <nav>
                        <div id="logo">MASTERPIECEAPPAREL</div>
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