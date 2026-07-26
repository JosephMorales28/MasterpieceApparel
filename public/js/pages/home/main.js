export function homeMain(){
            
    const mainHero = 'Get our new shirt release and buy now on Masterpiece Apparel and enjoy a discount.';
    const mainlist=[
                            'July 14, 2026',
                            'New shirt release has officially landed today!',
                            'Masterpiece-Deep Sea Monster (Essential Shirt)',
                            'Only at $30.69',
                            'Enjoy Discount 20%-30% Off valid until July 15, 2026',
                            'Order and Buy now at Redbubble Store',
                            'Follow us on Facebook and Instagram - Facebook: facebook.com/masterpieceapparelbyjoseph - Instagram: instagram.com/masterpieceapparelbyjoseph'
                    ];
    return `
            <main>
                <div>
                    <ul>
                        ${mainlist.map(mainlisting=>`<li>${mainlisting}</li>`).join('')}
                    </ul>
                </div>
                <h1>${mainHero}</h1>
            </main>
        `;
}