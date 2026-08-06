export function aboutSection(){

    const img=[{
                image:"./img/josephlatest.webp",
                alt:"joseph morales founder of masterpiece apparel"
              }];
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
                 </div>
              </div> 
           </section>           
    `;
}