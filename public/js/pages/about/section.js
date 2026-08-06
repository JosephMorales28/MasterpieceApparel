export function aboutSection(){

    const img=[{
                image:"./img/josephlatest.webp",
                alt:"joseph morales founder of masterpiece apparel"
              }];

   const  socmed=[{
                   icon:"./img/icons8-facebook-ios-27-filled/icons8-facebook-50.svg",
                   alt:"facebook"
                  },
                  {
                   icon:"./img/icons8-instagram-ios-27-filled/icons8-instagram-50.svg",
                   alt:"instagram"
                  }
               ];

   const whatwedo =[
                   {
                      title:"Street Wear focus",
                      description:" T‑shirts, hoodies, and accessories designed for everyday wear with a creative edge."
                   },
                   {
                      title:"Anime & Pixel Art Influence",
                      description:"Blending pop culture, gaming, and modern aesthetics into unique apparel."
                   },
                   {
                      title:"High Quality Production",
                      description:"Partnering with Redbubble ensures every product is printed, prepared, and delivered with care."
                   }
                  ];

   const ourjourney=[
                    {
                      date:"May 1,2026",
                      description:"Launch of Masterpiece Apparel on RedBubble"
                    },
                    {
                      date:"June 2026",
                      description:"Creation of the Official Masterpiece Apparel website, expanding our brand presence beyond marketplace."
                    },
                    {
                      date:"2026-present",
                      description:"Over 50+ designs published, ranging from playful animal characters to bold polygonial sports themes."
                    },
                    {
                      date:"Today",
                      description:"A growing community of buyers and supporters who share our passion for art and street wear."
                    }
                   ]

    return`
           <section>
              <div class="aboutFounder">
                 <div class="aboutFounderImg">
                    ${img.map((item,index)=>`<img src="${item.image}" alt="${item.alt}" loading=${index===0 ? "eager": "lazy"} fetchpriority=${index===0 ? "High" : "auto"} decoding="async"/>`).join (``)}
                 </div>
                 <div class="aboutFounderInfo">
                     <h1>Joseph Morales</h1>
                     <span>Founder & CEO </span>
                     <p>I’m Joseph Morales, Founder & CEO of Masterpiece Apparel, a brand born in Metro Manila that merges anime‑inspired artistry with the bold energy of streetwear. As a <strong> front‑end developer and graphic designer</strong>, I bring both technical precision and creative vision to every project — from pixel‑perfect illustrations to immersive apparel graphics.</p>
                     <p>Since launching in May 2026, I’ve grown Masterpiece Apparel from a small independent idea into a thriving hub with 50+ original designs published worldwide. My work blends anime, pixel art, and modern aesthetics, crafted for people who value individuality, expressive style, and urban culture.</p>
                     <p>Beyond design, I focus on building a sustainable business that resonates with buyers — apparel that feels personal, unforgettable, and true to the community we serve.</p>
                     <div class="aboutsocmed">
                           <uL>
                           ${socmed.map((icons,index)=>`
                               <li><img src="${icons.icon}" alt="${icons.alt}" loading="${index===0 ? "eager" : "lazy" }" fetchpriority="${index===0 ? "High" : "Auto"}" decoding ="async"/></li>
                           `).join(``)}
                           </ul>
                     </div>
                 </div>
              </div>

              <div class="whatwedo">
              <h1>What we do</h1>
                 <div class="aboutwhatwedolist">
                        ${whatwedo.map(aboutwhatwedo=>`
                         <p><strong>${aboutwhatwedo.title}:</strong>${aboutwhatwedo.description}</p>`).join(``)}
                 </div>
              </div>

              <div class="Ourjourney">
                 <h1>Our Journey</h1>
                 <div class="timeline">
                     ${ourjourney.map(journey=>`
                        <div>
                            <h1>${journey.date}</h1>
                            <p>${journey.description}</p>
                        </div>`).join(``)}
                 </div>
              </div>

              <div class="OurMission">
                  <h1>Our Mission</h1>
                  <p>To build a sustainable small business that resonates with buyers worldwide—delivering apparel that feels personal, expressive, and unforgettable.</p>
              </div>
           </section>           
    `;
}