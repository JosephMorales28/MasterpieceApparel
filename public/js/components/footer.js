export function exp_footer(){

const footermenu=['Home','About','Service','Shop','Blog','Contact'];
const footerPolicy=['Privacy Policy','Shipping Policy','Return Policy','FAQs', 'Disclaimers'];
const footershop=['New Arrivals', 'Best Sellers', 'T-shirts', "Hoodies" ];
const footersocialmedia=['Facebook','Instagram'];
    return `
        <footer>
            <div id="footerlogo">
               © 2026 Masterpiece Apparel. All rights reserved.</br>
               <p>All artwork, designs, and content on this site are the intellectual property of Masterpiece Apparel. Unauthorized use, reproduction, or distribution is prohibited.</p>
            </div>
            <div id ="footermenu">
            ${footermenu.map(footer=>`
                <ul>
                   <li>${footer}</li>
                </ul>
                `).join('')}
            </div>
            <div id="footershop">
            ${footershop.map(footerShop=>`
                <ul>
                   <li>${footerShop}</li>
                </ul>
                `).join('')}
            </div> 
            <div id="footerPolicy">
            ${footerPolicy.map(footerpolicies=>`
                <ul>
                   <li>${footerpolicies}</li>
                </ul>
                `).join('')}
            </div>
            <div id="footersocialmedia">
            ${footersocialmedia.map(footersocmed=>`
                <ul>
                   <li>${footersocmed}</li>
                </ul>
                `).join('')}
            </div>
        </footer>
    `;
}