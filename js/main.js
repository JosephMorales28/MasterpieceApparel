export function exp_main(){
    if (window.location.pathname==="/" || window.location.pathname.endsWith("index.html")){
        const main_hero='Get our new shirt release and buy now on masterpiece apparel and enjoy discount.';
        return`
              <main>
              <div>
                   <ul>
                      <li>July 14, 2026</li>
                      <li>New shirt release has officially landed today!</li>
                      <li>Masterpiece-Deep Sea Monster (Essential Shirt)</li>
                      <li>Only at $30.69</li>
                      <li>Enjoy Discount 20%-30% Off valid until July 15, 2026</li>
                      <li>Order and Buy now at Redbubble Store</li>
                      <li>Follow us on Facebook and Instagram -Facebook: facebook.com/masterpieceapparelbyjoseph  -Instagram: instagram.com/masterpieceapparelbyjoseph</li>
                      
                      <li>July 14, 2026</li>
                      <li>New shirt release has officially landed today!</li>
                      <li>Masterpiece- Swordfish T Shirt (Essential Shirt)</li>
                      <li>Only at $30.69</li>
                      <li>Enjoy Discount 20%-30% Off valid until July 15, 2026</li>
                      <li>Order and Buy now at Redbubble Store</li>
                      <li>Follow us on Facebook and Instagram -Facebook: facebook.com/masterpieceapparelbyjoseph  -Instagram: instagram.com/masterpieceapparelbyjoseph</li>
                   </ul> 
              </div>
              <h1>${main_hero}</h1>
              </main>
        `;
    }
    return "";
}