export function aboutMain(){
const whatwedo=[{
                 title:"Streetwear Focus",
                 Description: " T‑shirts, hoodies, and accessories designed for everyday wear with a creative edge."
                },
                {
                 title:"Anime & Pixel Art Influence",
                 Description: "Blending pop culture, gaming, and modern aesthetics into unique apparel."
                },
                {
                 title:"High-Quality Production",
                 Description: " Partnering with Redbubble ensures every product is printed, prepared, and delivered with care."
                }
               ];
const journey=[{
                 Date:"May 1 2026",
                 Description:"Launch of Masterpiece Apparel on RedBubble."
               },
               {
                 Date:"August 2026",
                 Description:"Creation of the official Masterpiece Apparel website, expanding our brand presence beyond marketplaces."
               },
               {
                 Date:"2026-Present",
                 Description:" Over 50+ designs published, ranging from playful animal characters to bold polygonal sports themes."
               },
               {
                 Date:"Today",
                 Description:" A growing community of buyers and supporters who share our passion for art and streetwear."
               }
              ];
    return `
            <main>
              <div id="aboutmain">
                 <h1> About Masterpiece Apparel</h1>
                 <p>
                    Founded on <strong> May 1, 2026</strong>, Masterpiece Apparel began as a bold vision: to merge anime-inspired creativity with the raw energy of streetwear culture. What started as a small independent project has grown into a thriving design hub with 50+ original artworks published on Redbubble to date.
                 </p>
                 <p>
                    Every piece we create is more than just apparel—it’s a statement. From pixel‑perfect illustrations to anime‑infused streetwear graphics, our designs are crafted to resonate with those who value individuality, artistry, and urban expression.
                 </p>
                 <h1>What We Do </h1>
                 ${whatwedo.map((aboutwhatwedo,index)=>`
                    <ul>
                        <li><strong>${aboutwhatwedo.title}</strong>:${aboutwhatwedo.Description}</li>
                    </ul>
                    `).join('')}
                <h1>Our Journey</h1>
                ${journey.map((ourjourney,index)=>`
                    <ul>
                        <li><strong>${ourjourney.Date}</strong>:${ourjourney.Description}</li>
                    </ul>
                    `).join('')}
                <h1>Our Mission</h1>
                <p>
                   To build a sustainable small business that resonates with buyers worldwide—delivering apparel that feels personal, expressive, and unforgettable.
                </p>
              </div>
            </main>
    `;
}