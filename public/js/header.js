export function exp_header(page){
    const nav=['about','shop','service','blog','contact'];

    return`
        <header>
            <nav>
                <div id="logo">
                    <a href="/" aria-label="Masterpiece Apparel home"><img src="/img/masterpieceapparelicon.svg" alt="Masterpiece Apparel logo" loading="lazy" fetchpriority="high"/></a>
                </div>
                <ul>
                    ${nav.map(item =>`<li><a href="/${item}"${page===item ? ' aria-current="page"' : ''}>${item}</a></li>`).join('')}
                    <li>&#9776;
                        <ul>
                            ${nav.map(item =>`<li><a href="/${item}"${page===item ? ' aria-current="page"' : ''}>${item}</a></li>`).join('')}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    `;
}
