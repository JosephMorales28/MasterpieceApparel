export function exp_header(page){
    const nav=['about','shop','service','blog','contact'];

    return`
        <header>
            <nav>
                <div id="logo">
                    <a href="/" aria-label="Masterpiece Apparel home"><img src="/img/masterpieceapparelicon.svg" alt="Masterpiece Apparel logo" loading="lazy" fetchpriority="high"/></a>
                </div>
                <ul>
                    ${nav.map(item =>`<li><a href="/${item}"${page===item ? ' aria-current="page" ' : ''}>${item}</a></li>`).join('')}
                </ul>
                <div id="City">
                   14°37'35.8"N</br>120°58'13.7"E</br>
                   Metro Manila, Philippines
                </div>
            </nav>
        </header>
    `;
}
