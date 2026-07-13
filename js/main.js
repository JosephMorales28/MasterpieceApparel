export function exp_main(){
    if (window.location.pathname==="/" || window.location.pathname.endsWith("index.html")){
        const main_hero='Get our new shirt release and buy now on masterpiece apparel and enjoy discount.';
        return`
              <main>
              <div>
                   <ul>
                      <li>July 13, 2026</li>
                      <li>New shirt release today!</li>
                      <li>Masterpiece-Bunny the Striker (Essential Shirt)</li>
                      <li>Only at $30.69</li>
                      <li>Enjoy Discount 20%-30% Off until July 15, 2026</li>
                      <li>Order and Buy now at Redbubble Store</li>
                      <li>Follow us on Facebook and Instagram -Facebook: facebook.com/masterpieceapparelbyjoseph  -Instagram: instagram.com/masterpieceapparelbyjoseph</li>
                      
                      <li>July 13, 2026</li>
                      <li>New shirt release today!</li>
                      <li>Masterpiece-Bunny the Striker (Essential Shirt)</li>
                      <li>Only $30.69</li>
                      <li>Enjoy Discount 20%-30% Off until July 15, 2026</li>
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